/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentRut` VARCHAR(191) NOT NULL,
    `studentEmail` VARCHAR(191) NOT NULL,
    `studentName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `studentCollege` VARCHAR(191) NOT NULL,
    `studentCertificateUrl` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Student_studentRut_key`(`studentRut`),
    UNIQUE INDEX `Student_studentEmail_key`(`studentEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
