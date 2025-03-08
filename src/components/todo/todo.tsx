import styles from "./todo.module.scss";
import { IconButton } from "../icon-button";
import { useState } from "react";

export type TodoProps = {
  id: string;
  content: string;
  isChecked: boolean;
  onClick: (id: string) => void;
  onEditSaved: (id: string, newContent: string) => void;
  onTaskDeleted: (id: string) => void;
};

export const Todo = ({
  id,
  content,
  isChecked,
  onClick,
  onEditSaved,
  onTaskDeleted,
}: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(content);

  const handleInputChange = (value: string) => {
    setEditInput(value);
  };

  const handleEditButton = () => {
    setIsEditing(true);
  };

  const handleConfirmButton = () => {
    if (editInput === "") {
      return;
    }

    onEditSaved(id, editInput);

    //Reset component
    setEditInput(editInput);
    setIsEditing(false);
  };

  const handleCancelButton = () => {
    onTaskDeleted(id);

    setEditInput("");
    setIsEditing(false);
  };

  return (
    <div
      className={!isChecked ? styles["todo"] : styles["todo--checked"]}
      onClick={() => {
        if (!isEditing) {
          onClick(id);
        }
      }}
      // Return when todo's content is being activly edited
    >
      {isEditing ? (
        <div className={styles["todo__form"]}>
          <input
            className={styles["todo__form__input"]}
            type="text"
            value={editInput}
            placeholder="Type your edit here..."
            onChange={(e) => {
              e.stopPropagation();
              handleInputChange(e.target.value);
            }}
          />

          <div className={styles["todo__form__actions"]}>
            <IconButton
              className={styles["todo__form__actions__icon"]}
              src="/public/icons8-confirm.svg"
              alt="Confirm editing icon"
              onClick={handleConfirmButton}
            />

            <IconButton
              className={styles["todo__form__actions__icon"]}
              src="/public/icons8-cancel.svg"
              alt="Cancel editing icon"
              onClick={handleCancelButton}
            />
          </div>
        </div>
      ) : (
        // Return when todo's content is not being edited
        <>
          <div className={styles["todo__content"]}>{content}</div>

          <div className={styles["todo__actions"]}>
            <IconButton
              className={
                !isChecked
                  ? styles["todo__actions__icon"]
                  : styles["todo__actions__icon--checked"]
              }
              src="/public/edit.svg"
              alt="Edit icon"
              onClick={(e: any) => {
                e.stopPropagation();
                handleEditButton();
              }}
            />

            <IconButton
              className={
                !isChecked
                  ? styles["todo__actions__icon"]
                  : styles["todo__actions__icon--checked"]
              }
              src="/public/delete.svg"
              alt="Delete icon"
              onClick={(e: any) => {
                e.stopPropagation();
                handleCancelButton();
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
