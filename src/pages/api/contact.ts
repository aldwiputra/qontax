import { prisma } from '@/libs/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const createRes = await prisma.contact.create({
        data: req.body,
      });

      res.status(200).json(createRes);
    } catch (error: any) {
      console.log(error);
      // if (error.code === 'P2002') {
      res.status(500).send({ message: 'Failed to create' });
      // }
    }
  }
}
