import React from 'react';

const INPUT_FIELD = [
  {
    title: 'Street Name',
    name: 'street-name',
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
  const { onChange, onPressSubmit } = props;
  return (
    <form className="address-form__container">
      {
        INPUT_FIELD.map((field) => (
          <div className="address-form__input-field">
            <label
              htmlFor="item-name-input"
              className="address-form__username--label gray"
            >
              {field.title}
            </label>
            <input
              className="address-form__username--input"
              name={field.name}
              type="text"
              onChange={onChange}
            />
          </div>
        ))
      }
      <button
        className="address-form__submit"
        type="button"
        onClick={() => onPressSubmit()}
      >
        Xác nhận
      </button>
    </form >
  )
}

export default AddressForm;
