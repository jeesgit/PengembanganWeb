-- CreateTable
CREATE TABLE `Siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kodeSiswa` INTEGER NOT NULL,
    `namaSiswa` VARCHAR(191) NOT NULL,
    `emailSiswa` VARCHAR(191) NOT NULL,
    `jenisKelaminSiswa` VARCHAR(191) NOT NULL,
    `tanggalLahirSiswa` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Siswa_kodeSiswa_key`(`kodeSiswa`),
    UNIQUE INDEX `Siswa_namaSiswa_key`(`namaSiswa`),
    UNIQUE INDEX `Siswa_emailSiswa_key`(`emailSiswa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
