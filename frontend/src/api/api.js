import axios from 'axios';

export const createUser = async (user) => {
    const response = await axios.post('/api/users/new', user);
    return response.data;
};

export const getAllSnippets = async () => {
    const response = await axios.get('/api/snippets');
    return response.data;
};

export const getSnippetById = async (id) => {
    const response = await axios.get(`/api/snippets/${id}`);
    return response.data;
};

export const updateSnippet = async (id, updatedSnippet) => {
    const response = await axios.put(`/api/snippets/${id}`, updatedSnippet);
    return response.data;
};

export const deleteSnippet = async (id) => {
    const response = await axios.delete(`/api/snippets/${id}`);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post('/api/users/login', credentials);
    return response.data;
};

export const logout = async () => {
    // The specifics of this function will depend on how you've implemented authentication on your backend
    const response = await axios.post('/api/users/logout');
    return response.data;
};