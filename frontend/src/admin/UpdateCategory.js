import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { getCategory, updateCategory } from "./helper/adminapicall";

const UpdateCategory = ({ match }) => {
  const { user, token } = isAuthenticated();
  const [name, setName] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      // console.log(data);
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName(data.name);
      }
    });
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);
  const handleChange = (event) => {
    console.log(event);
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend req.
    console.log(name);
    updateCategory(match.params.categoryId, user._id, token, { name }).then(
      (data) => {
        if (data.error) {
          setError(true);
          console.log(error);
        } else {
          setError("");
          setSuccess(true);
          setName("");
        }
      }
    );
  };
  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: success ? " " : "none" }}
    >
      <h4>{name} updated successfully</h4>
    </div>
  );
  const errorMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: error ? " " : "none" }}
    >
      <h4>{name} updatation Failed</h4>
    </div>
  );
  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the Category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Create Category
        </button>
      </div>
    </form>
  );
  return (
    <div>
      <Base
        title="Create a cateogry here"
        description="Add a new category for new tshirts"
        className="container bg-info p-4"
      >
        <div className="row bg-white rounded">
          <div className="col-md-8 offset-md-2">
            {successMessage()}
            {errorMessage()}
            {myCategoryForm()}
          </div>
        </div>
      </Base>
    </div>
  );
};

export default UpdateCategory;
