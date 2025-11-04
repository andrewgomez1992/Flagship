export async function up(knex) {
  await knex.schema.createTable("flags", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("description");
    table.boolean("is_enabled").defaultTo(false);
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("flags");
}
