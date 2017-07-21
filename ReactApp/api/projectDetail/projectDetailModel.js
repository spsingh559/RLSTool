var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/RLSDB');

var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    _id:Date,
    projectID:String,
    projectName: String
});

var projectDetail = mongoose.model('projectDetails', ProjectSchema);

exports = module.exports = projectDetail;
