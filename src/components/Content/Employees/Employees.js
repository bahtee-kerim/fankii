import React from 'react';
import s from './Employees.module.css';
import NameCount from './NameCount';
import EmployeesData from './EmployeesData';

function Employees() {
  return (
    <div className={s.employees}>
      <NameCount />
      <EmployeesData />
    </div>
  )
}

export default Employees;
