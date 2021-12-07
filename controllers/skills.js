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
    const idToDelete = req.params.id;
    const idOfIndex = req.query.skillID;

    Skill.deleteOne(idOfIndex, idToDelete);

    //find which page to display updated info one
    // console.log(req.query.skillID);
    res.redirect(`/skills/${idOfIndex}`)
}

// like the add skill functions, there are 2-steps below:
function edit(req, res) {
    res.render('skills/edit');
}
function update(req, res) {
    console.log('hi');
    // res.redirect(`/skills/${id}`)
}
