const express = require("express");
const cors = require("cors");
//const bodyParser = require("body-parser");
const { createAvatar } = require("@dicebear/avatars");
const initialsStyle = require("@dicebear/avatars-initials-sprites");
const botsStyle = require("@dicebear/avatars-bottts-sprites");
const pixelsStyle = require("@dicebear/pixel-art");
const malesStyle = require("@dicebear/avatars-male-sprites");
const femalesStyle = require("@dicebear/avatars-female-sprites");

const avatarRoutes = require("./routes/avatar-routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.use("/api", avatarRoutes.routes);

// app.get("/api/initials/:seed", (req, res) => {
//   let svg = createAvatar(initialsStyle, {
//     seed: req.params.seed,
//     // ... and other options
//   });
//   res.send(svg);
// });

// app.get("/api/bots/:seed", (req, res) => {
//   let svg = createAvatar(botsStyle, {
//     seed: req.params.seed,
//     // ... and other options
//   });
//   res.send(svg);
// });

// app.get("/api/pixel/:seed", (req, res) => {
//   let svg = createAvatar(pixelsStyle, {
//     seed: req.params.seed,
//     // ... and other options
//   });
//   res.send(svg);
// });

// app.get("/api/male/:seed", (req, res) => {
//   let svg = createAvatar(malesStyle, {
//     seed: req.params.seed,
//     // ... and other options
//   });
//   res.send(svg);
// });

// app.get("/api/female/:seed", (req, res) => {
//   let svg = createAvatar(femalesStyle, {
//     seed: req.params.seed,
//     // ... and other options
//   });
//   res.send(svg);
// });

app.listen(3000, () =>
  console.log("App is listening on url http://localhost:" + 3000)
);
