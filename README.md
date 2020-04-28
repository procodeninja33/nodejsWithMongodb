# Using MySQL with NodeJS

I’ll explain how to use the module to connect to a MySQL database, perform the usual CRUD operations, before examining stored procedures and escaping user input.

In this project we required to install nodejs and mysql, you can download the nodejs via this official website -> https://nodejs.org/en/download/ and for mysql -> https://www.mysql.com/downloads/

Once you take clone first you need to install all the nodejs packages. Here is command for install packages
`npm i`

Import mysql database using this command `mysql -u root -p < database/dump.sql`

I added api collection in API's folder, if you want to import then imprort directly in postman.

Now run the nodejs project using this command
`node -r dotenv/config server.js`
