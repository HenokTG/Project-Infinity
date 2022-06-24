import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

// import { useGlobalContext } from "../context";
import { axiosInstance } from "../axios";
import ItemForm from "../components/Form"

function SingleItem() {

  const { itemId } = useParams()
  const [updateItem, setUpdateItem] = useState({})

  useEffect(() => {
    axiosInstance
        .get(`shopping-list/api/checklist/${itemId}/`)
        .then((res) => {
          console.log(res.data);
          setUpdateItem(res.data);
        })
        .catch(function (error) {
          console.log(error);
          console.error("Caution: NO Data is fetched to render!");
        });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId])

  return (
    <main>
      <section className="d-flex justify-content-around card card-body" style={{ maxWidth: "50rem"}}>
          <ItemForm 
            link={`checklist/${itemId}/`}
            what ="Update"
            method = "PUT"
            item = {updateItem}
          />
      </section>
      
    </main>
  );
}

export default SingleItem;
