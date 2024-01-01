import React from "react";

const Hello= () => {
  // using JSX
  // return (
  //   <div className="dummyClass">
  //     <h1>Hello JavaScript</h1>
  //   </div>
  // );

  return React.createElement(
    'div', 
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1', null, 'Hello JavaScript'));
}

export default Hello;