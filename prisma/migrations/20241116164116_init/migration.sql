-- CreateTable
CREATE TABLE "codes" (
    "code" VARCHAR(200) NOT NULL,

    CONSTRAINT "codes_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "guests" (
    "id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "count" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guests_pkey" PRIMARY KEY ("id")
);
