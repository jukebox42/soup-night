/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import prisma from "#/db/prisma";

export const checkCode = async (code: string) => {
  try {
    const dbCode = await prisma.code.findFirst();
    if (code !== dbCode?.code) {
      return {
        success: false,
        error: "",
      }
    }
  } catch(e: any) {
    return {
      success: false,
      error: e.toString(),
    }
  }

  return {
    success: true,
    error: "",
  };
};