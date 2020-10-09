/** Deps */
import * as React from "react";

/** Stylesheet */
import "./styles.css";

/** Components */
import { Loading } from "./components/ui";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Loading />
    </div>
  );
}
