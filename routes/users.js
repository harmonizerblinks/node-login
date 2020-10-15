
module.exports = (app)=> {
    
    //Login page router
    app.get('/users/login', (req, res) => { res.render('login')});

    //Login page router
    app.get('/users/register', (req, res) => { res.render('register')});

}