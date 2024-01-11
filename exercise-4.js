// - ให้เขียน Query หายอดขายทั้งหมดในแต่ละปี
//     - โดยที่เรียงจากปีล่าสุดไปเก่าที่สุด

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { $year: "$created_at" },
      total_price_per_year: { $sum: "$total_price" },
    },
  },
  { $sort: { total_price_per_year: 1 } },
]);
