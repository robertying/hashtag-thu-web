import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardHeader,
  Avatar
} from "@material-ui/core";
import { CardProps } from "@material-ui/core/Card";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    hFlex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    smallPadding: {
      padding: theme.spacing(0.5)
    },
    card: {
      margin: theme.spacing(1)
    }
  })
);

export interface CommentCardProps extends Omit<CardProps, "onClick"> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  avatar: string;
  username: string;
}

const CommentCard: React.FC<CommentCardProps> = props => {
  const classes = useStyles();

  const { onClick, avatar, username, className, ...restProps } = props;

  return (
    <CardActionArea onClick={onClick}>
      <Card
        elevation={0}
        {...restProps}
        className={`${classes.smallPadding} ${classes.card} ${className}`}
      >
        <CardHeader
          className={classes.smallPadding}
          avatar={<Avatar style={{ width: 20, height: 20 }} src={avatar} />}
          title={username}
        />

        <div className={classes.hFlex}>
          <CardContent
            className={classes.smallPadding}
            style={{ paddingBottom: 0 }}
          >
            <Typography gutterBottom variant="body2">
              我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。
            </Typography>
            <Typography variant="caption" color="textSecondary">
              3 天前
            </Typography>
          </CardContent>
        </div>
      </Card>
    </CardActionArea>
  );
};

export default CommentCard;
