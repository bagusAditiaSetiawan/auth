/*
  Warnings:

  - You are about to drop the column `username` on the `sys_users` table. All the data in the column will be lost.
  - You are about to drop the `file` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_items_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_items_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_items_stocks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sys_roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sys_user_roles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `sys_users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product_items_categories" DROP CONSTRAINT "product_items_categories_product_category_id_fkey";

-- DropForeignKey
ALTER TABLE "product_items_categories" DROP CONSTRAINT "product_items_categories_product_item_id_fkey";

-- DropForeignKey
ALTER TABLE "product_items_images" DROP CONSTRAINT "product_items_images_fileId_fkey";

-- DropForeignKey
ALTER TABLE "product_items_images" DROP CONSTRAINT "product_items_images_product_item_id_fkey";

-- DropForeignKey
ALTER TABLE "product_items_stocks" DROP CONSTRAINT "product_items_stocks_product_item_id_fkey";

-- DropForeignKey
ALTER TABLE "sys_user_roles" DROP CONSTRAINT "sys_user_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "sys_user_roles" DROP CONSTRAINT "sys_user_roles_user_id_fkey";

-- DropIndex
DROP INDEX "sys_users_email_username_idx";

-- DropIndex
DROP INDEX "sys_users_username_key";

-- AlterTable
ALTER TABLE "sys_users" DROP COLUMN "username",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "file";

-- DropTable
DROP TABLE "product_categories";

-- DropTable
DROP TABLE "product_items";

-- DropTable
DROP TABLE "product_items_categories";

-- DropTable
DROP TABLE "product_items_images";

-- DropTable
DROP TABLE "product_items_stocks";

-- DropTable
DROP TABLE "sys_roles";

-- DropTable
DROP TABLE "sys_user_roles";

-- CreateIndex
CREATE INDEX "sys_users_email_name_idx" ON "sys_users"("email", "name");
