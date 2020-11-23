import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const PerksInput = (props) => {
  const valuetext = (value) => {
    return `Enchanter ${value}`;
  };

  const marks = [
    {
      value: 1,
      label: "Enchanter 1",
    },
    {
      value: 2,
      label: "Enchanter 2",
    },
    {
      value: 3,
      label: "Enchanter 3",
    },
    {
      value: 4,
      label: "Enchanter 4",
    },
    {
      value: 5,
      label: "Enchanter 5",
    },
  ];

  const { state, classes, handleChangeEnchanterPerk, handleChangePerk } = props;
  return (
    <>
      <Typography color="textSecondary" display="block" variant="caption">
        Perks
      </Typography>
      <Slider
        className={classes.slider}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={0}
        max={5}
        // value={state.enchanterPerk}
        // onChange={handleChangeEnchanterPerk}
      />
      <br />
      {state.perks.map((perk) => {
        return (
          <FormControlLabel
            className={classes.formControl}
            control={
              <Checkbox
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
