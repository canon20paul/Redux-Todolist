const initialData = {
    taskitems: []
}
function taskReducer(state=initialData, action)
{
    switch(action.type)
    {
        case 'ADD_TASK': return {
            ...state,
            taskitems: [...state.taskitems , action.payload ]
        }
    }
    return state
}
export default taskReducer