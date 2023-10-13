
const initialState = {
    employees : []
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
        default:
            return state
    }
    
}
