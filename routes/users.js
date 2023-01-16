module.exports = (app) => {

    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
    
            users:[{
    
                name: 'Matheus Teste',
                email: 'matheus@gmail.com',
    
            }],
    
        });
    
    });
    
    app.get('/users/admin', (req, res) => {
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
    
            users:[],
    
        });
    
    });

};