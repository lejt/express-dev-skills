const Skill = require("../models/skill");


module.exports = {
    index,
    show,
    update
}


function index(req, res) {
    //get data from models
    let skills = Skill.getAll();

    //render data to views
    res.render('skills/index', {
        skills
    });
};

function show(req, res) {
    //get data from models
    let skill = Skill.getOne(req.params.id);

    //render data to views
    res.render('skills/show', {
        skill
    });
};

function update(req, res) {
    res.send('updating ');
};

