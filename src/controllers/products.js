exports.createProduct = (req, res, next) => {
  res.json({
    message: "Create Product Success",
    data: {
      id: 1,
      price: 5000000,
    },
  });
  next();
};

exports.getProduct = (req, res, next) => {
  res.json({
    message: "Get Product Success",
    data: {
      isi: "isi produk",
    },
  });
};
