import { GetCustomersRequestParams } from "@src/apis/customer/dtos";

export const getCustomersAPI = (params: GetCustomersRequestParams) => {
  console.log("params >>>>", params);
  return { rows: [], count: 0 };
};
