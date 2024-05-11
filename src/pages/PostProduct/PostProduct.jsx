import React, { useState } from "react";
import "./PostProduct.css";
import Button from "../../components/Button/Button";
import { Form } from "react-router-dom";
import Input from "../../components/Input/Input";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import InsertPhoto from "../../assets/insert-photo.png";

const PostProduct = () => {
  const [productType, setProductType] = useState("Shoes");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  //   const handleUpload = () => {
  //     setSelectedImage(null);
  //   };
  const postProductForm = [
    {
      id: "product_name",
      name: "product_name",
      label: "Product Name",
    },
    {
      id: "brand_name",
      name: "brand_name",
      label: "Brand Name",
    },
    {
      id: "category",
      name: "category",
      label: "Category",
    },
    {
      id: "gender",
      name: "gender",
      label: "Gender",
    },
    {
      id: "size",
      name: "size",
      label: "Size",
    },
    {
      id: "description",
      name: "description",
      label: "Description",
    },
    {
      id: "price",
      name: "price",
      label: "Price",
    },
    {
      id: "discount",
      name: "discount",
      label: "Discount (If Any)",
    },
  ];
  function handleProductTypeChange(event) {
    setProductType(event.target.value);
  }
  return (
    <>
      <Form className="postProductForm loginForm" method="post">
        <h1 className="text-center mb-3 welcome">Post A Product</h1>

        <div className="selectProduct">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Product Type:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={productType}
              onChange={handleProductTypeChange}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Shoes"
                control={<Radio />}
                label="Shoes"
              />
              <FormControlLabel
                value="Clothes"
                control={<Radio />}
                label="Clothes"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="row mt-4">
          {postProductForm.map((product) => (
            <div className="col-12 col-md-6" key={product.id}>
              <Input
                type={product.type}
                key={product.id}
                id={product.id}
                name={product.name}
                label={product.label}
              />
            </div>
          ))}
          <div className="col-12">
            <div className="upload-file-wrapper text-center">
              <input type="file" onChange={handleImageChange} />
              <div>
                <img src={InsertPhoto} alt="Insert" />
              </div>
              <div className="ul-img-head">UPLOAD IMAGE</div>
              <div className="ul-img-head">You can upload multiple images</div>
            </div>
            {/* <button onClick={handleUpload}>Upload</button> */}

            {selectedImage && (
              <div className="row">
                <div className="col-md-3 productPostThumbnails">
                  <label name="0" className="pp-edit material-icons">
                    <CloseIcon />
                  </label>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <Button className="loginBtn postProductBtn d-flex justify-content-center">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default PostProduct;
// export async function action() {
//   const data = await request.formData();
//   const response = await fetch("", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(),
//   });
// }
