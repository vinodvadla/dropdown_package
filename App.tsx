import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Dropdown,{DropdownItem} from './src/DropDown';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState<string | number | undefined>();

  const options: DropdownItem[] = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
  ];

  return (
    <View style={styles.container}>
      <Text>Selected: {selected}</Text>
    <View style={{width: '100%', height: 100}}>
    <Dropdown
        data={options}
        value={selected}
        onSelect={(item) => setSelected(item.value)}
        placeholder="Choose a framework"
        buttonStyle={{
          borderColor: '#007bff',
          backgroundColor: '#f0f8ff', 
        }}
        buttonTextStyle={{ color: '#007bff' }}
        dropdownContainerStyle={{ backgroundColor: '#fff' }}
        dropdownItemStyle={{ backgroundColor: '#f9f9f9' }}
        dropdownItemTextStyle={{ color: '#555' }}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
