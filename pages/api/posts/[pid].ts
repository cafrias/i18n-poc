// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../../../models/models";
import { posts } from "./_data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | string>
) {
  const { pid } = req.query;
	const post = posts.find((p) => p.id === pid);
  if (!post) {
    return res.status(404).send('Not found');
  }
  res.status(200).json(post);
}
