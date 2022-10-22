/* istanbul ignore file */
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Account } from '../../modules/account/entities/account.entity';
import { Hash } from '../../utils/Hash';

  @EventSubscriber()
export class AccountSubscriber implements EntitySubscriberInterface<Account> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Account;
  }

  beforeInsert(event: InsertEvent<Account>) {
    event.entity.password = Hash.make(event.entity.password);
  }
}
