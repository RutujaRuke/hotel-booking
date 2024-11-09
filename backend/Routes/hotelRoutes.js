const express = require('express');
const router = express.Router();
const hotelController = require('../Controller/hotelController');

router.post('/add', hotelController.addHotel);
router.delete('/delete', hotelController.deleteHotel);
router.get('/all', hotelController.getAllHotels);

module.exports = router;
