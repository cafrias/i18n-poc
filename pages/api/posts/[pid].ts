// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Locale, Post } from "../../../models/models";
import { posts, postWithLocale } from "./_data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | string>
) {
  const { pid, locale = Locale.DE } = req.query;
	const post = posts.find((p) => p.id === pid);
  if (!post) {
    return res.status(404).send('Not found');
  }
  res.status(200).json(postWithLocale(locale as Locale, post));
}
