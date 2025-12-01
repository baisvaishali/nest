import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('academic')
export class Academic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ name: 'country_id', type: 'int', nullable: true })
  countryId?: number;

  @Column({ name: 'city_id', type: 'int', nullable: true })
  cityId?: number;

  @Column({ name: 'is_active', type: 'tinyint', nullable: true })
  isActive?: number;

  @Column({ name: 'created_at', type: 'timestamp', nullable: true })
  createdAt?: Date;

  @Column({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt?: Date;
}
