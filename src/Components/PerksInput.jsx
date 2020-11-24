import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export const PerksInput = (props) => {
  const {
    state,
    classes,
    handleChangePerk,
    handleChangeMultilevelPerk,
  } = props;

  const getMultilevelPerkOptions = (perk) => {
    let result = [];
    for (let i = 0; i <= perk.maxLevel; i++) {
      result.push(
        <MenuItem
          key={perk.name + 'MenuItem'}
          value={JSON.stringify({ ...perk, level: i })}
        >
          {i ? `${perk.name} ${i}` : <em>None</em>}
        </MenuItem>
      );
    }
    return result;
  };
  return (
    <>
      <Typography color='textSecondary' display='block' variant='caption'>
        Perks
      </Typography>
      {state.perks.map((perk) => {
        return perk.isMultilevelPerk ? (
          <FormControl
            key={perk.name + 'FormControl'}
            className={classes.formControl}
          >
            <InputLabel
              key={perk.name + 'InputLabel'}
              id='demo-simple-select-filled-label'
            >
              {perk.name}
            </InputLabel>
            <Select
              key={perk.name + 'Select'}
              defaultValue={JSON.stringify({ ...perk, level: 0 })}
              value={JSON.stringify(perk)}
              onChange={handleChangeMultilevelPerk}
            >
              {getMultilevelPerkOptions(perk)}
            </Select>
          </FormControl>
        ) : (
          <FormControlLabel
            key={perk.name + 'FormControlLabel'}
            className={classes.formControl}
            control={
              <Checkbox
                key={perk.name + 'Checkbox'}
                checked={perk.selected}
                onChange={handleChangePerk}
                name={perk.name}
                value={JSON.stringify(perk)}
              />
            }
            label={perk.name}
          />
        );
      })}
    </>
  );
};
