const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const expired = {
  run: (date) => {
    const now = new Date();
    if(months.slice(9-now.getMonth(), 12-now.getMonth())[0] >= date.getMonth() && date.getFullYear() == now.getFullYear()) {
      return false;
    }
    return true;
  },
  isAsync: true,
  arguments: [{ name: "date", type: "Date" }],
  description: "Is certification expired ?"
};


module.exports = {
  sc_plugin_api_version: 1,
  functions: { expired }
};
