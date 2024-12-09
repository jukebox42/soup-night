"use server"
import prisma from "#/db/prisma";

export const addGuest = async (name: string, count: number) => {
  const newGuest = prisma.guest.create({
    data: {
      name,
      count
    }
  });
  return newGuest;
};

export const getGuests = async () => {
  return prisma.guest.findMany();
}