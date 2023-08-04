/*
  Warnings:

  - Added the required column `ride_id` to the `SubscribedRide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `SubscribedRide` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubscribedRide" DROP CONSTRAINT "SubscribedRide_id_fkey";

-- DropForeignKey
ALTER TABLE "SubscribedRide" DROP CONSTRAINT "SubscribedRide_usersUser_id_fkey";

-- AlterTable
ALTER TABLE "SubscribedRide" ADD COLUMN     "ride_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;
