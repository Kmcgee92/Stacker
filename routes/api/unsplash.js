const express = require('express');
const fetch = require('node-fetch')
const asyncHandler = require('express-async-handler');
const {apiKey} = require("../../config").unsplash
// const { User } = require("../../db/models");

const router = express.Router();

router.get('/:pageNum(\\d+)/:query/:perPage', asyncHandler(async (req, res, next) => {
  
  const {pageNum, query, perPage} = req.params


  const response = await fetch(`http://api.unsplash.com/search/photos?client_id=${apiKey}&page=${pageNum}&query=${query}&per_page=${perPage}`)

  const data = await response.json()


  res.json({ ...data });
}));

module.exports = router;
