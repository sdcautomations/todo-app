import styles from "./todo.module.scss";

export type TodoProps = {
  id: string;
  content: string;
  isChecked: boolean;
  onClick: (id: string) => void;
};

export const Todo = ({ id, content, isChecked, onClick }: TodoProps) => {
  return (
    <div
      className={!isChecked ? styles["todo"] : styles["todo--checked"]}
      onClick={() => {
        onClick(id);
      }}
    >
      {content}
    </div>
  );
};
