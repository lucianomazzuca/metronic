import axios from 'axios';

export const getUsers = () => {
    return async function (getState) {
        const users = await axios.get(`users`)
        return users.data;
    }
}

export const getUserPermissions = (userId) => {
    return async function (getState) {
        const userPermissions = await axios.get(`users/${userId}/permissions`)
        return userPermissions.data;
    }
}

export const updateUserPermissions = (userId, permissions) => {
    return async function (getState) {
        const userPermissions = await axios.put(`users/${userId}/permissions`, permissions)
        return userPermissions.data;
    }
}

export const updateUser = (id, data) => {
    return async function (getState) {
        debugger
        const user = await axios.put(`users/${id}`, data, { headers: { 'Content-Type': 'application/json' } })
        return user.data;
    }
}

export const createUser = (data) => {
    return async function (getState) {
        const createNewUser = await axios.post(`users`, data, { headers: { 'Content-Type': 'application/json' } })
        return createNewUser;
    }
}