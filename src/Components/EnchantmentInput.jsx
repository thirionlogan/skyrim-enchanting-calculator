import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export const EnchantmentInput = (props) => {
  const { classes, state, handleChangeEnchantment } = props;
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
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">Enchantment</InputLabel>
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
  );
};
