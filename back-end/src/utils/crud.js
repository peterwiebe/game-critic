export const createOne = model => async (req, res) => {
  try {
    const doc = await model.create({ ...req.body });
    res.status(201).json({ data: doc });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

export const getMany = model => async (req, res) => {
  try {
    const docs = await model
      .find()
      .lean()
      .exec();

    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getOne = model => async (req, res) => {
  try {
    const doc = await model
      .findOne({ _id: req.params.id })
      .lean()
      .exec();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

export const crudControllers = model => ({
  createOne: createOne(model),
  getMany: getMany(model),
  getOne: getOne(model)
});
