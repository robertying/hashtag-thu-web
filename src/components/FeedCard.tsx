import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Menu,
  MenuItem
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

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleMoreClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card {...restProps}>
        <CardActionArea onClick={onClick}>
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
              <IconButton
                onClick={handleMoreClick}
                onMouseDown={e => e.stopPropagation()}
              >
                <MoreHoriz />
              </IconButton>
            }
          />

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
              image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='200' viewBox='0 0 500 200' preserveAspectRatio='none'%3E%3Crect width='500' height='200' style='' fill='%23eee'/%3E%3Ctext text-anchor='middle' x='250' y='100' style='fill:%23aaa;font-weight:bold;font-size:31px;font-family:Arial,Helvetica,sans-serif;dominant-baseline:central'%3E500x200%3C/text%3E%3C/svg%3E"
            />
          </div>
        </CardActionArea>
      </Card>
      <Menu
        open={anchorEl ? true : false}
        anchorEl={anchorEl}
        onClose={handleMoreClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
      >
        <MenuItem onClick={handleMoreClose}>Profile</MenuItem>
        <MenuItem onClick={handleMoreClose}>My account</MenuItem>
        <MenuItem onClick={handleMoreClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default FeedCard;
