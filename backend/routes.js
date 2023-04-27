'use strict';

const { deleteOneUser } = require('./controllers/DeleteController');

module.exports = function (app) {
  let loginCtrl = require('./controllers/loginController')
  let passCtrl = require('./controllers/PasswordController')
  let AddCtrl = require('./controllers/AddController')
  let ListCtrl = require('./controllers/ListControler')
  let EditCtrl = require('./controllers/EditController')
  let ImportCtrl = require('./controllers/ImportController')
  let  DetailsCtrl = require('./controllers/Details')
  app.route('/login')
    .post(loginCtrl.post)

  app.route('/Password')
    .put(passCtrl.update)

  app.route('/Add')
    .post(AddCtrl.post)

  app.route('/Personnel')
    .get(ListCtrl.get)

  app.route('/Edit')
    .put(EditCtrl.put)

  app.route('/deleteuser')
    .delete(deleteOneUser)

    
  app.route('/Import')
  .post(ImportCtrl.post)

  app.route('/Details')
  .get(DetailsCtrl.get)
};