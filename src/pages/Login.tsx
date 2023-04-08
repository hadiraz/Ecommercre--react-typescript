import React, {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";
import "../css/signUp.css";
import checkValues, { Errors } from "../utils/checkValues";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import createToast from "../utils/toastCreator";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ADD_PROFILE, selectProfile } from "../redux/reducers/profileReducer";
export type InputLogin = {
  email: string;
  password: string;
};
function Login() {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [input, setInput] = useState<InputLogin>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const checkErrors = checkValues(undefined, input);
    setErrors(checkErrors);
  }, [input]);
  useEffect(()=>{
    if(profile.userName) navigation("/profile")
  },[])
  const changeValues = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    setInput({
      ...input,
      [inputName]: e.target.value,
    });
  };
  const handleTestAccount = () => {
    dispatch(ADD_PROFILE({ userName: "test", password: "testPass" }));
    console.log(profile.userName);
    navigation("/profile");
  };
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    const checkErrors = checkValues(undefined, input);
    setErrors(checkErrors);
    const errorLength = Object.keys(errors).length;
    if (errorLength > 0) {
      setFocused({
        email: true,
        password: true,
      });
      createToast("check username or password", "error");
    } else {
      createToast("Logged in successfully !", "success");
    }
  };

  const focusHandler = (e: FocusEvent<HTMLInputElement, HTMLInputElement>) => {
    const name = e.target.name;
    setFocused({
      ...focused,
      [name]: true,
    });
  };
  return (
    <section className="form-container login">
      <h1 className="form-title">Login</h1>
      <form onSubmit={submitForm}>
        <div
          className={`input-box ${
            errors.email && focused.email ? "error" : "success"
          }`}
        >
          <label htmlFor="email-input">email</label>
          <input
            value={input.email}
            onChange={changeValues}
            id="email-input"
            name="email"
            onFocus={focusHandler}
          />
          {errors.email && focused.email && (
            <span className="error-box">{errors.email}</span>
          )}
        </div>
        <div
          className={`input-box ${
            errors.password && focused.password ? "error" : "success"
          }`}
        >
          <label htmlFor="pass-input">password</label>
          <input
            value={input.password}
            onChange={changeValues}
            id="pass-input"
            name="password"
            onFocus={focusHandler}
          />
          {errors.password && focused.password && (
            <span className="error-box">{errors.password}</span>
          )}
        </div>
        <div className="button-container">
          <button
            type="button"
            className="submit-btn bg-custom-none items-center justify-center"
          >
            <Link
              className="flex w-full h-full items-center justify-center"
              to="/signup"
            >
              Sign up
            </Link>
          </button>
          <button type="submit" className="submit-btn">
            Login
          </button>
          <button
            onClick={handleTestAccount}
            type="button"
            className="submit-btn !bg-yellow"
          >
            Test account!
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Login;
