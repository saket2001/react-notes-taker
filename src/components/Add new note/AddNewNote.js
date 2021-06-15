import logo from "./icons8-plus.svg";
import NewNoteForm from "../Form/NewNoteForm";
import styles from "./addNewNote.module.css";

// import { useState } from "react";

const AddNewNote = (props) => {
  const showForm = () => {
    // setFlag(false);
    props.clickHandler(false);
  };

  const hideForm = (flag) => {
    props.clickHandler(true);
  };

  const getData = (data) => {
    props.formSubmit(data);
  };

  return (
    <div id={styles.main_container}>
      {props.flag === true ? (
        <div id={styles.new_note__container}>
          <p>Add new note</p>
          <div id={styles.new_note__logo} onClick={showForm}>
            <img src={logo} alt="plus logo" />
          </div>
        </div>
      ) : (
        <NewNoteForm clickHandler={hideForm} submitHandler={getData} />
      )}
    </div>
  );
};

export default AddNewNote;
