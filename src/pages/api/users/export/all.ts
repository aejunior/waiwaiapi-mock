// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type DataList = Data[]

export interface Data {
  id: number
  full_name: string
}

export const config = {
  runtime: 'edge',
};

export default function get(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {
  const data = [
    {
      "id": 1,
      "full_name": "Admin Admin"
    }
  ];

  const dataString = JSON.stringify(data);
  const length = Buffer.byteLength(dataString, 'utf8');

  res.setHeader('Content-Length', length);
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59');
  res.status(200).json(data);
}
