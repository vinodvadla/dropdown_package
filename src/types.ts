export interface DropdownItem {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
  }
  
  export interface DropdownProps {
    data: DropdownItem[];
    value?: string | number;
    onSelect: (item: DropdownItem) => void;
    placeholder?: string;
    buttonStyle?: object;
    dropdownStyle?: object;
    itemStyle?: object;
    renderItem?: (item: DropdownItem, selected: boolean) => React.ReactNode;
  }
  