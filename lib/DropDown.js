import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, FlatList, TouchableOpacity, } from 'react-native';
var Dropdown = function (_a) {
    var data = _a.data, value = _a.value, onSelect = _a.onSelect, _b = _a.placeholder, placeholder = _b === void 0 ? 'Select an option' : _b, icon = _a.icon, _c = _a.maxHeight, maxHeight = _c === void 0 ? 150 : _c, dropdownContainerStyle = _a.dropdownContainerStyle, dropdownItemStyle = _a.dropdownItemStyle, dropdownItemTextStyle = _a.dropdownItemTextStyle, buttonStyle = _a.buttonStyle, buttonTextStyle = _a.buttonTextStyle, iconContainerStyle = _a.iconContainerStyle;
    var _d = useState(false), expanded = _d[0], setExpanded = _d[1];
    var animation = useRef(new Animated.Value(0)).current;
    var selectedItem = data.find(function (item) { return item.value === value; });
    useEffect(function () {
        Animated.timing(animation, {
            toValue: expanded ? 1 : 0,
            duration: 200,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
        }).start();
    }, [expanded]);
    var heightInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, maxHeight],
    });
    var handleSelect = function (item) {
        onSelect(item);
        setExpanded(false);
    };
    return (React.createElement(View, { style: { position: 'relative' } },
        React.createElement(TouchableOpacity, { onPress: function () { return setExpanded(!expanded); }, style: [styles.button, buttonStyle], activeOpacity: 0.8 },
            React.createElement(Text, { style: [styles.buttonText, buttonTextStyle] }, selectedItem ? selectedItem.label : placeholder),
            React.createElement(View, { style: [styles.iconContainer, iconContainerStyle] }, icon || React.createElement(Text, { style: { fontSize: 16 } }, expanded ? '▲' : '▼'))),
        React.createElement(Animated.View, { style: [
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
            ] },
            React.createElement(FlatList, { data: data, keyExtractor: function (item) { return item.value.toString(); }, renderItem: function (_a) {
                    var item = _a.item;
                    return (React.createElement(TouchableOpacity, { style: [styles.dropdownItem, dropdownItemStyle], onPress: function () { return handleSelect(item); } },
                        React.createElement(Text, { style: [styles.itemText, dropdownItemTextStyle] }, item.label)));
                } }))));
};
export default Dropdown;
var styles = StyleSheet.create({
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
