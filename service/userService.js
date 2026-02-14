export const userService = {
  async login(email, password) {
    if (!email || !password) throw new Error("Missing credentials");
    return Promise.resolve({ id: "u1", name: "Demo User", email });
  },
  async signup({ name, email, password }) {
    if (!name || !email || !password) throw new Error("Missing fields");
    return Promise.resolve({ id: "u2", name, email });
  }
};
