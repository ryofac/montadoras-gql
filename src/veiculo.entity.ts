import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Montadora } from "./montadora.entity";

@Entity()
export class Veiculo extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: String

  @Column()
  cor: String

  @Column()
  ano: String

  @ManyToOne(() => Montadora, montadora => montadora.veiculos, {onDelete: "CASCADE"})
  montadora: Montadora

}