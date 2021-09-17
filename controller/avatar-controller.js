const { createAvatar } = require("@dicebear/avatars");
const initialsStyle = require("@dicebear/avatars-initials-sprites");
const botsStyle = require("@dicebear/avatars-bottts-sprites");
const pixelsStyle = require("@dicebear/pixel-art");
const malesStyle = require("@dicebear/avatars-male-sprites");
const femalesStyle = require("@dicebear/avatars-female-sprites");

const getMaleAvatar = async (req, res) => {
  try {
    let svg = createAvatar(malesStyle, {
      seed: req.params.seed,
      // ... and other options
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getFemaleAvatar = async (req, res) => {
  try {
    let svg = createAvatar(femalesStyle, {
      seed: req.params.seed,
      // ... and other options
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getBotsAvatar = async (req, res) => {
  try {
    let svg = createAvatar(botsStyle, {
      seed: req.params.seed,
      // ... and other options
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getInitialsAvatar = async (req, res) => {
  try {
    let svg = createAvatar(initialsStyle, {
      seed: req.params.seed,
      // ... and other options
    });
    res.send(svg);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPixelAvatar = async (req, res) => {
  try {
    let svg = createAvatar(pixelsStyle, {
      seed: req.params.seed,
      // ... and other options
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
  getPixelAvatar,
};
