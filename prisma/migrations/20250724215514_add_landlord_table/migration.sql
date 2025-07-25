-- CreateTable
CREATE TABLE `Landlord` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `landlordRut` VARCHAR(191) NOT NULL,
    `landlordEmail` VARCHAR(191) NOT NULL,
    `landlordName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `landlordCarnetUrl` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'landlord',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Landlord_landlordRut_key`(`landlordRut`),
    UNIQUE INDEX `Landlord_landlordEmail_key`(`landlordEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
