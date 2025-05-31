/*
  Warnings:

  - You are about to drop the column `cednom` on the `CADEMP` table. All the data in the column will be lost.
  - Added the required column `cdenom` to the `CADEMP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CADEMP" DROP COLUMN "cednom",
ADD COLUMN     "cdenom" TEXT NOT NULL;
