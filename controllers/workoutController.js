const db = require('../models');

module.exports = {
  getAllWorkouts: (req, res) => {
    db.Workout.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getWorkoutsInRange: (req, res) => {
    db.Workout.find({}).sort({ day: -1 }).limit(7)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createWorkout: (req, res) => {
    db.Workout.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addExercise: (req, res) => {
    db.Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};