const express = require('express');
const asyncHandler = require('express-async-handler');
const { Album } = require("../../db/models")

const router = express.Router();

  // create and add album
  router.post('/', asyncHandler(async (req, res, next) => {
    
    console.log(req.body)
    const {name, userId} = req.body
    
    const data = await Album.create({
      name,
      userId
    })
      return res.json(data)
  }));

  // get all albums by user id
  router.get('/:id', asyncHandler(async (req, res, next) => {

    const id  = req.params.id
    const data = await Album.getUserAlbums(id)
      res.json(data);

  }));



module.exports = router;
