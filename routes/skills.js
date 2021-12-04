var express = require('express');
var router = express.Router();

// require controller for CRUD functions
const skillsCtrl = require('../controllers/skills');


// shows default page
router.get('/', skillsCtrl.index);

// show individual skills from each category upon click
router.get('/:id', skillsCtrl.show);

// testing put
router.put('/:id', skillsCtrl.update);



module.exports = router;
