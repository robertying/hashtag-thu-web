import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { People, BubbleChart } from "@material-ui/icons";
import { PaperProps } from "@material-ui/core/Paper";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: 200,
      padding: 8,
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    hFlex: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "50%",
      alignSelf: "center"
    }
  })
);

export interface HashtagSideBarProps extends PaperProps {}

const HashtagSideBar: React.FC<HashtagSideBarProps> = props => {
  const classes = useStyles();

  const { className, ...restProps } = props;

  return (
    <Paper {...restProps} className={`${classes.root} ${className}`}>
      <Typography variant="h5" gutterBottom>
        #选课
      </Typography>
      <Typography variant="caption" gutterBottom>
        我可以吞下玻璃而不伤身体。我可以吞下玻璃而不伤身体。我可以吞下玻璃而不伤身体。我可以吞下玻璃而不伤身体。我可以吞下玻璃而不伤身体。
      </Typography>
      <div className={classes.hFlex}>
        <People /> 2333
      </div>
      <div className={classes.hFlex}>
        <BubbleChart /> 251
      </div>
      <Button style={{ marginTop: 8 }} color="primary" variant="contained">
        关注
      </Button>
    </Paper>
  );
};

export default HashtagSideBar;
