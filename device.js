const DEFAULT = {
  get date() {
    return new Date();
  },
  name: "unnamed",
};

class Device {
  constructor({ date, name } = DEFAULT) {
    this.date = date;
    this.name = name;
  }
}

module.exports = Device;
