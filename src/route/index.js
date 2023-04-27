// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

router.get('/', function (req, res) {
  res.render('index', {
    stylesPath: 'css/index.css',
  })
})

router.get('/selectors12', function (req, res) {
  res.render('selectors2', {
    stylesPath: 'css/selectors2.css',
  })
})

router.get('/selectors3', function (req, res) {
  res.render('selectors3', {
    stylesPath: 'css/selectors3.css',
  })
})

router.get('/selectors4', function (req, res) {
  res.render('selectors4', {
    stylesPath: 'css/selectors4.css',
  })
})

router.get('/text', function (req, res) {
  res.render('text', {
    stylesPath: 'css/text.css',
  })
})

router.get('/font', function (req, res) {
  res.render('font', {
    stylesPath: 'css/font.css',
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
