import React from 'react';
import { Link } from 'react-router-dom';
import { MobXProviderContext, observer } from 'mobx-react';

function useStores() {
  return React.useContext(MobXProviderContext)
}

function AddAddressBtn() {
  return (
    <tr className="table__row black-1">
      <th className="black-1">
        <Link to="/add">
          <span className="material-icons table__row--icon">add</span>
              New
        </Link>
      </th>
    </tr>
  )
}

function RenderRows({ onPressEdit, onPressDelete }) {
  const { store } = useStores();
  return (
    <>
      {
        store.locationStore.location.map((loc) => (
          <tr className="table__row black-1" key={loc.key}>
            <th>{loc.street_name}</th>
            <th>{loc.ward}</th>
            <th>{loc.district}</th>
            <th>{loc.city}</th>
            <th>{loc.country}</th>
            <th>
              <img src={loc.img} width="20px" height="20px" alt="alt tag" />
            </th>
            <th>
              {
                loc.owner_id === store.authStore.userInfo.uid
                  ? (
                    <span>
                      <span onClick={() => onPressEdit(loc.key)}>Edit </span>
                      <span onClick={() => onPressDelete(loc.key)}>Delete</span>
                    </span>
                  ) : null
              }
            </th>
          </tr>
        ))
      }
    </>
  )
}

function Table({ onPressDelete, onPressEdit }) {
  return (
    <table className="table__container">
      <thead>
        <tr className="table__row black-1">
          <th><span className="material-icons table__row--icon">font_download</span>Street Name</th>
          <th><span className="material-icons table__row--icon">subject</span>Ward</th>
          <th><span className="material-icons table__row--icon">subject</span>District</th>
          <th><span className="material-icons table__row--icon">subject</span>City</th>
          <th><span className="material-icons table__row--icon">subject</span>Country</th>
          <th><span className="material-icons table__row--icon">subject</span>Image</th>
          <th><span className="material-icons table__row--icon">subject</span>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          RenderRows({ onPressEdit, onPressDelete })
        }
        {
          AddAddressBtn()
        }
      </tbody>
    </table>
  );
}


export default observer(Table);
