import React, { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  // state or this.setState()

  useEffect(() => {
    document.title = `${name} Clicked ${counter} times !`;
  }, []);

  //componentDidMount
  //componentDidUpdate

  return (
    <div>
      <p>
        {name} clicked {counter} times !
      </p>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}
