import React from 'react';
import { inject, observer } from 'mobx-react';

import AddressForm from '../layout/AddressForm';
import { putDatabase, getDatabase } from '../shared/database';
import { pushStorage } from '../shared/storage';
import { geoPosition, geoPositionText } from '../shared/geoLoc';


@inject('store')
@observer
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'street_name': '',
      'ward': '',
      'district': '',
      'city': '',
      'country': '',
      'img': '',
      'owner_id': '',
    }
  }


  onValueChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  async onPressGeoLoc() {
    const position = await geoPosition();
    const positionText = await geoPositionText({ longitude: position.longitude, latitude: position.latitude });

    this.setState({
      city: positionText.city,
      country: positionText.country,
      district: positionText.district,
      street_name: positionText.street_name,
    });
  }

  onSubmit({ data }) {
    const { match: { params: { id } } } = this.props;
    putDatabase({ ref: `/location/${id}`, data }).then(() => {
      alert("Đã lưu!");
    }).catch((err) => {
      alert(err);
    });
  }

  componentDidMount() {
    const fileButton = document.getElementById('fileButton');

    fileButton.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      const downloadURL = await pushStorage({ ref: 'pj6969/img', file });
      this.setState({
        img: downloadURL,
      });
      alert("Hoàn thành upload!");
    });

    const { match: { params: { id } } } = this.props;
    getDatabase({ ref: `/location/${id}` }).once('value', (snapshot) => {
      const doc = snapshot.val();
      if (doc) {
        this.setState(doc)
      }
    });
  }

  render() {
    return (
      <div className="login__container" >
        <AddressForm
          value={this.state}
          onChange={(e) => this.onValueChange(e)}
          onPressGoBack={() => this.props.history.replace('/')}
          onPressSubmit={() => this.onSubmit({ data: this.state })}
          onPressGeoLoc={() => this.onPressGeoLoc()}
        />
      </div>
    )
  }

};


export default Edit;
