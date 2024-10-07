const { eventModel } = require('../models/events');

// C R U D
async function create(data) {
    return await eventModel.create(data)
}

async function readOne(filter, proj) {
    return await eventModel.findOne(filter, proj);
}

async function readById(filter) {
    return await eventModel.findById(filter);
}


async function reade(filter) {
    return await eventModel.find(filter)
} 

async function update(filter, data) {
    return await eventModel.updateOne(filter,data)
} 

async function del(_id) {
    return await update({_id}, {isActive: false})
}

module.exports = {create, readOne, reade, readById, update, del}