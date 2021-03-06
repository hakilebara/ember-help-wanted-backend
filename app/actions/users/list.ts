import { inject } from 'denali';
import AuthenticatedAction from '../authenticated';

export default class ListUsers extends AuthenticatedAction {

  githubApi = inject('service:github-api');

  adminOnly = true;

  async respond() {
    return this.db.all('user');
  }

}
