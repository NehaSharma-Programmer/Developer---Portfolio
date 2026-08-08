
const Contact = require("../models/Contact");

const sendMessage = async (req, res) => {
  try {

    const { name, email, message } = req.body;

    const newMessage = await Contact.create({
      name,
      email,
      message,
    });


    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });


  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};


module.exports = {
  sendMessage,
};