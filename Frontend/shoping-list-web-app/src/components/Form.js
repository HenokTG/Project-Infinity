import React from "react";
import { useNavigate } from "react-router-dom";

import { axiosInstance } from "../axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//MaterialUI
import Button from "@mui/material/Button";
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: "1rem",
  },
}));

function ItemForm(props) {

  const history = useNavigate();

  const {Name, Description, Cost} = props.item? {...props.item}: {"Name":"", "Description":"", "Cost":""}
  
  const {setAdding, updated, setUpdated} = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append("Name", e.target.elements.Name.value);
    postData.append("Cost", e.target.elements.Cost.value);
    postData.append("Description", e.target.elements.Description.value);

    if (props.method === "PUT"){
      axiosInstance
        .put(`shopping-list/api/${props.link}`, postData)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setUpdated(!updated)
          history("/welcome");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else{
    axiosInstance
      .post(`shopping-list/api/${props.link}`, postData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAdding(false)
      })
      .catch(function (error) {
        console.log(error);
      });}
  };

  const classes = useStyles();

  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          { props.what } Item Form
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}> 
          <Grid container spacing={1.75} item lg={12}>
            {console.log("first Defs Name, Cost: ", Name, Cost)}
              <TextField className="my-2"
                fullWidth
                variant="outlined"
                id='Name'
                label='Enter the Name Item'
                name='Name'
                type="text"
                defaultValue={Name}
              />
              <TextField
                fullWidth
                variant="outlined"
                id="Description"
                label="Write Item Description"
                name="Description"
                type="text"
                multiline
                rows={4}
                defaultValue={Description}
              />
              <Row className="my-2">
                  <Col className="mb-2">
                    <TextField
                      fullWidth
                      id="floatingInputCustom"
                      name="Cost"
                      type="number"
                      label= "Enter the Price of an Item"
                      defaultValue={Cost}
                    />
                  </Col>                  
              </Row>
              <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "1rem 0rem 0.5rem",
                  }}
                  endIcon={props.method !== "PUT"?<AddBoxIcon />:<EditIcon/>}
                >
                  { props.what } ITEM
              </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default ItemForm;
