import React, { useState } from "react";
import { IconButton, Popover, Chip, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { InsertEmoticon } from "@material-ui/icons";

const emojis = ["👍", "👎", "😄", "🎉", "😕", "❤️", "🚀", "👀"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    }
  })
);

const EmojiSelector = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
        <Chip variant="outlined" clickable label="👍 233" />
        <Chip variant="outlined" clickable label="😄 3" />
        <IconButton onClick={handleClick}>
          <InsertEmoticon />
        </IconButton>
      </div>
      <Popover
        open={anchorEl ? true : false}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
      >
        {emojis.map(emoji => (
          <IconButton key={emoji} style={{ margin: 4 }}>
            {emoji}
          </IconButton>
        ))}
      </Popover>
    </>
  );
};

export default EmojiSelector;
