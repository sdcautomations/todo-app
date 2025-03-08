import styles from "./icon-button.module.scss";
import classNames from "classnames";

export const IconButton = ({
  src,
  alt,
  onClick,
  className,
}: {
  src: string;
  alt: string;
  onClick: (e?: any) => void;
  className?: string;
}) => {
  const iconButtonClassNames = classNames(styles["icon-button"], className);

  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={iconButtonClassNames}
    />
  );
};
