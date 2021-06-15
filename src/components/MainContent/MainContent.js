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
    <div id="main_content__container">
      <p>Start creating notes now !!</p>
    </div>
  );
};

export default MainContent;
