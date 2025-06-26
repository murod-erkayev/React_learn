import axiosInstance from "../api";

export const Users = {
  async getAll() {
    try {
      const res = await axiosInstance.get("/users");
      return res.data || [];
    } catch (error) {
      console.log(error);
    }
  },

  async createUser(model) {
    try {
      const res = await axiosInstance.post("/users", model);
      return res;
    } catch (error) {
      console.log(error);
      return { status: 500 };
    }
  },
  async deleteUser(id) {
    try {
      const res = await axiosInstance.delete(`/users/${id}`);
      return res;
    } catch (error) {
      console.log(error);
      return { status: 500 };
    }
  },
  async updateUser(id, model) {
    try {
      const res = await axiosInstance.patch(`/users/${id}`, model);
      return res;
    } catch (error) {
      console.log(error);
      return { status: 500, massage: "Updata Qilishda hotlik" };
    }
  },
};
