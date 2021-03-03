//reducer takes in two arguments the current state and an action
export default function appReducer(state = [], action)
{
    switch (action.type)
    {
        case 'addEmployee':
            const {payload} = action;
            return[
                ...state,
                {
                    id: payload.id,
                    fullname: payload.fullname,
                    description: payload.description
                }
               
            ]
        default:
            return state;
    }
}
    