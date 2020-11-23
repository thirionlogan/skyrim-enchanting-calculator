import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  app: { textAlign: "center" },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paperContainer: { padding: 16, width: "80%" },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  slider: { width: "80%" },
}));

function valuetext(value) {
  return `Enchanter
   ${value}`;
}

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

function App() {
  const slots = [
    "Head",
    "Neck",
    "Chest",
    "Hands",
    "Finger",
    "Feet",
    "Shield",
    "Weapon",
  ];
  const weaponEnchantments = [
    { name: "Absorb Health", slots: ["Weapon"] },
    { name: "Absorb Magicka", slots: ["Weapon"] },
    { name: "Absorb Stamina", slots: ["Weapon"] },
    { name: "Chaos Damage", slots: ["Weapon"] },
    { name: "Fire Damage", slots: ["Weapon"] },
    { name: "Frost Damage", slots: ["Weapon"] },
    { name: "Magicka Damage", slots: ["Weapon"] },
    { name: "Shock Damage", slots: ["Weapon"] },
    { name: "Stamina Damage", slots: ["Weapon"] },
    { name: "Banish", slots: ["Weapon"] },
    { name: "Fear", slots: ["Weapon"] },
    { name: "Turn Undead", slots: ["Weapon"] },
    { name: "Paralyze", slots: ["Weapon"] },
    { name: "Soul Trap", slots: ["Weapon"] },
    { name: "Briarheart Geis", slots: ["Weapon"] },
    { name: "Fiery Soul Trap", slots: ["Weapon"] },
    { name: "Huntsman's Prowess", slots: ["Weapon"] },
    { name: "Silent Moons Enchant", slots: ["Weapon"] },
    { name: "Smithing Expertise", slots: ["Weapon"] },
  ];
  const fortifySkillEnchantments = [
    { name: "Fortify Alchemy", slots: ["Head", "Neck", "Hands", "Finger"] },
    { name: "Fortify Alteration", slots: ["Head", "Neck", "Chest", "Finger"] },
    { name: "Fortify Archery", slots: ["Head", "Neck", "Hands", "Finger"] },
    { name: "Fortify Barter", slots: ["Neck"] },
    { name: "Fortify Block", slots: ["Neck", "Hands", "Finger", "Shield"] },
    { name: "Fortify Conjuration", slots: ["Head", "Neck", "Chest", "Finger"] },
    { name: "Fortify Destruction", slots: ["Head", "Neck", "Chest", "Finger"] },
    {
      name: "Fortify Heavy Armor",
      slots: ["Neck", "Chest", "Hands", "Finger"],
    },
    { name: "Fortify Illusion", slots: ["Head", "Neck", "Chest", "Finger"] },
    {
      name: "Fortify Light armor",
      slots: ["Neck", "Chest", "Hands", "Finger"],
    },
    { name: "Fortify Lockpicking", slots: ["Head", "Neck", "Hands", "Finger"] },
    { name: "Fortify One-Handed", slots: ["Neck", "Hands", "Finger", "Feet"] },
    { name: "Fortify Pickpocket", slots: ["Neck", "Hands", "Finger", "Feet"] },
    { name: "Fortify Restoration", slots: ["Head", "Neck", "Chest", "Finger"] },
    { name: "Fortify Smithing", slots: ["Neck", "Chest", "Hands", "Finger"] },
    { name: "Fortify Sneak", slots: ["Neck", "Hands", "Finger", "Feet"] },
    { name: "Fortify Two-Handed", slots: ["Neck", "Hands", "Finger", "Feet"] },
  ];
  const fortifyAttributeEnchantments = [
    { name: "Fortify Healing Rate", slots: ["Finger", "Neck", "Chest"] },
    { name: "Fortify Health", slots: ["Finger", "Neck", "Chest", "Shield"] },
    { name: "Fortify Magicka", slots: ["Finger", "Head", "Neck", "Hands"] },
    { name: "Fortify Magicka Regen", slots: ["Finger", "Head", "Chest"] },
    { name: "Fortify Stamina", slots: ["Finger", "Neck", "Chest", "Feet"] },
    {
      name: "Fortify Stamina Regen",
      slots: ["Neck", "Chest", "Feet", "Finger"],
    },
  ];
  const fortifyOtherEnchantments = [
    {
      name: "Fortify Carry Weight",
      slots: ["Neck", "Hands", "Finger", "Feet"],
    },
    { name: "Fortify Alteration and Magicka Regen", slots: ["Chest"] },
    { name: "Fortify Conjuration and Magicka Regen", slots: ["Chest"] },
    { name: "Fortify Destruction and Magicka Regen", slots: ["Chest"] },
    { name: "Fortify Illusion and Magicka Regen", slots: ["Chest"] },
    { name: "Fortify Restoration and Magicka Regen", slots: ["Chest"] },
    { name: "Fortify Unarmed", slots: ["Hands", "Finger"] },
  ];
  const resistEnchantments = [
    { name: "Resist Disease", slots: ["Neck", "Finger", "Shield", "Chest"] },
    { name: "Resist Fire", slots: ["Neck", "Finger", "Shield", "Feet"] },
    { name: "Resist Frost", slots: ["Neck", "Finger", "Shield", "Feet"] },
    { name: "Resist Magic", slots: ["Neck", "Finger", "Shield"] },
    { name: "Resist Poison", slots: ["Neck", "Finger", "Shield", "Chest"] },
    { name: "Resist Shock", slots: ["Neck", "Finger", "Shield", "Feet"] },
  ];
  const otherEnchantments = [
    { name: "Muffle", slots: ["Feet"] },
    { name: "Waterbreathing", slots: ["Head", "Neck", "Finger"] },
  ];
  const enchantments = [
    ...fortifySkillEnchantments,
    ...fortifyAttributeEnchantments,
    ...fortifyOtherEnchantments,
    ...resistEnchantments,
    ...otherEnchantments,
    ...weaponEnchantments,
  ];
  const soulSizes = ["Petty", "Lesser", "Common", "Greater", "Grand"];
  const enchantmentPerks = [
    { name: "Fire Enchanter", selected: false },
    { name: "Frost Enchanter", selected: false },
    { name: "Storm Enchanter", selected: false },
    { name: "Insightful Enchanter", selected: false },
    { name: "Corpus Enchanter", selected: false },
    { name: "Extra Effect", selected: false },
  ];
  /*TODO: Add these Perks from other trees:
    Augmented Flames 1/2
    Aumented Frost 1/2
    Augmented Shock 1/2
    Master of the mind
    Necromage
  */

  const classes = useStyles();
  const [state, setState] = useState({
    slot: "",
    enchantment: "", // implement "Extra effect"
    soulSize: "",
    perks: enchantmentPerks,
    enchanterPerk: 0,
    skill: "",
  });

  const handleChangeSlot = (event) => {
    setState({ ...state, slot: event.target.value });
  };
  const handleChangeEnchantment = (event) => {
    setState({ ...state, enchantment: event.target.value });
  };
  const handleChangeSoulSize = (event) => {
    setState({ ...state, soulSize: event.target.value });
  };
  const handleChangePerk = (event) => {
    const value = JSON.parse(event.target.value);
    setState({
      ...state,
      perks: state.perks.map((perk) => {
        if (perk.name === value.name) {
          return { ...value, selected: !perk.selected };
        } else {
          return perk;
        }
      }),
    });
  };

  const handleChangeEnchanterPerk = (event) => {
    setState({ ...state, enchanterPerk: event.target.value });
  };
  const handleChangeSkill = (event) => {
    setState({ ...state, skill: event.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className={classes.appHeader}>
          <Paper className={classes.paperContainer}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Item
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={state.slot}
                  onChange={handleChangeSlot}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {slots.map((slot) => {
                    return <MenuItem value={slot}>{`${slot}`}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Enchantment
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={state.enchantment}
                  onChange={handleChangeEnchantment}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {enchantments
                    .filter((enchantment) => {
                      return enchantment.slots.includes(state.slot);
                    })
                    .map((enchantment) => {
                      return (
                        <MenuItem
                          value={enchantment.name}
                        >{`${enchantment.name}`}</MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Soul
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={state.soulSize}
                  onChange={handleChangeSoulSize}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {soulSizes.map((soulSize) => {
                    return (
                      <MenuItem value={soulSize}>{`${soulSize}`}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-basic"
                  label="Skill Level"
                  type="number"
                  value={state.skill}
                  onChange={handleChangeSkill}
                />
              </FormControl>
              <Divider variant="middle" />
              <Typography variant="h5">Perks</Typography>
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
                value={state.enchanterPerk}
                onChange={handleChangeEnchanterPerk}
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
              <br />
            </div>
          </Paper>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
