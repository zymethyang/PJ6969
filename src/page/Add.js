import React from 'react';
import { inject, observer } from 'mobx-react';

import AddressForm from '../layout/AddressForm';


@inject('store')
@observer
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'street-name': '',
      'ward': '',
      'district': '',
      'city': '',
      'country': '',
    }
  }


  onValueChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className="login__container">
        <AddressForm
          onChange={(e) => this.onValueChange(e)}
          onPressSubmit={() => console.log(this.state)}
        />
      </div>
    )
  }

};


export default observer(Login);
