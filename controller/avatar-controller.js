const { createAvatar } = require("@dicebear/avatars");
const initialsStyle = require("@dicebear/avatars-initials-sprites");
const botsStyle = require("@dicebear/avatars-bottts-sprites");
const pixelsRandomStyle = require("@dicebear/pixel-art");
const pixelsRandomNeutralStyle = require("@dicebear/pixel-art-neutral");
const malesStyle = require("@dicebear/avatars-male-sprites");
const femalesStyle = require("@dicebear/avatars-female-sprites");
const avataarsStyle = require("@dicebear/avatars-avataaars-sprites");
const gridySpritesStyle = require("@dicebear/avatars-gridy-sprites");
const humanSpritesStyle = require("@dicebear/avatars-human-sprites");
const identiconStyle = require("@dicebear/avatars-identicon-sprites");
const jdenticonStyle = require("@dicebear/avatars-jdenticon-sprites");
const bigEarsStyle = require("@dicebear/big-ears");
const bigEarsNeutralStyle = require("@dicebear/big-ears-neutral");
const bigSmileStyle = require("@dicebear/big-smile");
const croodlesStyle = require("@dicebear/croodles");
const croodlesNeutralStyle = require("@dicebear/croodles-neutral");
const micahStyle = require("@dicebear/micah");
const miniavsStyle = require("@dicebear/miniavs");
const openPeepsStyle = require("@dicebear/open-peeps");
const personasStyle = require("@dicebear/personas");

// 1
const getMaleAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(malesStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 2
const getFemaleAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(femalesStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 3
const getBotsAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(botsStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 4
const getInitialsAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(initialsStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 5
const getPixelRandomAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(pixelsRandomStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 6
const getPixelRandomNeutralAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(pixelsRandomNeutralStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 7
const getAvataarsAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(avataarsStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 8
const getGridSpriteAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(gridySpritesStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 9
const getHumanSpriteAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(humanSpritesStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 10
const getIdenticonAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(identiconStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 11
const getJdenticonAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(jdenticonStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 12
const getBigEarAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(bigEarsStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 13
const getBigEarNeutralAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(bigEarsNeutralStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 14
const getBigSmileAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(bigSmileStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 15
const getCroodlesAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(croodlesStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 16
const getCroodlesNeutralAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(croodlesNeutralStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 17
const getMicahAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(micahStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 18
const getMiniavsAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(miniavsStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 19
const getOpenPeepsAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(openPeepsStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// 20
const getPersonasAvatar = async (req, res) => {
  try {
    const urlParams = req.query;
    let svg = createAvatar(personasStyle, {
      seed: req.params.seed,
      ...urlParams,
    });
    res.set({
      "Content-Type": "image/svg+xml",
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
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
};
