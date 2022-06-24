import React from "react";

import Button from "@mui/material/Button";

import { useGlobalContext } from "../context";

import ItemList from "../components/Item_List";
import ItemForm from "../components/Form"
import Progress from "../components/Progress"

function Homepage() {
  
  const {adding, setAdding, setListofItems} = useGlobalContext()

  return (
    <main>
        <section className="mt-5">
          <div>
            {!adding && (
              <Button
                className="mb-1"
                variant="contained"
                onClick={() => {
                  setAdding(true);
                }}
              >
                ADD ITEM
              </Button>
            )}
          </div>
          <div className="d-flex justify-content-around card card-body">
            {adding && (
              <ItemForm 
              link="checklist/"
              what ="Add"
              method = "POST"
              setValue={setListofItems}
              />
              )}
            <Progress />
            <ItemList />
          </div>
        </section>     
    </main>
  );
}

export default Homepage;
