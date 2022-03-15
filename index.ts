// Import stylesheets
import Table from './src/Table';
import './stts-style.css';

// TODO: Consumer example will be moved to examples section
Table({
  target: 'stts-container',
  columns: [
    {
      headerText: 'Last Name',
      valueProvider: (item, column) => {
        return `<input type="checkbox" onchange="alert('${item['firstName']}')">`;
      },
    },
    { headerText: 'First Name', valueProvider: 'firstName' },
    { headerText: 'Last Name', valueProvider: 'lastName' },
  ],
  data: [{ firstName: 'Mahesh', lastName: 'Varma' }],
  options: {},
});
