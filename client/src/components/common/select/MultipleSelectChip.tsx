import * as React from 'react';
import {Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface MultipleSelectChipProps {
  label?: string;
  value: string[];
  get: (value: string | string[]) => void;
}

export default function MultipleSelectChip(props: MultipleSelectChipProps) {
  const theme = useTheme();
  const [selectName, setSelectName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectName>) => {
    const {
      target: {value},
    } = event;
    console.log('value', value);
    setSelectName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    props.get(value);
  };

  const handleDelete = (chipToDelete: string) => () => {
    setSelectName((chips) => chips.filter((chip) => chip !== chipToDelete));
    props.get(selectName.filter((chip) => chip !== chipToDelete));
  };

  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-multiple-chip-label">{props.label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onDelete={handleDelete(value)}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.value.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, selectName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
