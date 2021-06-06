import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light">Email Id</label>
            <input className="form-control" type="password" />
          </div>

          <button className="btn btn-success btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
