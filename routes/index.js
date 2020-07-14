const createError = require('http-errors')
const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    res.render('pages/index', {
      title: 'Home - Fingo Sukses',
      layout: 'layouts/main',
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
