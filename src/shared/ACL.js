import React from 'react';
import { observer, inject } from 'mobx-react';

function ACL(Child) {
  @inject('store')
  @observer
  class ACL extends React.Component {
    render() {
      const { store } = this.props;
      if (!store.authStore.userInfo.uid && store.authStore.userInfo.uid !== 'loading') {
        window.location.href = '/login';
      }
      return store.authStore.userInfo.uid && store.authStore.userInfo.uid !== 'loading'
        ? <Child {...this.props} /> : null;
    }
  }
  return ACL;
}

export default ACL;
