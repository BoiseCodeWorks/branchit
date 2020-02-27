function yepItsGood() {
  console.log("I do cool things and such");
}

yepItsGood();
function getUserProfile(req, res, next) {

    try {
      let profile = await profilesService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
