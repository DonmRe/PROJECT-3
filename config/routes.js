var express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/users')


// require controllers
    //for api
var {apiIndex, apiShow, apiCreate, apiUpdate, apiDestroy} = require('../controllers/apis'),
    //for users
    {index, create, update, destroy} = require('../controllers/users')

//this is for users
router.route('/')
  .get(index)
  .post(create)

router.route('/users/:id')
  .post(update)

router.route('/users/:id/delete')
  .post(destroy)

function authenticateUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
}

router.route('/apis')
  .get(apisController.getapiShow)

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route("/logout")
  .get(usersController.getLogout)

module.exports = router
