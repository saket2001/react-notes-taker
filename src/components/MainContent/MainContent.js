import ContentItem from "./ContentItem";
const MainContent = (props) => {
  const ContentDisplayHandler = (flag, data) => {
    props.ContentDisplayHandler(flag, data);
  };

  let content;
  if (props.data.length > 0) {
    content = props.data.map((item) => (
      <ContentItem
        key={item.id}
        id={item.id}
        title={item.title}
        content={item.content}
        date={item.date}
        ContentDisplayHandler={ContentDisplayHandler}
      />
    ));
  }

  return props.data.length > 0 ? (
    <div id="main_content__container">{content}</div>
  ) : (
    <div id="Message_container">
      <p>Start creating notes now !!</p>
      <p>Remember This</p>
      <ol>
        <li>To create new note press on plus button above</li>
        <li>To save a note after adding content press on back arrow button</li>
        <li>To save after update click on title again</li>
        <li>You can store upto 7 big notes</li>
      </ol>
    </div>
  );
};

export default MainContent;
