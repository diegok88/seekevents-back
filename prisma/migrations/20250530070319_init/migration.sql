-- CreateTable
CREATE TABLE "CATEMP" (
    "cteide" SERIAL NOT NULL,
    "ctedes" TEXT NOT NULL,
    "ctesta" TEXT NOT NULL,

    CONSTRAINT "CATEMP_pkey" PRIMARY KEY ("cteide")
);

-- CreateTable
CREATE TABLE "CADEND" (
    "cenide" SERIAL NOT NULL,
    "cenrua" TEXT NOT NULL,
    "cennum" INTEGER NOT NULL,
    "cenbai" TEXT NOT NULL,
    "cencid" TEXT NOT NULL,
    "censta" TEXT NOT NULL,

    CONSTRAINT "CADEND_pkey" PRIMARY KEY ("cenide")
);

-- CreateTable
CREATE TABLE "CADEMP" (
    "cdeide" SERIAL NOT NULL,
    "cednom" TEXT NOT NULL,
    "cdecnp" TEXT NOT NULL,
    "cdecte" INTEGER NOT NULL,
    "cdecen" INTEGER NOT NULL,
    "cdesta" TEXT NOT NULL,

    CONSTRAINT "CADEMP_pkey" PRIMARY KEY ("cdeide")
);

-- CreateTable
CREATE TABLE "CADPER" (
    "cdpide" SERIAL NOT NULL,
    "cdpdes" TEXT NOT NULL,
    "cdpsta" TEXT NOT NULL,

    CONSTRAINT "CADPER_pkey" PRIMARY KEY ("cdpide")
);

-- CreateTable
CREATE TABLE "CADUSU" (
    "cduide" SERIAL NOT NULL,
    "cdunom" TEXT NOT NULL,
    "cducpf" TEXT NOT NULL,
    "cduema" TEXT NOT NULL,
    "cdusen" TEXT NOT NULL,
    "cduper" INTEGER NOT NULL,
    "cduemp" INTEGER NOT NULL,
    "cdufac" TEXT NOT NULL,
    "cduins" TEXT NOT NULL,
    "cdutel" TEXT NOT NULL,
    "cdusta" TEXT NOT NULL,

    CONSTRAINT "CADUSU_pkey" PRIMARY KEY ("cduide")
);

-- AddForeignKey
ALTER TABLE "CADEMP" ADD CONSTRAINT "CADEMP_cdecte_fkey" FOREIGN KEY ("cdecte") REFERENCES "CATEMP"("cteide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CADEMP" ADD CONSTRAINT "CADEMP_cdecen_fkey" FOREIGN KEY ("cdecen") REFERENCES "CADEND"("cenide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CADUSU" ADD CONSTRAINT "CADUSU_cduper_fkey" FOREIGN KEY ("cduper") REFERENCES "CADPER"("cdpide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CADUSU" ADD CONSTRAINT "CADUSU_cduemp_fkey" FOREIGN KEY ("cduemp") REFERENCES "CADEMP"("cdeide") ON DELETE RESTRICT ON UPDATE CASCADE;
