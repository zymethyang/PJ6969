import React from 'react';
import { inject, observer } from 'mobx-react';

import AddressForm from '../layout/AddressForm';
import { pushDatabase } from '../shared/database';
import { pushStorage } from '../shared/storage';


@inject('store')
@observer
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'street_name': '',
      'ward': '',
      'district': '',
      'city': '',
      'country': '',
      'img': '',
    }
  }


  onValueChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  clearState() {
    this.setState({
      'street_name': '',
      'ward': '',
      'district': '',
      'city': '',
      'country': '',
      'img': '',
    });
  }

  onSubmit({ data, uid }) {
    const uploadDocument = { ...data };
    uploadDocument.owner_id = uid;

    pushDatabase({ ref: '/location', data: uploadDocument }).then(() => {
      this.clearState();
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
  }

  render() {
    const { store } = this.props;
    const { uid } = store.authStore.userInfo;

    return (
      <div className="login__container" >
        <AddressForm
          value={this.state}
          onChange={(e) => this.onValueChange(e)}
          onPressSubmit={() => this.onSubmit({ data: this.state, uid })}
        />
      </div>
    )
  }

};


export default Add;
