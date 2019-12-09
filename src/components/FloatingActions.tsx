import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { Edit } from "@material-ui/icons";

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
    hFlex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(0.5)
      },
      marginRight: -theme.spacing(8)
    }
  })
);

export interface FloatingActionsProps {
  threshold?: number;
  onEditButtonClick?: () => void;
}

const FloatingActions: React.FC<FloatingActionsProps> = props => {
  const classes = useStyles();

  const { onEditButtonClick } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold ?? 0
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <div className={classes.hFlex}>
        {onEditButtonClick && (
          <Fab
            onClick={onEditButtonClick}
            color="primary"
            size="small"
            aria-label="new post"
          >
            <Edit />
          </Fab>
        )}
        <Zoom in={trigger}>
          <Fab
            onClick={handleClick}
            color="secondary"
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </div>
    </Container>
  );
};

export default FloatingActions;
