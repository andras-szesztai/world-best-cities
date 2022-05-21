-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "people" INTEGER NOT NULL,
    "planet" INTEGER NOT NULL,
    "profit" INTEGER NOT NULL,
    "overall" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "continent" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");
