const express = require('express');
const route = express.Router();
const QuestionController = require('./controllers/questionController');
const RoomController = require('./controllers/roomController');

route.get('/', (req, res )=> res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

route.get('/room/:room', RoomController.open);
route.post('/create-room', RoomController.create);
route.post('/enter-room', RoomController.enter);

route.post('/question/create/:room', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);

module.exports = route;

