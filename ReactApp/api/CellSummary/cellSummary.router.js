const router = require('express').Router();
const cellSummaryController = require('./cellSummary.controller');
router.post('/',cellSummaryController.createCellSummary);
router.get('/',cellSummaryController.getCellSummary);
router.put('/',cellSummaryController.updateCellSummary);
router.delete('/:_id',cellSummaryController.removeCellSummary);

exports = module.exports = router;
