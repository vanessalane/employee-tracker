const inquirer = require('inquirer');
const employee = require('./employee');
const department = require('./department');
const role = require('./role');
const { promptForDepartment } = require('./department');
const { updateEmployeeRole } = require('./employee');

showMenu = (connection) => {
    return inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Employees',
            'View All Roles',
            'Add an Employee',
            'Add a Role',
            'Update an Employee Role',
            'Exit'
        ]
    }).then(responses => {
        switch(responses.action) {
            case 'View All Departments':
                viewAllDepartments(connection);
                break;
            case 'View All Employees':
                viewAllEmployees(connection);
                break;
            case 'View All Roles':
                viewAllRoles(connection);
                break;
            case 'Add an Employee':
                addNewEmployee(connection);
                break;
            case 'Add a Role':
                addNewRole(connection);
                break;
            case 'Update an Employee Role':
                const callbacks = [promptForDepartment, promptForRole, updateEmployeeRole];
                chooseEmployee(connection, callbacks);
                break;
            case 'Exit':
                console.log('Goodbye!');
                connection.end();
                break;
        };
    });
};

module.exports = showMenu;