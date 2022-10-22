import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class AdminUser extends BaseEntity{
    @Column()
    accountId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    adminId: string;
}

