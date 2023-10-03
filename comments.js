// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../models/user');