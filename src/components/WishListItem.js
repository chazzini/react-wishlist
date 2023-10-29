import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default ({items, deleteItem}) => {

    return (
    <>

    {items.map((item)=> (
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
            <img src={item.imagepath} alt={item.itemname} width="100" className="ml-lg-5 order-1 order-lg-2" />
            <div className="media-body order-2 order-lg-1">
                <h5 className="mt-0 font-weight-bold mb-2">{item.itemname}</h5>
                <p className="font-italic text-muted mb-0 small">{item.description}</p>
                <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 className="font-weight-bold my-2">₦ {item.price}</h6>
                <p> <a href="{item.link}" target="_blank" className="btn btn-dark"><FontAwesomeIcon icon={faEye} style={{
                    fontSize:"1rem",color:"white",
                }} /></a></p>
                </div>
            </div>
            </div>
        </li>))
  }
    </>
  );
  

}