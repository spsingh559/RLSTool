var router = require('express').Router();

router.use('/roleSetting', require('./api/roleSetting/roleSetting.router'));
router.use('/trackSetting', require('./api/trackSetting/trackSetting.router'));
router.use('/ProjectDetail', require('./api/ProjectDetail/ProjectDetail.router'));
router.use('/cellSummary', require('./api/CellSummary/cellSummary.router'));
exports = module.exports = router;
