const express = require('express')
const router = express.Router()
const { Players: Player } = require('../models')
const jwt = require('express-jwt')
const { secret } = require('../config')

/* GET players listing. */
router.get('/', async function (req, res, next) {
  let players = null

  try {
    players = await Player.findAll()
  } catch (err) {
    res.statusCode = 500
    res.json({
      ok: false,
      message: err.message
    })
    return
  }

  res.json({
    ok: true,
    players,
    message: 'players success'
  })
})

/* POST create a comment */
router.post('/', async function (req, res, next) {
  let comment = null
  try {
    comment = await Player.create(req.body)
  } catch (err) {
    res.json({
      ok: false,
      message: err.message
    })
    return
  }

  res.json({
    ok: true,
    comment,
    message: 'comment was created'
  })
})

module.exports = router
