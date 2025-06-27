/*
  Warnings:

  - Added the required column `cevima` to the `CADEVE` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CADEVE" ADD COLUMN     "cevima" TEXT NOT NULL;
