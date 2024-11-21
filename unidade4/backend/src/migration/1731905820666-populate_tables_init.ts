import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateTablesInit1731905820666 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO public."u4-factory"(name) VALUES
                ('Audi'),
                ('Chevrolet'),
                ('Ford'),
                ('Honda'),
                ('Hyundai'),
                ('Jeep'),
                ('Kia'),
                ('Mercedes-Benz'),
                ('Peugeot'),
                ('Renault'),
                ('Toyota');
                
            INSERT INTO public."u4-type"(name) VALUES
                ('Carro'),
                ('Moto'),
                ('Utilitário');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DELETE FROM public."u4-type";
            DELETE FROM public."u4-factory";
    `);
  }
}
