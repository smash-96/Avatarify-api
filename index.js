const express = require("express");
const cors = require("cors");

const avatarRoutes = require("./routes/avatar-routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.use("/", avatarRoutes.routes);

app.listen(3000, () =>
  console.log("App is listening on url http://localhost:" + 3000)
);
