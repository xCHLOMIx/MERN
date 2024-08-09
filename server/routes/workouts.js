const express = require('express')
const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout, 
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

router.get('/', getWorkouts)

router.post('/', createWorkout)

router.get('/:id', getWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router