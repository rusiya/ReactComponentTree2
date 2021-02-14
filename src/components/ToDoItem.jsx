import React from "react";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  // function handleClick() {
  //   setIsDone((prevValue) => {
  //     return !prevValue;
  //   });

  // }
  return (
    // <div onClick={props.onChecked(props.id)}>
    // In the above case deleteItem will get call immediately because of () even without the OnClick
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* <div onClick={handleClick}> 
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li> */}
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
