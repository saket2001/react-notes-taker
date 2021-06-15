import MainContent from "./components/MainContent/MainContent";
import AddNewNote from "./components/Add new note/AddNewNote";
import ViewContent from "./components/MainContent/ViewContent";

import { useState } from "react";
import "./index.css";

const saveData = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

const getData = () => {
  const result = JSON.parse(localStorage.getItem("data"));
  return result;
};

function App() {
  const [flag, setFlag] = useState(true);
  const [ContentFlag, setContentFlag] = useState(true);
  const [ContentData, setContentData] = useState([]);
  const [inputData, setInputData] = useState(getData);

  const showForm = (flag) => {
    setFlag(flag);
  };

  const addDataToList = (data) => {
    setInputData((prevData) => {
      saveData([data, ...prevData]);
      return [data, ...prevData];
    });
  };

  const ContentDisplayHandler = (flag, contentData) => {
    setContentData(contentData);
    setContentFlag(flag);
  };

  const DeleteItem = (id) => {
    const newData = inputData.filter((item) => item.id !== +id);
    setInputData(newData);
    saveData(newData);
  };

  return (
    <div id="container">
      {/* add new note */}
      {ContentFlag ? (
        <AddNewNote
          clickHandler={showForm}
          formSubmit={addDataToList}
          flag={flag}
        />
      ) : (
        ""
      )}
      {/* main list component */}
      {flag && ContentFlag === true ? (
        <MainContent
          data={inputData}
          ContentDisplayHandler={ContentDisplayHandler}
          flag={ContentFlag}
        />
      ) : (
        ""
      )}
      {ContentFlag === false ? (
        <ViewContent
          data={ContentData}
          clickHandler={ContentDisplayHandler}
          deleteHandler={DeleteItem}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
