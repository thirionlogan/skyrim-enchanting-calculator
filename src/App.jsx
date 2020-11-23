import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { ItemInput } from "./Components/ItemInput";
import { EnchantmentInput } from "./Components/EnchantmentInput";
import { SoulInput } from "./Components/SoulInput";
import { PerksInput } from "./Components/PerksInput";
import { EnchantmentEffect } from "./Components/EnchantmentEffect";

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
  paperContainer: { padding: 16, width: "80%", maxWidth: "1080px" },
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

function App() {
  const otherTreePerks = [
    { name: "Augmented Flames", selected: false }, // 1/2
    { name: "Augmented Frost", selected: false }, // 1/2
    { name: "Augmented Shock", selected: false }, // 1/2
    { name: "Necromage", selected: false },
    { name: "Master of the Mind", selected: false },
  ];
  const enchantmentPerks = [
    { name: "Fire Enchanter", selected: false },
    { name: "Frost Enchanter", selected: false },
    { name: "Storm Enchanter", selected: false },
    { name: "Insightful Enchanter", selected: false },
    { name: "Corpus Enchanter", selected: false },
    { name: "Extra Effect", selected: false },
    ...otherTreePerks,
  ];

  const classes = useStyles();
  const [state, setState] = useState({
    slot: "",
    enchantment: [""],
    soulSize: "",
    perks: enchantmentPerks,
    enchanterPerk: 0,
    skill: "",
  });

  useEffect(() => {
    console.log(state);
  });

  const handleChangeSlot = (event) => {
    setState({ ...state, slot: event.target.value });
  };
  const handleChangeFirstEnchantment = (event) => {
    setState({
      ...state,
      enchantment: [JSON.parse(event.target.value), state.enchantment[1]],
    });
  };
  const handleChangeSecondEnchantment = (event) => {
    setState({
      ...state,
      enchantment: [state.enchantment[0], JSON.parse(event.target.value)],
    });
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
            <ItemInput
              classes={classes}
              state={state}
              handleChangeSlot={handleChangeSlot}
            />
            <EnchantmentInput
              classes={classes}
              state={state}
              handleChangeFirstEnchantment={handleChangeFirstEnchantment}
              handleChangeSecondEnchantment={handleChangeSecondEnchantment}
            />
            <SoulInput
              classes={classes}
              state={state}
              handleChangeSoulSize={handleChangeSoulSize}
            />
            <FormControl className={classes.formControl}>
              <TextField
                id="standard-basic"
                label="Skill Level"
                type="number"
                value={state.skill}
                onChange={handleChangeSkill}
              />
            </FormControl>
            <Divider />
            <PerksInput
              classes={classes}
              state={state}
              handleChangeEnchanterPerk={handleChangeEnchanterPerk}
              handleChangePerk={handleChangePerk}
            />
            <Divider />
            <EnchantmentEffect classes={classes} state={state} />
          </Paper>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
