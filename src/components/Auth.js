import { useEffect, useRef, useState } from "react";
import "./Auth.scss";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SIGN_IN, SIGN_UP } from "../graphql/mutation";
import { useHistory } from "react-router";
import Loading from "./Loading";
const Auth = () => {
  const [form, setForm] = useState("signIn");
  const [errorSignUp, setErrorSignUp] = useState("");
  const [errorSignIn, setErrorSignIn] = useState("");

  const emailEl = useRef();
  const imageEl = useRef();
  const fullnameEl = useRef();
  const passwordEl = useRef();
  const confirmPasswordEl = useRef();

  const [signUp, { data, loading: loadingSignUp }] = useMutation(SIGN_UP);
  const [signIn, { data: dataSignIn, loading: loadingSignIn }] = useLazyQuery(SIGN_IN);

  const history = useHistory();

  const onSignInHandler = (e) => {
    e.preventDefault();
    const email = emailEl.current.value;
    const password = passwordEl.current.value;
    signIn({ variables: { email, password } });
  };

  const onSignUpHandler = (e) => {
    e.preventDefault();
    const image = imageEl.current.value;
    const email = emailEl.current.value;
    const fullname = fullnameEl.current.value;
    const password = passwordEl.current.value;
    const confirmPassword = confirmPasswordEl.current.value;
    if (password === confirmPassword && /([a-z\-_0-9/:.]*\.(jpg|jpeg|png|gif))/i.test(image)) {
      signUp({
        variables: {
          object: {
            image,
            email,
            fullname,
            password,
          },
        },
      });
    } else if (password !== confirmPassword) {
      setErrorSignUp("password is not same with confirm password");
    } else if (!/([a-z\-_0-9/:.]*\.(jpg|jpeg|png|gif))/i.test(image)) {
      setErrorSignUp("image url is invalid");
    }
  };

  useEffect(() => {
    if (data?.insert_devmedia_user_one === null && !loadingSignUp) {
      setErrorSignUp("email is existed");
    } else if (data?.insert_devmedia_user_one.id) {
      localStorage.setItem("user_id", data?.insert_devmedia_user_one.id);
      history.push(`/`);
    }
  }, [data, history, loadingSignUp]);

  useEffect(() => {
    if (dataSignIn?.devmedia_user.length > 0 && !loadingSignIn) {
      localStorage.setItem("user_id", dataSignIn?.devmedia_user[0].id);
      history.push("/");
    } else if (dataSignIn?.devmedia_user.length === 0) {
      setErrorSignIn("email or password is invalid");
    }
  }, [dataSignIn, history, loadingSignIn]);

  const signInForm = (
    <>
      {errorSignIn !== "" && <p className="Auth__error">{errorSignIn}</p>}
      <form className="Auth__form" onSubmit={onSignInHandler}>
        <input className="Auth__form--input glass" placeholder="email ..." type="text" ref={emailEl} />
        <input className="Auth__form--input glass" placeholder="password" type="password" ref={passwordEl} />
        <input className="Auth__form--button glass" type="submit" placeholder="Sign In" />
        <p className="Auth__form--description">
          Don't have account{" "}
          <span className="glass" onClick={() => setForm("signUp")}>
            Sign up
          </span>
        </p>
      </form>
    </>
  );

  if (loadingSignIn || loadingSignUp) {
    return <Loading />;
  }
  const signUpForm = (
    <>
      {errorSignUp !== "" && <p className="Auth__error">{errorSignUp}</p>}
      <form className="Auth__form" onSubmit={onSignUpHandler}>
        <input ref={imageEl} className="Auth__form--input glass" placeholder="image profile" type="text" required />
        <input ref={emailEl} className="Auth__form--input glass" placeholder="email" type="email" required />
        <input ref={fullnameEl} className="Auth__form--input glass" placeholder="fullname" type="text" required />
        <input ref={passwordEl} className="Auth__form--input glass" placeholder="password" type="password" required />
        <input ref={confirmPasswordEl} className="Auth__form--input glass" placeholder="confirmPassword" type="password" />
        <input className="Auth__form--button glass" type="submit" placeholder="Sign Up" />
        <p className="Auth__form--description">
          Don't have account{" "}
          <span className="glass" onClick={() => setForm("signIn")}>
            Sign up
          </span>
        </p>
      </form>
    </>
  );

  return (
    <div className="Auth">
      <h1 className="Auth__title">{form === "signIn" ? "Sign In" : "Sign Up"}</h1>

      {form === "signIn" ? signInForm : signUpForm}
    </div>
  );
};

export default Auth;
