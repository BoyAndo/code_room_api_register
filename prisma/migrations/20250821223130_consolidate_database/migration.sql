-- CreateTable
CREATE TABLE `Property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `landlordId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `address` VARCHAR(191) NOT NULL,
    `comuna` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `zipCode` VARCHAR(191) NULL,
    `propertyType` ENUM('APARTMENT', 'HOUSE', 'ROOM') NOT NULL,
    `bedrooms` INTEGER NOT NULL,
    `bathrooms` INTEGER NOT NULL,
    `squareMeters` DOUBLE NULL,
    `monthlyRent` DECIMAL(10, 2) NOT NULL,
    `isAvailable` BOOLEAN NOT NULL DEFAULT true,
    `utilityBillUrl` VARCHAR(191) NOT NULL,
    `utilityBillValidated` BOOLEAN NOT NULL DEFAULT false,
    `rules` TEXT NULL,
    `latitude` DECIMAL(10, 8) NULL,
    `longitude` DECIMAL(11, 8) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Property_landlordId_idx`(`landlordId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `propertyId` INTEGER NOT NULL,
    `imageUrl` VARCHAR(500) NOT NULL,
    `displayOrder` INTEGER NOT NULL DEFAULT 0,
    `altText` VARCHAR(255) NULL,
    `isPrimary` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `PropertyImage_propertyId_displayOrder_idx`(`propertyId`, `displayOrder`),
    INDEX `PropertyImage_propertyId_isPrimary_idx`(`propertyId`, `isPrimary`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Amenity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `icon` VARCHAR(50) NULL,
    `category` VARCHAR(50) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Amenity_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyAmenity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `propertyId` INTEGER NOT NULL,
    `amenityId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `PropertyAmenity_propertyId_idx`(`propertyId`),
    INDEX `PropertyAmenity_amenityId_idx`(`amenityId`),
    UNIQUE INDEX `PropertyAmenity_propertyId_amenityId_key`(`propertyId`, `amenityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_landlordId_fkey` FOREIGN KEY (`landlordId`) REFERENCES `Landlord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PropertyImage` ADD CONSTRAINT `PropertyImage_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PropertyAmenity` ADD CONSTRAINT `PropertyAmenity_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PropertyAmenity` ADD CONSTRAINT `PropertyAmenity_amenityId_fkey` FOREIGN KEY (`amenityId`) REFERENCES `Amenity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
