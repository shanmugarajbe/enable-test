const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');



const createRoom = catchAsync(async (req, res) => {
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.enablex.io/video/v1/rooms',
  'headers': {
    'Authorization': process.env.TOKEN || 'Basic NjE0YzJlNzY0OWVmYzQ0MDAxNTg0MzEzOmVhdW11TnVFYWFlR2FMeUhlUmFxeXllcGVTYVR1TXV1eXNlag==',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "Topic or Room Title",
    "owner_ref": "xyz",
    "settings": {
      "description": "Descriptive text",
      "mode": "group",
      "scheduled": false,
      "adhoc": false,
      "duration": 30,
      "moderators": "1",
      "participants": "2",
      "auto_recording": false,
      "quality": "SD"
    },
    "sip": {
      "enabled": false
    },
    "data": {
      "custom_key": ""
    }
  })

};
request(options, function (error, response) {
  // if (error) throw new Error(error);
  if(error) {
    console.log(response);
  return res.status(500).json({
    code: 500,
    message: "Error while creating a room"
  })

}
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

  
});

/* const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
}); */

module.exports = {
  createRoom
};
