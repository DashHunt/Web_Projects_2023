/*
  Warnings:

  - You are about to drop the column `usersUser_id` on the `SubscribedRide` table. All the data in the column will be lost.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubscribedRide" DROP COLUMN "usersUser_id";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "password" TEXT NOT NULL;
