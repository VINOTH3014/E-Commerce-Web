export const orderService = {
  async create(order) {
    
    return Promise.resolve({
      id: String(Math.floor(Math.random() * 1_000_000)),
      ...order,
      status: "PLACED",
      createdAt: new Date().toISOString()
    });
  },
  async listByUser(userId) {
    return Promise.resolve([]); // Start empty
  }
};
