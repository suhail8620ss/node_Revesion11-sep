const express = require('express')
const router = express.Router();
const usercontroller = require('../controller/usercontroller')

router.get('/users', (req, res) => {
     usercontroller.getAllUsers(req, res);
})
router.get('/users/:id', (req, res) => {
     usercontroller.getUser(req, res);
})
router.post('/add/users', (req, res) => {
     usercontroller.postAddUser(req, res);
})
router.put('/edit/users/:id', (req, res) => {
     usercontroller.putEditUser(req, res);
})
router.delete('/delete/users', (req, res) => {
     usercontroller.deleteUser(req, res);
})
module.exports = router;