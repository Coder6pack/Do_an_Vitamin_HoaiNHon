import axiosClient from "./apiClient";

const productApi = {
  getAll(params) {
    const url = "/gummi";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/gummi/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/gummi`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/gummi/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/gummi/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
