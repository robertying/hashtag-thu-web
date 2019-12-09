import React from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  CardHeader,
  Avatar,
  IconButton,
  Button
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Share, Favorite, Comment } from "@material-ui/icons";
import Article from "./Article";
import EmojiSelector from "./EmojiSelector";
import { CardProps } from "@material-ui/core/Card";

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1)
    }
  })
);

export interface PostArticleProps extends CardProps {
  onCommentButtonClick?: () => void;
}

const PostArticle: React.FC<PostArticleProps> = props => {
  const classes = useStyles();

  const { onCommentButtonClick, ...restProps } = props;
  return (
    <Card {...restProps}>
      <CardHeader
        avatar={
          <Avatar src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Crect width='100' height='100' style='' fill='%23eee'/%3E%3Ctext text-anchor='middle' x='50' y='50' style='fill:%23aaa;font-weight:bold;font-size:12px;font-family:Arial,Helvetica,sans-serif;dominant-baseline:central'%3E100x100%3C/text%3E%3C/svg%3E" />
        }
        title="robertying"
        subheader="苦逼申请中……"
      />
      <CardContent style={{ paddingLeft: 24, paddingRight: 24 }}>
        <Typography gutterBottom variant="h6">
          电电小班应不应该选？
        </Typography>
        <Article>
          {`ABabcde\n我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。\n我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。我能吞下玻璃而不伤身体。
    `}
        </Article>
        <Typography variant="caption">编辑于 3 天前</Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          {onCommentButtonClick && (
            <Button
              className={classes.button}
              startIcon={<Comment color="action" />}
              onClick={onCommentButtonClick}
            >
              251
            </Button>
          )}
          <EmojiSelector />
        </div>
        <div>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default PostArticle;
