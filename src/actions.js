//An action to add an employee
const addEmployee = (emp) => (
    {
        type: 'addEmployee',
        payload: emp
});

const removeEmployee = (id) => (
    {
        type: 'removeEmployee',
        payload: {id: id}
});

export {
    addEmployee, removeEmployee
}