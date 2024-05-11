import React from "react";
import "./Register.css";
import Input from "../../components/Input/Input";
import { Form, Link, json, redirect, useActionData } from "react-router-dom";
import Button from "../../components/Button/Button";
// import { serverLink } from "../../Server/Link";
// import {
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
// } from "@mui/material";

const Register = () => {
  // const data = useActionData();
  // const [userType, setUserType] = useState("Buyer");
  const userForm = [
    {
      id: "first_name",
      name: "first_name",
      label: "First Name",
    },
    {
      id: "last_name",
      name: "last_name",
      label: "Last Name",
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      type: "email",
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      id: "phone_number",
      name: "phone_number",
      label: "Phone Number",
      type: "number",
    },
    {
      id: "street_address",
      name: "street_address",
      label: "Street Address",
    },
    {
      id: "country",
      name: "country",
      label: "Country",
    },
    {
      id: "state",
      name: "state",
      label: "State",
    },
    {
      id: "city",
      name: "city",
      label: "City",
    },
    {
      id: "postal_code",
      name: "postal_code",
      label: "Postal Code",
    },
  ];
  // if (userType === "Seller") {
  //   userForm.push(
  //     {
  //       id: "company_name",
  //       name: "company_name",
  //       label: "Company Name",
  //     },
  //     {
  //       id: "brands_name",
  //       name: "brands_name",
  //       label: "Brands Name",
  //     },
  //     {
  //       id: "product_category",
  //       name: "product_category",
  //       label: "Product Category",
  //     }
  //   );
  // }
  // function handleUserTypeChange(event) {
  //   setUserType(event.target.value);
  // }
  return (
    <>
      <Form className="registerForm loginForm" method="post">
        <h1 className="text-left mb-4 welcome">Register</h1>
        {/* {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>} */}
        {/* <div className="selectUser">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">I am a</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={userType}
              onChange={handleUserTypeChange}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Buyer"
                control={<Radio />}
                label="Buyer"
              />
              <FormControlLabel
                value="Seller"
                control={<Radio />}
                label="Seller"
              />
            </RadioGroup>
          </FormControl>
        </div> */}
        <div className="row mt-4">
          {userForm.map((buyer) => (
            <div className="col-12 col-md-6" key={buyer.id}>
              <Input
                type={buyer.type}
                key={buyer.id}
                id={buyer.id}
                name={buyer.name}
                label={buyer.label}
              />
            </div>
          ))}
        </div>
        <Button className="loginBtn registerBtn d-flex justify-content-center">
          Register
        </Button>
        <div className="d-flex align-items-center mt-3 new justify-content-center">
          <p>Already had an account?</p>
          <p className="acc">
            <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default Register;

// export async function action({ request }) {
//   const formData = await request.formData();
//   const regData = {
//     user: {
//       first_name: formData.get("first_name"),
//       last_name: formData.get("last_name"),
//       email: formData.get("email"),
//       password: formData.get("password"),
//       phone_number: formData.get("phone_number"),
//     },
//   };
//   const response = await fetch(
//     "https://2739-103-81-237-73.ngrok-free.app/signup",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(regData),
//     }
//   );
//   if (!response.ok) {
//     throw json({ message: "User Not Valid" });
//   }
//   debugger;
//   const token = await response.headers.get("Authorization");
//   localStorage.setItem("regToken", token);
//   return redirect("/");
// }
