var express = require('express');
var router = express.Router();
var util = require('../src/util');
const clipboard = require('../src/clipboard');

router.get('/:clipId', function (req, res, next) {
  let clipId = req.params.clipId;
  if(!clipId){
    res
  }
  let clip = clipboard.getClip(clipId);
  res.send(clip);
});

// router.get('/', function (req, res, next) {
//   let userId = req.params.userId;
//   let clipId = util.generateClipId(userId);
//   res.redirect(clipId);
// });

router.post('/', function (req, res, next) {
  let clipId = util.generateClipId();
  saveHelper(req, clipId);
  res.setHeader('Location', '/'+clipId);
  res.status(201).send('');
});

router.post('/:clipId', function (req, res, next) {
  let clipId = req.params.clipId;
  let saveStatus = saveHelper(req, clipId);
  res.send(saveStatus);
});

const saveHelper = (req, clipId) => {
  let userId = req.params.userId;
  let clip = util.getClipFromRequest(req);
  return clipboard.saveClip(clipId, clip, userId);
}

module.exports = router;
