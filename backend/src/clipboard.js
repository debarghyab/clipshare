const db = require('./db');

const getClip = (clipId) => {
    return db.getClipFromDb(clipId);
}

const saveClip = (clipId, data, userId) => {
    let saveStatus = db.saveClipToDb(clipId, data, userId);
    return saveStatus;
}

module.exports = {
    getClip,
    saveClip
}