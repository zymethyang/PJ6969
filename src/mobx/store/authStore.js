import { observable } from 'mobx';

export class AuthStore {
  @observable
  userInfo = {};
}