const fs = require('fs')
const exec = require('child_process').exec
const crypto = require('crypto')
const request = require('request')

var currentPassword = 'password'

exports.HttpPost = function (address, body, callback) {
  request.post(address, {form: body}, function (err, res, body) {
    callback(err, body)
  })
}

exports.HttpGet = function (address, callback) {
  request.get(address, {json: true, timeout: 5000}, function (err, res, body) {
    callback(err, body)
  })
}

exports.Execute = function (command, callback) {
  exec(command, function (err, stdout, stderr) {
    if (err) {
      console.log(err)
    }
    callback(stdout)
  })
}

exports.SaveConfig = function (dir, data, cb) {
  fs.writeFile(dir, JSON.stringify(data), function (err) {
    if (err) return cb(err, {message: 'fs error'})
    return cb(null, {message: 'ok'})
  })
}

exports.LoadConfig = function (dir) {
  return fs.readFileSync(dir, 'utf-8')
}

exports.SavePassword = function (password, cb) {
  crypto.pbkdf2(password, 'Babayatu'.toString('base64'), 10000, 512, 'sha512', function (err, key) {
    if (err) {
      console.log(err)
    }
    fs.writeFile('pwd/pwd', key.toString('base64'), function (err) {
      if (err) return cb(err, {message: 'fs error', success: false})
      return cb(null, {message: 'ok', success: true})
    })
  })
}

exports.AuthPassword = function (password, cb) {
  crypto.pbkdf2(password, 'Babayatu'.toString('base64'), 10000, 512, 'sha512', function (err, key) {
    var pwd = fs.readFileSync(path + '/pwd/pwd', 'utf8')

    if (err) return cb(err, {message: 'crypto error', success: false})
    else if (key.toString('base64') === pwd) return cb(null, {message: 'ok', success: true})
    else return cb(null, {message: 'Password Denied', success: false})
  })
}

exports.BindCurrentPassword = function (password) {
  crypto.pbkdf2(password, 'Babayatu'.toString('base64'), 10000, 512, 'sha512', function (err, key) {
    if (!err) currentPassword = key.toString('base64')
  })
}

exports.GetCurrentPassword = function () {
  return currentPassword
}
