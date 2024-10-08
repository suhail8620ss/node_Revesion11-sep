const users = require('../users.json')
const fs = require('fs');
function getAllUsers(req, res) {
     try {
          res.json(users);
     } catch (err) {
          console.log(err);
     }
}

function getUser(req, res) {
     try {
          let id = parseInt(req.params.id);
          let user = users.find((user) => user.id === id);
          console.log(user);
          res.json(user);
     } catch (err) {
          console.log(err);
     }
}

function addUser(req, res) {
     try {
          console.log(req.body);   // - add all user
          req.body.id = users.length + 1;
          users.push(req.body);  // 16 users
          fs.writeFile('users.json', JSON.stringify(users), (err) => {
               if (err) {
                    console.log(err);
               } else {
                    console.log("File has been written,,");
                    res.end("User easily Added...");
               }
          })
     } catch (err) {
          console.log(err);
     }
}
function putEditUser(req, res) {
     try {
          let id = parseInt(req.params.id);
          let index = users.findIndex((user) => user.id === id);
          console.log(index);
          users[index].first_name = 'Suhail'
          users[index].last_name = 'khan'
          users[index].email = 'suhail.khan@gmail.com'
          users[index].gender = 'male'
          fs.writeFile('users.json', JSON.stringify(users), (err) => {
               if (err) {
                    console.log(err);
               } else {
                    console.log("File has been upadated..................");
                    res.end("User is edit..........");
               }
          })
     } catch (err) {
          console.log("err");
     }
}

// function deleteUser(req, res) {
//      try {
//           let id = parseInt(req.params.id);
//           let index = users.findIndex((user) => user.id === id);
//           console.log(index);
//           users.splice(index, 1);
//           res.end("Delete in progress..");
//           fs.writeFile('users.json', JSON.stringify(users), (err) => {
//                if (err) {
//                     console.log(err);
//                } else {
//                     console.log("File has been upadated..................");
//                     res.end("User deleted...................");
//                }
//           })
//      } catch (err) {
//           console.log("err");
//      }
//}

module.exports = {
     getAllUsers,
     getUser,
     addUser,
     putEditUser,
   //  deleteUser
}