import React from "react";
import CodeMirrorEditor from "./components/CodeMirrorEditor";
import "codemirror/mode/markdown/markdown";

const App = () => (
  <CodeMirrorEditor width="100vw" height="100vh" mode="text/markdown" />
);

export default App;
