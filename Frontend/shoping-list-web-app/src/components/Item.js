import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {

  return (
    <>
        <section className="card border-light mt-5">
          <div className="card-body">
            {props.item &&
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between mt-2">
                      <Link to="/checklist-item" >
                        <h5 className="mb-2">{props.item.Name}</h5>
                         </Link>
                        <small className="mx-3">Perchased on </small>
                    </div>
                    <p className="mb-3">{props.item.Description}</p>
                    <div className="d-flex justify-content-between">
                        <small>Price: {props.item.Cost}</small>
                    </div>
                      
             </div>}
          </div>
        </section>

    </>
  );
}
