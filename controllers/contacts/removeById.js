const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const removeById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndDelete(id);
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "Contact deleted",
    data: {
      result: contact,
    },
  });
};

module.exports = removeById;
