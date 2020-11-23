import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Enchantment from "../Classes/Enchantment";
import WeaponEnchantment from "../Classes/WeaponEnchantment";

export const EnchantmentInput = (props) => {
  const {
    classes,
    state,
    handleChangeFirstEnchantment,
    handleChangeSecondEnchantment,
  } = props;
  const weaponEnchantments = [
    new WeaponEnchantment("Absorb Health"),
    new WeaponEnchantment("Absorb Magicka"),
    new WeaponEnchantment("Absorb Stamina"),
    new WeaponEnchantment("Chaos Damage"),
    new WeaponEnchantment("Fire Damage"),
    new WeaponEnchantment("Frost Damage"),
    new WeaponEnchantment("Magicka Damage"),
    new WeaponEnchantment("Shock Damage"),
    new WeaponEnchantment("Stamina Damage"),
    new WeaponEnchantment("Banish"),
    new WeaponEnchantment("Fear"),
    new WeaponEnchantment("Turn Undead"),
    new WeaponEnchantment("Paralyze"),
    new WeaponEnchantment("Soul Trap"),
    new WeaponEnchantment("Briarheart Geis"),
    new WeaponEnchantment("Fiery Soul Trap"),
    new WeaponEnchantment("Huntsman's Prowess"),
    new WeaponEnchantment("Silent Moons Enchant"),
    new WeaponEnchantment("Smithing Expertise"),
  ];
  const fortifySkillEnchantments = [
    new Enchantment("Fortify Alchemy", ["Head", "Neck", "Hands", "Finger"]),
    new Enchantment("Fortify Alteration", ["Head", "Neck", "Chest", "Finger"]),
    new Enchantment("Fortify Archery", ["Head", "Neck", "Hands", "Finger"]),
    new Enchantment("Fortify Barter", ["Neck"]),
    new Enchantment("Fortify Block", ["Neck", "Hands", "Finger", "Shield"]),
    new Enchantment("Fortify Conjuration", ["Head", "Neck", "Chest", "Finger"]),
    new Enchantment("Fortify Destruction", ["Head", "Neck", "Chest", "Finger"]),
    new Enchantment("Fortify Heavy Armor", [
      "Neck",
      "Chest",
      "Hands",
      "Finger",
    ]),
    new Enchantment("Fortify Illusion", ["Head", "Neck", "Chest", "Finger"]),
    new Enchantment("Fortify Light armor", [
      "Neck",
      "Chest",
      "Hands",
      "Finger",
    ]),
    new Enchantment("Fortify Lockpicking", ["Head", "Neck", "Hands", "Finger"]),
    new Enchantment("Fortify One-Handed", ["Neck", "Hands", "Finger", "Feet"]),
    new Enchantment("Fortify Pickpocket", ["Neck", "Hands", "Finger", "Feet"]),
    new Enchantment("Fortify Restoration", ["Head", "Neck", "Chest", "Finger"]),
    new Enchantment("Fortify Smithing", ["Neck", "Chest", "Hands", "Finger"]),
    new Enchantment("Fortify Sneak", ["Neck", "Hands", "Finger", "Feet"]),
    new Enchantment("Fortify Two-Handed", ["Neck", "Hands", "Finger", "Feet"]),
  ];
  const fortifyAttributeEnchantments = [
    new Enchantment("Fortify Healing Rate", ["Finger", "Neck", "Chest"]),
    new Enchantment("Fortify Health", ["Finger", "Neck", "Chest", "Shield"]),
    new Enchantment("Fortify Magicka", ["Finger", "Head", "Neck", "Hands"]),
    new Enchantment("Fortify Magicka Regen", ["Finger", "Head", "Chest"]),
    new Enchantment("Fortify Stamina", ["Finger", "Neck", "Chest", "Feet"]),
    new Enchantment("Fortify Stamina Regen", [
      "Neck",
      "Chest",
      "Feet",
      "Finger",
    ]),
  ];
  const fortifyOtherEnchantments = [
    new Enchantment("Fortify Carry Weight", [
      "Neck",
      "Hands",
      "Finger",
      "Feet",
    ]),
    new Enchantment("Fortify Alteration and Magicka Regen", ["Chest"]),
    new Enchantment("Fortify Conjuration and Magicka Regen", ["Chest"]),
    new Enchantment("Fortify Destruction and Magicka Regen", ["Chest"]),
    new Enchantment("Fortify Illusion and Magicka Regen", ["Chest"]),
    new Enchantment("Fortify Restoration and Magicka Regen", ["Chest"]),
    new Enchantment("Fortify Unarmed", ["Hands", "Finger"]),
  ];
  const resistEnchantments = [
    new Enchantment("Resist Disease", ["Neck", "Finger", "Shield", "Chest"]),
    new Enchantment("Resist Fire", ["Neck", "Finger", "Shield", "Feet"]),
    new Enchantment("Resist Frost", ["Neck", "Finger", "Shield", "Feet"]),
    new Enchantment("Resist Magic", ["Neck", "Finger", "Shield"]),
    new Enchantment("Resist Poison", ["Neck", "Finger", "Shield", "Chest"]),
    new Enchantment("Resist Shock", ["Neck", "Finger", "Shield", "Feet"]),
  ];
  const otherEnchantments = [
    new Enchantment("Muffle", ["Feet"]),
    new Enchantment("Waterbreathing", ["Head", "Neck", "Finger"]),
  ];
  const enchantments = [
    ...fortifySkillEnchantments,
    ...fortifyAttributeEnchantments,
    ...fortifyOtherEnchantments,
    ...resistEnchantments,
    ...otherEnchantments,
    ...weaponEnchantments,
  ];
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          Enchantment
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={
            state.enchantment[0] ? JSON.stringify(state.enchantment[0]) : ""
          }
          onChange={handleChangeFirstEnchantment}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {enchantments
            .filter((enchantment) => {
              return (
                enchantment.slots.includes(state.slot) &&
                enchantment.name !== state.enchantment[1]?.name
              );
            })
            .map((enchantment) => {
              return (
                <MenuItem
                  value={JSON.stringify(enchantment)}
                >{`${enchantment.name}`}</MenuItem>
              );
            })}
        </Select>
      </FormControl>
      {state.perks.reduce((isExtraEffectSelected, perk) => {
        return isExtraEffectSelected
          ? isExtraEffectSelected
          : perk.name === "Extra Effect" && perk.selected;
      }, false) ? (
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            Enchantment 2
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={
              state.enchantment[1] ? JSON.stringify(state.enchantment[1]) : ""
            }
            onChange={handleChangeSecondEnchantment}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {enchantments
              .filter((enchantment) => {
                return (
                  enchantment.slots.includes(state.slot) &&
                  enchantment.name !== state.enchantment[0]?.name
                );
              })
              .map((enchantment) => {
                return (
                  <MenuItem
                    value={JSON.stringify(enchantment)}
                  >{`${enchantment.name}`}</MenuItem>
                );
              })}
          </Select>
        </FormControl>
      ) : null}
    </>
  );
};
