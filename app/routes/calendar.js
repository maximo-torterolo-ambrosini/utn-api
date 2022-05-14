const { Router } = require('express')
const { getActivities, getHolidays } = require('../controllers/calendar')

const router = Router()

router.get('/activity', getActivities)
router.get('/activity/:next', getActivities)

router.get('/holiday', getHolidays)
router.get('/holiday/:next', getHolidays)

module.exports = router
