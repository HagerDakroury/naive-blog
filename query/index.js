const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "postCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "commentCreated") {
    const { id, content, postId } = data;
    posts[postId].comments.push({ id, content });
  }
  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("listening on 4002");
});
