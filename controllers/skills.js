const Skill = require("../models/skill");


module.exports = {
    index,
    show,
    update,
    new: newOne,
    create,
    delete: deleteOne,
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
    const idToDelete = req.params.id
    Skill.deleteOne(idToDelete)

    //find which page to display updated info one

    console.log(req.params.id);

    // res.redirect(`/skills/${idx}`)
}