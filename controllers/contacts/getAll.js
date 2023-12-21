const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const contact = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = getAll;
