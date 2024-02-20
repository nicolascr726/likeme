const { Router } = require('express');
const getPosts = require('../consultas/getPosts');
const postPosts = require('../consultas/postPosts');


path = require('path');


const routes = new Router();

routes.get('/posts', getPosts) 

routes.post('/posts', postPosts);




module.exports = routes;