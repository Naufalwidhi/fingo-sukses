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

router.get('/sistem', (req, res, next) => {
  try {
    res.render('pages/sistem', {
      title: 'Sistem - Fingo Sukses',
      layout: 'layouts/main',
    })
  } catch (error) {
    next(error)
  }
})

router.get('/marketing-plan', (req, res, next) => {
  try {
    res.render('pages/marketing', {
      title: 'Marketing Plan - Fingo Sukses',
      layout: 'layouts/main',
    })
  } catch (error) {
    next(error)
  }
})

router.get('/video-fingo', (req, res, next) => {
  try {
    res.render('pages/video', {
      title: 'Video Fingo - Fingo Sukses',
      layout: 'layouts/main',
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
