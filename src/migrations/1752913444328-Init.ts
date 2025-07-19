import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1752913444328 implements MigrationInterface {
    name = 'Init1752913444328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."resources_type_enum" AS ENUM('book', 'video', 'article', 'podcast', 'other')`);
        await queryRunner.query(`CREATE TABLE "resources" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" "public"."resources_type_enum" NOT NULL DEFAULT 'other', CONSTRAINT "PK_632484ab9dff41bba94f9b7c85e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "resources"`);
        await queryRunner.query(`DROP TYPE "public"."resources_type_enum"`);
    }

}
