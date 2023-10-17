

export const addEmployeeAction = (form) =>{
    return {
        type : 'ADD_EMPLOYEE',
        payload : form
    }
}
export const deleteEmployeeAction = (email) =>{
    return {
        type : 'DELETE_EMPLOYEE',
        payload : email
    }
}

export const editEmployeeAction = (email) =>{
    return {
        type : 'EDIT_EMPLOYEE',
        payload : email
    }
}

export const updateEmployeeAction = (updatedUsers) =>{
    return{
        type : 'UPDATE_EMPLOYEE',
        payload : updatedUsers
    }
}