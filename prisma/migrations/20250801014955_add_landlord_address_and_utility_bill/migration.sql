/*
  Warnings:

  - Added the required column `landlordUtilityBillUrl` to the `Landlord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Landlord` ADD COLUMN `landlordAddress` VARCHAR(191) NULL,
    ADD COLUMN `landlordUtilityBillUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Student` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
