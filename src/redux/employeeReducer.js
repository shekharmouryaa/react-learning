
const initialState = {
    employees : [],
    selectedEmail :""
}
        
export const employeeReducer = (state = initialState , action) => {

    switch(action.type){
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees : state.employees.concat(action.payload)
            }
            case 'DELETE_EMPLOYEE':
            return {
                ...state,
                employees : state.employees.filter(item => item.email !== action.payload)
            }
            case 'EDIT_EMPLOYEE':
                return {
                    ...state,
                    selectedEmail : action.payload
                }
                case 'UPDATE_EMPLOYEE':
                return {
                    ...state,
                    selectedEmail : "",
                    employees : action.payload
                }
        default:
            return state
    }
    
}
