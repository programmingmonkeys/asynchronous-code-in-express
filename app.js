const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

// CALL BACKS
// function getUsers(cb) {
//   fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) return cb(err)
//     const users = JSON.parse(data)
//     return cb(null, users)
//   })
// }

// app.get('/', (req, res) => {
//   getUsers((err, users) => {
//     if (err) {
//       res.render('error', { error: err })
//     } else {
//       res.render('index', {
//         title: 'Users',
//         users: users.users,
//       })
//     }
//   })
// })

// CALLBACK HELL
// app.get('/:id', (req, res) => {
//   getUser(req.params.id, (err, user) => {
//     if (err) {
//       res.render('error', { error: err })
//     } else {
//       getFollowers(user, (err, followers) => {
//         if (err) {
//           res.render('error', { error: err })
//         } else {
//           res.render('profile', { title: 'Profile Page', user: user, followers: followers })
//         }
//       })
//     }
//   })
// })

// PROMISES
// function getUsers() {
//   return new Promise((res, rej) => {
//     fs.readFile('data.json', 'utf8', (err, data) => {
//       if (err) {
//         rej(err)
//       } else {
//         const users = JSON.parse(data)
//         res(users)
//       }
//     })
//   })
// }

// app.get('/', (req, res) => {
//   getUsers()
//     .then((users) => {
//       // throw new Error('testing catch')
//       res.render('index', {
//         title: 'Users',
//         users: users.users,
//       })
//     })
//     .catch((err) => {
//       res.render('error', { error: err })
//     })
// })

// An example of what using promises to perform two asynchronous operations might look like:
// app.get('/:id', (req, res) => {
//   getUser(req.params.id)
//     .then((user) => {
//       return getFollowers(user)
//     })
//     .then((user, followers) => {
//       res.render('profile', { title: 'Profile Page', users: user, followers: followers })
//     })
//     .catch((err) => {
//       res.render('error', { error: err })
//     })
// })

app.listen(3000, () => console.log('App listening on port 3000!'))
