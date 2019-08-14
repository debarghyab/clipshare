const getClipFromDb = (clipId) => {
    return db[clipId];
}

const saveClipToDb = (clipId, data, userId) => {
    console.log('Saving..'+clipId+": "+data);
    db[clipId] = data;
    console.log(db);
}

const db = {};

module.exports = {
    getClipFromDb,
    saveClipToDb
}