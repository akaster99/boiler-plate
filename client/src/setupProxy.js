const proxy = require('http-proxy-middleware');
const { traverseTwoPhase } = require('react-dom/test-utils');
module.exports = (app)=>{
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};