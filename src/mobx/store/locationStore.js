import { observable, action } from 'mobx';
import { getDatabase } from '../../shared/database';

export class LocationStore {
  @observable
  location = [];

  @action
  fetchLocationList() {
    getDatabase({ ref: '/location' }).on('value', (snapshot) => {
      this.location = [];
      snapshot.forEach((element) => {
        this.location.push({
          key: element.key,
          city: element.val().city,
          country: element.val().country,
          district: element.val().district,
          street_name: element.val().street_name,
          ward: element.val().ward,
          owner_id: element.val().owner_id,
          img: element.val().img,
        });
      });
    })
  }
}