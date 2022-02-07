module.exports = async (req, res, next) => {
  const error = new Error('You do not have access to view this page');
  error.status = 403;

  if (req.user.email !== 'admin') next(error);

  next();
};
