-- CreateTable
CREATE TABLE "product_items_images" (
    "id" SERIAL NOT NULL,
    "fileId" INTEGER NOT NULL,
    "product_item_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "product_items_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_items_images" ADD CONSTRAINT "product_items_images_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "file"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_items_images" ADD CONSTRAINT "product_items_images_product_item_id_fkey" FOREIGN KEY ("product_item_id") REFERENCES "product_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
