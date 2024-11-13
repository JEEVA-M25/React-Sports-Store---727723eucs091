import axios from "axios";

const API_URL = "http://localhost:3001";

// Helper function to find a user by email
const findUserByEmail = async (email) => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data.find(user => user.email === email);
};

export const login = async (email, password) => {
    const user = await findUserByEmail(email);
    if (user && user.password === password) {
        return { success: true, user };
    } else {
        throw new Error("Invalid email or password");
    }
};

export const register = async (name, email, password) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }

    const newUser = { name, email, password };

    return axios
        .post(`${API_URL}/users`, newUser)
        .then(response => {
            return { success: true, user: response.data };
        });
};

export const resetPassword = async (email) => {
    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error("User not found");
    }

    const newPassword = prompt("Enter your new password:");
    if (!newPassword) throw new Error("New password is required");

    // Update user password (this might require a PUT request if using a real backend)
    await axios.patch(`${API_URL}/users/${user.id}`, { password: newPassword });
};
