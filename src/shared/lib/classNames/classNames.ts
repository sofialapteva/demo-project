type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []) {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => value)
      .map(([cls]) => cls),
    ...additional.filter(Boolean),
  ].join(" ");
}
