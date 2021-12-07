const Skill = require("../models/skill");


module.exports = {
    index,
    show,
    update,
    new: newOne,
    create,
    delete: deleteOne,
    edit,
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

// 2-step add skill functions below:
// 1) transfer to add page
function newOne(req, res) {
    res.render('skills/new');
};
// 2) add data to skills page
function create(req, res) {

    //redirects page after submit based on information added
    let idx = 1;
    if (req.body.stack == "backEnd") {
        idx = 2;
    }

    //send data to be added to models and for organizing
    Skill.create(idx, req.body);

    res.redirect(`/skills/${idx}`);
};

function deleteOne(req, res) {
    //delete from models db 
    const idToDelete = req.query.techID;
    const idOfDB = req.params.id;

    Skill.deleteOne(idOfDB, idToDelete);

    //find which page to display updated info one
    res.redirect(`/skills/${idOfDB}`)
}

// like the add skill functions, there are 2-steps below:
function edit(req, res) {
    // let skill = Skill.getOne();
    const skillID = req.params.skill;
    let tech = Skill.getOneLanguage(req.params.skill, req.params.tech);
    // console.log(req.params.skill, req.params.tech);
    // console.log(tech);
    res.render('skills/edit', {skillID, tech});
}
function update(req, res) {
    // console.log(req.body);

    // Skill.update(filled out info for techlanguag and techexperience)
    Skill.update(req.params.skill, req.params.tech, req.body);
    res.redirect(`/skills/${req.params.skill}`);
}