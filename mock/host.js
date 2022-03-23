const Mock = require("mockjs");

const TypeTags = ["GeForce RTX 3070 8G", "GeForce RTX 3080 11G", "P100 16G"];

const List = [];
const count = 20;

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@increment",
      "name|1": ["RTX 3070", "RTX 2080", "P100"],
      "type|1": TypeTags,
      gpu_number: 8,
      "gpu_ram_size|1": [11, 8],
      cpu_type: "Intel",
      cpu_core_number: 4,
      "ram_size|1": [128, 64],
      bandwidth_up: 100,
      bandwidth_down: 100,
      "rent_type|1": [0b1, 0b10, 0b11, 0b100, 0b110, 0b101],
      "price|1": [2, 4, 8],
    })
  );
}

module.exports = [
  {
    url: "/host/list",
    type: "get",
    response: (config) => {
      const {
        type,
        page = 1,
        limit = 20,
        //sort,
      } = config.query;

      let mockList = List.filter((item) => {
        if (type && type != "all" && item.type !== type) return false;
        return true;
      });

      /*if (sort === "-id") {
        mockList = mockList.reverse();
      }*/

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList,
          types: TypeTags,
        },
      };
    },
  },
];
