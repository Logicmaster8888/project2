const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController');

// Update account information
router.post('profile/updateAccountInfo', ProfileController.updateAccountInfo);

// Update basic information
router.post('profile/updateBasicInfo', ProfileController.updateBasicInfo);

// Update contact information
router.post('profile/updateContactInfo', ProfileController.updateContactInfo);

// Update education information
router.post('profile/updateEducationInfo', ProfileController.updateEducationInfo);

module.exports = router;

// CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits
*    Author: Billie Heidelberg, Justin White
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/