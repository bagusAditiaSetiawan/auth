/*
  Warnings:

  - Added the required column `num_of_stock` to the `product_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_items" ADD COLUMN     "num_of_stock" INTEGER NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "product_items_stocks" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "product_item_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "product_items_stocks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_items_stocks" ADD CONSTRAINT "product_items_stocks_product_item_id_fkey" FOREIGN KEY ("product_item_id") REFERENCES "product_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
