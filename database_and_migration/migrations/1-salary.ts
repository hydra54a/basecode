import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("salary", (table) => {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.decimal("salary").notNullable();
    table.string("currency").notNullable();
    table.string("department").notNullable();
    table.string("sub_department").notNullable();
    table.boolean("on_contract").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("salary");
}