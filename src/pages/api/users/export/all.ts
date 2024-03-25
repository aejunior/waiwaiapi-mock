// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type DataList = Data[]

export interface Data {
  id: number
  full_name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {
  res.status(200).json([
    {
      "id": 1,
      "full_name": "Admin Admin"
    }
  ]);
}
