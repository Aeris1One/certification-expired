let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const expired = {
  run: () => {
    var now = new Date();
    if(months.slice(9-now.getMonth(), 12-now.getMonth())[0] >= date.getMonth() && date.getFullYear() == now.getFullYear()) {
      return false
    }
    return true
  }
}
  },
  description: "Is certification expired ?",
  isAsync: false,
  arguments: [{ name: "date", type: "Date" }],
};

module.exports = {
  sc_plugin_api_version: 1,
  functions: { expired },
};
