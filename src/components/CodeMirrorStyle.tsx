import "codemirror/lib/codemirror.css";
import { createGlobalStyle } from "styled-components";
import CodeMirrorTheme from "../themes/CodeMirrorTheme";

const CodeMirrorStyle = createGlobalStyle<{ theme: CodeMirrorTheme }>`
  .cm-s-styled.CodeMirror { background: #0C1021; color: #F8F8F8; }
  .cm-s-styled div.CodeMirror-selected { background: #253B76; }
  .cm-s-styled .CodeMirror-line::selection, .cm-s-styled .CodeMirror-line > span::selection, .cm-s-styled .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }
  .cm-s-styled .CodeMirror-line::-moz-selection, .cm-s-styled .CodeMirror-line > span::-moz-selection, .cm-s-styled .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }
  .cm-s-styled .CodeMirror-gutters { background: #0C1021; border-right: 0; }
  .cm-s-styled .CodeMirror-guttermarker { color: #FBDE2D; }
  .cm-s-styled .CodeMirror-guttermarker-subtle { color: #888; }
  .cm-s-styled .CodeMirror-linenumber { color: #888; }
  .cm-s-styled .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }

  .cm-s-styled .cm-keyword { color: #FBDE2D; }
  .cm-s-styled .cm-atom { color: #D8FA3C; }
  .cm-s-styled .cm-number { color: #D8FA3C; }
  .cm-s-styled .cm-def { color: #8DA6CE; }
  .cm-s-styled .cm-variable { color: #FF6400; }
  .cm-s-styled .cm-operator { color: #FBDE2D; }
  .cm-s-styled .cm-comment { color: #AEAEAE; }
  .cm-s-styled .cm-string { color: #61CE3C; }
  .cm-s-styled .cm-string-2 { color: #61CE3C; }
  .cm-s-styled .cm-meta { color: #D8FA3C; }
  .cm-s-styled .cm-builtin { color: #8DA6CE; }
  .cm-s-styled .cm-tag { color: #8DA6CE; }
  .cm-s-styled .cm-attribute { color: #8DA6CE; }
  .cm-s-styled .cm-header { color: #FF6400; }
  .cm-s-styled .cm-hr { color: #AEAEAE; }
  .cm-s-styled .cm-link { color: #8DA6CE; }
  .cm-s-styled .cm-error { background: #9D1E15; color: #F8F8F8; }

  .cm-s-styled .CodeMirror-activeline-background { background: #3C3636; }
  .cm-s-styled .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }
`;

export default CodeMirrorStyle;
