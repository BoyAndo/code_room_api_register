-- CreateTable
CREATE TABLE `RefreshToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(500) NOT NULL,
    `studentId` INTEGER NULL,
    `landlordId` INTEGER NULL,
    `userType` VARCHAR(20) NOT NULL,
    `isRevoked` BOOLEAN NOT NULL DEFAULT false,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RefreshToken_token_key`(`token`),
    INDEX `RefreshToken_token_idx`(`token`),
    INDEX `RefreshToken_studentId_idx`(`studentId`),
    INDEX `RefreshToken_landlordId_idx`(`landlordId`),
    INDEX `RefreshToken_expiresAt_idx`(`expiresAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_student_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_landlord_fkey` FOREIGN KEY (`landlordId`) REFERENCES `Landlord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
