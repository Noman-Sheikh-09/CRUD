import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        style={{
          color: props.color,
          backgroundColor: props.bgColor,
          border: props.border,
          borderRadius: props.borderRadius,
          textAlign: props.alignText,
          marginLeft: props.marginLeft,
          padding: props.padding,
          fontSize: props.size,
        }}
  onClick={()=>props.callBack()}
      >
        {props.text}
      </button>
    </div>
  );
}
