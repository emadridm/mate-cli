import { BaseAccount } from './account';

export class ExchangeAccount extends BaseAccount {

  static schema = {
    name: 'Account',
    properties: {
      _id: 'objectId',
      provider: 'string',
      name: 'sptring',
      address: 'string?',
      username: 'string?',
      password: 'string?',
      status: 'string?'
    }
  }

  address?: string;
  username?: string;
  password?: string;
  status?: string;

  constructor(name: string) {
    super(name);
  }
}
