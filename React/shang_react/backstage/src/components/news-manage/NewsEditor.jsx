import { convertToRaw, EditorState, ContentState } from "draft-js";
import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";

export default function NewsEditor(props) {
  useEffect(() => {
    // console.log(props.content);
    //html====>draft
    const html = props.content;
    if (html === undefined) return;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      seteditorState(editorState);
    }
  }, [props.content]);
  const [editorState, seteditorState] = useState("");
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={(editorState) => seteditorState(editorState)}
        onBlur={() => {
          /*  console.log(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
          ); */
          props.getContent(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
          );
        }}
      />
    </div>
  );
}
