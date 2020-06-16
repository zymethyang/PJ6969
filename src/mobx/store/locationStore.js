import { observable, action } from 'mobx';
import { getDatabase } from '../../shared/database';

export class LocationStore {
  @observable
  location = [];

  @action
  async fetchLocationList() {
    this.location = await getDatabase({ ref: 'locations' });
  }

  @action
  deleteLocation({ objectId }) {
    this.location.forEach((loc, index) => {
      if (loc.id.indexOf(objectId) !== -1) {
        this.location.splice(index, 1);
      }
    })
  }

}