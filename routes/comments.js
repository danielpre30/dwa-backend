const express = require('express')
const router = express.Router()
const { comments: Comment } = require('../models')

/* GET comments listing. */
router.get('/', async function (req, res, next) {
  let comments = null
  try {
    comments = await Comment.findAll()
  } catch (err) {
    res.json({
      ok: false,
      message: err.message
    })
    return
  }

  res.json({
    ok: true,
    comments,
    message: 'comments success'
  })
})

/* POST create a comment */
router.post('/', async function (req, res, next) {
  let comment = null
  try {
    comment = await Comment.create(req.body)
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
