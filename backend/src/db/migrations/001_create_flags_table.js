export function up(knex) {
  return knex.schema.createTable("flags", (table) => {
    table.uuid("id").primary();
    table.string("key").unique().notNullable();
    table.string("name").notNullable();
    table.string("description");
    table.jsonb("environments").defaultTo("{}");
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("flags");
}
