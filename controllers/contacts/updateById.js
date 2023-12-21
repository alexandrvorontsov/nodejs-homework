const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const updateById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "Contact update",
    data: {
      result: contact,
    },
  });
};

module.exports = updateById;
