const { NotFound } = require("http-errors");

const contactsOperations = require("../../models");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.updateById(id, req.body);
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
