// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type DataList = Data[]

export interface Data {
  id: number
  reference: string
  url?: string | null
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {
  res.status(200).json([
    {
      "id": 1,
      "reference": "Robert E. Hawkins. 2021. Wai Wai dictionary. In: Key, Mary Ritchie & Comrie, Bernard (eds.) The Intercontinental Dictionary Series. Leipzig: Max Planck Institute for Evolutionary Anthropology.",
      "url": "http://ids.clld.org/contributions/175"
    },
    {
      "id": 2,
      "reference": "Dicionário Wai Wai e Português",
      "url": null
    },
    {
      "id": 3,
      "reference": "Dicionário Wai Wai - Português professores",
      "url": null
    },
    {
      "id": 4,
      "reference": "Dicionário Uaiuai-Português Robert Hawkins MEVA 2002",
      "url": null
    }
  ]);
}