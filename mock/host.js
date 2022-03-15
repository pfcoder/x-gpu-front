const Mock = require("mockjs");

const List = [];
const count = 20;

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@increment",
      "name|1": ["RTX 3070", "RTX 2080", "P100"],
      gpu_number: 8,
      "gpu_ram_size|1": [11, 8],
      cpu_type: "Intel",
      cpu_core_number: 4,
      "ram_size|1": [128, 64],
      bandwidth_up: 100,
      bandwidth_down: 100,
      "rent_type|1": [0b1, 0b10, 0b11, 0b100, 0b110, 0b101],
    })
  );
}

module.exports = [
  {
    url: "/host/list",
    type: "get",
    response: (config) => {
      const {
        /*importance,
        type,
        title,*/
        page = 1,
        limit = 20,
        //sort,
      } = config.query;

      /*let mockList = List.filter((item) => {
        if (importance && item.importance !== +importance) return false;
        if (type && item.type !== type) return false;
        if (title && item.title.indexOf(title) < 0) return false;
        return true;
      });

      if (sort === "-id") {
        mockList = mockList.reverse();
      }*/

      let mockList = List;

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList,
        },
      };
    },
  },
];
