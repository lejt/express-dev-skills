var express = require('express');
var router = express.Router();

// require controller for CRUD functions
const skillsCtrl = require('../controllers/skills');


// show default page
router.get('/', skillsCtrl.index);

// show new page for adding skills
router.get('/new', skillsCtrl.new);

// show individual skills from each category upon click
router.get('/:id', skillsCtrl.show);

// submits new skill data to model and redirect
router.post('/:id', skillsCtrl.create);

// delete data entries
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
