import React, { useState, useEffect, useRef, useMemo } from "react";
import { Tabs, Tab, Fade } from "@material-ui/core";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import MarkdownEditorToolbar from "./MarkdownEditorToolbar";
import md2wx from "md2wx";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column"
    },
    textarea: {
      resize: "none",
      border: "none",
      overflow: "auto",
      outline: "none",
      boxShadow: "none",
      flex: 1,
      padding: "48px 48px 96px",
      lineHeight: 1.5
    },
    toolbar: {
      position: "fixed",
      left: "50%",
      transform: "translate(-50%, 0)",
      bottom: theme.spacing(2)
    }
  })
);

const SpacedTabs = withStyles({
  centered: {
    justifyContent: "space-evenly"
  }
})(Tabs);

export interface MarkdownEditorProps {
  className?: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = props => {
  const classes = useStyles();

  const { className } = props;

  const [selectedTab, setSelectedTab] = useState("edit");

  const handleTabChange = (e: any, value: string) => {
    setSelectedTab(value);
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState("");

  const handleTextChange: React.TextareaHTMLAttributes<
    HTMLTextAreaElement
  >["onChange"] = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      if (textarea.selectionEnd === text.length) {
        textarea.scrollTop = textarea.scrollHeight;
      }
    }
  }, [text, textareaRef]);

  const wrap = (startText: string, endText: string, withBreak?: boolean) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;

      if (withBreak) {
        setText(
          text.substring(0, startPos) +
            (startPos === endPos ? "\n" : "") +
            startText +
            text.substring(startPos, endPos) +
            endText +
            (startPos === endPos ? "" : "\n") +
            text.substring(endPos, text.length)
        );
      } else {
        setText(
          text.substring(0, startPos) +
            startText +
            text.substring(startPos, endPos) +
            endText +
            text.substring(endPos, text.length)
        );
      }
    }
  };

  const insertAtNewline = (str: string) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;

      setText(
        text.substring(0, startPos) +
          str +
          text.substring(startPos, endPos).replace(/\r?\n|\r/g, `\n${str}`) +
          text.substring(endPos, text.length)
      );
    }
  };

  const handleHeadingClick = (level: number) => {
    wrap(`${[...Array(level)].map(() => "#").join("")} `, "", true);
  };

  const handleHighlightClick = () => {
    wrap("`", "`");
  };

  const handleBoldClick = () => {
    wrap("**", "**");
  };

  const handleItalicClick = () => {
    wrap("_", "_");
  };

  const handleUnOrderedListClick = () => {
    insertAtNewline("- ");
  };

  const handleOrderedListClick = () => {
    insertAtNewline("1. ");
  };

  const handleCodeClick = () => {
    wrap("```\n", "\n```\n");
  };

  const handleQuoteClick = () => {
    insertAtNewline("> ");
  };

  const handleLinkClick = (description: string, src: string) => {
    wrap(`[${description}](${src})`, "");
  };

  const handlePictureClick = (description: string, src: string) => {
    wrap(`\n![${description}](${src})`, "\n");
  };

  const renderedHtml = useMemo(() => md2wx.renderHtml(text, true), [text]);

  return (
    <div className={`${classes.root} ${className}`}>
      <SpacedTabs
        centered
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
        aria-label="markdown edit or preview"
      >
        <Tab label="编辑" value="edit" />
        <Tab label="预览" value="preview" />
      </SpacedTabs>
      {selectedTab === "edit" && (
        <textarea
          ref={textareaRef}
          className={classes.textarea}
          autoCapitalize="sentences"
          autoFocus
          spellCheck
          value={text}
          onChange={handleTextChange}
        />
      )}
      {selectedTab === "preview" && (
        <div
          dangerouslySetInnerHTML={{
            __html: renderedHtml
          }}
        />
      )}
      <Fade in={selectedTab === "edit"}>
        <MarkdownEditorToolbar
          className={classes.toolbar}
          onHeadingClick={handleHeadingClick}
          onHighlightClick={handleHighlightClick}
          onBoldClick={handleBoldClick}
          onItalicClick={handleItalicClick}
          onUnorderedListClick={handleUnOrderedListClick}
          onOrderedListClick={handleOrderedListClick}
          onCodeClick={handleCodeClick}
          onQuoteClick={handleQuoteClick}
          onLinkClick={handleLinkClick}
          onPictureClick={handlePictureClick}
        />
      </Fade>
    </div>
  );
};

export default MarkdownEditor;
