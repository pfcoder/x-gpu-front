import request from "@/utils/request";

export function fetchList(query) {
  return request({
    url: "/host/list",
    method: "get",
    params: query,
  });
}
