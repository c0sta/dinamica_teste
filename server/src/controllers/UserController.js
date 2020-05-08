import User from "../models/User";
import randomName from "node-random-name";

module.exports = {
  generateUsers(req, res) {
    const users = Array(117)
      .fill()
      .map((item, index) => {
        const randName = randomName(); // Generate random name
        const user = new User({ name: `${randName} (${index})` });
        user.save();
        return user;
      });

    res.json({ message: "Users created", users });
  },
  listUsers(req, res) {
    User.find({})
      .then((data) => res.status(202).json(data)) // Accepted
      .catch(() => {
        res.status(400).json({ error: "Error listing users" });
      });
  },
  deleteUsers(req, res) {
    User.deleteMany({})
      .then(() => {
        res.status(202).json({ response: "All users removed" });
      })
      .catch(() => {
        res.status(400).json({ error: "Error deleting users" });
      });
  },
};
