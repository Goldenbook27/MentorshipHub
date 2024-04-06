const users = require('./users')

const Routes = (app) => {
    app.use("/user", users);
};
  
module.exports = Routes;