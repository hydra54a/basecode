import { Knex } from "knex";

const salary =[
    {
        "id":"e4d33628-6a8a-11ed-a1eb-0242ac120002",
        "name": "Colon Clayton",
        "salary": 1395.8,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "a14a72bc-a5ad-43ef-887b-c8b45cfbc67e",
        "name": "Colleen Davenport",
        "salary": 1148.54,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "da6076e6-f908-4c44-8bd5-529c61eaf752",
        "name": "Bell Lara",
        "salary": 2415.67,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "ff3a4502-9627-484d-ad8d-0d20ee38719e",
        "name": "Martha Grimes",
        "salary": 2218.06,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "95a0a4c5-2ac3-4a9d-92fb-5f5938c4c564",
        "name": "Mcmillan Humphrey",
        "salary": 3092.98,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "d4c1127d-ee3c-4f73-bbe2-ae5d9b19e335",
        "name": "Ursula Shelton",
        "salary": 1542.65,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "84632aa8-55c7-4392-94af-13a0f83390c2",
        "name": "Brittney Beasley",
        "salary": 3392.25,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "234a099e-8f75-424b-b7f8-d0f55df6ed3b",
        "name": "Avery Mcintosh",
        "salary": 3826.96,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "71f6d224-fb62-4464-8750-b3f77a6ee59e",
        "name": "Callie Clayton",
        "salary": 3098.53,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "cda18c64-6adb-482e-8fbe-2962adf71f96",
        "name": "Pennington Meyers",
        "salary": 2624.77,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "67ab9505-1e15-42b4-8b1f-140d0d23a184",
        "name": "Hatfield Dominguez",
        "salary": 2247.43,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "738400c9-b410-444c-9066-b095df64f5e3",
        "name": "Margaret Mejia",
        "salary": 2554.54,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "4ebf51c9-6f06-491f-bd17-29f24e3c7868",
        "name": "Levy Chan",
        "salary": 3248.95,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "727c1031-01e6-4baf-985f-15990da584ad",
        "name": "Osborn Sykes",
        "salary": 1070.81,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "ac271751-6d5a-407a-bd2a-5dea4d5b55c0",
        "name": "Dean Conway",
        "salary": 3732.71,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "34899c68-5fbb-450a-b500-686ac1b93fe5",
        "name": "Bonita Kirk",
        "salary": 3102.58,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "16ecd354-262f-477c-9af5-83224694b3db",
        "name": "Steele Osborne",
        "salary": 3053.31,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "3de3cb95-7f14-4193-a126-c42ad453b782",
        "name": "Nina Houston",
        "salary": 3471.99,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "0b28107c-44a8-4f79-80a2-fd3e6a80c8e7",
        "name": "Guzman Stone",
        "salary": 3983.75,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      },
      {
        "id": "836f57e8-1811-465b-a235-4bce0a61baa4",
        "name": "Ratliff Burt",
        "salary": 2808.76,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "DevOps"
      }
  ];

export async function seed(knex: Knex): Promise<void> {
  await knex("salary").truncate();
  await knex("salary").insert(salary);
}