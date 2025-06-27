-- CreateTable
CREATE TABLE "CATEVE" (
    "caeide" SERIAL NOT NULL,
    "caedes" TEXT NOT NULL,
    "caesta" TEXT NOT NULL,

    CONSTRAINT "CATEVE_pkey" PRIMARY KEY ("caeide")
);

-- CreateTable
CREATE TABLE "FORPAG" (
    "fpaide" SERIAL NOT NULL,
    "fpades" TEXT NOT NULL,
    "fpasta" TEXT NOT NULL,

    CONSTRAINT "FORPAG_pkey" PRIMARY KEY ("fpaide")
);

-- CreateTable
CREATE TABLE "TABDIV" (
    "tadide" SERIAL NOT NULL,
    "taddes" TEXT NOT NULL,
    "tabdur" INTEGER NOT NULL,
    "tadval" DECIMAL(10,2) NOT NULL,
    "tabsta" TEXT NOT NULL,

    CONSTRAINT "TABDIV_pkey" PRIMARY KEY ("tadide")
);

-- CreateTable
CREATE TABLE "CADEVE" (
    "cevide" SERIAL NOT NULL,
    "cevnom" TEXT NOT NULL,
    "cevdes" TEXT NOT NULL,
    "cevdat" TIMESTAMP(3) NOT NULL,
    "cevcae" INTEGER NOT NULL,
    "cevtad" INTEGER NOT NULL,
    "cevfpa" INTEGER NOT NULL,
    "cevcdu" INTEGER NOT NULL,
    "cevsta" TEXT NOT NULL,

    CONSTRAINT "CADEVE_pkey" PRIMARY KEY ("cevide")
);

-- AddForeignKey
ALTER TABLE "CADEVE" ADD CONSTRAINT "CADEVE_cevcae_fkey" FOREIGN KEY ("cevcae") REFERENCES "CATEVE"("caeide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CADEVE" ADD CONSTRAINT "CADEVE_cevtad_fkey" FOREIGN KEY ("cevtad") REFERENCES "TABDIV"("tadide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CADEVE" ADD CONSTRAINT "CADEVE_cevfpa_fkey" FOREIGN KEY ("cevfpa") REFERENCES "FORPAG"("fpaide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CADEVE" ADD CONSTRAINT "CADEVE_cevcdu_fkey" FOREIGN KEY ("cevcdu") REFERENCES "CADUSU"("cduide") ON DELETE RESTRICT ON UPDATE CASCADE;
