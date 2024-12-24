const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // Get a single user PLUS all their thoughts and friends
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).populate("thoughts friends");
  
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
  
      res.json(user);
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(400).json({ message: "An error occurred while retrieving the user." });
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // PUT - update user here
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with this id!" });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },
  // Delete a user and associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      if (user.thoughts.length > 0) {
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
      }
      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },
  
  // Add a friend to a user's friend list
  async addFriend(req, res) {
    try {
      const user = await User.findById(req.params.userId);  
      if (!user) return res.status(404).json({ message: 'User not found' });
      
      const friend = await User.findById(req.params.friendId);  
      if (!friend) return res.status(404).json({ message: 'Friend not found' });
      
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,  
        { $addToSet: { friends: friend._id } },  
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  },

 // Remove a friend from a user's friend list
 async removeFriend(req, res) {
  try {
    const user = await User.findById(req.params.userId);  
    if (!user) return res.status(404).json({ message: 'User not found' });

    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,  
      { $pull: { friends: req.params.friendId } },  
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Friend not found in user\'s friend list' });
    }

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }

}
}