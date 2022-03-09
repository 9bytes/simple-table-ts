// Import stylesheets
import Table from './src/Table';
import './stts-style.css';

// Write TypeScript
Table({
  target: 'stts-container',
  columns: [
    { headerText: 'First Name', valueProvider: 'firstName' },
    {
      headerText: 'Last Name',
      valueProvider: (item, column) => {
        return `<input type="checkbox" onchange="alert('${item['firstName']}')">`;
      },
    },
  ],
  data: [{ firstName: 'Mahesh', lastName: 'Varma' }],
  options: {},
});
