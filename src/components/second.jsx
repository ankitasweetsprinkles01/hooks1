import React, { useState } from "react";

function Second() {
  let [age, setAge] = React.useState(0);
  let [siblings, setSiblings] = React.useState(0);

  let increaseAge = () => setAge(age + 1);
  let increaseSiblings = () => setSiblings(siblings + 1);

  return (
    <div>
      I AM {age} YEARS OLD! and I HAVE{siblings} NO OF SIBLINGS!
      <button onClick={increaseAge}>INCREASE AGE</button>
      <button onClick={increaseSiblings}>INCREASE IN NO OF SIBLINGS</button>
    </div>
  );
}

export default Second;