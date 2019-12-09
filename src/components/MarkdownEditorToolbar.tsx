import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Popover,
  TextField,
  Button
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatQuote,
  FormatSize,
  InsertPhoto,
  InsertLink,
  Highlight,
  FormatListNumbered,
  Code
} from "@material-ui/icons";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    popover: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

export interface MarkdownEditorToolbarProps {
  className?: string;
  onHeadingClick?: (level: number) => void;
  onHighlightClick?: () => void;
  onBoldClick?: () => void;
  onItalicClick?: () => void;
  onUnorderedListClick?: () => void;
  onOrderedListClick?: () => void;
  onCodeClick?: () => void;
  onQuoteClick?: () => void;
  onLinkClick?: (description: string, src: string) => void;
  onPictureClick?: (description: string, src: string) => void;
}

const MarkdownEditorToolbar: React.FC<MarkdownEditorToolbarProps> = props => {
  const classes = useStyles();

  const {
    className,
    onHeadingClick,
    onHighlightClick,
    onBoldClick,
    onItalicClick,
    onUnorderedListClick,
    onOrderedListClick,
    onCodeClick,
    onQuoteClick,
    onLinkClick,
    onPictureClick,
    ...restProps
  } = props;

  const [headingAnchorEl, setHeadingAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [linkAnchorEl, setLinkAnchorEl] = useState<HTMLElement | null>(null);
  const [pictureAnchorEl, setPictureAnchorEl] = useState<HTMLElement | null>(
    null
  );

  const [linkContent, setLinkContent] = useState({ description: "", src: "" });
  const [pictureContent, setPictureContent] = useState({
    description: "",
    src: ""
  });

  const handleHeadingPopoverOpen = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setHeadingAnchorEl(e.currentTarget);
  };

  const handleLinkPopoverOpen = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setLinkAnchorEl(e.currentTarget);
  };

  const handlePicturePopoverOpen = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setPictureAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setHeadingAnchorEl(null);
    setLinkAnchorEl(null);
    setPictureAnchorEl(null);
  };

  const handleHeadingClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    level: number
  ) => {
    handlePopoverClose();
    onHeadingClick?.(level);
  };

  return (
    <>
      <Paper
        elevation={4}
        {...restProps}
        className={`${classes.root} ${className}`}
      >
        <IconButton onMouseEnter={handleHeadingPopoverOpen}>
          <FormatSize />
        </IconButton>
        <IconButton onClick={onHighlightClick}>
          <Highlight />
        </IconButton>
        <IconButton onClick={onBoldClick}>
          <FormatBold />
        </IconButton>
        <IconButton onClick={onItalicClick}>
          <FormatItalic />
        </IconButton>
        <IconButton onClick={onUnorderedListClick}>
          <FormatListBulleted />
        </IconButton>
        <IconButton onClick={onOrderedListClick}>
          <FormatListNumbered />
        </IconButton>
        <IconButton onClick={onCodeClick}>
          <Code />
        </IconButton>
        <IconButton onClick={onQuoteClick}>
          <FormatQuote />
        </IconButton>
        <IconButton onMouseEnter={handleLinkPopoverOpen}>
          <InsertLink />
        </IconButton>
        <IconButton onMouseEnter={handlePicturePopoverOpen}>
          <InsertPhoto />
        </IconButton>
      </Paper>
      <Popover
        id="heading-popover"
        classes={{
          paper: classes.popover
        }}
        open={headingAnchorEl ? true : false}
        anchorEl={headingAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
      >
        <IconButton onClick={e => handleHeadingClick(e, 1)}>H1</IconButton>
        <IconButton onClick={e => handleHeadingClick(e, 2)}>H2</IconButton>
        <IconButton onClick={e => handleHeadingClick(e, 3)}>H3</IconButton>
        <IconButton onClick={e => handleHeadingClick(e, 4)}>H4</IconButton>
        <IconButton onClick={e => handleHeadingClick(e, 5)}>H5</IconButton>
        <IconButton onClick={e => handleHeadingClick(e, 6)}>H6</IconButton>
      </Popover>
      <Popover
        id="link-popover"
        classes={{
          paper: classes.popover
        }}
        open={linkAnchorEl ? true : false}
        anchorEl={linkAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
      >
        <TextField
          id="link-description"
          label="描述"
          value={linkContent.description}
          onChange={e =>
            setLinkContent({ ...linkContent, description: e.target.value })
          }
        />
        <TextField
          id="link-source"
          required
          label="链接"
          value={linkContent.src}
          onChange={e =>
            setLinkContent({ ...linkContent, src: e.target.value })
          }
        />
        <Button
          onClick={() => {
            onLinkClick?.(linkContent.description, linkContent.src);
            handlePopoverClose();
            setLinkContent({ description: "", src: "" });
          }}
        >
          插入
        </Button>
      </Popover>
      <Popover
        id="picture-popover"
        classes={{
          paper: classes.popover
        }}
        open={pictureAnchorEl ? true : false}
        anchorEl={pictureAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
      >
        <TextField
          id="picture-description"
          label="描述"
          value={pictureContent.description}
          onChange={e =>
            setPictureContent({
              ...pictureContent,
              description: e.target.value
            })
          }
        />
        <TextField
          id="picture-source"
          required
          label="链接"
          value={pictureContent.src}
          onChange={e =>
            setPictureContent({ ...pictureContent, src: e.target.value })
          }
        />
        <Button
          onClick={() => {
            onPictureClick?.(pictureContent.description, pictureContent.src);
            handlePopoverClose();
            setPictureContent({ description: "", src: "" });
          }}
        >
          插入
        </Button>
      </Popover>
    </>
  );
};

export default MarkdownEditorToolbar;
