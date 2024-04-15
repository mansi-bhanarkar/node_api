video link : `https://www.youtube.com/watch?v=5_CJIWy8uE0&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG`

## packages
```bash
RUN
npm init
npm install express
npm install mysql2
npm install nodemon
npm install -g sequelize-cli // ORM tool 
sequelize init
```

create controller , routes folder

## model & migration
```bash
sequelize model:generate --name User --attributes name:string,email:string,password:string


Run Migration
sequelize db:migrate
sequelize db:migrate --name `migration file name`

```
```bash
validation package : npm i fastest-validator
```

```bash

authentication packages

npm install bcryptjs jsonwebtoken \\ for hash password , for generating token


```

```bash
Image uploader : npm i multer
```

```bash
Seeder create command: `sequelize seed:generate --name category-seeder` 

If run all seeder
sequelize db:seed:all

if run specific seeder
sequelize db:seed --seed `seeder_name`

If undo a table
#undo all table
sequelize db:seed:undo:all 

#undo specific table
sequelize db:seed:undo --seed `seeder_name`
```
