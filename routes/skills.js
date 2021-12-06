var express = require('express');
var router = express.Router();

// require controller for CRUD functions
const skillsCtrl = require('../controllers/skills');


// show default page
router.get('/', skillsCtrl.index);

// add skills 
router.get('/new', skillsCtrl.new);

// show individual skills from each category upon click
router.get('/:id', skillsCtrl.show);


// testing put
// router.put('/:id', skillsCtrl.update);

router.post('/:id', skillsCtrl.create);

module.exports = router;
