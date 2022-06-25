import userModal from "../modals/user.modal.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModal.find({});
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log("Error in getAllUsers =>", error);
  }
};

export const userSignup = async (req, res) => {
  try {
    const {
      body: { email, firstName, lastName },
    } = req;
    const newUser = await userModal.create({
      email,
      lastName,
      firstName,
    });
    if (newUser) {
      res.status(200).json({
        user: newUser,
      });
    } else {
      res.status(400).json({
        msg: "Unable to create user",
      });
    }
  } catch (error) {
    console.log("Error in userSignup", error);
  }
};
