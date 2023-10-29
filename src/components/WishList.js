import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default (props)=>{
    return (
    <div className="row">
    <div className="col-lg-8 mx-auto">

      
      <ul className="list-group shadow">

       
        <li className="list-group-item">
          <div className="media align-items-lg-center flex-column flex-lg-row p-3">
            <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/7813011/1.jpg?5779" alt="Generic placeholder image" width="100" className="ml-lg-5 order-1 order-lg-2" />
            <div className="media-body order-2 order-lg-1">
              <h5 className="mt-0 font-weight-bold mb-2">Haier Thermocool 146 Litres Chest Freezer (HTF-150) - Silver + 3 Years Warranty</h5>
              <p className="font-italic text-muted mb-0 small">150 Liters capacity (146 liters Storage Volume)
Dimension (W*D*H) - 720*520*845
Super Freezing
Anti-rust protected
LED light
Safety door lock
Low noise operation
75mm insulation thickness</p>
              <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 className="font-weight-bold my-2">₦ 180,905</h6>
                <p> <a href="https://www.jumia.com.ng/haier-thermocool-146-litres-chest-freezer-htf-150-silver-3-years-warranty-110318763.html" target="_blank" className="btn btn-dark"><FontAwesomeIcon icon={faEye} style={{
                    fontSize:"1rem",color:"white",
                }} /></a></p>
              </div>
            </div>
          </div>
        </li>
        
       
        

      </ul>
    </div>
    </div>
    );

}