// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  version: number
  words: string
  meanings: string
  categories: string
  references: string
  attachments: string
  users: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    "version": 1.1,
    "words": "2024-03-19T22:27:56.330858",
    "meanings": "2024-03-19T22:27:56.330858",
    "categories": "2024-03-19T22:27:56.330858",
    "references": "2024-03-19T22:27:56.330858",
    "attachments": "2024-03-19T22:27:56.330858",
    "users": "2024-03-19T22:27:56.330858"
  });
}
