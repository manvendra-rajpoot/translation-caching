const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//body-parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//route files
const translateRoutes = require('./routes/translate');

//dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//enable CORS
app.use(cors());

//mount routers
app.use('/translate', translateRoutes);

//error handler
// app.use((req,res,next) => {
//     const error = new Error('Not Found!');
//     error.status = 400;
//     next(error);
// });
// app.use((error, req, res, next) => {
//     res.status(error.status || 500).json({
//         error: {
//             message: error.message,
//         }
//     })
// })

module.exports = app;