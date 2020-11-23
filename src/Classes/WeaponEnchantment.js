import Enchantment from "./Enchantment";

export default class WeaponEnchantment extends Enchantment {
  constructor(name) {
    super(name, ["Weapon"]);
  }
}
