import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface DropdownItem {
  label: string;
  value: string | number;
}

export interface DropdownProps {
  data: DropdownItem[];
  value?: string | number;
  onSelect: (item: DropdownItem) => void;

  placeholder?: string;
  icon?: React.ReactNode;

  maxHeight?: number;

  /** Styles */
  dropdownContainerStyle?: ViewStyle;
  dropdownItemStyle?: ViewStyle;
  dropdownItemTextStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  iconContainerStyle?: ViewStyle;
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  value,
  onSelect,
  placeholder = 'Select an option',
  icon,
  maxHeight = 150,

  dropdownContainerStyle,
  dropdownItemStyle,
  dropdownItemTextStyle,
  buttonStyle,
  buttonTextStyle,
  iconContainerStyle,
}) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const selectedItem = data.find((item) => item.value === value);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: expanded ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [expanded]);

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, maxHeight],
  });

  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setExpanded(false);
  };

  return (
    <View style={{ position: 'relative' }}>
      {/* Dropdown button */}
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={[styles.button, buttonStyle]}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, buttonTextStyle]}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <View style={[styles.iconContainer, iconContainerStyle]}>
          {icon || <Text style={{ fontSize: 16 }}>{expanded ? '▲' : '▼'}</Text>}
        </View>
      </TouchableOpacity>

      {/* Dropdown items */}
      <Animated.View
        style={[
          styles.dropdownContainer,
          {
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 1000,
            height: heightInterpolate,
          },
          dropdownContainerStyle,
        ]}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.dropdownItem, dropdownItemStyle]}
              onPress={() => handleSelect(item)}
            >
              <Text style={[styles.itemText, dropdownItemTextStyle]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  iconContainer: {
    marginLeft: 10,
  },
  dropdownContainer: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
