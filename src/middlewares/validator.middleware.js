export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.errors.map((error) => error.message),
      data: null,
    });
  }
};
