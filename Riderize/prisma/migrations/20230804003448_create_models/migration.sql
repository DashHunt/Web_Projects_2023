-- CreateTable
CREATE TABLE "Ride" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_date_registration" TIMESTAMP(3) NOT NULL,
    "end_date_registration" TIMESTAMP(3) NOT NULL,
    "additional_information" TEXT,
    "start_place" TEXT NOT NULL,
    "participants_limit" INTEGER NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscribedRide" (
    "id" SERIAL NOT NULL,
    "subscription_date" TIMESTAMP(3) NOT NULL,
    "usersUser_id" INTEGER NOT NULL,

    CONSTRAINT "SubscribedRide_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubscribedRide" ADD CONSTRAINT "SubscribedRide_id_fkey" FOREIGN KEY ("id") REFERENCES "Ride"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscribedRide" ADD CONSTRAINT "SubscribedRide_usersUser_id_fkey" FOREIGN KEY ("usersUser_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
