import axios from 'axios';
// import swal from 'sweetalert';

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

export const getCustomMarketsFullTree = (buCode) => {
    return async function (getState) {
        const tree = await axios.get(`customMarkets/full-tree/${buCode}`)
        return tree.data;
    }
}

export const updateUserAdministrator = (userId, data) => {
    return async function (getState) {
        const userPermissions = await axios.put(`users/${userId}`, data, { headers: { 'Content-Type': 'application/json' } })
        return userPermissions.data;
    }
}

export const createUser = (data, buCode) => {
    return async function (getState) {
        const createNewUser =
            await axios.post(`users/${buCode}`, data, { headers: { 'Content-Type': 'application/json' } })
                .catch(function (error) {
                    if (error.response) {
                        // swal({
                        //     title: "Atención!!",
                        //     text: error.response.data,
                        //     icon: "error",
                        // });
                    }
                });
        return createNewUser;
    }


}