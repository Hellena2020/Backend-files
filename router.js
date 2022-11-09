const express = require('express')
const todoSchema = require('../modules/todoSchema')
const router = express.Router();

router.post("/todos", (req, res) =>{
    console.log("position my todos")
})

module.export=Router;


