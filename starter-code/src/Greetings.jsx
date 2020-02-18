import React from "react";

export const Greetings = props => {
  const lang = props.lang;
  const children = props.children;
  let greet;
  if (lang == "de") {
    greet = "Hallo";
  } else if (lang == "fr") {
    greet = "Bonjour";
  }
  return (
    <div className="greetings">
      <p>
        {greet} {children}
      </p>
    </div>
  );
};
