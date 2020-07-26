const router = require('express').Router();
const db = require('../models/');

//add exercise
router.put('/workouts/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//create workout
router.post('/workouts', (req, res) => {
  db.Workout.create(req.body)
    .then((workout) => {
      console.log(workout, 'workout is posted');
      res.json(workout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get last workout
router.get('/workouts', (req, res) => {
  db.Workout.find()
    .then((workout) => res.json(workout))
    .catch((err) => {
      res.status(500).json(err);
    });
});

//create workout
router.post('/workouts', (req, res) => {
  db.Workout.create({})
    .then((workout) => res.json(workout))
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get workout range
router.get('/workouts/range', (req, res) => {
  db.Workout.find()
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = router;
