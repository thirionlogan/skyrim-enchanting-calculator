export default class Perk {
  constructor(name, options = { selected: false, level: 0, maxLevel: 0 }) {
    const { selected, level, maxLevel } = options;
    this.name = name;
    this.selected = selected;
    this.level = level;
    this.maxLevel = maxLevel;
  }

  toggleSelected() {
    this.selected = !this.selected;
  }

  get isMultilevelPerk() {
    return this.maxLevel > 0;
  }
}
