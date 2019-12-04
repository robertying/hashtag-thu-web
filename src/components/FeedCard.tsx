import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardHeader,
  Avatar,
  IconButton
} from "@material-ui/core";
import { CardProps } from "@material-ui/core/Card";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles(theme =>
  createStyles({
    hFlex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }
  })
);

export interface FeedCardProps extends Omit<CardProps, "onClick"> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  hashtag?: string;
  avatar: string;
  username: string;
  status?: string;
}

const FeedCard: React.FC<FeedCardProps> = props => {
  const classes = useStyles();

  const { onClick, hashtag, avatar, username, status, ...restProps } = props;

  return (
    <Card {...restProps}>
      {hashtag && (
        <Typography
          style={{ padding: 16, paddingBottom: 0 }}
          variant="subtitle1"
        >
          {hashtag}
        </Typography>
      )}
      <CardHeader
        style={{
          paddingBottom: 4
        }}
        avatar={<Avatar src={avatar} />}
        title={username}
        subheader={status}
        action={
          <IconButton>
            <MoreHoriz />
          </IconButton>
        }
      />
      <CardActionArea onClick={onClick}>
        <div className={classes.hFlex}>
          <CardContent>
            <Typography gutterBottom variant="h6">
              电电小班应不应该选？
            </Typography>
            <Typography gutterBottom variant="body1">
              我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。
            </Typography>
            <Typography variant="caption" color="textSecondary">
              3 天前
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            style={{
              maxWidth: "32%",
              height: 96,
              borderRadius: 8,
              marginRight: 16
            }}
            image="https://picsum.photos/500/500"
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default FeedCard;
