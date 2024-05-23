const express = require('express');
const checkListRouter = require('./src/routes/checkList')

const app = express();
app.use(express.json());

app.use('/checkLists', checkListRouter);

// //criando Middlewares
// const log = (req, res, next) => {
//     console.log(req.body);
//     console.log(`Data: ${Date.now()}`);
//     next();
// }

// app.use(log);
// //---------------------//

// app.get('/', (req, res) => {
//     res.send('<h1>My List of Tasks :)</h1>');
// });

// app.get('/json', (req, res) => {
//     console.log(req.body);
//     res.json({title: 'Tasks X', done: true});
// })

app.listen(3000, () => {
    console.log('Server listening on port');
});