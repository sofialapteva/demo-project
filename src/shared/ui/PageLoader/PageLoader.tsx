import { classNames } from "shared/lib/classNames/classNames";
import classes from "./PageLoader.module.scss";
import Loader from "../Loader/Loader";

interface PageLoaderProps {
  className?: string;
}
const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(classes.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
