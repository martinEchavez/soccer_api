const express = require('express');
const { authentication } = require('../../middleware/authentication');
const { cacheInit } = require('../../middleware/cache');
const {
  getPlayers,
  createPlayer,
  updatePlayer,
  getPlayerById,
  deletePlayer,
} = require('./controller');

const router = express.Router();

router.get('/', authentication, cacheInit, async (req, res) => {
  try {
    const players = await getPlayers(req.query);

    res.status(200).send({
      players,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

router.get('/:id', authentication, async (req, res) => {
  try {
    const { id } = req.params;

    const player = await getPlayerById(id);

    if (player.length === 0) {
      return res.status(404).send({
        message: 'player not found',
      });
    }

    res.status(200).send({
      player,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

router.post('/', authentication, async (req, res) => {
  try {
    const { name, age, team_id, squad_id, position } = req.body;
    if (
      typeof name === 'undefined' ||
      typeof age === 'undefined' ||
      typeof team_id === 'undefined' ||
      typeof squad_id === 'undefined' ||
      typeof position === 'undefined'
    ) {
      return res.status(400).send({
        message: 'name, age, team_id, squad_id or position is required.',
      });
    }

    const player = {
      name,
      age,
      team_id,
      squad_id,
      position,
    };

    const response = await createPlayer(player);
    const playerCreated = await getPlayerById(response);
    res.status(200).send({
      player: playerCreated,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

router.put('/:id', authentication, async (req, res) => {
  try {
    const { id } = req.params;
    const player = req.body;

    const response = await updatePlayer(id, player);

    if (response === 0) {
      return res.status(404).send({
        message: 'player not found',
      });
    }

    res.status(200).send({
      message: 'success',
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

router.delete('/:id', authentication, async (req, res) => {
  try {
    const { id } = req.params;

    const response = await deletePlayer(id);

    if (response === 0) {
      return res.status(404).send({
        message: 'player not found',
      });
    }

    res.status(200).send({
      message: 'success',
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

module.exports = router;
