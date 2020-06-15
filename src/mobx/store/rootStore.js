import { AuthStore } from './authStore';

export class RootStore {
    constructor() {
        this.authStore = new AuthStore(this)
    }
}