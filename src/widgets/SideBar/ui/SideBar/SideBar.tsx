import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import classes from "./SideBar.module.scss";

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
            <button type="button" onClick={onToggle}>
                collapse
            </button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang} />
            </div>
        </div>
    );
};

export default SideBar;
