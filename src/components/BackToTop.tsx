import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "flex-end"
    },
    fab: {
      marginRight: -theme.spacing(8)
    }
  })
);

export interface BackToTopProps {
  threshold?: number;
}

const BackToTop: React.FC<BackToTopProps> = props => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold ?? 0
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Zoom in={trigger}>
        <Fab
          className={classes.fab}
          onClick={handleClick}
          color="secondary"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Container>
  );
};

export default BackToTop;
