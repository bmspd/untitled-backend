import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 42,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 32,
    unique: true,
  })
  username: string;
  @Column({
    type: 'varchar',
    length: 124,
    unique: true,
  })
  email: string;
  @Column()
  password: string;
  @Column({ nullable: true, name: 'refresh_token' })
  refreshToken: string;
}
