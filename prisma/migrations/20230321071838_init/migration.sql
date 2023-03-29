-- AlterTable
ALTER TABLE "product_categories" ADD COLUMN     "created_by" INTEGER,
ADD COLUMN     "updated_by" INTEGER;

-- AlterTable
ALTER TABLE "product_items" ADD COLUMN     "created_by" INTEGER,
ADD COLUMN     "updated_by" INTEGER;

-- AlterTable
ALTER TABLE "product_items_categories" ADD COLUMN     "created_by" INTEGER,
ADD COLUMN     "updated_by" INTEGER;
