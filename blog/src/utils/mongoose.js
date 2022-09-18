module.exports = {
  listDBtoArrayObj: function (arr) {
    return arr.map((item) => item.toObject());
  },
  entityToObj: function (obj) {
    return obj ? obj.toObject() : obj;
  },
};
