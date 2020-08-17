const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {type: Date, default: Date.now()},
  exercises: [{
    type: {type: String, default: 'resistance'},
    name: {type: String, default: 'workout'},
    duration: {type: Number, default: 0},
    weight: {type: Number},
    reps: {type: Number},
    sets: {type: Number},
    distance: {type: Number}
  }]
});

const Book = mongoose.model('Workout', workoutSchema);

module.exports = Book;