import { useState, useContext, useEffect, useCallback, useMemo, useRef } from "react";
import classes from "./SideBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
interface SideBarProps {
  className?: string;
}
const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((pre) => !pre);
  };
  return (
    <div className={classNames(classes.SideBar, { [classes.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>collapse</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};

export default SideBar;
