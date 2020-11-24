import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const SoulInput = (props) => {
  const { handleChangeSoulSize, state, classes } = props;
  const soulSizes = ['Petty', 'Lesser', 'Common', 'Greater', 'Grand'];
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='demo-simple-select-filled-label'>Soul</InputLabel>
      <Select
        labelId='demo-simple-select-filled-label'
        id='demo-simple-select-filled'
        value={state.soulSize}
        onChange={handleChangeSoulSize}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {soulSizes.map((soulSize) => {
          return (
            <MenuItem
              key={soulSize + 'MenuItem'}
              value={soulSize}
            >{`${soulSize}`}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
