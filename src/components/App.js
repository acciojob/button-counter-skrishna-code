import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <p>Button clicked {num} times</p>

      {/* Do not remove the main div */}
      <button onClick={() => setNum(num + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default App;