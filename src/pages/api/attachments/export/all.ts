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
      "id": 13,
      "uuid": "c152258e-f4c3-47d1-96f7-45dca16e1ec8",
      "filename": "/c152258e-f4c3-47d1-96f7-45dca16e1ec8-gravando.m4a",
      "filedir": "backend/static/c152258e-f4c3-47d1-96f7-45dca16e1ec8-gravando.m4a",
      "url": "/uploads/c152258e-f4c3-47d1-96f7-45dca16e1ec8-gravando.m4a",
      "content_type": "audio/x-m4a",
      "user_id": 1,
      "word_id": 2
    },
    {
      "id": 14,
      "uuid": "70dd6565-fa0f-4c6e-97e6-79ea77ef7b76",
      "filename": "/70dd6565-fa0f-4c6e-97e6-79ea77ef7b76-gravando.m4a",
      "filedir": "backend/static/70dd6565-fa0f-4c6e-97e6-79ea77ef7b76-gravando.m4a",
      "url": "/uploads/70dd6565-fa0f-4c6e-97e6-79ea77ef7b76-gravando.m4a",
      "content_type": "audio/x-m4a",
      "user_id": 1,
      "word_id": 2
    },
    {
      "id": 15,
      "uuid": "11a0782a-e327-4bf3-97df-461d56bf36ca",
      "filename": "/11a0782a-e327-4bf3-97df-461d56bf36ca-gravando.m4a",
      "filedir": "backend/static/11a0782a-e327-4bf3-97df-461d56bf36ca-gravando.m4a",
      "url": "/uploads/11a0782a-e327-4bf3-97df-461d56bf36ca-gravando.m4a",
      "content_type": "audio/x-m4a",
      "user_id": 1,
      "word_id": 2
    },
    {
      "id": 16,
      "uuid": "ec0d58de-aa95-473f-bdfe-f3047f0010fb",
      "filename": "/ec0d58de-aa95-473f-bdfe-f3047f0010fb-gravando.m4a",
      "filedir": "backend/static/ec0d58de-aa95-473f-bdfe-f3047f0010fb-gravando.m4a",
      "url": "/uploads/ec0d58de-aa95-473f-bdfe-f3047f0010fb-gravando.m4a",
      "content_type": "audio/x-m4a",
      "user_id": 1,
      "word_id": 2
    }
  ]);
}
