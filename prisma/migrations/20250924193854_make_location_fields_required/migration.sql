/*
  Warnings:

  - Made the column `comunaId` on table `landlord` required. This step will fail if there are existing NULL values in that column.
  - Made the column `regionId` on table `landlord` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comunaId` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `regionId` on table `student` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `landlord` DROP FOREIGN KEY `Landlord_comuna_fkey`;

-- DropForeignKey
ALTER TABLE `landlord` DROP FOREIGN KEY `Landlord_region_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_comuna_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_region_fkey`;

-- AlterTable
ALTER TABLE `landlord` MODIFY `comunaId` INTEGER NOT NULL,
    MODIFY `regionId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `student` MODIFY `comunaId` INTEGER NOT NULL,
    MODIFY `regionId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_comuna_fkey` FOREIGN KEY (`comunaId`) REFERENCES `Comuna`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_region_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Landlord` ADD CONSTRAINT `Landlord_comuna_fkey` FOREIGN KEY (`comunaId`) REFERENCES `Comuna`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Landlord` ADD CONSTRAINT `Landlord_region_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
