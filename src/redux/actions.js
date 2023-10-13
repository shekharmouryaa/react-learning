

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