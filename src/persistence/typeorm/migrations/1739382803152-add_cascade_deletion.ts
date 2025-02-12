import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCascadeDeletion1739382803152 implements MigrationInterface {
    name = 'AddCascadeDeletion1739382803152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "veiculo" DROP CONSTRAINT "FK_3a1d0867cce4073f4cf073ae59d"`);
        await queryRunner.query(`ALTER TABLE "veiculo" ADD CONSTRAINT "FK_3a1d0867cce4073f4cf073ae59d" FOREIGN KEY ("montadoraId") REFERENCES "montadora"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "veiculo" DROP CONSTRAINT "FK_3a1d0867cce4073f4cf073ae59d"`);
        await queryRunner.query(`ALTER TABLE "veiculo" ADD CONSTRAINT "FK_3a1d0867cce4073f4cf073ae59d" FOREIGN KEY ("montadoraId") REFERENCES "montadora"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
