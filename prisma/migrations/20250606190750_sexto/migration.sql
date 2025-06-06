/*
  Warnings:

  - A unique constraint covering the columns `[cduema]` on the table `CADUSU` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CADUSU_cduema_key" ON "CADUSU"("cduema");
