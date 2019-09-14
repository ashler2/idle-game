exports.formatCash = cash => {
  return cash.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
