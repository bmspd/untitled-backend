import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'test_id',
  })
  id: number;

  @Column()
  name: string;
}
