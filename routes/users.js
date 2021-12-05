var express = require('express');
var router = express.Router();

// require controller for CRUD functions
const usersCtrl = require('../controllers/users');

router 
    .route('/')
    .get((req, res) => res.send('User List'))

router
    .route('/:id')
    .get(usersCtrl.index)
    .put(usersCtrl.update)
    .delete(usersCtrl.del)


module.exports = router;
