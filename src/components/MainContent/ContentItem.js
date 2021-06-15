import "./MainContent.css";

const ContentItem = (props) => {
  const dateFormatted = Intl.DateTimeFormat("en-UK").format(
    new Date(props.date)
  );

  const itemClickedHandler = (e) => {
    // getting clicked parent
    const parent = e.target.closest(".content__container");
    const id = parent.getAttribute("id");
    const title = parent.querySelector(".content__title").innerHTML;
    const content = parent.querySelector(".content__content").innerHTML;

    // creating clicked div obj
    const clickObj = {
      id: id,
      title: title,
      content: content,
    };

    props.ContentDisplayHandler(false, clickObj);
  };

  return (
    <div
      className="content__container"
      id={props.id}
      onClick={itemClickedHandler}
    >
      <div className="content__title">{props.title}</div>
      <div className="content__content">{props.content}</div>
      <div className="content__date">{dateFormatted}</div>
    </div>
  );
};

export default ContentItem;
