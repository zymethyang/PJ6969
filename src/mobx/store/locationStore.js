import { observable, action } from 'mobx';
import { getDatabase } from '../../shared/database';

export class LocationStore {
  @observable
  location = [];

  @action
  fetchLocationList() {
    getDatabase({ ref: '/location' }).on('value', (snapshot) => {
      snapshot.forEach((element) => {
        this.location.push({
          key: element.key,
          city: element.val().city,
          country: element.val().country,
          district: element.val().district,
          'street-name': element.val()['street-name'],
          ward: element.val().ward,
        });
      });
    })
  }
}