Hello, my dear friend
Hope you're good!! 

Here are some basic instructions required setup :D 

To install all packages please run the following command: npm i or yarn add 
To migrate the models to your database: npx prisma migrate dev --name init

IMPORTANT: To run all the prisma commands you need to create a .env in the root directory of this project and declare your database URL there.

If needed you can delete the generated folder (inside prisma directory) and generate again, but be aware that the imports may break in the server.ts file.
To regenerated the folders and models: npx prisma generate.
