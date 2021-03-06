const skills = [
    {id: 1, skill: "front-end", proficiency: "60%", 
    technologies: [
        {id: 123456, language: "html", experience: "linking to external css & js"},
        {id: 113556, language: "css", experience: "flex, grid, animation, wireframing, responsiveness"},
        {id: 554456, language: "javascript", experience: "async functions, DOM manipulation, DRY logic"}],
    projects: "simon game", projectlinks: "https://lejt.github.io/SimonGame/",
    },
    {id: 2, skill: "back-end", proficiency: "5%", 
    technologies: [
        {id: 967452, language: "node express", experience: "create local server with proper routing"},
        {id: 152875, language: "mongoDB", experience: "none"},
        {id: 942636, language: "PostgreSQL", experience: "none"}],
    projects: "this server", projectlinks: "",
    }
];

module.exports = {
    getAll,
    getOne,
    getOneLanguage,
    create,
    deleteOne,
    update,
};

function getAll() {
    return skills;
};
// 1 layer deep getOne
function getOne(id) {
    return skills.find(skill => skill.id == id);
};
// 2 layer deep getOne
function getOneLanguage(outerID, innerID) {
    return skills[outerID-1].technologies.find(tech => tech.id == innerID);
};

// add to database
function create(idx, body) {
    const randomIdx = Math.floor(Math.random() * (Math.floor(1000000) - Math.ceil(100000)) + Math.ceil(100000)); 
    const skillsArrIdx = skills.findIndex(skill => skill.id == idx);
    skills[skillsArrIdx].technologies.push({id: randomIdx, language: body.addSkill, experience: body.experience}); 
};

function deleteOne(outerID, innerID) {
    const idToDelete = skills[outerID-1].technologies.findIndex(tech => tech.id == innerID);
    skills[outerID-1].technologies.splice(idToDelete, 1);
}

function update(outerID, innerID, body) {
    // Find the index of the skills object in either frontend or backend
    const idx = skills.findIndex(skill => skill.id === parseInt(outerID));
    const skill = skills[idx];

    const idOfChange = skill.technologies.findIndex(tech => tech.id == innerID);
    // console.log(idOfChange);
    skill.technologies[idOfChange].language = body.skillChange;
    skill.technologies[idOfChange].experience = body.experienceChange;
}