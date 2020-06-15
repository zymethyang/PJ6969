import React from 'react';

function Table() {
  return (
    <table className="table__container">
      <thead>
        <tr className="table__row black-1">
          <th><span class="material-icons table__row--icon">font_download</span>Street Name</th>
          <th><span class="material-icons table__row--icon">subject</span>Ward</th>
          <th><span class="material-icons table__row--icon">subject</span>District</th>
          <th><span class="material-icons table__row--icon">subject</span>City</th>
          <th><span class="material-icons table__row--icon">subject</span>Country</th>
          <th><span class="material-icons table__row--icon">subject</span>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table__row white">
          <th>104 - 106 Bùi Đình Túy</th>
          <th>24</th>
          <th>Bình Thạnh</th>
          <th>Ho Chi Minh City</th>
          <th>Vietnam</th>
          <th>Edit, Delete</th>
        </tr>
        <tr className="table__row white">
          <th>138 Hai Ba Trưng</th>
          <th>Đa Kao ward</th>
          <th>District 1</th>
          <th>Ho Chi Minh City</th>
          <th>Vietnam</th>
          <th></th>
        </tr>
        <tr className="table__row black-1">
          <th>
            <span class="material-icons table__row--icon">add</span>
            New
          </th>
        </tr>
      </tbody>
    </table>
  );
}


export default Table;
