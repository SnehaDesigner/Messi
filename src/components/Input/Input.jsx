import { TextField } from "@mui/material";
import React from "react";
import "./Input.css";

const Input = ({ label, type, name, id }) => {
  return (
    <>
      <div className="customInput">
        <TextField
          id={`outlined-basic ${id}`}
          type={type ?? "text"}
          name={name}
          label={label}
          variant="outlined"
        />
      </div>
    </>
  );
};

export default Input;
