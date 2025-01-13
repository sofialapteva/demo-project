type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]) {
  return [
    cls,
    Object.entries(mods)
      .filter(([cls, value]) => value)
      .map(([cls, _]) => cls)
      .join(" "),
    ...additional,
  ].join(" ");
}
