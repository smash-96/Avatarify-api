const express = require("express");
const {
  getMaleAvatar,
  getFemaleAvatar,
  getBotsAvatar,
  getInitialsAvatar,
  getPixelRandomAvatar,
  getPixelRandomNeutralAvatar,
  getAvataarsAvatar,
  getGridSpriteAvatar,
  getHumanSpriteAvatar,
  getIdenticonAvatar,
  getJdenticonAvatar,
  getBigEarAvatar,
  getBigEarNeutralAvatar,
  getBigSmileAvatar,
  getCroodlesAvatar,
  getCroodlesNeutralAvatar,
  getMicahAvatar,
  getMiniavsAvatar,
  getOpenPeepsAvatar,
  getPersonasAvatar,
} = require("../controller/avatar-controller");

const router = express.Router();

router.get("/male", getMaleAvatar);
router.get("/female", getFemaleAvatar);
router.get("/bot", getBotsAvatar);
router.get("/initial", getInitialsAvatar);
router.get("/random", getPixelRandomAvatar);
router.get("/random-neutral", getPixelRandomNeutralAvatar);
router.get("/avataars", getAvataarsAvatar);
router.get("/grid-sprite", getGridSpriteAvatar);
router.get("/human-sprite", getHumanSpriteAvatar);
router.get("/identicon", getIdenticonAvatar);
router.get("/jdenticon", getJdenticonAvatar);
router.get("/big-ear", getBigEarAvatar);
router.get("/big-ear-neutral", getBigEarNeutralAvatar);
router.get("/big-smile", getBigSmileAvatar);
router.get("/croodles", getCroodlesAvatar);
router.get("/croodles-neutral", getCroodlesNeutralAvatar);
router.get("/micah", getMicahAvatar);
router.get("/miniavs", getMiniavsAvatar);
router.get("/open-peeps", getOpenPeepsAvatar);
router.get("/personas", getPersonasAvatar);

module.exports = {
  routes: router,
};
