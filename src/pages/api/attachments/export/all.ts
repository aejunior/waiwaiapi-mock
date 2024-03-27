// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
    id: number
    uuid: string
    filename: string
    filedir: string
    url: string
    content_type: string
    user_id: number
    word_id: number
}

type DataList = Data[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {
  res.status(200).json([
    {
      "id": 16,
      "uuid": "ec0d58de-aa95-473f-bdfe-f3047f0010fb",
      "filename": "/ec0d58de-aa95-473f-bdfe-f3047f0010fb-gravando.png",
      "filedir": "backend/static/ec0d58de-aa95-473f-bdfe-f3047f0010fb-gravando.png",
      "url": "/uploads/ec0d58de-aa95-473f-bdfe-f3047f0010fb-gravando.png",
      "content_type": "image/png",
      "user_id": 1,
      "word_id": 2
    }
  ]);
}
