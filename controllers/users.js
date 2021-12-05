module.exports = {
    index,
    update,
    del
}

function index(req, res) {
    res.send(`Get Users with id: ${req.params.id}`);
};

function update(req, res) {
    res.send(`Update Users with id: ${req.params.id}`);
};

function del(req, res) {
    res.send(`Delete Users with id: ${req.params.id}`);
};

