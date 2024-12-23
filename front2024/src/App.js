import React, { Suspense } from "react";
import Toolbar from "./components/Toolbar";


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toolbar />
    </Suspense>
  );
}

export default App;
