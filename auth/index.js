'use strict'

const jwt = require('jsonwebtoken')

/**
 *
 * @param {Object} data
 * @param {string} secret
 * @param {Object} options
 * @param {function} cb
 *
 * @example
 *
 * sign({ username: 'comment' }, secret, {}, (err, token) => {
 *   if (err) {
 *     throw new Error(err)
 *   } else {
 *     console.log(token)
 *   }
 * })
 */
function sign (data, secret, options = {}, cb) {
  jwt.sign(data, secret, options, cb)
}

module.exports = {
  sign
}
