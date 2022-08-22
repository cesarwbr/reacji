import React, { useState } from "react";
import Reacji from "reacji";
import "./app.css";

const App: React.FC = () => {
  const [test, setTest] = useState(false);
  return (
    <div className="App">
      <Reacji />
    </div>
  );
};

export default App;
