// Import stylesheets
import Table from './src/Table';
import './stts-style.css';

// Write TypeScript
Table({
  target: 'stts-container',
  columns: [
    { headerText: 'First Name', dataValue: 'firstName' },
    {
      headerText: 'Last Name',
      dataValue: (item, column) => {
        return item['firstName'] + ' ' + item['lastName'];
      },
    },
  ],
  data: [{ firstName: 'Mahesh', lastName: 'Varma' }],
  options: {},
});
