// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models/models";
import { users } from "./_data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | string>
) {
  const { uid } = req.query;

  const user = users.find((u) => u.id === uid);
  if (!user) {
    return res.status(404).send('Not found');
  }
  res.status(200).json(user);
}
