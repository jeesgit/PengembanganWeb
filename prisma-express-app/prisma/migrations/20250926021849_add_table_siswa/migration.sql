-- CreateTable
CREATE TABLE `Siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Siswa_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
