import React, { useRef, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CodeMirror from "codemirror";
import CodeMirrorStyle from "./CodeMirrorStyle";
import CodeMirrorTheme from "../themes/CodeMirrorTheme";

type ChangeFunc = (text: string) => void;

interface CodeMirrorEditorProps {
  theme?: CodeMirrorTheme;
  width?: any;
  height?: any;
  mode?: string;
  onChange?: ChangeFunc;
}

const TextArea = styled.textarea`
  display: none;
`;

const CodeMirrorEditor = ({
  theme = {},
  width,
  height,
  mode = "markdown",
  onChange,
}: CodeMirrorEditorProps) => {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const [codeMirror, setCodeMirror] = useState<CodeMirror.EditorFromTextArea>();

  useEffect(() => {
    const codeMirror = CodeMirror.fromTextArea(
      textArea.current as HTMLTextAreaElement,
      {
        mode,
        theme: "styled",
        lineNumbers: true,
      }
    );

    codeMirror.on("change", (editor) => {
      onChange?.(editor.getValue());
    });

    setCodeMirror(codeMirror);

    return () => {
      codeMirror.toTextArea();
    };
  }, [mode, onChange]);

  useEffect(() => {
    codeMirror?.setSize(width, height);
  }, [codeMirror, width, height]);

  return (
    <ThemeProvider theme={theme}>
      <TextArea ref={textArea}></TextArea>
      <CodeMirrorStyle />
    </ThemeProvider>
  );
};

export default CodeMirrorEditor;
