const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "Success",
    code: 200,
    message: "Status updated",
    data: {
      contact,
    },
  });
};

module.exports = updateStatus;
