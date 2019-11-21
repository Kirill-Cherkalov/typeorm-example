import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column()
    description: string;

    @Column("text")
    filename: string;

    @Column("double")
    views: number;

    @Column()
    isPublished: boolean;
}
