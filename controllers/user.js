const User = require('../models/user');

//팔로우
exports.follow = async (req,res,next)=>{
  try{
    const user = await User.findOne({ where: {id: req.user.id}});
    if(user) {
      await user.addFollowing(parseInt(req.params.id, 10));
      res.send('success');
    }else{
      res.status(404).send('no user');
    }
  }catch(error){
    console.error(error);
    next(error);
  }
};
//언팔로우.
exports.unfollow = async (req,res, next) =>{
  try{
    const user = await User.findOne({where: {id: req.params.id}});
    if(user){  
    await user.removeFollower(parseInt(req.user.id),10);
    res.send('success');
    }
  }catch(error){
    console.error(error);
    next(error);
  }
}