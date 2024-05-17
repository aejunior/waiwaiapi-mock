// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type DataList = Data[]

export interface Data {
  id: number
  reference: string
  year: number
  authors: string
  url?: string | null
}

export default function get(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {
  const data = [
    {
      "id": 1,
      "reference": "Wai Wai Dictionary. In: Key, Mary Ritchie & Comrie, Bernard (eds.) The Intercontinental Dictionary Series. Leipzig: Max Planck Institute for Evolutionary Anthropology. \n",
      "year": 2021,
      "authors": "Robert E. Hawkins;",
      "url": "http://ids.clld.org/contributions/175"
    },
    {
      "id": 2,
      "reference": "Dicionário Wai Wai e Português. Documento digital s/d",
      "year": 2022,
      "authors": "S/A",
      "url": null
    },
    {
      "id": 3,
      "reference": "Dicionário Wai Wai - Português professores. Documento digital s/d",
      "year": 2022,
      "authors": "S/A",
      "url": null
    },
    {
      "id": 4,
      "reference": "Dicionário Uaiuai-Português MEVA",
      "year": 2002,
      "authors": "Robert Hawkins;",
      "url": null
    },
    {
      "id": 5,
      "reference": "Etnozoneamento da porção paraense das terras indígenas Trombetas-Mapuera e Nhamundá-Mapuera",
      "year": 2012,
      "authors": "CARDOZO, Ivaneide Bandeira;VALE JUNIOR, Israel Correa do (Org.);",
      "url": null
    },
    {
      "id": 6,
      "reference": "Morfologia vegetal: português e wai wai\" - Parte 1 = Ahnoro natî mko poko keheamhokacho: \"karaywa yaro e wai wai yaro\" - 1",
      "year": 2022,
      "authors": "Cristina Aledi Felsemburgh;Andressa Jaqueline Viana de Souza;Jeferson Figueira de Sousa;Jeremias Xeremias Wai Wai;Lucilene Wai Wai;Alanna do Socorro Lima da Silva;",
      "url": null
    },
    {
      "id": 7,
      "reference": "Elaide Tapuri Wai Wai",
      "year": 2023,
      "authors": "Elaide Tapuri Wai Wai",
      "url": null
    },
    {
      "id": 8,
      "reference": "Carolina Wanaperu Wai Wai",
      "year": 2023,
      "authors": "Carolina Wanaperu Wai Wai",
      "url": null
    },
    {
      "id": 9,
      "reference": "Arlindo Wai Wai",
      "year": 2024,
      "authors": "Arlindo Wai Wai",
      "url": null
    }
  ];

  const dataString = JSON.stringify(data);
  const length = Buffer.byteLength(dataString, 'utf8');

  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Length', length);
  res.status(200).json(data);
}
