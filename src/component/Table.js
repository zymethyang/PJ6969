import React from 'react';
import { Link } from 'react-router-dom';
import { MobXProviderContext, observer } from 'mobx-react';

function useStores() {
  return React.useContext(MobXProviderContext)
}

function Table() {
  const { store } = useStores();

  return (
    <table className="table__container">
      <thead>
        <tr className="table__row black-1">
          <th><span className="material-icons table__row--icon">font_download</span>Street Name</th>
          <th><span className="material-icons table__row--icon">subject</span>Ward</th>
          <th><span className="material-icons table__row--icon">subject</span>District</th>
          <th><span className="material-icons table__row--icon">subject</span>City</th>
          <th><span className="material-icons table__row--icon">subject</span>Country</th>
          <th><span className="material-icons table__row--icon">subject</span>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          store.locationStore.location.map((loc) => (
            <tr className="table__row black-1" key={loc.key}>
              <th>{loc['street-name']}</th>
              <th>{loc.ward}</th>
              <th>{loc.district}</th>
              <th>{loc.city}</th>
              <th>{loc.country}</th>
              <th></th>
            </tr>
          ))
        }
        <tr className="table__row black-1">
          <Link to="/add">
            <th className="black-1">
              <span className="material-icons table__row--icon">add</span>
            New
          </th>
          </Link>
        </tr>
      </tbody>
    </table>
  );
}


export default observer(Table);
