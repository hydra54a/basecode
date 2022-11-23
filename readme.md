# Anthony Derecho Exam
This is my exam using nodejs type script

## Installation
```bash
yarn install
```


## API Endpoint

```bash
#Auth
Method: POST
Endpoint:localhost:8080/v1/auth/login
payload:
{
    "email":"aod@test.com",
    "password":"4d7d9efa697d480b8d261bbc7c5882f5"
}
#new salary entry
Method: POST
Endpoint:localhost:8080/v1/salary
payload:
{
"name": "Aman6",
"salary": "14300",
"currency": "USD",
"on_contract": true,
"department": "Engineering",
"sub_department": "DevOps"
}
#delete salary entry
Method: Delete
Endpoint:localhost:8080/v1/salary/<user_id>

#GET All Salary mean, min max
Method: GET
Endpoint:localhost:8080/v1/salary/<user_id>

```



## Database migration
This was setup in knex
```bash
For Migration
npx knex --knexfile ./database_and_migration/knexfile.ts migrate:latest

For Seeding
npx knex --knexfile ./database_and_migration/knexfile.ts seed:run
```