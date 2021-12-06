const skills = [
    {id: 1, skill: "front-end", proficiency: "60%", 
    technologies: [
        {language: "html", experience: "linking to external css & js"},
        {language: "css", experience: "flex, grid, animation, wireframing, responsiveness"},
        {language: "javascript", experience: "async functions, DOM manipulation, DRY logic"}],
    projects: "simon game", projectlinks: "https://lejt.github.io/SimonGame/",
    },
    {id: 2, skill: "back-end", proficiency: "5%", 
    technologies: [
        {language: "node express", experience: "create local server with proper routing"},
        {language: "mongoDB", experience: "none"},
        {language: "PostgreSQL", experience: "none"}],
    projects: "this server", projectlinks: "",
    }
];

module.exports = {
    getAll,
    getOne,
    create,
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id == id);
};

// add to database
function create(id) {

}