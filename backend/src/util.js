const getClipFromRequest = (req) => {
    return req.body.data;
}

const generateClipId = () => {
    return 'clip1';
}

module.exports = {
    getClipFromRequest,
    generateClipId
}