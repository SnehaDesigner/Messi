import React from "react";
import "./BreadCrumb.css";
import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";

const BreadCrumb = ({ paths }) => {
  return (
    <>
      <section className="breadCrumb">
        <div className="container">
          <nav>
            <ol className="breadCrumbShop">
              {paths.map((path, index) => (
                <ListItem key={index} className="breadcrumb-item">
                  {index !== paths.length - 1 ? (
                    <Link to={path.url}>{path.label}</Link>
                  ) : (
                    <span>{path.label}</span>
                  )}
                </ListItem>
              ))}
            </ol>
          </nav>
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
