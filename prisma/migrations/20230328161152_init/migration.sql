/*
  Warnings:

  - You are about to drop the column `is_active` on the `sys_users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- AlterTable
ALTER TABLE "sys_users" DROP COLUMN "is_active",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';
