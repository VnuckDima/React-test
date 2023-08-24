import React, { Fragment, useState } from "react";

function Button({ text }) {
  /*  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
 */
  return (
    <Fragment>
      {/* <div onClick={handleCount}>{count}</div> */}
      <button>{text}</button>
    </Fragment>
  );
}

export default Button;
