import React, { useState } from "react";
import Lnading from "./pages/Landing";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Lnading /> */}
      <About />
    </>
  );
}

export default App;
