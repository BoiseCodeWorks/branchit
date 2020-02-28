function yepItsGood() {
  console.log("I do cool things and such");
}

yepItsGood();
async function getUserProfile(req, res, next) {
  try {
    // FIXME Where is the profilesService???
    // let profile = await profilesService.getProfile(req.userInfo);
    // res.send(profile);
  } catch (error) {
    next(error);
  }
}
