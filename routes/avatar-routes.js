const express = require("express");
const {
  getMaleAvatar,
  getFemaleAvatar,
  getBotsAvatar,
  getInitialsAvatar,
  getPixelAvatar,
} = require("../controller/avatar-controller");

const router = express.Router();

router.get("/male/:seed", getMaleAvatar);
router.get("/female/:seed", getFemaleAvatar);
router.get("/bots/:seed", getBotsAvatar);
router.get("/initial/:seed", getInitialsAvatar);
router.get("/pixel/:seed", getPixelAvatar);

module.exports = {
  routes: router,
};
