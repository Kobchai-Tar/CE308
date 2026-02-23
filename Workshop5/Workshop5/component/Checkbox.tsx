import { View, Text, TouchableOpacity } from "react-native";

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label: string;
}

export default function Checkbox({ checked, onToggle, label }: CheckboxProps) {
  return (
    <TouchableOpacity
      onPress={onToggle}
      className="flex-row items-center"
    >
      <View
        className={`w-5 h-5 mr-2 border rounded ${
          checked ? "bg-blue-600" : "bg-white"
        }`}
      />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}