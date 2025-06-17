# 📦 React Native Dropdown Lite

A lightweight, customizable, and animated dropdown component for React Native — **without using Modals**. Designed for flexibility and ease of use.

---

## ✨ Features

- 🔽 Expandable dropdown with smooth height animation
- 🚫 Not modal-based — stays within your layout flow
- 🎨 Highly customizable styles and icons
- ⚛️ Built-in TypeScript support
- ⚡ Lightweight and easy to integrate

---

## 📦 Installation

```bash
npm install react-native-dropdown-lite
# or
yarn add react-native-dropdown-lite

🚀 Usage

import React, { useState } from 'react';
import { View } from 'react-native';
import Dropdown from 'react-native-dropdown-lite';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

const App = () => {
  const [selected, setSelected] = useState<string | number>();

  return (
    <View style={{ padding: 20 }}>
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
  );
};

export default App;



⚙️ Props

| Prop                     | Type                           | Description                                  |
| ------------------------ | ------------------------------ | -------------------------------------------- |
| `data`                   | `DropdownItem[]`               | Required. List of items to display           |
| `value`                  | `string \| number`             | Selected item value                          |
| `onSelect`               | `(item: DropdownItem) => void` | Callback when an item is selected            |
| `placeholder`            | `string`                       | Placeholder text when no item is selected    |
| `icon`                   | `React.ReactNode`              | Optional custom icon for the dropdown toggle |
| `maxHeight`              | `number`                       | Max dropdown height before scrolling         |
| `buttonStyle`            | `ViewStyle`                    | Style for the dropdown button                |
| `buttonTextStyle`        | `TextStyle`                    | Style for button text                        |
| `iconContainerStyle`     | `ViewStyle`                    | Style for the icon wrapper                   |
| `dropdownContainerStyle` | `ViewStyle`                    | Style for dropdown list container            |
| `dropdownItemStyle`      | `ViewStyle`                    | Style for individual dropdown item           |
| `dropdownItemTextStyle`  | `TextStyle`                    | Style for dropdown item text                 |




🧩 Type Definitions

export interface DropdownItem {
  label: string;
  value: string | number;
}


✅ Example Customization


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



📝 License
MIT © Vinod Vadla

