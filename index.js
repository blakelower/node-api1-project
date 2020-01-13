// implement your API here

const express = require("express");

const { find, findById, insert, update, remove } = require("./data/db.js");

const server = express();
server.use(express.json()); //added express.json to add exta functionality


//POST
server.post("/api/users", (req, res) => {
  const userInfo = req.body;
  insert(userInfo)
    .then(user => {
      if (userInfo.name && userInfo.bio) {
        res.status(201).json(user);
      } else {
        res
          .status(500)
          .json({
            errorMessage:
              "There was an error while saving the user to the database"
          });
      }
    })
    .catch(error => {
      res
        .status(400)
        .json({ errorMessage: "Please provide name and bio for the user." });
    });
});


//GET
server.get("/api/users", (req, res) => {
  find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res
        .status(500)
        .json({
          errorMessage: "The users information could not be retrieved."
        });
    });
});


//GET BY ID
server.get("api/users/:id", (req, res) => {
  const { id } = req.params;
  findById(id)
  .then(user => {
      if(user){
          res.status(200).json(user)
      } else {
          res.status(404).json({ message: "The user with the specified ID does not exist."})
      }
  }) .catch(error => {
    res
    .status(500)
    .json({ errorMessage: "The user information could not be retrieved." });
  })
});


//DELETE
server.delete("/api/users/:id", (req, res) => {
    const {id} = req.params
    remove(id)
    .then(user => {
        if (user){
            res.status(200).json('success')
        } else {
            res.status(404).json({
                message: "The user with the specified ID does not exist."
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: "The user could not be removed"
        })
    })
})

//PUT
server.put("/api/users/:id", (req, res) => {
    update(req.params.id, req.body)
    .then(user => {
        if (user){
            res.status(200).json({success})
        } else {
            res.status(400).json({errorMessage: "Please provide name and bio for the user."})
        }
    }) .catch(error => {
        res.status(500).json({errorMessage: "The user information could not be modified."})
    })
})