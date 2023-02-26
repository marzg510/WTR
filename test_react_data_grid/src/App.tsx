import './App.css';

import { useState } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid, { textEditor } from 'react-data-grid';
import { Column, SelectColumn } from 'react-data-grid';
import dateEditor, { timeEditor } from './DateEditor';
// TODO: Try DatePicker
// https://reactdatepicker.com/

interface Row {
  id: number;
  // workDate: string;
  workDate: Date;
  startTime: string;
  endTime: string;
  restTime: string;
  // workTime: Date;
  // work: string;
}

const columns: readonly Column<Row>[] = [
// const columns = [
  {
    ...SelectColumn,
    headerCellClass: "mycell",
    cellClass: "mycell"
  },
  { key: 'id', name: 'ID', width: 10, cellClass: "mycell" },
  { key: 'workDate', name: 'Date', width: 120, editor: dateEditor },
  { key: 'date', name: 'Date', width: 120, editor: dateEditor },
  { key: 'startTime', name: 'Start', width: 80, editor: timeEditor },
  { key: 'endTime', name: 'End', width: 80, editor: timeEditor },
  { key: 'restTime', name: 'Rest', width: 80, editor: timeEditor },
  { key: 'workTime', name: 'Working', width: 80 },
  { key: 'work', name: 'Work', width: 300, editor: textEditor },
];

function App() {
  const [rows,setRows] = useState([
    // { id: 0, workDate: '2022-01-01', startTime: '09:00', endTime: '10:00', restTime:'0:00' },
    // { id: 1, workDate: '2022-02-01', startTime: '10:00', endTime: '11:00', restTime:'0:00' },
    { id: 0, workDate: new Date(Date.parse('2022-01-01')), startTime: '09:00', endTime: '10:00', restTime:'0:00' },
    // { id: 1, date: '2022-02-01', startTime: '10:00', endTime: '11:00', restTime:'0:00' },
  ]);
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      onRowsChange={setRows}
    />
  );
}

export default App;
