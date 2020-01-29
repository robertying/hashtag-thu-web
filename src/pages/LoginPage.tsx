import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { NavigationParams } from "../types/NavigationParams";
import {
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Avatar,
  Snackbar
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import logo from "../assets/logo.png";
import background from "../assets/background.png";
import { animated, useSpring } from "react-spring";
import axios from "axios";
import {
  validateEmail,
  validateUsername,
  validatePassword
} from "../helpers/validate";

declare const grecaptcha: any;

const AnimatedPaper = animated(Paper);

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${background})`,
      backgroundRepeat: "repeat"
    },
    paper: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: "auto",
      padding: 24,
      maxWidth: "15vw",
      maxHeight: "65vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(2)
      },
      willChange: "transform, opacity",
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden"
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      "& > *": {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      }
    }
  })
);

export interface LoginPageProps extends RouteComponentProps<NavigationParams> {}

interface FormState {
  email: string;
  username: string;
  password: string;
  showPassword: boolean;
}

const LoginPage: React.FC<LoginPageProps> = props => {
  const classes = useStyles();

  const [values, setValues] = React.useState<FormState>({
    email: "",
    username: "",
    password: "",
    showPassword: false
  });

  const handleChange = (prop: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!values.email || !values.password || !values.username) {
      setMessage("请完整填写所有信息");
      return;
    }

    if (!validateEmail(values.email)) {
      setMessage("请输入正确的非清华邮箱");
      return;
    }

    if (!validateUsername(values.username)) {
      setMessage("请设置满足要求的用户名");
      return;
    }

    if (!validatePassword(values.password)) {
      setMessage("请设置满足要求的密码");
      return;
    }

    const recaptchaToken = grecaptcha.getResponse();
    if (!recaptchaToken) {
      setMessage("请通过 reCAPTCHA 验证");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/users", {
        ...values,
        recaptcha: recaptchaToken
      });
      setRegister(false);
      setMessage("注册成功！");
    } catch (err) {
      setMessage(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const [message, setMessage] = useState("");

  const [register, setRegister] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: register ? 0 : 1,
    transform: `rotateY(${register ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleFlip = () => {
    setRegister(register => !register);
    setValues({
      email: values.email,
      username: values.username,
      password: "",
      showPassword: false
    });
  };

  return (
    <div className={classes.root}>
      <AnimatedPaper
        className={classes.paper}
        style={{
          opacity,
          transform
        }}
        component="form"
        elevation={8}
      >
        <Avatar src={logo} />
        <TextField
          label="邮箱"
          type="email"
          autoFocus
          autoComplete="username"
          fullWidth
          value={values.email}
          onChange={handleChange("email")}
        />
        <TextField
          label="密码"
          autoComplete="current-password"
          type={values.showPassword ? "text" : "password"}
          fullWidth
          value={values.password}
          onChange={handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <div className={classes.buttons}>
          <Button onClick={handleFlip}>注册</Button>
          <Button color="primary" variant="contained">
            登录
          </Button>
        </div>
      </AnimatedPaper>
      <AnimatedPaper
        className={classes.paper}
        style={{
          opacity: opacity.interpolate(o => 1 - (o as number)),
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
        component="form"
        elevation={8}
      >
        <Avatar src={logo} />
        <TextField
          label="邮箱"
          helperText="非清华邮箱"
          type="email"
          autoFocus
          fullWidth
          value={values.email}
          onChange={handleChange("email")}
        />
        <TextField
          label="用户名"
          helperText="仅包含英文字母与阿拉伯数字"
          type="username"
          fullWidth
          value={values.username}
          onChange={handleChange("username")}
        />
        <TextField
          label="密码"
          helperText="长度至少为 16，需包含大小写字母、数字及特殊符号"
          autoComplete="new-password"
          type={values.showPassword ? "text" : "password"}
          fullWidth
          value={values.password}
          onChange={handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <div
          style={{ zIndex: -1 }}
          className="g-recaptcha"
          data-sitekey="6LdMsckUAAAAAIf-xzue4XkZQPVPne1EZSeXyVm1"
        ></div>
        <br />
        <div className={classes.buttons}>
          <Button onClick={() => setRegister(!register)}>返回登录</Button>
          <Button
            color="primary"
            variant="contained"
            disabled={loading}
            onClick={handleRegister}
          >
            注册
          </Button>
        </div>
      </AnimatedPaper>
      <Snackbar
        open={message ? true : false}
        autoHideDuration={3000}
        onClose={() => setMessage("")}
        message={<span>{message}</span>}
      />
    </div>
  );
};

export default LoginPage;
