// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Locale, Post } from "../../../models/models";
import { getPosts, posts } from "./_data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const { locale = Locale.DE } = req.query;
  res.status(200).json(
    // We are not validating the values, but this is OK for the POC
    getPosts(locale as Locale)
  );
}
