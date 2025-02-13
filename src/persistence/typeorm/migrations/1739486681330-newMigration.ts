import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1739486681330 implements MigrationInterface {
    name = 'NewMigration1739486681330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "veiculo" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cor" character varying NOT NULL, "ano" character varying NOT NULL, "montadoraId" integer, CONSTRAINT "PK_0fcc9d29b16ed347447f8f9356e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "montadora" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_e7744dd041333b398aa7cc3265e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "veiculo" ADD CONSTRAINT "FK_3a1d0867cce4073f4cf073ae59d" FOREIGN KEY ("montadoraId") REFERENCES "montadora"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "veiculo" DROP CONSTRAINT "FK_3a1d0867cce4073f4cf073ae59d"`);
        await queryRunner.query(`DROP TABLE "montadora"`);
        await queryRunner.query(`DROP TABLE "veiculo"`);
    }

}
