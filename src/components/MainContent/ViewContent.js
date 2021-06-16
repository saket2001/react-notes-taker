import styles from "./ViewContent.module.css";
import logo from "../Form/icons8-back-arrow-50.png";
import trashLogo from "./icons8-trash-24.png";

import { useRef } from "react";

const ViewContent = (props) => {
  let noteTitle = useRef();
  let noteContent = useRef();

  const hideDiv = () => {
    const formData = {
      id: props.data.id,
      title: noteTitle.current.innerHTML,
      content: noteContent.current.innerHTML,
      date: new Date().toISOString(),
    };

    if (formData.title.length > 0 && formData.content.length > 0)
      props.formSubmit(formData);

    props.clickHandler(true, "");
  };

  const sendItemID = () => {
    props.deleteHandler(props.data.id);
  };

  return (
    <div id={styles.view_container}>
      <div id={styles.view__controls} onClick={hideDiv}>
        <img src={logo} alt="back button" />
        <p id={styles.view__text}>Your note </p>
        <button id={styles.deleteBtn} onClick={sendItemID}>
          <img src={trashLogo} alt="delete button" />
        </button>
      </div>
      <div id={styles.view__content}>
        <div
          className={styles.view__content__title}
          contentEditable="true"
          ref={noteTitle}
        >
          {props.data.title}
        </div>
        <div
          className={styles.view__content__content}
          contentEditable="true"
          ref={noteContent}
        >
          {props.data.content}
        </div>
      </div>
    </div>
  );
};

export default ViewContent;
