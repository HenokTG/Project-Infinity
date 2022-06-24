import React, {useEffect, useState} from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';

import { useGlobalContext } from "../context";
import { axiosInstance } from "../axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ItemList() {
  
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const {adding, removeItem, setRemoveItem, 
    updated, setUpdated, listofItems, setListofItems } = useGlobalContext()
  
  useEffect(() => {
    axiosInstance
        .get("shopping-list/api/checklist/")
        .then((res) => {
          console.log(res.data);
          setListofItems(res.data);
        })
        .catch(function (error) {
          console.log(error);
          console.error("Caution: NO Data is fetched to render!");
        });

  }, [adding, removeItem, isSwitchOn])  // eslint-disable-line react-hooks/exhaustive-deps

  const handleToggle = (itemID) => () => {
    
    setIsSwitchOn(!isSwitchOn);
    
    const toggledList = listofItems.filter((elem)=> elem.id === itemID )

    const postData = {...toggledList, "Bought_Item":isSwitchOn}
    axiosInstance
        .put(`shopping-list/api/checklist/${itemID}/`, postData)
        .then((res) => {
          console.log(res.data);
          setUpdated(!updated)
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  const remove = (id) => {
    axiosInstance.delete(`shopping-list/api/checklist/${id}`).then((res) => {
      console.log("Entry Deleted!")
      setRemoveItem(!removeItem)})
  }

  return (<>
    {listofItems.length !== 0 ?
    <List dense sx={{ width: '100%',  bgcolor: 'background.paper' }}>
      {listofItems.map((elem, index) => {
        const labelId = `checkbox-list-secondary-label-${elem.id}`;
        
        return (
          <ListItem
            key={index}
            secondaryAction={
              <Checkbox
                edge="end"
                onClick={handleToggle(elem.id)}
                checked={elem.Bought_Item===true}
                inputProps={{ 'aria-labelledby': labelId }}
              />
              
            }
            disablePadding
          >
            <ListItemButton>
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between mt-2">
                      <Link to={`/checklist-item/${elem.id}`} state={{ itemId: elem.id }}>
                         {/* state={{ itemId: elem.id }} */}
                        <h5 className="mb-2">{elem.Name}</h5>
                         </Link>
                        <small className="mx-3">Added to Cart on: {new Date(elem.Purchased_Time).toString()}</small>
                    </div>
                    <p className="mb-3" style={{width:"50em"}}>{elem.Description}</p>
                    <div className="d-flex justify-content-between">
                        <strong className="mx-3" style={{color:"#f0ad4e"}}>Price: ${elem.Cost}</strong>
                        <Button variant="outlined" color="error" onClick={() => remove(elem.id) }>Remove</Button>
                    </div>      
             </div>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>:<h4>No Item in The Cart</h4>}</>
  );
}