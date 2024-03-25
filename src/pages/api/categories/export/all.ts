// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type DataList = Data[]
interface Data {
  id: number
  category: string
  description: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {
  res.status(200).json([
    {
      "id": 2,
      "category": "Geral",
      "description": "Geralzada"
    }
  ]);
}
