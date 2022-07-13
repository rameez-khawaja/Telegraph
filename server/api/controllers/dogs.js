const express = require('express');
const router = express.Router();

const Dog = require('../models/dog')

// dogs index route
router.get('/', async (req, res) => {
    try {
        const dogs = await Dog.all
        res.json({dogs})
    } catch(err) {
        res.status(500).json({err})
    }
})


// dogs show route
router.get('/:id', async (req, res) => {
    try {
        const dog = await Dog.findById(req.params.id)
        res.json(dog)
    } catch(err) {
        res.status(404).json({err})
    }
})

// Create dog route
router.post('/', async (req, res) => {
    try {
        const dog = await Dog.create(req.body.name, req.body.age)
        res.json(dog)
    } catch(err) {
        res.status(404).json({err})
    }
})


module.exports = router;
