import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getEmployees(req, res);

    default:
      res.status(405).end();
      break;
  }
}

async function getEmployees(req: NextApiRequest, res: NextApiResponse) {
  try {
    const employees = await prisma.employee.findMany({});
    res.status(200).send(employees);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
