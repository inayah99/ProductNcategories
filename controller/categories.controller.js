const models = require('../models/index') 

function insertCategories(req, res) {
    let form = req.body
    models.Categories.create(form)

    return res.send({ message: 'Data has been created', data: form })
}

async function listCategories(req, res) {
    const result = await models.Categories.findAll()
    if (result.length < 1) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

async function detailCategories(req, res) {
    const result = await models.Categories.findOne({ where: { id: req.params.id } })
    if (!result) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

function updateCategories(req, res) {
    let data = req.body
    models.Categories.update(data, { where: { id: req.params.id } })
    
    return res.send({ message: 'Data has been updated', data: req.body })
}

function deleteCategories(req, res) {
    models.Categories.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertCategories,
    listCategories,
    detailCategories,
    updateCategories,
    deleteCategories
}