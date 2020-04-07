// implement your API here
const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json({ api: "running..." });
});

let users = [
  {
    id: 1,
    name: "blake",
    bio: "having fun",
  },
  {
    id: 2,
    name: "adam",
    bio: "working from home",
  },
  {
    id: 3,
    name: "xander",
    bio: "playing",
  },
];
//middleware
server.use(express.json());

server.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "blake",
      bio: "having fun",
    },
    {
      id: 2,
      name: "adam",
      bio: "working from home",
    },
    {
      id: 3,
      name: "xander",
      bio: "playing",
    },
  ];
  res.json(users);
});

server.get("/api/users/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id == id);
  const express = require("express");

  const server = express();

  server.get("/", (req, res) => {
    res.json({ api: "running..." });
  });

  let users = [
    {
      id: 1,
      name: "blake",
      bio: "having fun",
    },
    {
      id: 2,
      name: "adam",
      bio: "working from home",
    },
    {
      id: 3,
      name: "xander",
      bio: "playing",
    },
  ];
  //middleware
  server.use(express.json());

  server.get("/api/users", (req, res) => {
    const users = [
      {
        id: 1,
        name: "blake",
        bio: "having fun",
      },
      {
        id: 2,
        name: "adam",
        bio: "working from home",
      },
      {
        id: 3,
        name: "xander",
        bio: "playing",
      },
    ];
    res.json(users);
  });

  server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find((user) => user.id == id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  });

  server.post("/api/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(users);
  });

  server.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;

    const user = users.remove((user) => user.id == id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Fail to delete" });
    }
    res.json(user);
  });
  const port = 4000;
  server.listen(port, () => console.log(`\n== api listening on ${port}`));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

server.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(users);
});

server.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;

  const user = users.remove((user) => user.id == id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Fail to delete" });
  }
  res.json(user);
});
const port = 4000;
server.listen(port, () => console.log(`\n== api listening on ${port}`));
