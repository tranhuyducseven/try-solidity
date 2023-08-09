import styles from "./styles.module.scss";

export const OverlayComponent: IComponent<{
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.overlay}>
      {children}
    </div>
  );
};
