const workoutController = require('../../controllers/workoutController');
const router = require('express').Router();

router.route('/')
  .get(workoutController.getAllWorkouts)
  .post(workoutController.createWorkout);

router.get('/range', workoutController.getWorkoutsInRange);

router.put('/:id', workoutController.addExercise);

module.exports = router;