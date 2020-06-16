import { AuthStore } from './authStore';
import { LocationStore } from './locationStore';

export class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.locationStore = new LocationStore(this);
  }
}