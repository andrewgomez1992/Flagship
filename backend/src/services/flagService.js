import db from "../db/knex.js";

export async function getAllFlags() {
  return db("flags").select("*");
}

export async function createFlag(name, description) {
  return db("flags")
    .insert({ name, description, is_enabled: false })
    .returning("*");
}

export async function toggleFlag(id) {
  const [flag] = await db("flags").where({ id }).first().select("is_enabled");
  if (!flag) throw new Error("Flag not found");
  return db("flags")
    .where({ id })
    .update({ is_enabled: !flag.is_enabled })
    .returning("*");
}

export async function deleteFlag(id) {
  return db("flags").where({ id }).del();
}
