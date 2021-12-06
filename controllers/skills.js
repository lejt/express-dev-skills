const Skill = require("../models/skill");


module.exports = {
    index,
    show,
    update,
    new: newOne,
    create,
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
    console.log('updating');
    res.send('updating');
};

// 2-step add skill functions below:
// 1) transfer to add page
function newOne(req, res) {
    res.render('skills/new');
};
// 2) add data to skills page
function create(req, res) {
    //send data to be added to models and for organizing
    Skill.create(req.body);

    //redirects page after submit based on information added
    let idx = 1;
    if (req.body.stack == "backEnd") {
        idx = 2;
    }

    res.redirect(`/skills/${idx}`);
};