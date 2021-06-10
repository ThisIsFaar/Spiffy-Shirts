import React from 'react';
import $ from 'jquery';
const StatusModal = () => {
  const mystyle = {
      height: "50px"
    };
    const closeModal = () => {
    $('#exampleModal').removeClass('show')
    $('.modal').css('display', 'none')
    }
  return ( 
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="exampleModalLabel">Status</h5>
          </div>
          <div className="modal-body">
            <div className="StausBarBg bg-primary p-2 rounded" style={mystyle}>
              <div className="StatusBarFg bg-warning p-1 text-white
               rounded " >
               <span id="OrderStatus" ></span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal} >Close</button>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default StatusModal;