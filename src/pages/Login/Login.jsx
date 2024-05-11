import React from "react";
import "./Login.css";
import {
  Form,
  Link,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
// import { serverLink } from "../../Server/Link";

const Login = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <Form method="post" className="loginForm">
        <h1 className="text-left mb-2 welcome">Welcome back</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <div className="d-flex align-items-center mb-2 new">
          <p>New to Messi?</p>
          <p className="acc">
            <a href="/register">Create an account.</a>
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <Input email name="email" label="Email Address" />
          </div>
          <div className="col-12">
            <Input password name="password" label="Password" />
          </div>
        </div>
        <div className="d-flex loginActBox justify-content-between align-items-center">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
          </FormGroup>
          <Link to="/">Forgot Password?</Link>
        </div>
        <Button className="loginBtn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Login"}
        </Button>
      </Form>
    </>
  );
};

export default Login;
export async function action({ request }) {
  const data = await request.formData();
  const loginData = {
    user: {
      email: data.get("email"),
      password: data.get("password"),
    },
  };
  const response = await fetch(
    "https://2739-103-81-237-73.ngrok-free.app/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    }
  );
  if (!response.ok) {
    throw json({ message: "User Not Valid" });
  }
  debugger;
  const token = await response.headers.get("Authorization");
  localStorage.setItem("token", token);
  return redirect("/");
}
