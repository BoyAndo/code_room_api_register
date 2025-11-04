/*
  Warnings:

  - You are about to drop the column `latitude` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `rules` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `landlord` ADD COLUMN `profilePhotoUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `property` DROP COLUMN `latitude`,
    DROP COLUMN `longitude`,
    DROP COLUMN `rules`,
    DROP COLUMN `zipCode`;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `profilePhotoUrl` VARCHAR(191) NULL;
