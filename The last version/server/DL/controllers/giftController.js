const { giftModel } = require('../models/gifts');

// C R U D
async function creat(data) {
    return await giftModel.create(data)
}

async function readOne(filter, proj) {
    return await giftModel.findOne(filter, proj);
}

async function readById(filter) {
    return await giftModel.findById(filter);
}


async function read(filter) {
    return await giftModel.find(filter)
} 

async function update(filter, data) {
    return await giftModel.updateOne(filter,data)
} 

async function del(_id) {
    return await update({_id}, {isActive: false})
}

module.exports = {creat, readOne, read, readById, update, del}