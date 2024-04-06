// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type DataList = Data[]
interface Data {
  id: number
  category: string
  description: string
}

export default function get(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {
  const data = [
    {
      "id": 2,
      "category": "Geral",
      "description": "Geralzada"
    }
  ]

  const dataString = JSON.stringify(data);
  const length = Buffer.byteLength(dataString, 'utf8');

  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Length', length);
  res.status(200).json(data);
}
