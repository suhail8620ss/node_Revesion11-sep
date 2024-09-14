const express = require('express')
const router = express.Router();
router.use(express.json())
const usercontroller = require('../controller/usercontroller')

router.get('/users', (req, res) => {
     usercontroller.getAllUsers(req, res);
})
router.get('/users/:id', (req, res) => {
     usercontroller.getUser(req, res);
})

router.post('/add/users', (req, res) => {
     usercontroller.addUser(req, res);
})

router.put('/edit/users/:id', (req, res) => {
     usercontroller.putEditUser(req, res);
})

router.delete('/delete/users/:id', (req, res) => {
     usercontroller.deleteUser(req, res);
})
module.exports = router;