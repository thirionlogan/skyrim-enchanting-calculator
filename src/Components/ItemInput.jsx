import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const ItemInput = (props) => {
  const { state, handleChangeSlot, classes } = props;

  const slots = [
    'Head',
    'Neck',
    'Chest',
    'Hands',
    'Finger',
    'Feet',
    'Shield',
    'Weapon',
  ];
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='demo-simple-select-filled-label'>Item</InputLabel>
      <Select
        labelId='demo-simple-select-filled-label'
        id='demo-simple-select-filled'
        value={state.slot}
        onChange={handleChangeSlot}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {slots.map((slot) => {
          return (
            <MenuItem
              key={slot + 'MenuItem'}
              value={slot}
            >{`${slot}`}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
