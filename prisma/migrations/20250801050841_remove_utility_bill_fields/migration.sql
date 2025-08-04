/*
  Warnings:

  - You are about to drop the column `landlordAddress` on the `Landlord` table. All the data in the column will be lost.
  - You are about to drop the column `landlordUtilityBillUrl` on the `Landlord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Landlord` DROP COLUMN `landlordAddress`,
    DROP COLUMN `landlordUtilityBillUrl`;
