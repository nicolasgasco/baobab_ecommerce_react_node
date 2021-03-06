const languageCodeJoi = require("../joi/languageCode");

const { Department } = require("../models/departments");

const getLocalizedDepartments = async (req, res) => {
  // Validating language code first
  let language = req.query.lang;
  const joiValidation = languageCodeJoi.validate(language);
  if (joiValidation.error) {
    res.status(400).send({
      error: `${
        joiValidation.error.name
      } (Joi): ${joiValidation.error.details.map((err) => {
        return err.message;
      })}`,
    });
    return;
  }

  console.log("Joi validation successful");

  // Showing only the desired language
  let filter;
  if (language) {
    filter = { _id: 1 };
    filter[`translations.${language}`] = 1;
  }

  // Database request
  const departments = await Department.find()
    .sort(`translations.${language}`)
    .sort("name")
    .select(filter);

  if (departments.length === 0) {
    return res.status(404).send({ error: "Nothing found" });
  } else {
    res.send({
      resultsFound: departments.length,
      sortBy: language,
      results: departments,
    });
  }
};

const getDepartmentById = async (req, res) => {
  let id = req.params.id;

  // Database request
  const department = await Department.find({ _id: id });
  if (!department[0]) {
    return res.status(404).send({ error: "Department not found" });
  }
  res.send({
    resultsFound: 1,
    result: department[0],
  });
};

const postNewDepartment = async (req, res) => {
  // Creating new mongoose department with body
  const department = new Department(req.body);

  // Validation with Mongoose
  await department.validate();
  console.log("Mongoose validation successful");

  // Saving in DB and sending result
  const result = await department.save();
  res.send({ insertedCount: 1, result: result });
};

exports.getLocalizedDepartments = getLocalizedDepartments;
exports.getDepartmentById = getDepartmentById;
exports.postNewDepartment = postNewDepartment;
