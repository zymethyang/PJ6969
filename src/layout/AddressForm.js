import React from 'react';

const INPUT_FIELD = [
  {
    title: 'Street Name',
    name: 'street_name',
  },
  {
    title: 'Ward',
    name: 'ward',
  },
  {
    title: 'District',
    name: 'district',
  },
  {
    title: 'City',
    name: 'city',
  },
  {
    title: 'Country',
    name: 'country'
  }
]

function AddressForm(props) {
  const { onChange, onPressSubmit, onPressGeoLoc, onPressGoBack, value } = props;
  return (
    <form className="address-form__container">
      {
        INPUT_FIELD.map((field) => (
          <div className="address-form__input-field" key={field.name}>
            <label
              className="address-form--label gray"
            >
              {field.title}
            </label>
            <input
              className="address-form--input"
              name={field.name}
              type="text"
              onChange={onChange}
              value={value[field.name]}
            />
          </div>
        ))
      }
      <div className="address-form__input-field">
        <label
          className="address-form--label gray"
        >
          Ảnh
        </label>
        <input
          className="address-form--input"
          type="file"
          id="fileButton"
        />
      </div>
      <div className="address-form__footer">
        <button
          className="address-form__button"
          type="button"
          onClick={() => onPressGeoLoc()}
        >
          Tọa độ
        </button>
        <button
          className="address-form__button"
          type="button"
          onClick={() => onPressGoBack()}
        >
          Quay lại
        </button>
        <button
          className="address-form__button"
          type="button"
          onClick={() => onPressSubmit()}
        >
          Xác nhận
        </button>
      </div>
    </form >
  )
}

export default AddressForm;
