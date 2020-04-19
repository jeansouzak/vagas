import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';

function SelectField({ meta, input, label, options = [] }) {
  return (
    <FormControl
      variant="outlined"
      fullWidth
      error={meta.touched && !!meta.error}
    >
      <InputLabel htmlFor={input.name}>{label}</InputLabel>
      <Select
        value={input.value}
        onChange={input.onChange}
        label={label}
        inputProps={{
          name: input.name,
          id: input.name,
        }}
      >
        {options.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}

export default SelectField;
