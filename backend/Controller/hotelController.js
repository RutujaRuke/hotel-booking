const Hotel = require('../models/hotelModel');

exports.addHotel = (req, res) => {
  const { name, location } = req.body;
  Hotel.addHotel(name, location, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Hotel added successfully', data: results });
  });
};

exports.deleteHotel = (req, res) => {
  const { id } = req.body;
  Hotel.deleteHotel(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Hotel deleted successfully', data: results });
  });
};

exports.getAllHotels = (req, res) => {
  Hotel.getAllHotels((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ hotels: results });
  });
};
