import React, { useEffect } from "react";
import $ from "jquery";
import { Statusdiv } from "./elements/status";
import styled from "styled-components";
const StatusModal = (orders) => {
  const { order } = orders;
  console.log(order);
  const one = document.getElementById("1");
  const two = document.getElementById("2");
  const three = document.getElementById("3");
  const four = document.getElementById("4");
  const five = document.getElementById("5");
  const statusupdate = () => {
    if (order === "Processing") {
      one.classList.add("active");
    } else if (order === "Shipped") {
      one.classList.add("active");
      two.classList.add("active");
    } else if (order === "Shipped") {
      one.classList.add("active");
      two.classList.add("active");
      three.classList.add("active");
    } else if (order === "On-the-way") {
      one.classList.add("active");
      two.classList.add("active");
      three.classList.add("active");
      four.classList.add("active");
    } else if (order === "Delivered") {
      one.classList.add("active");
      two.classList.add("active");
      three.classList.add("active");
      four.classList.add("active");
      five.classList.add("active");
    }
  };

  statusupdate();

  const close = () => {
    document.getElementById("main").style.display = "none";
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    $("#con").css("filter", "none");
  };
  return (
    // <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //   <div className="modal-dialog" role="document">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title text-center" id="exampleModalLabel">Status</h5>
    //       </div>
    //       <div className="modal-body">
    //         <div className="StausBarBg bg-primary p-2 rounded" style={mystyle}>
    //           <div className="StatusBarFg bg-warning p-1 text-white
    //            rounded " >
    //            <span id="OrderStatus" ></span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal} >Close</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Statusdiv id="main" className="container  px-1 px-md-4 py-5 mx-auto">
      <div className="card">
        <li id="bl" className="list-group-item ">
          <button className="" onClick={close}>
            &times;
          </button>
        </li>
        <div className="row d-flex justify-content-between px-3 top">
          <div className="d-flex">
            <h5>
              ORDER ID:{" "}
              <span id="id" class="text-info font-weight-bold">
                {}
              </span>
            </h5>
          </div>
          <div className="d-flex flex-column text-sm-right">
            <p className="mb-0">
              Expected Arrival <span>01/06/20</span>
            </p>
          </div>
        </div>
        <div className="row  justify-content-center ">
          <div className="col-12">
            <ul id="progressbar" class="text-center">
              <li id="1" className="step0"></li>
              <li id="2" className="step0"></li>
              <li id="3" className="step0"></li>
              <li id="4" className="step0"></li>
              <li id="5" className="step0"></li>
            </ul>
          </div>
        </div>
        <div className="row  justify-content-center ">
          <div className="col-12">
            <ul id="status" className="text-center">
              <li className="">
                Accepted <i class="fas fa-check-square"></i>
              </li>
              <li className="">
                Processing <i class="fas fa-people-carry"></i>
              </li>
              <li className="">
                Shipped <i class="fas fa-shipping-fast"></i>
              </li>
              <li className="">
                On-the-way <i class="fas fa-truck"></i>
              </li>
              <li className="">
                Delivered <i class="fas fa-home"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Statusdiv>
  );
};

export default StatusModal;
