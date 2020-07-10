const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    res.render('pages/index', { title: 'Express', layout: 'layouts/main' })
  } catch (error) {
    next(error)
  }
})

module.exports = router
