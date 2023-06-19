-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "autor" VARCHAR(255) NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
