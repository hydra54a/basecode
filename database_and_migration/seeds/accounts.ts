import { Knex } from "knex";

const accounts =[
  {
    "id": "39afbdcd-0008-4b93-bedd-c80d224619fc",
    "username": "Johanna Underwood",
    "password": "4d7d9efa697d480b8d261bbc7c5882f5",
    "email": "johannaunderwood@zillactic.com"
  },
  {
    "id": "9dcfe0f5-a932-4520-bbf6-3d89c7f1fbe1",
    "username": "Wall Wells",
    "password": "4d7d9efa697d480b8d261bbc7c5882f5",
    "email": "wallwells@zillactic.com"
  },
  {
    "id": "8ccf64a1-4d63-4f79-a126-c9e5d41f9ca5",
    "username": "Cooke Steele",
    "password": "4d7d9efa697d480b8d261bbc7c5882f5",
    "email": "cookesteele@zillactic.com"
  },
  {
    "id": "f7e6ffa3-c76d-44f0-8dac-c3d0661fae89",
    "username": "Casey Richmond",
    "password": "4d7d9efa697d480b8d261bbc7c5882f5",
    "email": "caseyrichmond@zillactic.com"
  },
  {
    "id": "2da7ea51-dee7-43d0-a7cd-9a2a8a1f158c",
    "username": "Patton Ellison",
    "password": "4d7d9efa697d480b8d261bbc7c5882f5",
    "email": "pattonellison@zillactic.com"
  },
  {
    "id": "1179e54a-2a32-4b08-871b-2dfd64a8880a",
    "username": "Giles Vargas",
    "password": "4d7d9efa697d480b8d261bbc7c5882f5",
    "email": "gilesvargas@zillactic.com"
  }
];

export async function seed(knex: Knex): Promise<void> {
  await knex("accounts").truncate();
  await knex("accounts").insert(accounts);
}