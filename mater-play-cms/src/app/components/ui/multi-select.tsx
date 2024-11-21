import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

type MultiSelectProps<T extends Record<string, any>> = {
  selected: T[];
  onChange: (items: T[]) => void;
  items: T[];
  label: string;
};

export function MultiSelect<T extends Record<string, any>>({
  selected,
  onChange,
  items,
  label,
}: MultiSelectProps<T>) {
  const [selectedItems, setSelectedItems] = useState<T[]>([]);

  useEffect(() => {
    setSelectedItems(selected);
  }, [selected]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;

    const selectedIds = value as string[];
    const updatedSelectedItems = items.filter((item) =>
      selectedIds.includes(String(item.id))
    );

    setSelectedItems(updatedSelectedItems);
    onChange(updatedSelectedItems);
  };

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={selectedItems.map((item) => String(item.id))}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) =>
          items
            .filter((item) => selected.includes(String(item.id)))
            .map((item) => item.name)
            .join(", ")
        }
      >
        {items.length > 0 && items.map((item) => (
          <MenuItem key={item.id} value={String(item.id)}>
            <Checkbox
              checked={selectedItems.some((selected) => selected.id === item.id)}
            />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}