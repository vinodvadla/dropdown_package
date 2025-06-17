import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
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
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
