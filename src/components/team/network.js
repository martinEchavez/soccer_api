const express = require('express');
const { authentication } = require('../../middleware/authentication');
const {
  getTeams,
  createTeam,
  updateTeam,
  getTeamById,
  deleteTeam,
} = require('./controller');

const router = express.Router();

router.get('/', authentication, async (req, res) => {
  try {
    const teams = await getTeams();

    res.status(200).send({
      teams,
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

    const team = await getTeamById(id);

    if (team.length === 0) {
      return res.status(404).send({
        message: 'team not found',
      });
    }

    res.status(200).send({
      team,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

router.post('/', authentication, async (req, res) => {
  try {
    const { name, league, country } = req.body;
    if (
      typeof name === 'undefined' ||
      typeof league === 'undefined' ||
      typeof country === 'undefined'
    ) {
      return res.status(400).send({
        message: 'name, league or country is required.',
      });
    }

    const team = {
      name,
      league,
      country,
    };

    const response = await createTeam(team);
    const teamCreated = await getTeamById(response);
    res.status(200).send({
      team: teamCreated,
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
    const team = req.body;

    const response = await updateTeam(id, team);

    if (response === 0) {
      return res.status(404).send({
        message: 'team not found',
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

    const response = await deleteTeam(id);

    if (response === 0) {
      return res.status(404).send({
        message: 'team not found',
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
