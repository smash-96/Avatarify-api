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

router.get("/male/:seed", getMaleAvatar);
router.get("/female/:seed", getFemaleAvatar);
router.get("/bot/:seed", getBotsAvatar);
router.get("/initial/:seed", getInitialsAvatar);
router.get("/random/:seed", getPixelRandomAvatar);
router.get("/random-neutral/:seed", getPixelRandomNeutralAvatar);
router.get("/avataars/:seed", getAvataarsAvatar);
router.get("/grid-sprite/:seed", getGridSpriteAvatar);
router.get("/human-sprite/:seed", getHumanSpriteAvatar);
router.get("/identicon/:seed", getIdenticonAvatar);
router.get("/jdenticon/:seed", getJdenticonAvatar);
router.get("/big-ear/:seed", getBigEarAvatar);
router.get("/big-ear-neutral/:seed", getBigEarNeutralAvatar);
router.get("/big-smile/:seed", getBigSmileAvatar);
router.get("/croodles/:seed", getCroodlesAvatar);
router.get("/croodles-neutral/:seed", getCroodlesNeutralAvatar);
router.get("/micah/:seed", getMicahAvatar);
router.get("/miniavs/:seed", getMiniavsAvatar);
router.get("/open-peeps/:seed", getOpenPeepsAvatar);
router.get("/personas/:seed", getPersonasAvatar);

module.exports = {
  routes: router,
};
