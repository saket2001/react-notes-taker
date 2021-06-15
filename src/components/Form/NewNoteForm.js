import styles from "./newNoteForm.module.css";
import logo from "./icons8-back-arrow-50.png";
import { useState } from "react";

const NewNoteForm = (props) => {
  const [noteTitle, setTitle] = useState("");
  const [noteContent, setContent] = useState("");

  const hideForm = () => {
    const formData = {
      id: Math.random() * 50,
      title: noteTitle,
      content: noteContent,
      date: new Date().toISOString(),
    };

    if (formData.title.length > 0 && formData.content.length > 0)
      props.submitHandler(formData);

    console.log(formData);

    props.clickHandler(false);
  };

  const titleHandler = (e) => {
    if (e.target.value.length > 0) setTitle(e.target.value);
    else alert("error");
  };
  const ContentHandler = (e) => {
    if (e.target.value.length > 0) setContent(e.target.value);
  };

  return (
    <form id={styles.Form_container}>
      <div id={styles.form_controls} onClick={hideForm}>
        <img src={logo} alt="back button" />
        <p>Create a new note</p>
      </div>
      <div id={styles.form}>
        <input type="text" placeholder="Title" onChange={titleHandler} />
        <textarea
          cols="1"
          rows="20"
          placeholder="Content goes here"
          onChange={ContentHandler}
          aria-multiline="true"
        ></textarea>
      </div>
    </form>
  );
};

export default NewNoteForm;
