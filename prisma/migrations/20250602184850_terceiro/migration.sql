/*
  Warnings:

  - You are about to drop the column `cduemp` on the `CADUSU` table. All the data in the column will be lost.
  - Added the required column `cdeusu` to the `CADEMP` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CADUSU" DROP CONSTRAINT "CADUSU_cduemp_fkey";

-- AlterTable
ALTER TABLE "CADEMP" ADD COLUMN     "cdeusu" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CADUSU" DROP COLUMN "cduemp";

-- AddForeignKey
ALTER TABLE "CADEMP" ADD CONSTRAINT "CADEMP_cdeusu_fkey" FOREIGN KEY ("cdeusu") REFERENCES "CADUSU"("cduide") ON DELETE RESTRICT ON UPDATE CASCADE;
