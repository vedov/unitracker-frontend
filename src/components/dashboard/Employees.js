import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import "./Employees.css";

const user = {
  fullName: "Dino-Sven Dedić",
  username: "nodidbr",
  status: "aktivan",
  userType: "Dekan",
  password: "Dino1997.",
  photo: "https://randomuser.me/api/portraits/men/55.jpg",
};

function UserProfile() {
  const [patient, setPatient] = useState();
  const fetchData = async () => {
    return await axios
      .get(`http://127.0.0.1:8000/api/v1/subjects/1`)
      .then((response) => {
        console.log(response.data);
        setPatient(response.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="userProfile">
      <h1>Employees</h1>
      <br />

      <Card variant="outlined" className="userProfile__card">
        <CardMedia>
          <div className="userProfile__banner" />
          <Avatar src={user.photo} className="userProfile__avatar" />
        </CardMedia>
        <CardContent>
          <Table className="userProfile__dataContainer">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  Class:
                </TableCell>
                <TableCell align="left">{patient.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  Lecture
                </TableCell>
                <TableCell align="left">{patient.lecture_day}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  Tutorial Held on:
                </TableCell>
                <TableCell align="left">{patient.tutorial_day}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  Tip korisnika:
                </TableCell>
                <TableCell align="left">{user.userType}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <Button
          color="primary"
          variant="contained"
          startIcon={<CreateIcon />}
          className="userProfile__button"
          fullWidth
          onClick={openModal}
        >
          Uredi profil
        </Button>
      </Card>
    </div>
  );
}

export default UserProfile;
