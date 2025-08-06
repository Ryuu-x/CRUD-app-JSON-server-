import axios from 'axios';
import { data } from 'react-router-dom';

const API_URL = 'http://localhost:3002/users'

export const addUser = async (data) => {
    try {
        return await axios.post(API_URL, data);
    } catch (error) {
        console.log('Error while calling AddUser API', error.message);
    }
}

export const getUsers = async () => {
    try {
        return axios.get(API_URL);
    } catch (error) {
        console.log("Error while calling GetUsers API", error.message);

    }
}

export const getUserApi = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`)
    } catch (error) {
        console.log("Error while calling getUserAPI", error.message);
    }
}

export const editUser = async (data, id) => {
    try {
        return await axios.put(`${API_URL}/${id}`, data);
    } catch (error) {
        console.log("Error while calling editUserAPI", error.message);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log("Error while calling deleteUserAPI", error.message);
    }
}