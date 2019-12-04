import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 8px",
      display: "flex",
      alignItems: "center",
      width: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

export interface SearchBarProps extends PaperProps {}

const SearchBar: React.FC<SearchBarProps> = props => {
  const classes = useStyles();

  const { className, ...restProps } = props;

  return (
    <Paper {...restProps} className={`${classes.root} ${className}`}>
      <InputBase
        className={classes.input}
        placeholder="搜索 #"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
