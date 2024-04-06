// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type DataList = Data[]

export interface Data {
  id: number
  word: string
  phonemic: string | null
  created_at: string
  update_at: string
  user_id: number
}

export const dynamic = 'static';

export default function get(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {

  const data = [
    {
      "id": 1,
      "word": "A",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2,
      "word": "AACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3,
      "word": "AAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4,
      "word": "AAKA-",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 5,
      "word": "AAKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 6,
      "word": "AAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 7,
      "word": "AAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 8,
      "word": "AAMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 9,
      "word": "AAMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 10,
      "word": "AAÑAPOTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 11,
      "word": "AAÑO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 12,
      "word": "AAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 13,
      "word": "AAPE YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 14,
      "word": "AAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 15,
      "word": "AAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 16,
      "word": "AARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 17,
      "word": "AARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 18,
      "word": "AARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 19,
      "word": "AASU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 20,
      "word": "AATO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 21,
      "word": "AATUPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 22,
      "word": "AAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 23,
      "word": "AAXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 24,
      "word": "AAXERA WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 25,
      "word": "AAXE WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 26,
      "word": "ACA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 27,
      "word": "ACACAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 28,
      "word": "ACANAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 29,
      "word": "ACARAKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 30,
      "word": "ACETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 31,
      "word": "ACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 32,
      "word": "AČIMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 33,
      "word": "ACINÎMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 34,
      "word": "ACINTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 35,
      "word": "ACIREKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 36,
      "word": "ACIRIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 37,
      "word": "ACKICKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 38,
      "word": "ACKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 39,
      "word": "ACKOROKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 40,
      "word": "ACORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 41,
      "word": "ACPOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 42,
      "word": "AHCE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 43,
      "word": "AHČE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 44,
      "word": "AHCE KACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 45,
      "word": "AHČE KAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 46,
      "word": "AHCE KE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 47,
      "word": "AHCE MAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 48,
      "word": "AHCEMAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 49,
      "word": "AHČEMAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 50,
      "word": "AHCEMAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 51,
      "word": "AHCE ÑEEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 52,
      "word": "AHCE POYERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 53,
      "word": "AHCEWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 54,
      "word": "AHČE WA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 55,
      "word": "AHCEWA EXIRKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 56,
      "word": "AHCEWA HA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 57,
      "word": "AHCEWA HÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 58,
      "word": "AHCEWA MAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 59,
      "word": "AHCEWA MEEXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 60,
      "word": "AHCEWA MEHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 61,
      "word": "AHCEWA ÑEEXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 62,
      "word": "AHCEWA ÑEEXI NORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 63,
      "word": "AHCE WECE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 64,
      "word": "AHCE XE MAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 65,
      "word": "AHCE YAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 66,
      "word": "AHCE YANME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 67,
      "word": "AHCIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 68,
      "word": "AHCIKÎRÎRÎNKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 69,
      "word": "AHCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 70,
      "word": "AHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 71,
      "word": "AHKACOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 72,
      "word": "AHKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 73,
      "word": "AHKAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 74,
      "word": "AHKAÑERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 75,
      "word": "AHKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 76,
      "word": "AHKOROMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 77,
      "word": "AHNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 78,
      "word": "AHNÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 79,
      "word": "AHNA MÎÎCE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 80,
      "word": "AHNA MÎTOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 81,
      "word": "AHNA TOCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 82,
      "word": "AHNA TOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 83,
      "word": "AHNA XÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 84,
      "word": "AHNA XÁ TOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 85,
      "word": "AHNAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 86,
      "word": "AHÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 87,
      "word": "AHÑERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 88,
      "word": "AHNIXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 89,
      "word": "AHÑIXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 90,
      "word": "AHÑIXA MICE AMORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 91,
      "word": "AHNORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 92,
      "word": "AHNORO KAAMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 93,
      "word": "AHNORONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 94,
      "word": "AHNORONO KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 95,
      "word": "AHPOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 96,
      "word": "AHPOCI KIRWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 97,
      "word": "AHRAKNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 98,
      "word": "AHREPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 99,
      "word": "AHRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 100,
      "word": "AHRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 101,
      "word": "AHROMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 102,
      "word": "AHRORON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 103,
      "word": "AHRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 104,
      "word": "AHRUCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 105,
      "word": "AHRUKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 106,
      "word": "AHRUMCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 107,
      "word": "AHRUMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 108,
      "word": "AHRUMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 109,
      "word": "AHRUMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 110,
      "word": "AHRUMTOPORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 111,
      "word": "AHRUMTOPO YEKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 112,
      "word": "AHRUNKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 113,
      "word": "AHRUNKACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 114,
      "word": "AHRUNKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 115,
      "word": "AHRUNKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 116,
      "word": "AHRUNKARA KA NAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 117,
      "word": "AHRUNKATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 118,
      "word": "AHRUNKATOPONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 119,
      "word": "AHRUPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 120,
      "word": "AHRUPORA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 121,
      "word": "AHRUPOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 122,
      "word": "AHRUPOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 123,
      "word": "AHRURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 124,
      "word": "AHRURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 125,
      "word": "AHRUSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 126,
      "word": "AHRUTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 127,
      "word": "AHRUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 128,
      "word": "AHRUTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 129,
      "word": "AHSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 130,
      "word": "AHSÎKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 131,
      "word": "AHSÎKO NORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 132,
      "word": "AHSÎÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 133,
      "word": "AHSÎPÎNKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 134,
      "word": "AHSÎPÎNKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 135,
      "word": "AHSÎPÎNKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 136,
      "word": "AHSÎPÎNKARA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 137,
      "word": "AHSÎSÎKNOKÓ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 138,
      "word": "AHSÎSÎKNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 139,
      "word": "AHSÎSÎKNOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 140,
      "word": "AHSÎSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 141,
      "word": "AHSÎTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 142,
      "word": "AHSÎXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 143,
      "word": "AHSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 144,
      "word": "AHTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 145,
      "word": "AHTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 146,
      "word": "AHTARÎ KE ETAPAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 147,
      "word": "AHTAYARAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 148,
      "word": "AHTÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 149,
      "word": "AHTÎPÎRÎ KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 150,
      "word": "AHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 151,
      "word": "AHTOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 152,
      "word": "AHTONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 153,
      "word": "AHTOXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 154,
      "word": "AHTO XÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 155,
      "word": "AHTO XÁ NAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 156,
      "word": "AHTUTUMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 157,
      "word": "AHWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 158,
      "word": "AHWOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 159,
      "word": "AHWOKAMEXPOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 160,
      "word": "AHWOKAMEXPOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 161,
      "word": "AHWOKANÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 162,
      "word": "AHWON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 163,
      "word": "AHWON KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 164,
      "word": "AHWORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 165,
      "word": "AHWOREÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 166,
      "word": "AHWORESO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 167,
      "word": "AHWORETOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 168,
      "word": "AHXAIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 169,
      "word": "AHXIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 170,
      "word": "AHXUKRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 171,
      "word": "AHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 172,
      "word": "AHYAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 173,
      "word": "AHYAKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 174,
      "word": "AHYA MA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 175,
      "word": "AHYAPAMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 176,
      "word": "AHYAPAMKO ÑHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 177,
      "word": "AHYARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 178,
      "word": "AHYAXKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 179,
      "word": "AI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 180,
      "word": "AÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 181,
      "word": "AIMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 182,
      "word": "AIMARAHEI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 183,
      "word": "AÎNÎN YAW WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 184,
      "word": "AIPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 185,
      "word": "AIWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 186,
      "word": "AKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 187,
      "word": "AKACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 188,
      "word": "AKACHOTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 189,
      "word": "AKAMISAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 190,
      "word": "AKAMONÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 191,
      "word": "AKANAHTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 192,
      "word": "AKANAPAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 193,
      "word": "AKANAWARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 194,
      "word": "AKANÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 195,
      "word": "AKARITAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 196,
      "word": "AKARITOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 197,
      "word": "AKARITOÑERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 198,
      "word": "AKAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 199,
      "word": "AKAWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 200,
      "word": "AKAYINÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 201,
      "word": "AKAYRIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 202,
      "word": "AKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 203,
      "word": "AKIHKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 204,
      "word": "AKÎHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 205,
      "word": "AKIHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 206,
      "word": "AKÎHXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 207,
      "word": "AKÎKNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 208,
      "word": "AKÎPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 209,
      "word": "AKIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 210,
      "word": "AKÎRÎKÎRÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 211,
      "word": "AKÎRÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 212,
      "word": "AKIŘWAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 213,
      "word": "AKÎTANMEKÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 214,
      "word": "AKMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 215,
      "word": "AKNAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 216,
      "word": "AKNAMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 217,
      "word": "AKNAMAPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 218,
      "word": "AKNAMAPORA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 219,
      "word": "AKÑICOKO HÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 220,
      "word": "AKÑIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 221,
      "word": "AKÑIPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 222,
      "word": "AKÑIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 223,
      "word": "AKÑIPURA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 224,
      "word": "AK ÑIYO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 225,
      "word": "AKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 226,
      "word": "AKNOMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 227,
      "word": "AKNONKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 228,
      "word": "AKNONKAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 229,
      "word": "AKOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 230,
      "word": "AKOROKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 231,
      "word": "AKOWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 232,
      "word": "AKOWERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 233,
      "word": "AKPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 234,
      "word": "AKPACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 235,
      "word": "AKPACOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 236,
      "word": "AKPAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 237,
      "word": "AKPAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 238,
      "word": "AKPAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 239,
      "word": "AKPARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 240,
      "word": "AKPARA CEXPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 241,
      "word": "AKPARA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 242,
      "word": "AKPATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 243,
      "word": "AKPÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 244,
      "word": "AKPÎN KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 245,
      "word": "AKPÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 246,
      "word": "AKPÎRA YÎHTÎNOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 247,
      "word": "AKPOROHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 248,
      "word": "AKPOROPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 249,
      "word": "AKPOTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 250,
      "word": "AKRAKRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 251,
      "word": "AKRAPAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 252,
      "word": "AKRAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 253,
      "word": "AKREWETÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 254,
      "word": "AKRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 255,
      "word": "AKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 256,
      "word": "AKRÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 257,
      "word": "AKRÎRÎPAMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 258,
      "word": "AKRÎRPAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 259,
      "word": "AKRÎTANMEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 260,
      "word": "AKRÎTANMEKÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 261,
      "word": "AKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 262,
      "word": "AKRONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 263,
      "word": "AKRONOMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 264,
      "word": "AKRONOMACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 265,
      "word": "AKRONOMACHORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 266,
      "word": "AKRONOMAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 267,
      "word": "AKRONOMAÑERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 268,
      "word": "AKRONOMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 269,
      "word": "AKRONONKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 270,
      "word": "AKRONONKAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 271,
      "word": "AKRONORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 272,
      "word": "AKRORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 273,
      "word": "AKROROSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 274,
      "word": "AKROSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 275,
      "word": "AKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 276,
      "word": "AKUHŘAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 277,
      "word": "AKUKMAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 278,
      "word": "AKUKMAÑENHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 279,
      "word": "AKUKMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 280,
      "word": "AKUKMAXERA WAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 281,
      "word": "AKUKMAXE WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 282,
      "word": "AKUMHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 283,
      "word": "AKUMINTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 284,
      "word": "AKUMKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 285,
      "word": "AKUMRUKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 286,
      "word": "AKUMYAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 287,
      "word": "AKUPUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 288,
      "word": "AKURUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 289,
      "word": "AKUYWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 290,
      "word": "AKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 291,
      "word": "AKWAHSÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 292,
      "word": "AKWEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 293,
      "word": "AKWERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 294,
      "word": "AKWERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 295,
      "word": "AKWOWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 296,
      "word": "AMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 297,
      "word": "AMACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 298,
      "word": "AMACIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 299,
      "word": "AMACOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 300,
      "word": "AMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 301,
      "word": "AMANARIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 302,
      "word": "AMANATÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 303,
      "word": "AMANÎCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 304,
      "word": "AMANÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 305,
      "word": "AMANÎMKO OYAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 306,
      "word": "AMANÎMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 307,
      "word": "AMANÎMTOPO KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 308,
      "word": "AMAPIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 309,
      "word": "AMARARÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 310,
      "word": "AMARIYAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 311,
      "word": "AMATKÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 312,
      "word": "AMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 313,
      "word": "AMAWKAŘA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 314,
      "word": "AMAYAMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 315,
      "word": "AMCIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 316,
      "word": "AMCIKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 317,
      "word": "AMČIKÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 318,
      "word": "AMCIKIRIRINKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 319,
      "word": "AMCO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 320,
      "word": "AME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 321,
      "word": "AMEHCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 322,
      "word": "AMEHKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 323,
      "word": "AMEHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 324,
      "word": "AMEHTOPONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 325,
      "word": "AMEHTOPORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 326,
      "word": "AMEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 327,
      "word": "AMEKÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 328,
      "word": "AMEKIRA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 329,
      "word": "AMENOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 330,
      "word": "AMETATAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 331,
      "word": "AMETATANTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 332,
      "word": "AMEYAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 333,
      "word": "AMEYANTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 334,
      "word": "AMHOSOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 335,
      "word": "AMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 336,
      "word": "AMICHIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 337,
      "word": "AMICHIRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 338,
      "word": "AMICHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 339,
      "word": "AMICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 340,
      "word": "AMICIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 341,
      "word": "AMICINTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 342,
      "word": "AMICITHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 343,
      "word": "AMIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 344,
      "word": "AMÎM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 345,
      "word": "AMKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 346,
      "word": "AMKARARAKAK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 347,
      "word": "AMKARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 348,
      "word": "AMKOYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 349,
      "word": "AMKUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 350,
      "word": "AMNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 351,
      "word": "AMÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 352,
      "word": "AMÑE XA SO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 353,
      "word": "AMNONOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 354,
      "word": "AMNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 355,
      "word": "AMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 356,
      "word": "AMOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 357,
      "word": "AMOHCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 358,
      "word": "AMOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 359,
      "word": "AMOKO MANÎMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 360,
      "word": "AMOKO MANÎMSO OYAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 361,
      "word": "AMOKO XIYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 362,
      "word": "AMOKUKWEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 363,
      "word": "AMOMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 364,
      "word": "AMOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 365,
      "word": "AMOMRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 366,
      "word": "AMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 367,
      "word": "AMORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 368,
      "word": "AMORO AHKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 369,
      "word": "AMOTÎWÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 370,
      "word": "AMOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 371,
      "word": "AMOTOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 372,
      "word": "AMOXOXO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 373,
      "word": "AMOXOXON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 374,
      "word": "AMOYARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 375,
      "word": "AMOYARAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 376,
      "word": "AMOYEKNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 377,
      "word": "AMOYERETA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 378,
      "word": "AMOYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 379,
      "word": "AMPOSOHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 380,
      "word": "AMRINA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 381,
      "word": "AMRINAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 382,
      "word": "AMRIŘPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 383,
      "word": "AMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 384,
      "word": "AMRUKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 385,
      "word": "AMRURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 386,
      "word": "AMRUYATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 387,
      "word": "AMTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 388,
      "word": "AMTACME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 389,
      "word": "AMTAKPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 390,
      "word": "AMTAPOTAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 391,
      "word": "AMTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 392,
      "word": "AMTARINO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 393,
      "word": "AMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 394,
      "word": "AMUE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 395,
      "word": "AMUMURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 396,
      "word": "AMUYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 397,
      "word": "AMXIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 398,
      "word": "AMXIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 399,
      "word": "AMXÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 400,
      "word": "AMXIRIRIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 401,
      "word": "AMXO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 402,
      "word": "AMXOTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 403,
      "word": "AMYAMRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 404,
      "word": "ANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 405,
      "word": "ANAHMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 406,
      "word": "ANAHMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 407,
      "word": "ANAHMATOPO KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 408,
      "word": "ANAHRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 409,
      "word": "ANAKIRWAMATHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 410,
      "word": "ANAKÎTOTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 411,
      "word": "ANAKÑIPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 412,
      "word": "ANANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 413,
      "word": "ANAÑIXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 414,
      "word": "ANAPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 415,
      "word": "ANARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 416,
      "word": "ANARÎ HARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 417,
      "word": "ANARIMAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 418,
      "word": "ANARÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 419,
      "word": "ANARÎTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 420,
      "word": "ANARME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 421,
      "word": "ANARME ČIRKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 422,
      "word": "ANARMERPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 423,
      "word": "ANATÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 424,
      "word": "ANATO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 425,
      "word": "ANATOXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 426,
      "word": "ANCU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 427,
      "word": "AÑENÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 428,
      "word": "AÑEYAMRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 429,
      "word": "ANEYIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 430,
      "word": "ANHMARA NAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 431,
      "word": "AÑIHKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 432,
      "word": "AÑIKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 433,
      "word": "ANÎMÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 434,
      "word": "ANÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 435,
      "word": "ANÎMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 436,
      "word": "ANÎNOMRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 437,
      "word": "ANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 438,
      "word": "ANKAŘWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 439,
      "word": "ANME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 440,
      "word": "ANOMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 441,
      "word": "ANORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 442,
      "word": "ANTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 443,
      "word": "ANTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 444,
      "word": "ANTOMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 445,
      "word": "ANWEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 446,
      "word": "ANWEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 447,
      "word": "APA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 448,
      "word": "APACAK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 449,
      "word": "APACAKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 450,
      "word": "APAČAKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 451,
      "word": "APACAKRÎ KÎHTAYAHSÎÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 452,
      "word": "APAIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 453,
      "word": "APAMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 454,
      "word": "APANARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 455,
      "word": "APANATAN MEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 456,
      "word": "APANATANMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 457,
      "word": "APANATARÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 458,
      "word": "APAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 459,
      "word": "APAPA CACAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 460,
      "word": "APAPA PAMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 461,
      "word": "APAPA POCON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 462,
      "word": "APAPA TAMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 463,
      "word": "APAPA YAKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 464,
      "word": "APAPA YEPEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 465,
      "word": "APAPA YÎM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 466,
      "word": "APAPA YON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 467,
      "word": "APARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 468,
      "word": "APARACA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 469,
      "word": "APARACAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 470,
      "word": "APARATAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 471,
      "word": "APARA YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 472,
      "word": "APARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 473,
      "word": "APAŘPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 474,
      "word": "APASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 475,
      "word": "APAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 476,
      "word": "APAWANARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 477,
      "word": "APAWAREKÓ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 478,
      "word": "APAYINOHKARA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 479,
      "word": "APAYINOKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 480,
      "word": "APAYIRÎ YAKRORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 481,
      "word": "APAYITOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 482,
      "word": "APAYITOPO YEMAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 483,
      "word": "APAYITOPO YIMAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 484,
      "word": "APAYIYATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 485,
      "word": "APAYPÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 486,
      "word": "APAYPÎNÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 487,
      "word": "APAYUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 488,
      "word": "APAYXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 489,
      "word": "APE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 490,
      "word": "APEHCE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 491,
      "word": "APEHCEME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 492,
      "word": "APEHČEME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 493,
      "word": "APEHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 494,
      "word": "APEHNÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 495,
      "word": "APEHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 496,
      "word": "APEHRA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 497,
      "word": "APEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 498,
      "word": "APEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 499,
      "word": "APENEKANE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 500,
      "word": "APEÑE PÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 501,
      "word": "APEPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 502,
      "word": "APERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 503,
      "word": "APESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 504,
      "word": "APICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 505,
      "word": "APICKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 506,
      "word": "APIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 507,
      "word": "APIKMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 508,
      "word": "APIKRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 509,
      "word": "APÎMÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 510,
      "word": "APÎNÎNYAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 511,
      "word": "APIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 512,
      "word": "APÎTÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 513,
      "word": "APO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 514,
      "word": "APOCKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 515,
      "word": "APOCKAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 516,
      "word": "APOCON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 517,
      "word": "APOHANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 518,
      "word": "APOHKAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 519,
      "word": "APOHKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 520,
      "word": "APOHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 521,
      "word": "APOHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 522,
      "word": "APOKAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 523,
      "word": "APOMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 524,
      "word": "APOMRIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 525,
      "word": "APON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 526,
      "word": "APONA WIIŘASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 527,
      "word": "APONKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 528,
      "word": "APONUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 529,
      "word": "APOÑURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 530,
      "word": "APOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 531,
      "word": "APOŘAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 532,
      "word": "APORARAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 533,
      "word": "APORESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 534,
      "word": "APORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 535,
      "word": "APORÎYAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 536,
      "word": "APORKAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 537,
      "word": "APORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 538,
      "word": "APOROTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 539,
      "word": "APORWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 540,
      "word": "APOSOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 541,
      "word": "APOSOKAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 542,
      "word": "APOSOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 543,
      "word": "APOTKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 544,
      "word": "APOTMÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 545,
      "word": "APOTURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 546,
      "word": "APOXIXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 547,
      "word": "APOYPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 548,
      "word": "APU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 549,
      "word": "APUHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 550,
      "word": "APUHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 551,
      "word": "APUNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 552,
      "word": "ARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 553,
      "word": "ARAKAPUSA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 554,
      "word": "ARAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 555,
      "word": "ARAMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 556,
      "word": "ARAMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 557,
      "word": "ARAPAPETO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 558,
      "word": "ARARAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 559,
      "word": "ARAWANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 560,
      "word": "ARAWÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 561,
      "word": "ARECINA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 562,
      "word": "ARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 563,
      "word": "ARÎHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 564,
      "word": "ARIKNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 565,
      "word": "ARIMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 566,
      "word": "ARÎNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 567,
      "word": "ARÎRÎPAMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 568,
      "word": "ARÎRKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 569,
      "word": "ARÎXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 570,
      "word": "ARÎXE MAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 571,
      "word": "ARIXKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 572,
      "word": "ARJ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 573,
      "word": "ARKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 574,
      "word": "ARKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 575,
      "word": "AŘMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 576,
      "word": "AŘMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 577,
      "word": "AŘMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 578,
      "word": "ARMOMIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 579,
      "word": "ARMONI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 580,
      "word": "ARNTAWNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 581,
      "word": "ARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 582,
      "word": "AROKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 583,
      "word": "AROKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 584,
      "word": "AROKORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 585,
      "word": "AROOWON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 586,
      "word": "AROPOTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 587,
      "word": "ARPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 588,
      "word": "ARUPUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 589,
      "word": "ARUWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 590,
      "word": "AŘWAŘWAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 591,
      "word": "ASAKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 592,
      "word": "ASAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 593,
      "word": "ASAKÎ MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 594,
      "word": "ASAKÎ RO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 595,
      "word": "ASAKÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 596,
      "word": "ASAKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 597,
      "word": "ASAKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 598,
      "word": "ASAYAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 599,
      "word": "ASÎSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 600,
      "word": "ASÎSÎKNOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 601,
      "word": "ASONÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 602,
      "word": "ASOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 603,
      "word": "ASWANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 604,
      "word": "ATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 605,
      "word": "ATAMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 606,
      "word": "ATARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 607,
      "word": "ATARARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 608,
      "word": "ATI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 609,
      "word": "ATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 610,
      "word": "ATÎK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 611,
      "word": "ATÎKRON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 612,
      "word": "ATÎTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 613,
      "word": "ATÎTMAMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 614,
      "word": "ATÎ WIČAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 615,
      "word": "ATÎXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 616,
      "word": "ATKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 617,
      "word": "ATKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 618,
      "word": "ATMUNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 619,
      "word": "ATO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 620,
      "word": "ATPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 621,
      "word": "ATPORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 622,
      "word": "ATUKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 623,
      "word": "ATUMNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 624,
      "word": "ATUWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 625,
      "word": "ATWEIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 626,
      "word": "AWAKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 627,
      "word": "AWAKNONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 628,
      "word": "AWAKON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 629,
      "word": "AWAKONÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 630,
      "word": "AWAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 631,
      "word": "AWAKRONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 632,
      "word": "AWAKRO OMANÎMXERA WAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 633,
      "word": "AWAKRO OMANIMXE WAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 634,
      "word": "AWAKRO OYEXIXEHRA WAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 635,
      "word": "AWAKRO OYEXIXE WAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 636,
      "word": "AWAKRORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 637,
      "word": "AWAKROROSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 638,
      "word": "AWAKROSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 639,
      "word": "AWAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 640,
      "word": "AWAMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 641,
      "word": "AWAMORÎ NAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 642,
      "word": "AWAMOYARAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 643,
      "word": "AWANAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 644,
      "word": "AWANOME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 645,
      "word": "AWANORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 646,
      "word": "AWAPARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 647,
      "word": "AWAPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 648,
      "word": "AWAPORAKAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 649,
      "word": "AWAPORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 650,
      "word": "AWARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 651,
      "word": "AWARAWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 652,
      "word": "AWARAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 653,
      "word": "AWARAY PÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 654,
      "word": "AWARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 655,
      "word": "AWARKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 656,
      "word": "AWAROKORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 657,
      "word": "AWARPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 658,
      "word": "AWARPAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 659,
      "word": "AWARPANCHERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 660,
      "word": "AWARPANCHEW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 661,
      "word": "AWARPANTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 662,
      "word": "AWATAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 663,
      "word": "AWAWCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 664,
      "word": "AWAWCIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 665,
      "word": "AWAWRUTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 666,
      "word": "AWAWYOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 667,
      "word": "AWAYAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 668,
      "word": "AWAYAMNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 669,
      "word": "AWAYARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 670,
      "word": "AWAYKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 671,
      "word": "AWAYKE NORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 672,
      "word": "AWAYTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 673,
      "word": "AWCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 674,
      "word": "AWČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 675,
      "word": "AWCIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 676,
      "word": "AWCITHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 677,
      "word": "AWEHTORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 678,
      "word": "AWEHYATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 679,
      "word": "AWEHYATKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 680,
      "word": "AWEHYUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 681,
      "word": "AWEKAREW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 682,
      "word": "AWEKEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 683,
      "word": "AWEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 684,
      "word": "AWEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 685,
      "word": "AWEMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 686,
      "word": "AWEMYAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 687,
      "word": "AWEMYAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 688,
      "word": "AWENÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 689,
      "word": "AWENÎMRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 690,
      "word": "AWEPAKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 691,
      "word": "AWEPEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 692,
      "word": "AWEPEKA NESEHTINOYA WOXAM YAKRO TIMTAPOWATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 693,
      "word": "AWERERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 694,
      "word": "AWESKA WAYIHKARA MEXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 695,
      "word": "AWETHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 696,
      "word": "AWETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 697,
      "word": "AWEWAHRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 698,
      "word": "AWEWKEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 699,
      "word": "AWEWNARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 700,
      "word": "AWEWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 701,
      "word": "AWEWRUCPAXERA WAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 702,
      "word": "AWEWRUTOPONHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 703,
      "word": "AWEWRUYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 704,
      "word": "AWEWTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 705,
      "word": "AWEWTON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 706,
      "word": "AWEYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 707,
      "word": "AWEYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 708,
      "word": "AWEYAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 709,
      "word": "AWEYAMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 710,
      "word": "AWEYAMYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 711,
      "word": "AWEYÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 712,
      "word": "AWEYPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 713,
      "word": "AWEYPOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 714,
      "word": "AWEYPOÑENHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 715,
      "word": "AWEYPOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 716,
      "word": "AWEYPOTOPONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 717,
      "word": "AWEYURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 718,
      "word": "AWITOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 719,
      "word": "AWKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 720,
      "word": "AWNUKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 721,
      "word": "AWNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 722,
      "word": "AWOCORON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 723,
      "word": "AWOKPOWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 724,
      "word": "AWOKRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 725,
      "word": "AWOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 726,
      "word": "AWOMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 727,
      "word": "AWOMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 728,
      "word": "AWOMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 729,
      "word": "AWONOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 730,
      "word": "AWOSÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 731,
      "word": "AWOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 732,
      "word": "AWOSOKEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 733,
      "word": "AWOSOKMURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 734,
      "word": "AWOSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 735,
      "word": "AWOSOREÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 736,
      "word": "AWOSOREÑE RORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 737,
      "word": "AWOSOTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 738,
      "word": "AWOSOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 739,
      "word": "AWOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 740,
      "word": "AWOWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 741,
      "word": "AWRONOHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 742,
      "word": "AWRUTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 743,
      "word": "AWRUTAWNO POONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 744,
      "word": "AWSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 745,
      "word": "AWXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 746,
      "word": "AWYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 747,
      "word": "AWYAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 748,
      "word": "AWYOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 749,
      "word": "AWYUKUNTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 750,
      "word": "AWYURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 751,
      "word": "AXAPIKAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 752,
      "word": "AXAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 753,
      "word": "AXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 754,
      "word": "AXIKWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 755,
      "word": "AXKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 756,
      "word": "AXKIXKIMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 757,
      "word": "AXPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 758,
      "word": "AXWIXWIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 759,
      "word": "AYAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 760,
      "word": "AYANI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 761,
      "word": "AYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 762,
      "word": "AYINTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 763,
      "word": "AYKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 764,
      "word": "AYKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 765,
      "word": "AYOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 766,
      "word": "AYOPONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 767,
      "word": "AYORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 768,
      "word": "AYUKWARÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 769,
      "word": "C",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 770,
      "word": "CA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 771,
      "word": "CAA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 772,
      "word": "CAACA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 773,
      "word": "CAAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 774,
      "word": "CAANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 775,
      "word": "CAARAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 776,
      "word": "ČAARAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 777,
      "word": "CAAYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 778,
      "word": "CAHCAKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 779,
      "word": "CAHCAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 780,
      "word": "CAIWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 781,
      "word": "CAK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 782,
      "word": "CAKANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 783,
      "word": "CAKANACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 784,
      "word": "CAKARKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 785,
      "word": "CAKAŘMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 786,
      "word": "CAKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 787,
      "word": "CAMKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 788,
      "word": "CAMKÎNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 789,
      "word": "CAMKÎNO PÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 790,
      "word": "CAMKÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 791,
      "word": "CAMNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 792,
      "word": "CANAIMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 793,
      "word": "CANANO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 794,
      "word": "CAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 795,
      "word": "CAPAHNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 796,
      "word": "CAPAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 797,
      "word": "CARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 798,
      "word": "CARAICARAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 799,
      "word": "CARAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 800,
      "word": "CARAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 801,
      "word": "CARARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 802,
      "word": "CARARAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 803,
      "word": "CARATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 804,
      "word": "ČARATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 805,
      "word": "CARATACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 806,
      "word": "CARUKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 807,
      "word": "CARUMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 808,
      "word": "CAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 809,
      "word": "ČAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 810,
      "word": "CAWANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 811,
      "word": "CAWAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 812,
      "word": "ČAWAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 813,
      "word": "CAYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 814,
      "word": "CE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 815,
      "word": "CECEHKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 816,
      "word": "CECEHKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 817,
      "word": "CECEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 818,
      "word": "CECEÑAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 819,
      "word": "CECEPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 820,
      "word": "ČEČEPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 821,
      "word": "CEEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 822,
      "word": "CEEPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 823,
      "word": "CEESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 824,
      "word": "CEESOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 825,
      "word": "CEETÎI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 826,
      "word": "CEEXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 827,
      "word": "CEHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 828,
      "word": "CEHCOWHAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 829,
      "word": "ČEHKUKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 830,
      "word": "ČEHÑAXI WIIRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 831,
      "word": "CEHSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 832,
      "word": "CEHSOMRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 833,
      "word": "CEHYAKATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 834,
      "word": "CEHYUMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 835,
      "word": "CEHYUYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 836,
      "word": "CEI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 837,
      "word": "CEIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 838,
      "word": "CEIXU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 839,
      "word": "CEKARKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 840,
      "word": "CEKARKAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 841,
      "word": "ČEKAYMORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 842,
      "word": "CEKYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 843,
      "word": "CEKYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 844,
      "word": "CEKYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 845,
      "word": "CEMARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 846,
      "word": "ČEMARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 847,
      "word": "CEMARONTAXMURO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 848,
      "word": "ČEMARONWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 849,
      "word": "CEMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 850,
      "word": "ČEMKUTUÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 851,
      "word": "CEMYAPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 852,
      "word": "CEMYAWNOYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 853,
      "word": "CEÑASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 854,
      "word": "CEÑASÎYKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 855,
      "word": "CEÑEPAÑEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 856,
      "word": "ČEÑEPAÑEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 857,
      "word": "CENEPAÑEM BANTIDO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 858,
      "word": "CENPOREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 859,
      "word": "ČENPOREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 860,
      "word": "CENPOSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 861,
      "word": "CENSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 862,
      "word": "CENTAPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 863,
      "word": "CENTAPOREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 864,
      "word": "CENTAXMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 865,
      "word": "CEPAHSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 866,
      "word": "CEPAMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 867,
      "word": "CEPATASMUYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 868,
      "word": "CEPEMAPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 869,
      "word": "CEPEMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 870,
      "word": "CEPERAYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 871,
      "word": "CEPERKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 872,
      "word": "CEPERKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 873,
      "word": "CEPETAXMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 874,
      "word": "ČEPETHÎKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 875,
      "word": "CEPÎRKAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 876,
      "word": "CEPOCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 877,
      "word": "CEPOHKAXMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 878,
      "word": "CEPOMOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 879,
      "word": "CEPORÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 880,
      "word": "CERAHSOM TIMTAPOTACHO POKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 881,
      "word": "CEREREPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 882,
      "word": "CERMAHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 883,
      "word": "CESEHCEMAXMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 884,
      "word": "CESEPORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 885,
      "word": "CESESMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 886,
      "word": "CESEYSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 887,
      "word": "CESKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 888,
      "word": "CETAHKAXMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 889,
      "word": "CETAHWOREFOSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 890,
      "word": "CETÎRAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 891,
      "word": "CETPOXEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 892,
      "word": "CETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 893,
      "word": "CETUHMEKAXMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 894,
      "word": "CETWAYIHKAXMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 895,
      "word": "CETWOSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 896,
      "word": "CEWANOMARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 897,
      "word": "CEWANOME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 898,
      "word": "CEWARARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 899,
      "word": "CEWAWKUNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 900,
      "word": "CEWAXKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 901,
      "word": "CEWEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 902,
      "word": "CEWNAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 903,
      "word": "CEWÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 904,
      "word": "ČEWÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 905,
      "word": "ČEWÑE MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 906,
      "word": "ČEWÑE SUNTI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 907,
      "word": "CEWOMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 908,
      "word": "CEWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 909,
      "word": "CEWYARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 910,
      "word": "CEWYOWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 911,
      "word": "CEXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 912,
      "word": "CEXEWEKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 913,
      "word": "CEXEWNUSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 914,
      "word": "CEYAMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 915,
      "word": "CEYPAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 916,
      "word": "CEYPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 917,
      "word": "ČEYPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 918,
      "word": "CHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 919,
      "word": "ČHO + ME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 920,
      "word": "CHOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 921,
      "word": "CICAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 922,
      "word": "ČIČAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 923,
      "word": "CICAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 924,
      "word": "CICIPIYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 925,
      "word": "CICIŘMAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 926,
      "word": "CICKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 927,
      "word": "CICWIYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 928,
      "word": "ČIČWIYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 929,
      "word": "CICWIYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 930,
      "word": "CIHXICERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 931,
      "word": "CIHXIKYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 932,
      "word": "CIHXIKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 933,
      "word": "CIHXIKYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 934,
      "word": "CIHXIMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 935,
      "word": "CIHXISO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 936,
      "word": "CIHYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 937,
      "word": "CIHYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 938,
      "word": "ČIHYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 939,
      "word": "CIIMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 940,
      "word": "ČIIÑOYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 941,
      "word": "CIIPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 942,
      "word": "CIISO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 943,
      "word": "CIISOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 944,
      "word": "CIISUSU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 945,
      "word": "CIKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 946,
      "word": "CÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 947,
      "word": "CIKIÑIMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 948,
      "word": "CÎKÎNÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 949,
      "word": "CIKIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 950,
      "word": "ČIKIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 951,
      "word": "CÎKÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 952,
      "word": "CIMICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 953,
      "word": "CIMICISO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 954,
      "word": "CIMICISOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 955,
      "word": "CIMICIYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 956,
      "word": "CIMICIYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 957,
      "word": "CÎMÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 958,
      "word": "ČÎMÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 959,
      "word": "CIMISO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 960,
      "word": "CIMÑIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 961,
      "word": "ČIMÑIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 962,
      "word": "CIÑOY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 963,
      "word": "CIÑOYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 964,
      "word": "CIPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 965,
      "word": "CIPICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 966,
      "word": "CIRAK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 967,
      "word": "CIRICIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 968,
      "word": "CIRIHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 969,
      "word": "CIRIHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 970,
      "word": "CIRIKRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 971,
      "word": "CIRIPIPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 972,
      "word": "CÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 973,
      "word": "CIRIXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 974,
      "word": "CIRKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 975,
      "word": "ČIRKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 976,
      "word": "CIŘMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 977,
      "word": "CIROW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 978,
      "word": "CIRPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 979,
      "word": "CIWYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 980,
      "word": "CÎWYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 981,
      "word": "ČIWYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 982,
      "word": "CIXKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 983,
      "word": "CIYAXKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 984,
      "word": "CMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 985,
      "word": "CMAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 986,
      "word": "CMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 987,
      "word": "CMOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 988,
      "word": "COIHCOI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 989,
      "word": "COKNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 990,
      "word": "COKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 991,
      "word": "COKOCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 992,
      "word": "COKOHCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 993,
      "word": "COKONA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 994,
      "word": "COKOPOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 995,
      "word": "COMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 996,
      "word": "COMOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 997,
      "word": "COMOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 998,
      "word": "COMOTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 999,
      "word": "ČOMOTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1000,
      "word": "COOWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1001,
      "word": "COPOYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1002,
      "word": "ČOPOYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1003,
      "word": "CORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1004,
      "word": "ČORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1005,
      "word": "COROPOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1006,
      "word": "COŘOŘMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1007,
      "word": "COŘOŘO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1008,
      "word": "CORORWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1009,
      "word": "COŘOŘWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1010,
      "word": "COW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1011,
      "word": "COWHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1012,
      "word": "CPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1013,
      "word": "CU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1014,
      "word": "CUCUK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1015,
      "word": "CUCUKMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1016,
      "word": "CUCURE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1017,
      "word": "ČUČURE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1018,
      "word": "CUCUREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1019,
      "word": "CUHCU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1020,
      "word": "CUHWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1021,
      "word": "CUKMANO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1022,
      "word": "CUKMAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1023,
      "word": "ČUKMAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1024,
      "word": "CUKUHCUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1025,
      "word": "CUKUMURURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1026,
      "word": "CUKUPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1027,
      "word": "CUKUYWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1028,
      "word": "CUMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1029,
      "word": "CUMURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1030,
      "word": "CURE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1031,
      "word": "CURUHTOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1032,
      "word": "CUTAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1033,
      "word": "CUUPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1034,
      "word": "ČUUPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1035,
      "word": "CUURE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1036,
      "word": "ČUURE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1037,
      "word": "CWAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1038,
      "word": "CWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1039,
      "word": "CWOTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1040,
      "word": "E",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1041,
      "word": "ECAHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1042,
      "word": "ECAKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1043,
      "word": "EČAKÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1044,
      "word": "ECANAMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1045,
      "word": "ECANAMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1046,
      "word": "ECARAKARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1047,
      "word": "ECE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1048,
      "word": "EČEČETOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1049,
      "word": "ECECOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1050,
      "word": "ECEHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1051,
      "word": "ECEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1052,
      "word": "ECENARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1053,
      "word": "ECEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1054,
      "word": "ECEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1055,
      "word": "ECHI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1056,
      "word": "EČHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1057,
      "word": "ECIHTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1058,
      "word": "ECIHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1059,
      "word": "ECIHXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1060,
      "word": "ECIM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1061,
      "word": "ECIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1062,
      "word": "ECIRIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1063,
      "word": "ECIRPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1064,
      "word": "ECITOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1065,
      "word": "ECIXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1066,
      "word": "ECMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1067,
      "word": "EČMAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1068,
      "word": "ECOCORONKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1069,
      "word": "ECORI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1070,
      "word": "EČORÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1071,
      "word": "EE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1072,
      "word": "EECO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1073,
      "word": "EECO PÓ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1074,
      "word": "EECO PONA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1075,
      "word": "EEI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1076,
      "word": "EEKI EEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1077,
      "word": "EEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1078,
      "word": "EEMIPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1079,
      "word": "EEMÎTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1080,
      "word": "EEMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1081,
      "word": "EEN EEPATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1082,
      "word": "EEPATAPORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1083,
      "word": "EEPATARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1084,
      "word": "EEPATARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1085,
      "word": "EEPOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1086,
      "word": "EEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1087,
      "word": "EEPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1088,
      "word": "EERÎ EETA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1089,
      "word": "EETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1090,
      "word": "EEWINIKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1091,
      "word": "EEWOPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1092,
      "word": "EEXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1093,
      "word": "EHCAYAMAPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1094,
      "word": "EHCEMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1095,
      "word": "EHCEMACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1096,
      "word": "EHCEMAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1097,
      "word": "EHCEMAWRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1098,
      "word": "EHCEMNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1099,
      "word": "EHCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1100,
      "word": "EHČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1101,
      "word": "EHCIMATOPO POKONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1102,
      "word": "EHCIÑONKANÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1103,
      "word": "EHCI POKONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1104,
      "word": "EHCOKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1105,
      "word": "EHCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1106,
      "word": "EHCOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1107,
      "word": "EHCOPORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1108,
      "word": "EHCOYOPONKACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1109,
      "word": "EHČOYOPONKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1110,
      "word": "EHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1111,
      "word": "EHKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1112,
      "word": "EHKUNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1113,
      "word": "EHKURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1114,
      "word": "EHMAMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1115,
      "word": "EHMAMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1116,
      "word": "EHÑA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1117,
      "word": "EHROKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1118,
      "word": "EHSAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1119,
      "word": "EHSAMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1120,
      "word": "EHTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1121,
      "word": "EHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1122,
      "word": "EHTURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1123,
      "word": "EHTURA KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1124,
      "word": "EHYAPAMNOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1125,
      "word": "EHYASMACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1126,
      "word": "EHYATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1127,
      "word": "EHYATKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1128,
      "word": "EHYATKAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1129,
      "word": "EHYEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1130,
      "word": "EHYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1131,
      "word": "EHYUMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1132,
      "word": "EHYUNTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1133,
      "word": "EHYUNTAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1134,
      "word": "EIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1135,
      "word": "EIKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1136,
      "word": "EKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1137,
      "word": "EKAHRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1138,
      "word": "EKAHXIMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1139,
      "word": "EKAHXINKATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1140,
      "word": "EKAIMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1141,
      "word": "EKAIMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1142,
      "word": "EKAIPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1143,
      "word": "EKAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1144,
      "word": "EKAMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1145,
      "word": "EKAMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1146,
      "word": "EKANÎPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1147,
      "word": "EKARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1148,
      "word": "EKARITO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1149,
      "word": "EKARITOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1150,
      "word": "EKARITOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1151,
      "word": "EKAŘKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1152,
      "word": "EKATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1153,
      "word": "EKATÎMÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1154,
      "word": "EKATÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1155,
      "word": "EKATÎNHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1156,
      "word": "EKATÎNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1157,
      "word": "EKATKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1158,
      "word": "EKAYIMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1159,
      "word": "EKAYIMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1160,
      "word": "EKAYINÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1161,
      "word": "EKAYMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1162,
      "word": "EKAYMORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1163,
      "word": "EKEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1164,
      "word": "EKETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1165,
      "word": "EKEXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1166,
      "word": "EKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1167,
      "word": "EKÎHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1168,
      "word": "EKIÑIMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1169,
      "word": "EKIÑIMXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1170,
      "word": "EKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1171,
      "word": "EKMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1172,
      "word": "EKMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1173,
      "word": "EKNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1174,
      "word": "EKNARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1175,
      "word": "EKNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1176,
      "word": "EKOMSÎNKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1177,
      "word": "EKOMSINKATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1178,
      "word": "EKONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1179,
      "word": "EKPOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1180,
      "word": "EKPOSÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1181,
      "word": "EKŘAMANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1182,
      "word": "EKREWEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1183,
      "word": "EKUHYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1184,
      "word": "EKUM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1185,
      "word": "EKUMPARAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1186,
      "word": "EKUNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1187,
      "word": "EKUSU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1188,
      "word": "EMACAKAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1189,
      "word": "EMAHCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1190,
      "word": "EMAHČIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1191,
      "word": "EMAKPOPONKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1192,
      "word": "EMAÑIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1193,
      "word": "EMAPIPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1194,
      "word": "EMAPONA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1195,
      "word": "EMARAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1196,
      "word": "EMARARÎNMAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1197,
      "word": "EMASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1198,
      "word": "EMASÎSPONA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1199,
      "word": "EMASMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1200,
      "word": "EMAXIXITO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1201,
      "word": "EMČAPÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1202,
      "word": "EMCAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1203,
      "word": "EMCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1204,
      "word": "EMČINOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1205,
      "word": "EME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1206,
      "word": "EMEKNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1207,
      "word": "EMEKNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1208,
      "word": "EMEKNUM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1209,
      "word": "EMEKNUWARKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1210,
      "word": "EMEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1211,
      "word": "EMETANMEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1212,
      "word": "EMICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1213,
      "word": "EMICIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1214,
      "word": "EMICIRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1215,
      "word": "EMICITOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1216,
      "word": "EMICIXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1217,
      "word": "EMICIXAPU TUUNA KWAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1218,
      "word": "EMÎČKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1219,
      "word": "EMÎKNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1220,
      "word": "EMÎRÎXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1221,
      "word": "EMÎRPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1222,
      "word": "EMKNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1223,
      "word": "EMKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1224,
      "word": "EMKUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1225,
      "word": "EMOKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1226,
      "word": "EMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1227,
      "word": "EMSI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1228,
      "word": "EMSÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1229,
      "word": "EMTACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1230,
      "word": "EMTAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1231,
      "word": "EMTAKAIMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1232,
      "word": "EMTARAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1233,
      "word": "EMTARAKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1234,
      "word": "EMTAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1235,
      "word": "EMTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1236,
      "word": "EMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1237,
      "word": "EMYACOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1238,
      "word": "EMYAPOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1239,
      "word": "EMYARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1240,
      "word": "EMYARKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1241,
      "word": "EMYATI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1242,
      "word": "EMYAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1243,
      "word": "EMYAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1244,
      "word": "EMYAWNOMNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1245,
      "word": "EN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1246,
      "word": "ENA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1247,
      "word": "ENATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1248,
      "word": "ENATÎTATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1249,
      "word": "ENATÎTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1250,
      "word": "ENATKATIKAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1251,
      "word": "ENATKATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1252,
      "word": "ENATKAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1253,
      "word": "ENAYKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1254,
      "word": "ENCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1255,
      "word": "EÑEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1256,
      "word": "EÑEKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1257,
      "word": "EÑEKANO RIÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1258,
      "word": "EÑEMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1259,
      "word": "EÑEPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1260,
      "word": "EÑEPA ME ÑIIŘA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1261,
      "word": "EÑEPANÎMXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1262,
      "word": "EÑEPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1263,
      "word": "EÑEPEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1264,
      "word": "EÑEPEXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1265,
      "word": "EÑETI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1266,
      "word": "EÑETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1267,
      "word": "EÑEXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1268,
      "word": "ENHÎYAKAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1269,
      "word": "ENÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1270,
      "word": "ENICHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1271,
      "word": "ENÎHMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1272,
      "word": "ENÎHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1273,
      "word": "ENIHRA EHCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1274,
      "word": "ENIHRA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1275,
      "word": "ENÎHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1276,
      "word": "ENÎHTOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1277,
      "word": "ENÎÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1278,
      "word": "ENÎÑENHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1279,
      "word": "ENÎRKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1280,
      "word": "ENÎXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1281,
      "word": "ENKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1282,
      "word": "ENKAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1283,
      "word": "ENKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1284,
      "word": "ENKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1285,
      "word": "ENKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1286,
      "word": "ENKOXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1287,
      "word": "ENKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1288,
      "word": "ENMAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1289,
      "word": "ENMAMNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1290,
      "word": "ENMAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1291,
      "word": "ENMARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1292,
      "word": "ENMARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1293,
      "word": "ENMARÎYAKRORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1294,
      "word": "ENMARÎYATÎXERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1295,
      "word": "ENMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1296,
      "word": "ENMAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1297,
      "word": "ENMAYATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1298,
      "word": "ENMEKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1299,
      "word": "ENMEKÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1300,
      "word": "ENORI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1301,
      "word": "ENORINÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1302,
      "word": "ENORIRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1422,
      "word": "ERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1303,
      "word": "ENORITOPONHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1304,
      "word": "ENORIXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1305,
      "word": "ENPAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1306,
      "word": "ENPAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1307,
      "word": "ENPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1308,
      "word": "ENPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1309,
      "word": "ENPORI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1310,
      "word": "ENTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1311,
      "word": "ENTARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1312,
      "word": "ENTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1313,
      "word": "ENUHMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1314,
      "word": "EPAHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1315,
      "word": "EPAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1316,
      "word": "EPAMKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1317,
      "word": "EPAMORÎRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1318,
      "word": "EPAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1319,
      "word": "EPAMRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1320,
      "word": "EPANÎPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1321,
      "word": "EPANTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1322,
      "word": "EPATAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1323,
      "word": "EPATAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1324,
      "word": "EPATARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1325,
      "word": "EPEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1326,
      "word": "EPEMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1327,
      "word": "EPEMAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1328,
      "word": "EPEMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1329,
      "word": "EPEMRUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1330,
      "word": "EPEMRUTUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1331,
      "word": "EPERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1332,
      "word": "EPEŘA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1333,
      "word": "EPERAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1334,
      "word": "EPEŘAWOKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1335,
      "word": "EPERAYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1336,
      "word": "EPERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1337,
      "word": "EPERÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1338,
      "word": "EPERÎRÎ YENMETOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1339,
      "word": "EPERMUTUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1340,
      "word": "EPETHÎMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1341,
      "word": "EPETHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1342,
      "word": "EPIPITKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1343,
      "word": "EPIRKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1344,
      "word": "EPÎRKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1345,
      "word": "EPIŘMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1346,
      "word": "EPITAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1347,
      "word": "EPIXIRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1348,
      "word": "EPIXIRORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1349,
      "word": "EPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1350,
      "word": "EPOHKACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1351,
      "word": "EPOHKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1352,
      "word": "EPOHKAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1353,
      "word": "EPOKARE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1354,
      "word": "EPONAMEŘE RE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1355,
      "word": "EPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1356,
      "word": "EPORENO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1357,
      "word": "EPORENOMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1358,
      "word": "EPORENOMANÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1359,
      "word": "EPORENONTOXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1360,
      "word": "EPORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1361,
      "word": "EPOYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1362,
      "word": "EPUMNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1363,
      "word": "EPUNWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1364,
      "word": "EPUNWEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1365,
      "word": "EPUPRIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1366,
      "word": "EPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1367,
      "word": "ERAHTÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1368,
      "word": "ERASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1369,
      "word": "ERASÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1370,
      "word": "ERASÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1371,
      "word": "ERASMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1372,
      "word": "ERASMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1373,
      "word": "ERASPEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1374,
      "word": "ERASPETO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1375,
      "word": "ERASPETOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1376,
      "word": "ERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1377,
      "word": "EREKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1378,
      "word": "EREKAME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1379,
      "word": "EREKAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1380,
      "word": "EREKANÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1381,
      "word": "EREKANMEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1382,
      "word": "EREKAYAKAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1383,
      "word": "EREKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1384,
      "word": "EREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1385,
      "word": "EREMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1386,
      "word": "EREMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1387,
      "word": "EREMANMEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1388,
      "word": "EREMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1389,
      "word": "EREMHOSI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1390,
      "word": "EREMKAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1391,
      "word": "EREMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1392,
      "word": "ERENAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1393,
      "word": "EREPIKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1394,
      "word": "EREPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1395,
      "word": "EREPOKACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1396,
      "word": "EREPOKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1397,
      "word": "EREPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1398,
      "word": "EREPORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1399,
      "word": "ERERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1400,
      "word": "ERESI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1401,
      "word": "ERESPOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1402,
      "word": "ERETA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1403,
      "word": "EREW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1404,
      "word": "EREWNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1405,
      "word": "EREWRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1406,
      "word": "EREWSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1407,
      "word": "EREWTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1408,
      "word": "EREXHU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1409,
      "word": "EREXKUMHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1410,
      "word": "EREXUK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1411,
      "word": "EREYECEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1412,
      "word": "ERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1413,
      "word": "ERÎHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1414,
      "word": "ERINATKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1415,
      "word": "ERÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1416,
      "word": "ERÎ YAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1417,
      "word": "ERKAŘWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1418,
      "word": "ERMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1419,
      "word": "EŘMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1420,
      "word": "ERMOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1421,
      "word": "ERMONOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1423,
      "word": "EROKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1424,
      "word": "EROMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1425,
      "word": "ERO MAHYAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1426,
      "word": "ERO MAKATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1427,
      "word": "ERORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1428,
      "word": "EROROMERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1429,
      "word": "ERO WA KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1430,
      "word": "EROWARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1431,
      "word": "ERO WARA NASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1432,
      "word": "EROWARA RORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1433,
      "word": "EROYANME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1434,
      "word": "ERO YAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1435,
      "word": "ERO YAWHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1436,
      "word": "EŘPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1437,
      "word": "EŘPOČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1438,
      "word": "ESAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1439,
      "word": "ESAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1440,
      "word": "ESAMATO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1441,
      "word": "ESAWNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1442,
      "word": "ESAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1443,
      "word": "ESEHSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1444,
      "word": "ESEHTÎNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1445,
      "word": "ESEMAÑIPÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1446,
      "word": "ESEMEŘWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1447,
      "word": "ESEMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1448,
      "word": "ESEMÎKNON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1449,
      "word": "ESEMOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1450,
      "word": "ESENEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1451,
      "word": "ESENEPANMEKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1452,
      "word": "ESENMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1453,
      "word": "ESEPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1454,
      "word": "ESEPATAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1455,
      "word": "ESEPOTPONA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1456,
      "word": "ESEREPOKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1457,
      "word": "ESERESMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1458,
      "word": "ESERESMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1459,
      "word": "ESERESMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1460,
      "word": "ESERESMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1461,
      "word": "ESERINATKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1462,
      "word": "ESESÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1463,
      "word": "ESEWAKOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1464,
      "word": "ESEWAKRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1465,
      "word": "ESEWRUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1466,
      "word": "ESEWYETKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1467,
      "word": "ESEYAMCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1468,
      "word": "ESEYAMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1469,
      "word": "ESEYAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1470,
      "word": "ESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1471,
      "word": "ESKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1472,
      "word": "ESKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1473,
      "word": "ESMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1474,
      "word": "ESOHSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1475,
      "word": "ESOHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1476,
      "word": "ESOKURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1477,
      "word": "ESONI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1478,
      "word": "ESU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1479,
      "word": "ESUMNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1480,
      "word": "ESUNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1481,
      "word": "ESURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1482,
      "word": "ETACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1483,
      "word": "ETAHKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1484,
      "word": "ETAHKAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1485,
      "word": "ETAHSÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1486,
      "word": "ETAHSÎTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1487,
      "word": "ETAHWOREKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1488,
      "word": "ETAHWOREPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1489,
      "word": "ETAHWOREPORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1490,
      "word": "ETAHWOREPOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1491,
      "word": "ETAHWORESO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1492,
      "word": "ETAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1493,
      "word": "ETAKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1494,
      "word": "ETAKÎKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1495,
      "word": "ETAKNAMANÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1496,
      "word": "ETAKNAMARA MIYA RORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1497,
      "word": "ETAKPARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1498,
      "word": "ETAKPAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1499,
      "word": "ETAKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1500,
      "word": "ETAMERENAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1501,
      "word": "ETAMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1502,
      "word": "ETAMOKŘAMANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1503,
      "word": "ETAMTAPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1504,
      "word": "ETAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1505,
      "word": "ETAPACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1506,
      "word": "ETAPAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1507,
      "word": "ETAPIČKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1508,
      "word": "ETAPIČKATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1509,
      "word": "ETAPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1510,
      "word": "ETAPOYPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1511,
      "word": "ETARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1512,
      "word": "ETAŘKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1513,
      "word": "ETAŘMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1514,
      "word": "ETAŘMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1515,
      "word": "ETÎMTAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1516,
      "word": "ETIŘAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1517,
      "word": "ETÎRAPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1518,
      "word": "ETÎTÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1519,
      "word": "ETÎXATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1520,
      "word": "ETÎXATPÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1521,
      "word": "ETÎXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1522,
      "word": "ETKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1523,
      "word": "ETOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1524,
      "word": "ETOWTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1525,
      "word": "ETOWURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1526,
      "word": "ETOWXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1527,
      "word": "ETPIMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1528,
      "word": "ETPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1529,
      "word": "ETPOČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1530,
      "word": "ETPOKO NAXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1531,
      "word": "ETPONANMEÑE RE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1532,
      "word": "EW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1533,
      "word": "EWAH",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1534,
      "word": "EWAHPEÑAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1535,
      "word": "EWAHRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1536,
      "word": "EWAHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1537,
      "word": "EWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1538,
      "word": "EWANKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1539,
      "word": "EWANOMACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1540,
      "word": "EWANOMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1541,
      "word": "EWANOMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1542,
      "word": "EWAPUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1543,
      "word": "EWAPURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1544,
      "word": "EWAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1545,
      "word": "EWAXIRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1546,
      "word": "EWCOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1547,
      "word": "EWCOKOCOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1548,
      "word": "EWČOKOČOKON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1549,
      "word": "EWEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1550,
      "word": "EWETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1551,
      "word": "EWETKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1552,
      "word": "EWEYPONKAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1553,
      "word": "EWKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1554,
      "word": "EWKAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1555,
      "word": "EWKANAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1556,
      "word": "EWKANOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1557,
      "word": "EWKARANPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1558,
      "word": "EWKOŘMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1559,
      "word": "EWKPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1560,
      "word": "EWKPOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1561,
      "word": "EWKRAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1562,
      "word": "EWKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1563,
      "word": "EWKUCANMEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1564,
      "word": "EWKUKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1565,
      "word": "EWKUKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1566,
      "word": "EWKUKMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1567,
      "word": "EWKUKMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1568,
      "word": "EWKUKMATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1569,
      "word": "EWKUNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1570,
      "word": "EWKURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1571,
      "word": "EWKUYMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1572,
      "word": "EWKWIYKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1573,
      "word": "EWNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1574,
      "word": "EWNACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1575,
      "word": "EWNA KPOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1576,
      "word": "EWNAPEÑAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1577,
      "word": "EWNAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1578,
      "word": "EWNAPOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1579,
      "word": "EWNAPOTOKON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1580,
      "word": "EWNAŘAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1581,
      "word": "EWNARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1582,
      "word": "EWNAXKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1583,
      "word": "EWNAXUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1584,
      "word": "EWNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1585,
      "word": "EWOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1586,
      "word": "EWOMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1587,
      "word": "EWOMNOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1588,
      "word": "EWOMNOPUXERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1589,
      "word": "EWOMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1590,
      "word": "EWOMTOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1591,
      "word": "EWOMTORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1592,
      "word": "EWOPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1593,
      "word": "EWOPONPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1594,
      "word": "EWPEÑAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1595,
      "word": "EWRAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1596,
      "word": "EWRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1597,
      "word": "EWREMETO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1598,
      "word": "EWRERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1599,
      "word": "EWRESAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1600,
      "word": "EWROROMUTWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1601,
      "word": "EWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1602,
      "word": "EWRUCHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1603,
      "word": "EWRUCPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1604,
      "word": "EWRU PIČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1605,
      "word": "EWRURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1606,
      "word": "EWRUTOPONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1607,
      "word": "EWRUYATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1608,
      "word": "EWSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1609,
      "word": "EWTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1610,
      "word": "EWTANÎRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1611,
      "word": "EWTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1612,
      "word": "EWTI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1613,
      "word": "EWTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1614,
      "word": "EWTOTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1615,
      "word": "EWTO YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1616,
      "word": "EWTOYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1617,
      "word": "EWTOYMO CI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1618,
      "word": "EWTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1619,
      "word": "EWU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1620,
      "word": "EWUHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1621,
      "word": "EWUHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1622,
      "word": "EWUHRENTORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1623,
      "word": "EWUHRENTOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1624,
      "word": "EWYAKNAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1625,
      "word": "EWYARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1626,
      "word": "EWYETAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1627,
      "word": "EWYOKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1628,
      "word": "EWYOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1629,
      "word": "EWYOMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1630,
      "word": "EWYOMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1631,
      "word": "EXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1632,
      "word": "EXEKMÎNPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1633,
      "word": "EXEKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1634,
      "word": "EXENAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1635,
      "word": "EXEPEYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1636,
      "word": "EXETORI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1637,
      "word": "EXEWARKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1638,
      "word": "EXEWNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1639,
      "word": "EXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1640,
      "word": "EXIHNAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1641,
      "word": "EXIHNÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1642,
      "word": "EXIRKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1643,
      "word": "EXISTIUKAA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1644,
      "word": "EXITAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1645,
      "word": "EXITAWSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1646,
      "word": "EYAMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1647,
      "word": "EYAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1648,
      "word": "EYAMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1649,
      "word": "EYATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1650,
      "word": "EYEHKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1651,
      "word": "EYEHKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1652,
      "word": "EYEHSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1653,
      "word": "EYEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1654,
      "word": "EYEPURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1655,
      "word": "EYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1656,
      "word": "EYIHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1657,
      "word": "EYIHKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1658,
      "word": "EYÎHRA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1659,
      "word": "EYKACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1660,
      "word": "EYKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1661,
      "word": "EYKAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1662,
      "word": "EYKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1663,
      "word": "EYSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1664,
      "word": "EYUHKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1665,
      "word": "EYUHTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1666,
      "word": "H",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1667,
      "word": "HA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1668,
      "word": "HAMHAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1669,
      "word": "HARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1670,
      "word": "HCAMHOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1671,
      "word": "HCAMNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1672,
      "word": "HCAWNUK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1673,
      "word": "HCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1674,
      "word": "HCÎPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1675,
      "word": "HCIRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1676,
      "word": "HKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1677,
      "word": "HKAÑAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1678,
      "word": "HKAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1679,
      "word": "HKATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1680,
      "word": "HKOŘOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1681,
      "word": "HKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1682,
      "word": "HMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1683,
      "word": "HNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1684,
      "word": "-HN-AW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1685,
      "word": "HNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1686,
      "word": "HPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1687,
      "word": "HRAK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1688,
      "word": "HRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1689,
      "word": "HREKAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1690,
      "word": "HREPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1691,
      "word": "HRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1692,
      "word": "HROXOXO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1693,
      "word": "HRUNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1694,
      "word": "HSA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1695,
      "word": "HTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1696,
      "word": "HTAKMARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1697,
      "word": "HTAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1698,
      "word": "HTÎKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1699,
      "word": "HTÎNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1700,
      "word": "HTIPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1701,
      "word": "HTÎPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1702,
      "word": "HTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1703,
      "word": "HXIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1704,
      "word": "HYAPAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1705,
      "word": "HYNSIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1706,
      "word": "HYOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1707,
      "word": "IHSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1708,
      "word": "II",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1709,
      "word": "IIME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1710,
      "word": "IIMEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1711,
      "word": "IIMEN PÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1712,
      "word": "IIMERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1713,
      "word": "IIME RORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1714,
      "word": "IIMEXAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1715,
      "word": "IIMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1716,
      "word": "IINA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1717,
      "word": "IINA ČIRKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1718,
      "word": "IIÑOMNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1719,
      "word": "ÎÎPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1720,
      "word": "ÎÎPÎCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1721,
      "word": "ÎÎPÎYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1722,
      "word": "IIPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1723,
      "word": "IIPONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1724,
      "word": "IITO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1725,
      "word": "IITONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1726,
      "word": "IITONONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1727,
      "word": "IITORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1728,
      "word": "IIXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1729,
      "word": "IIXERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1730,
      "word": "IIXERA WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1731,
      "word": "IIXE WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1732,
      "word": "INARE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1733,
      "word": "-ÎNHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1734,
      "word": "IÑOMNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1735,
      "word": "IPIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1736,
      "word": "IPIPITKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1737,
      "word": "IPONONHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1738,
      "word": "ÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1739,
      "word": "ITOXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1740,
      "word": "ITOXARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1741,
      "word": "IXAMNÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1742,
      "word": "IYAMSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1743,
      "word": "IYOČHO YEWTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1744,
      "word": "IYOHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1745,
      "word": "IYOHYARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1746,
      "word": "IYOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1747,
      "word": "IYOMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1748,
      "word": "IYOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1749,
      "word": "IYOPORO MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1750,
      "word": "IYORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1751,
      "word": "IYOTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1752,
      "word": "IYOTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1753,
      "word": "KA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1754,
      "word": "KAAMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1755,
      "word": "KAAMO KUKNON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1756,
      "word": "KAAMO YEMIČITOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1757,
      "word": "KAAMO YEPATAKAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1758,
      "word": "KAAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1759,
      "word": "KAAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1760,
      "word": "KAAN MÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1761,
      "word": "KAAN YA TÎMSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1762,
      "word": "KAAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1763,
      "word": "KAAPU SMUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1764,
      "word": "KAAPUSMUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1765,
      "word": "KAARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1766,
      "word": "KAARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1767,
      "word": "KACAMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1768,
      "word": "KACAMAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1769,
      "word": "KACE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1770,
      "word": "KACINASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1771,
      "word": "KACINÎMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1772,
      "word": "KACINMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1773,
      "word": "KACIPARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1774,
      "word": "KAČIPARA YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1775,
      "word": "KACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1776,
      "word": "KACWORU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1777,
      "word": "KAHÑERU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1778,
      "word": "KAHÑERU KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1779,
      "word": "KAHÑERU WOOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1780,
      "word": "KAHÑERU XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1781,
      "word": "KAHRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1782,
      "word": "KAHRUTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1783,
      "word": "KAHSÎ ENKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1784,
      "word": "KAHWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1785,
      "word": "KAHWOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1786,
      "word": "KAHWOKANMEXPOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1787,
      "word": "KAHWOKATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1788,
      "word": "KAHWOKES",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1789,
      "word": "KAHWOKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1790,
      "word": "KAHWOREÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1791,
      "word": "KAHWOTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1792,
      "word": "KAHWOTANMEXPOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1793,
      "word": "KAHWOTATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1794,
      "word": "KAHXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1795,
      "word": "KAKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1796,
      "word": "KAKNO KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1797,
      "word": "KAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1798,
      "word": "KAKRONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1799,
      "word": "KAKRONO KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1800,
      "word": "KAKRONOMAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1801,
      "word": "KAKROSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1802,
      "word": "KAMAHXU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1803,
      "word": "KAMAHXUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1804,
      "word": "KAMAHXU ÑESUNUKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1805,
      "word": "KAMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1806,
      "word": "KAMARACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1807,
      "word": "KAMARAČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1808,
      "word": "KAMARAKATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1809,
      "word": "KAMARA YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1810,
      "word": "KAMAXAKARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1811,
      "word": "KAMERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1812,
      "word": "KAMERU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1813,
      "word": "KAMINA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1814,
      "word": "KAMISA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1815,
      "word": "KAMISACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1816,
      "word": "KAMISA KAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1817,
      "word": "KAMISAMNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1818,
      "word": "KAMISAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1819,
      "word": "KAMISAN KAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1820,
      "word": "KAMISAYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1821,
      "word": "KAMOKOWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1822,
      "word": "KAMONTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1823,
      "word": "KAMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1824,
      "word": "KAMOWRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1825,
      "word": "KAMOXOKWENTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1826,
      "word": "KAMOXOXON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1827,
      "word": "KAMOYARAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1828,
      "word": "KAMOYEKNARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1829,
      "word": "KAMPEPERU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1830,
      "word": "KAMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1831,
      "word": "KAMUXPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1832,
      "word": "KAMUXPATHO YEKEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1833,
      "word": "KAMUXPAYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1834,
      "word": "KAMUXPA YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1835,
      "word": "KAMXUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1836,
      "word": "KANAHMUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1837,
      "word": "KANAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1838,
      "word": "KANAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1839,
      "word": "KANAWA MIČI WARAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1840,
      "word": "KANAWARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1841,
      "word": "KANAWATHO TO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1842,
      "word": "KANAYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1843,
      "word": "KANTOMAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1844,
      "word": "KANWEKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1845,
      "word": "KAPEW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1846,
      "word": "KAPEYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1847,
      "word": "KAPIKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1848,
      "word": "KAPIKARA WOOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1849,
      "word": "KAPIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1850,
      "word": "KAPIKMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1851,
      "word": "KAPIKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1852,
      "word": "KAPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1853,
      "word": "KAPUWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1854,
      "word": "KAPUWINI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1855,
      "word": "KARAMAMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1856,
      "word": "KARAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1857,
      "word": "KARASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1858,
      "word": "KARITA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1859,
      "word": "KARITA ENKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1860,
      "word": "KARITA MEWRETOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1861,
      "word": "KAŘME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1862,
      "word": "KAŘPAMXAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1863,
      "word": "KAŘPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1864,
      "word": "KAŘPERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1865,
      "word": "KAŘWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1866,
      "word": "KAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1867,
      "word": "KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1868,
      "word": "KATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1869,
      "word": "KATÎHCARAMAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1870,
      "word": "KATÎHPOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1871,
      "word": "KATÎHPOČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1872,
      "word": "KATÎHWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1873,
      "word": "KATÎHYAMCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1874,
      "word": "KATPAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1875,
      "word": "KATPANAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1876,
      "word": "KATPANAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1877,
      "word": "KATPAN PÓ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1878,
      "word": "KATPÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1879,
      "word": "KATUHKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1880,
      "word": "KATUPICIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1881,
      "word": "KATURIMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1882,
      "word": "KATWARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1883,
      "word": "KAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1884,
      "word": "KAWAHMAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1885,
      "word": "KAWAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1886,
      "word": "KAWAIPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1887,
      "word": "KAWARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1888,
      "word": "KAWARU KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1889,
      "word": "KAWARU WOOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1890,
      "word": "KAWARU XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1891,
      "word": "KAWAU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1892,
      "word": "KAWAU AMNONOXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1893,
      "word": "KAWAWANO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1894,
      "word": "KAWAWAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1895,
      "word": "KAWAXIY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1896,
      "word": "KAWAXIYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1897,
      "word": "KAWAYAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1898,
      "word": "KAWAYKAWAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1899,
      "word": "KAWERESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1900,
      "word": "KAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1901,
      "word": "KAWNO PÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1902,
      "word": "KAWNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1903,
      "word": "KAWRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1904,
      "word": "KAWRUTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1905,
      "word": "KAWU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1906,
      "word": "KAWURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1907,
      "word": "KAXARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1908,
      "word": "KAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1909,
      "word": "KAXIRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1910,
      "word": "KAXMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1911,
      "word": "KAXMI YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1912,
      "word": "KAYARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1913,
      "word": "KAYARITOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1914,
      "word": "KAYARITOMO PURANTAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1915,
      "word": "KAYATÎTKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1916,
      "word": "KAYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1917,
      "word": "KAYINASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1918,
      "word": "KAYIÑEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1919,
      "word": "KAYINÎMSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1920,
      "word": "KAYINMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1921,
      "word": "KAYKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1922,
      "word": "KAYKA EYEHSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1923,
      "word": "KAYKAHA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1924,
      "word": "KAYKATKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1925,
      "word": "KAYKOKORONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1926,
      "word": "KAYRIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1927,
      "word": "KE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1928,
      "word": "KECEKERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1929,
      "word": "KEČEÑAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1930,
      "word": "KEHČAMHOKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1931,
      "word": "KEHČEMAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1932,
      "word": "KEHRERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1933,
      "word": "KEHYUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1934,
      "word": "KEKAŘKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1935,
      "word": "KEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1936,
      "word": "KEMAHCIWU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1937,
      "word": "KEMAHCIYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1938,
      "word": "KEMAHCIYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1939,
      "word": "KEMEKNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1940,
      "word": "KEMEKNUMCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1941,
      "word": "KEMÎKNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1942,
      "word": "KEMÎKNOYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1943,
      "word": "KEMÎKNOYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1944,
      "word": "KEMÎRPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1945,
      "word": "KEMTAKAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1946,
      "word": "KEMYARÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1947,
      "word": "KEMYAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1948,
      "word": "KEMYAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1949,
      "word": "KEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1950,
      "word": "KENE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1951,
      "word": "KEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1952,
      "word": "KENEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1953,
      "word": "KENPAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1954,
      "word": "KENPESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1955,
      "word": "KENPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1956,
      "word": "KENPOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1957,
      "word": "KENTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1958,
      "word": "KENTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1959,
      "word": "KENWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1960,
      "word": "KEPAMTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1961,
      "word": "KEPANÎÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1962,
      "word": "KEPANÎÑERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1963,
      "word": "KEPANÎYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1964,
      "word": "KEPANTOME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1965,
      "word": "KEPATAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1966,
      "word": "KEPETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1967,
      "word": "KEPUHRETOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1968,
      "word": "KERAHTÎM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1969,
      "word": "KERASWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1970,
      "word": "KEREKANASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1971,
      "word": "KEREPAMNOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1972,
      "word": "KERETAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1973,
      "word": "KEREWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1974,
      "word": "KERMOMÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1975,
      "word": "KESEHTÎNOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1976,
      "word": "KESEMETANMEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1977,
      "word": "KESEMETANMEKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1978,
      "word": "KESENMETOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1979,
      "word": "KESENTACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1980,
      "word": "KESENTACHOMÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1981,
      "word": "KESEREPOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1982,
      "word": "KESEREPOKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1983,
      "word": "KESETAKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1984,
      "word": "KESEYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1985,
      "word": "KESEYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1986,
      "word": "KESKAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1987,
      "word": "KESMUNKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1988,
      "word": "KESMUREW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1989,
      "word": "KETAPESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1990,
      "word": "KETARASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1991,
      "word": "KETARMESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1992,
      "word": "KETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1993,
      "word": "KETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1994,
      "word": "KEWANOMAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1995,
      "word": "KEWANOMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1996,
      "word": "KEWANOMESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1997,
      "word": "KEWANOMESÎRORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1998,
      "word": "KEWEKUKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 1999,
      "word": "KEWEYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2000,
      "word": "KEWKARANPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2001,
      "word": "KEWKPENASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2002,
      "word": "KEWKUKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2003,
      "word": "KEWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2004,
      "word": "KEWRUCPEW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2005,
      "word": "KEWRUTPESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2006,
      "word": "KEWTON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2007,
      "word": "KEXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2008,
      "word": "KEYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2009,
      "word": "KEYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2010,
      "word": "KEYEHYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2011,
      "word": "KEYEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2012,
      "word": "KEYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2013,
      "word": "KEYKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2014,
      "word": "KEYKURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2015,
      "word": "KEYÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2016,
      "word": "KEYUKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2017,
      "word": "KICA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2018,
      "word": "KÎČEMARON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2019,
      "word": "KICICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2020,
      "word": "KICICIME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2021,
      "word": "KICICINTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2022,
      "word": "KICICITHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2023,
      "word": "KICICME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2024,
      "word": "KIČIČME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2025,
      "word": "KIČIČME EXIHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2026,
      "word": "KIČIČME WEESXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2027,
      "word": "KÎČOKONASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2028,
      "word": "KÎHTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2029,
      "word": "KÎHTARÎ WOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2030,
      "word": "KÎÎMÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2031,
      "word": "KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2032,
      "word": "KÎÎRÎCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2033,
      "word": "KÎÎRÎ MREN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2034,
      "word": "KIIRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2035,
      "word": "KIIWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2036,
      "word": "KÎÎWÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2037,
      "word": "KÎÎYÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2038,
      "word": "KÎK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2039,
      "word": "KIKWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2040,
      "word": "KIPIHXIRON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2041,
      "word": "KIPIKIPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2042,
      "word": "KIPIXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2043,
      "word": "KIRICICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2044,
      "word": "KÎRICICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2045,
      "word": "KÎRIČIČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2046,
      "word": "KIRIKIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2047,
      "word": "KÎRÎKÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2048,
      "word": "KIRIMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2049,
      "word": "KÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2050,
      "word": "KÎRÎRÎNKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2051,
      "word": "KÎRÎSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2052,
      "word": "KIRWANHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2053,
      "word": "KIŘWAÑHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2054,
      "word": "KIŘWANÎ RO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2055,
      "word": "KIŘWANTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2056,
      "word": "KIRWAN YÎHPOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2057,
      "word": "KÎTATANASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2058,
      "word": "KÎTÎTMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2059,
      "word": "KÎTÎTPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2060,
      "word": "KÎTMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2061,
      "word": "KÎWYAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2062,
      "word": "KMACIKMACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2063,
      "word": "KMAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2064,
      "word": "KMAKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2065,
      "word": "KMAMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2066,
      "word": "KMARAWETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2067,
      "word": "KMASMAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2068,
      "word": "KMERETKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2069,
      "word": "KMEWREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2070,
      "word": "KMÎRÎKMÎR",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2071,
      "word": "KMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2072,
      "word": "KMOK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2073,
      "word": "KMOKMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2074,
      "word": "KMOKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2075,
      "word": "KMOKYASÎ WA HA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2076,
      "word": "KMORÎK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2077,
      "word": "KMOWAÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2078,
      "word": "KMUHU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2079,
      "word": "KNAHMESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2080,
      "word": "KNAHRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2081,
      "word": "KNAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2082,
      "word": "KNAMARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2083,
      "word": "KNARARAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2084,
      "word": "KNATÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2085,
      "word": "KNAWARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2086,
      "word": "KNEREIKNEREI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2087,
      "word": "KNERERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2088,
      "word": "KNOI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2089,
      "word": "KNOKOKNOKOPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2090,
      "word": "KNOMÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2091,
      "word": "KNOMYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2092,
      "word": "KNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2093,
      "word": "KNOROW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2094,
      "word": "KNOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2095,
      "word": "KNOWKNOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2096,
      "word": "KNOWKRAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2097,
      "word": "KNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2098,
      "word": "KNUK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2099,
      "word": "KNURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2100,
      "word": "KO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2101,
      "word": "KOIKOY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2102,
      "word": "KOK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2103,
      "word": "KOKMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2104,
      "word": "KOKMAMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2105,
      "word": "KOKMAMYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2106,
      "word": "KOKOK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2107,
      "word": "KOKOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2108,
      "word": "KOKOKO KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2109,
      "word": "KOKOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2110,
      "word": "KOKOÑI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2111,
      "word": "KOKOÑORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2112,
      "word": "KOKOÑORO MEHXAN PO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2113,
      "word": "KOKRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2114,
      "word": "KOMKOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2115,
      "word": "KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2116,
      "word": "KOMOMOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2117,
      "word": "KOMSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2118,
      "word": "KOMSÎNASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2119,
      "word": "KOÑESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2120,
      "word": "KONOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2121,
      "word": "KOOKOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2122,
      "word": "KOORU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2123,
      "word": "KOOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2124,
      "word": "KOOSOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2125,
      "word": "KOOSO KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2126,
      "word": "KOOSO WETHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2127,
      "word": "KOOSO XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2128,
      "word": "KOOTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2129,
      "word": "KOPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2130,
      "word": "KOPOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2131,
      "word": "KOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2132,
      "word": "KORÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2133,
      "word": "KORKORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2134,
      "word": "KOŘMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2135,
      "word": "KOROKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2136,
      "word": "KOROKORAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2137,
      "word": "KOŘOPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2138,
      "word": "KORORO NÎÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2139,
      "word": "KOŘPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2140,
      "word": "KOSOKMURU PO ČEREMAČERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2141,
      "word": "KOSOPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2142,
      "word": "KOTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2143,
      "word": "KOTÎSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2144,
      "word": "KOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2145,
      "word": "KOTOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2146,
      "word": "KOTOWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2147,
      "word": "KOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2148,
      "word": "KOWUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2149,
      "word": "KOYOKOYO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2150,
      "word": "KPAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2151,
      "word": "KPAKAPARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2152,
      "word": "KPANAPIČKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2153,
      "word": "KPANATANMETOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2154,
      "word": "KPARAKPARAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2155,
      "word": "KPATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2156,
      "word": "KPAXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2157,
      "word": "KPERAMKWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2158,
      "word": "KPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2159,
      "word": "KRAA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2160,
      "word": "KRAHKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2161,
      "word": "KRAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2162,
      "word": "KRAÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2163,
      "word": "KŘAMANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2164,
      "word": "KRAMOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2165,
      "word": "KRAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2166,
      "word": "KRAPARAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2167,
      "word": "KRARASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2168,
      "word": "KRATÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2169,
      "word": "KRAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2170,
      "word": "KRAWOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2171,
      "word": "KREI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2172,
      "word": "KREKREKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2173,
      "word": "KRERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2174,
      "word": "KRERU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2175,
      "word": "KREWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2176,
      "word": "KREWETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2177,
      "word": "KRICE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2178,
      "word": "KRIKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2179,
      "word": "KRÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2180,
      "word": "KRIKIKRIKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2181,
      "word": "KRÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2182,
      "word": "KRÎPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2183,
      "word": "KRÎRÎNKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2184,
      "word": "KROKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2185,
      "word": "KROW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2186,
      "word": "KŘOWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2187,
      "word": "KROWON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2188,
      "word": "KRUK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2189,
      "word": "KRUMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2190,
      "word": "KUCPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2191,
      "word": "KUČPI KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2192,
      "word": "KUHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2193,
      "word": "KUHRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2194,
      "word": "KUHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2195,
      "word": "KUHYATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2196,
      "word": "KUKAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2197,
      "word": "KUKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2198,
      "word": "KUKNOMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2199,
      "word": "KUKNONKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2200,
      "word": "KUKUXWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2201,
      "word": "KUKUYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2202,
      "word": "KUKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2203,
      "word": "KUM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2204,
      "word": "KUMASA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2205,
      "word": "KUMHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2206,
      "word": "KUMIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2207,
      "word": "KUMIXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2208,
      "word": "KUMKUMHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2209,
      "word": "KUMNATO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2210,
      "word": "KUMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2211,
      "word": "KUMWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2212,
      "word": "KUM YEPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2213,
      "word": "KUÑIMIXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2214,
      "word": "KUNUŘIMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2215,
      "word": "KUNWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2216,
      "word": "KUPAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2217,
      "word": "KUPANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2218,
      "word": "KUPRURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2219,
      "word": "KUPUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2220,
      "word": "KUPUPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2221,
      "word": "KURARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2222,
      "word": "KURAYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2223,
      "word": "KUREI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2224,
      "word": "KURIPARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2225,
      "word": "KURIXIXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2226,
      "word": "KURKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2227,
      "word": "KURPEWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2228,
      "word": "KURUM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2229,
      "word": "KURUMPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2230,
      "word": "KURUMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2231,
      "word": "KURUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2232,
      "word": "KURUNANPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2233,
      "word": "KURUNAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2234,
      "word": "KURUNI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2235,
      "word": "KURUNKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2236,
      "word": "KURURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2237,
      "word": "KURURURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2238,
      "word": "KURUTMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2239,
      "word": "KURUTWITWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2240,
      "word": "KURUXMAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2241,
      "word": "KURWARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2242,
      "word": "KUSAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2243,
      "word": "KUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2244,
      "word": "KUU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2245,
      "word": "KUUMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2246,
      "word": "KUUM WARAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2247,
      "word": "KUUPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2248,
      "word": "KUUPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2249,
      "word": "KUURI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2250,
      "word": "KUUSA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2251,
      "word": "KUUTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2252,
      "word": "KUUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2253,
      "word": "KUUXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2254,
      "word": "KUUXI KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2255,
      "word": "KUUXI WOOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2256,
      "word": "KUUXI XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2257,
      "word": "KUUYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2258,
      "word": "KUWAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2259,
      "word": "KUWIKUWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2260,
      "word": "KUWUÑWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2261,
      "word": "KUXPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2262,
      "word": "KUXUKWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2263,
      "word": "KUXXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2264,
      "word": "KUY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2265,
      "word": "KUYANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2266,
      "word": "KUYURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2267,
      "word": "KUYUWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2268,
      "word": "KUYWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2269,
      "word": "KWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2270,
      "word": "KWAANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2271,
      "word": "KWACAKWACAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2272,
      "word": "KWACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2273,
      "word": "KWAČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2274,
      "word": "KWACINAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2275,
      "word": "KWAHSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2276,
      "word": "KWAHXARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2277,
      "word": "KWAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2278,
      "word": "KWAIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2279,
      "word": "KWAKWARARE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2280,
      "word": "KWAKWARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2281,
      "word": "KWAKWARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2282,
      "word": "KWANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2283,
      "word": "KWANAIMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2284,
      "word": "KWANAMARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2285,
      "word": "KWARAKWARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2286,
      "word": "KWARAWANTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2287,
      "word": "KWARAWANTAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2288,
      "word": "KWAXARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2289,
      "word": "KWAYARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2290,
      "word": "KWAYARPETARMEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2291,
      "word": "KWEEYO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2292,
      "word": "KWEIKWEI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2293,
      "word": "KWEREKWERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2294,
      "word": "KWEREKWERE KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2295,
      "word": "KWERU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2296,
      "word": "KWEXIXPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2297,
      "word": "KWEYKWEY KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2298,
      "word": "KWICIKWICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2299,
      "word": "KWÎKWÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2300,
      "word": "KWORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2301,
      "word": "KWOROIMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2302,
      "word": "KWOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2303,
      "word": "KYAKYAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2304,
      "word": "KYAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2305,
      "word": "KYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2306,
      "word": "LADÃO CIMICIYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2307,
      "word": "M",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2308,
      "word": "MA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2309,
      "word": "MAAÑI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2310,
      "word": "MAARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2311,
      "word": "MAAŘA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2312,
      "word": "MAAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2313,
      "word": "MAAWA YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2314,
      "word": "MAAXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2315,
      "word": "MACAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2316,
      "word": "MACANARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2317,
      "word": "MACAPÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2318,
      "word": "MACE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2319,
      "word": "MACEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2320,
      "word": "MACICIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2321,
      "word": "MACIKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2322,
      "word": "MACIKOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2323,
      "word": "MACOHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2324,
      "word": "MACUCU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2325,
      "word": "MAHCA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2326,
      "word": "MAHCARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2327,
      "word": "MAHČARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2328,
      "word": "MAHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2329,
      "word": "MAHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2330,
      "word": "MAHNAKURI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2331,
      "word": "MAHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2332,
      "word": "MAHRANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2333,
      "word": "MAHRIMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2334,
      "word": "MAHTÎKÎTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2335,
      "word": "MAHTÎKÎTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2336,
      "word": "MAHTÎWÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2337,
      "word": "MAHTOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2338,
      "word": "MAHWOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2339,
      "word": "MAHWOKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2340,
      "word": "MAHWOKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2341,
      "word": "MAHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2342,
      "word": "MAHYAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2343,
      "word": "MAHYANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2344,
      "word": "MAHYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2345,
      "word": "MAHYAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2346,
      "word": "MAHYAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2347,
      "word": "MAKAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2348,
      "word": "MAKANARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2349,
      "word": "MAKAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2350,
      "word": "MAKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2351,
      "word": "MAKATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2352,
      "word": "MAKATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2353,
      "word": "MAKAWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2354,
      "word": "MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2355,
      "word": "MAKÎ HAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2356,
      "word": "MAKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2357,
      "word": "MAKOŘMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2358,
      "word": "MAKOŘMAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2359,
      "word": "MAKOWRIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2360,
      "word": "MAKPOPONK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2361,
      "word": "MAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2362,
      "word": "MAKUKUWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2363,
      "word": "MAKUMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2364,
      "word": "MAKUYWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2365,
      "word": "MAKWACIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2366,
      "word": "MAKWANAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2367,
      "word": "MAKWAWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2368,
      "word": "MAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2369,
      "word": "MAMAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2370,
      "word": "MAMAKAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2371,
      "word": "MAMAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2372,
      "word": "MAMAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2373,
      "word": "MAMHOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2374,
      "word": "MAMKURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2375,
      "word": "MAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2376,
      "word": "MAMRIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2377,
      "word": "MAMTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2378,
      "word": "MAMTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2379,
      "word": "MAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2380,
      "word": "MANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2381,
      "word": "MANAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2382,
      "word": "MANAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2383,
      "word": "MANARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2384,
      "word": "MANATÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2385,
      "word": "MAÑAWÑA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2386,
      "word": "MAÑI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2387,
      "word": "MAÑIÑKAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2388,
      "word": "MANKANO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2389,
      "word": "MANMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2390,
      "word": "MAÑPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2391,
      "word": "MAPARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2392,
      "word": "MAPATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2393,
      "word": "MAPEPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2394,
      "word": "MAPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2395,
      "word": "MAPIHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2396,
      "word": "MAPIKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2397,
      "word": "MAPIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2398,
      "word": "MAPIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2399,
      "word": "MAPIRWOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2400,
      "word": "MAPITA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2401,
      "word": "MAPITAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2402,
      "word": "MAPITU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2403,
      "word": "MAPIYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2404,
      "word": "MAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2405,
      "word": "MAPOHXANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2406,
      "word": "MAPOMRIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2407,
      "word": "MAPOTAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2408,
      "word": "MAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2409,
      "word": "MAPUERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2410,
      "word": "MARAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2411,
      "word": "MARAKASÎSI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2412,
      "word": "MARAKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2413,
      "word": "MARARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2414,
      "word": "MARARÎMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2415,
      "word": "MARARIYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2416,
      "word": "MARATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2417,
      "word": "MARAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2418,
      "word": "MARAWICA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2419,
      "word": "MARHA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2420,
      "word": "MARIYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2421,
      "word": "MARKUKUWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2422,
      "word": "MARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2423,
      "word": "MAŘPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2424,
      "word": "MARWAWANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2425,
      "word": "MASAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2426,
      "word": "MASAKÎIMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2427,
      "word": "MASKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2428,
      "word": "MASMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2429,
      "word": "MASMACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2430,
      "word": "MASMETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2431,
      "word": "MASMETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2432,
      "word": "MATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2433,
      "word": "MATARAWRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2434,
      "word": "MATAWARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2435,
      "word": "MATAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2436,
      "word": "MATÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2437,
      "word": "MATÎTKAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2438,
      "word": "MATÎWÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2439,
      "word": "MATÎWÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2440,
      "word": "MATKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2441,
      "word": "MATKÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2442,
      "word": "MATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2443,
      "word": "MATUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2444,
      "word": "MAWANARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2445,
      "word": "MAWIKATHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2446,
      "word": "MAWÎRKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2447,
      "word": "MAWKÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2448,
      "word": "MAWRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2449,
      "word": "MAWRÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2450,
      "word": "MAWRÎ YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2451,
      "word": "MAWTOHRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2452,
      "word": "MAWYUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2453,
      "word": "MAXAIMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2454,
      "word": "MAXAWARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2455,
      "word": "MAXETO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2456,
      "word": "MAXEWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2457,
      "word": "MAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2458,
      "word": "MAXIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2459,
      "word": "MAXIXIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2460,
      "word": "MAXKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2461,
      "word": "MAXKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2462,
      "word": "MAXKUNK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2463,
      "word": "MAXKUNTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2464,
      "word": "MAXMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2465,
      "word": "MAXMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2466,
      "word": "MAXWEREÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2467,
      "word": "MAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2468,
      "word": "MAYAKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2469,
      "word": "MAYAWARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2470,
      "word": "MAYAWAWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2471,
      "word": "MAYEWNARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2472,
      "word": "MAYO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2473,
      "word": "MAYWEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2474,
      "word": "ME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2475,
      "word": "MECAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2476,
      "word": "MECEHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2477,
      "word": "MECEWU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2478,
      "word": "MECIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2479,
      "word": "MEEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2480,
      "word": "MEEKÎ HÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2481,
      "word": "MEEKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2482,
      "word": "MEEKURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2483,
      "word": "MEEPICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2484,
      "word": "MEHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2485,
      "word": "MEHCOW HA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2486,
      "word": "MEHMERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2487,
      "word": "MEHXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2488,
      "word": "MEHXANÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2489,
      "word": "MEHXANÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2490,
      "word": "MEHXARPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2491,
      "word": "MEKAHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2492,
      "word": "MEMEHSE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2493,
      "word": "MEÑEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2494,
      "word": "MEÑEKACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2495,
      "word": "MEÑEKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2496,
      "word": "MEÑEKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2497,
      "word": "MEÑEKETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2498,
      "word": "MENKARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2499,
      "word": "MENTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2500,
      "word": "MERESÎIMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2501,
      "word": "MERETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2502,
      "word": "MERETÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2503,
      "word": "MERKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2504,
      "word": "MEŘPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2505,
      "word": "MEŘPONO PÎN TOOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2506,
      "word": "MERPORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2507,
      "word": "MEŘPORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2508,
      "word": "MERURKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2509,
      "word": "MERURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2510,
      "word": "METATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2511,
      "word": "METATA YEČEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2512,
      "word": "METU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2513,
      "word": "MEWKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2514,
      "word": "MEWRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2515,
      "word": "MEWREKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2516,
      "word": "MEWXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2517,
      "word": "MEXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2518,
      "word": "MEYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2519,
      "word": "MEYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2520,
      "word": "MEYEHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2521,
      "word": "MEYEHRA TOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2522,
      "word": "MEYEHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2523,
      "word": "MEYEÑHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2524,
      "word": "MEYENOPÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2525,
      "word": "MEYEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2526,
      "word": "MEYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2527,
      "word": "MHETHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2528,
      "word": "MHÎTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2529,
      "word": "MHOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2530,
      "word": "MHONOI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2531,
      "word": "MI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2532,
      "word": "MÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2533,
      "word": "MÎCETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2534,
      "word": "MICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2535,
      "word": "MIHCIW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2536,
      "word": "MÎHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2537,
      "word": "MÎHTÎPÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2538,
      "word": "MIHXIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2539,
      "word": "MIHXIKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2540,
      "word": "MÎÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2541,
      "word": "MÎÎCE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2542,
      "word": "MÎÎMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2543,
      "word": "MÎÎMOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2544,
      "word": "MÎÎMO POČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2545,
      "word": "MÎÎMOYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2546,
      "word": "MÎÎNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2547,
      "word": "MIIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2548,
      "word": "MÎÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2549,
      "word": "MÎÎSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2550,
      "word": "MÎÎYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2551,
      "word": "MÎK HA MEHXAN PO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2552,
      "word": "MÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2553,
      "word": "MÎKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2554,
      "word": "MÎKYAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2555,
      "word": "MÎMOHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2556,
      "word": "MÎMOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2557,
      "word": "MÎMOKYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2558,
      "word": "MÎMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2559,
      "word": "MÎMYATKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2560,
      "word": "MÎMYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2561,
      "word": "MÎNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2562,
      "word": "MIÑIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2563,
      "word": "MIÑIŘMOMOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2564,
      "word": "MÎNOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2565,
      "word": "MÎNOMCE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2566,
      "word": "MÎNOMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2567,
      "word": "MÎNOMYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2568,
      "word": "MÎNPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2569,
      "word": "MÎNPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2570,
      "word": "MÎNTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2571,
      "word": "MÎRÎKÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2572,
      "word": "MÎRÎWÎTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2573,
      "word": "MÎRONSE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2574,
      "word": "MÎT",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2575,
      "word": "MÎTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2576,
      "word": "MIXWOME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2577,
      "word": "MIYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2578,
      "word": "MÎYAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2579,
      "word": "MKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2580,
      "word": "MKAHSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2581,
      "word": "MKAKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2582,
      "word": "MKAPICHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2583,
      "word": "MNARÎHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2584,
      "word": "MOHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2585,
      "word": "MOHRAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2586,
      "word": "MOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2587,
      "word": "MOKO HARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2588,
      "word": "MOKRAWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2589,
      "word": "MOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2590,
      "word": "MOMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2591,
      "word": "MOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2592,
      "word": "MOMOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2593,
      "word": "MOOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2594,
      "word": "MOOPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2595,
      "word": "MOORU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2596,
      "word": "MOOXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2597,
      "word": "MOPEIMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2598,
      "word": "MOREYEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2599,
      "word": "MOŘKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2600,
      "word": "MORUHRAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2601,
      "word": "MORURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2602,
      "word": "MOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2603,
      "word": "MOSU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2604,
      "word": "MOTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2605,
      "word": "MOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2606,
      "word": "MOWNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2607,
      "word": "MOWU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2608,
      "word": "MOXAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2609,
      "word": "MOXAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2610,
      "word": "MOXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2611,
      "word": "MOYOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2612,
      "word": "MOYOSKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2613,
      "word": "MRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2614,
      "word": "MREN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2615,
      "word": "MRERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2616,
      "word": "MREWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2617,
      "word": "MSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2618,
      "word": "MTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2619,
      "word": "MTACARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2620,
      "word": "MTAKMAKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2621,
      "word": "MTAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2622,
      "word": "MTAKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2623,
      "word": "MTAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2624,
      "word": "MTAWAYMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2625,
      "word": "MTAYAKÎTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2626,
      "word": "MTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2627,
      "word": "MU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2628,
      "word": "MUKUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2629,
      "word": "MUMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2630,
      "word": "MUNUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2631,
      "word": "MURIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2632,
      "word": "MURPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2633,
      "word": "MURUXAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2634,
      "word": "MUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2635,
      "word": "MUUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2636,
      "word": "MUUWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2637,
      "word": "MUUXU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2638,
      "word": "MUYWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2639,
      "word": "MYAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2640,
      "word": "NA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2641,
      "word": "NAAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2642,
      "word": "NAAKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2643,
      "word": "NAAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2644,
      "word": "NAAME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2645,
      "word": "NAAPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2646,
      "word": "NAAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2647,
      "word": "NAARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2648,
      "word": "NAATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2649,
      "word": "NAAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2650,
      "word": "NACE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2651,
      "word": "NACINA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2652,
      "word": "NACINATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2653,
      "word": "NACINÎMCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2654,
      "word": "NACINMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2655,
      "word": "NACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2656,
      "word": "NACPOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2657,
      "word": "NACPOKYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2658,
      "word": "NACPOKYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2659,
      "word": "NAHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2660,
      "word": "NAHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2661,
      "word": "NAHKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2662,
      "word": "NAHKAMEXPETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2663,
      "word": "NAHKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2664,
      "word": "NAHKETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2665,
      "word": "NAHRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2666,
      "word": "NAHSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2667,
      "word": "NAHSÎYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2668,
      "word": "NAHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2669,
      "word": "NAHYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2670,
      "word": "NAKÑIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2671,
      "word": "NAKÑIYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2672,
      "word": "NAKÑIYATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2673,
      "word": "NAKNONKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2674,
      "word": "NAKRONOMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2675,
      "word": "NAKRONOMAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2676,
      "word": "NAKRONOME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2677,
      "word": "NAKRONOMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2678,
      "word": "NAKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2679,
      "word": "NAKWATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2680,
      "word": "NAMEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2681,
      "word": "NAMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2682,
      "word": "NAMEKYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2683,
      "word": "NAMEKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2684,
      "word": "NAMENA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2685,
      "word": "NAMETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2686,
      "word": "NAMKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2687,
      "word": "NAMOTOYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2688,
      "word": "NAMOWETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2689,
      "word": "NAMOWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2690,
      "word": "NAMOWOCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2691,
      "word": "NAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2692,
      "word": "NANÎMCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2693,
      "word": "NANÎMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2694,
      "word": "NANÎMYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2695,
      "word": "NANÎMYATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2696,
      "word": "NANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2697,
      "word": "NANMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2698,
      "word": "ÑAPAMCE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2699,
      "word": "NAPIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2700,
      "word": "NAPIKYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2701,
      "word": "NAPIKYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2702,
      "word": "NAPIKYATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2703,
      "word": "NAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2704,
      "word": "NARATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2705,
      "word": "NASÎNASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2706,
      "word": "NASÎSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2707,
      "word": "NATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2708,
      "word": "NATPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2709,
      "word": "NAUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2710,
      "word": "NAWSÎNASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2711,
      "word": "ÑECAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2712,
      "word": "ÑECAKYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2713,
      "word": "ÑECAKYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2714,
      "word": "ÑECANAME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2715,
      "word": "ÑEEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2716,
      "word": "ÑEEXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2717,
      "word": "ÑEHCAMHOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2718,
      "word": "ÑEHCAMHOKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2719,
      "word": "ÑEHCAMHOKEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2720,
      "word": "ÑEHCAMNOCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2721,
      "word": "ÑEHCAMNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2722,
      "word": "ÑEHCAMNOYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2723,
      "word": "ÑEHCEMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2724,
      "word": "ÑEHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2725,
      "word": "ÑEHCOWPE KRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2726,
      "word": "ÑEHMAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2727,
      "word": "ÑEKAMTÎKA HÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2728,
      "word": "ÑEKAMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2729,
      "word": "ÑEKAMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2730,
      "word": "ÑEKARKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2731,
      "word": "ÑEKARKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2732,
      "word": "ÑEKARKEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2733,
      "word": "ÑEKARKETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2734,
      "word": "ÑEKAYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2735,
      "word": "ÑEKIÑIMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2736,
      "word": "ÑEKPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2737,
      "word": "ÑEKPOY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2738,
      "word": "ÑEKYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2739,
      "word": "ÑEKYATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2740,
      "word": "ÑEMAHCICOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2741,
      "word": "ÑEMAHČIČOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2742,
      "word": "ÑEMAHCIW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2743,
      "word": "ÑEMAHCIYATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2744,
      "word": "ÑEMARAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2745,
      "word": "ÑEMASÎNTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2746,
      "word": "ÑEMASÎREW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2747,
      "word": "ÑEMASMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2748,
      "word": "ÑENANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2749,
      "word": "ÑENANKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2750,
      "word": "ÑENATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2751,
      "word": "ÑEÑEPANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2752,
      "word": "ÑEÑEPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2753,
      "word": "ÑEÑEPEW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2754,
      "word": "ÑENORASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2755,
      "word": "ÑENORAXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2756,
      "word": "ÑENORICOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2757,
      "word": "ÑENORIW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2758,
      "word": "ÑENWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2759,
      "word": "ÑEPAHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2760,
      "word": "ÑEPAMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2761,
      "word": "ÑEPAMYATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2762,
      "word": "ÑEPAMYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2763,
      "word": "ÑEPANÎYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2764,
      "word": "ÑEPANÎYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2765,
      "word": "ÑEPANPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2766,
      "word": "ÑEPAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2767,
      "word": "ÑEPARAMATÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2768,
      "word": "ÑEPATAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2769,
      "word": "ÑEPATAKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2770,
      "word": "ÑEPATAKETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2771,
      "word": "ÑEPEMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2772,
      "word": "ÑEPEMA AHNORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2773,
      "word": "ÑEPEMATÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2774,
      "word": "ÑEPEME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2775,
      "word": "ÑEPERAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2776,
      "word": "ÑEPERAMATÎKAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2777,
      "word": "ÑEPERAMAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2778,
      "word": "ÑEPERANTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2779,
      "word": "ÑEPÎRKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2780,
      "word": "ÑEPORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2781,
      "word": "ÑEPOTUTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2782,
      "word": "ÑERAHTÎM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2783,
      "word": "ÑERASMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2784,
      "word": "ÑERASWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2785,
      "word": "ÑERASWAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2786,
      "word": "ÑERASWATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2787,
      "word": "ÑERASWATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2788,
      "word": "ÑEREWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2789,
      "word": "ÑEREWAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2790,
      "word": "ÑEREWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2791,
      "word": "ÑESAMACEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2792,
      "word": "ÑESAMAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2793,
      "word": "ÑESAMATO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2794,
      "word": "ÑESAYANCE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2795,
      "word": "ÑESAYANKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2796,
      "word": "ÑESAYANKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2797,
      "word": "ÑESAYANKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2798,
      "word": "ÑESAYANKETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2799,
      "word": "ÑESAYANTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2800,
      "word": "ÑESEHCEMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2801,
      "word": "ÑESEHCEME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2802,
      "word": "ÑESEMAÑICHOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2803,
      "word": "ÑESEMAÑIYATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2804,
      "word": "ÑESEMAÑPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2805,
      "word": "ÑESEMERWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2806,
      "word": "ÑESEMETANMEKYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2807,
      "word": "ÑESENČEXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2808,
      "word": "ÑESEÑEPANMECOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2809,
      "word": "ÑESEÑEPANMEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2810,
      "word": "ÑESENKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2811,
      "word": "ÑESENKAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2812,
      "word": "ÑESENKETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2813,
      "word": "ÑESENMEKYAXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2814,
      "word": "ÑESENPONKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2815,
      "word": "ÑESENTÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2816,
      "word": "ÑESENTÎKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2817,
      "word": "ÑESEPEME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2818,
      "word": "ÑESEPERANTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2819,
      "word": "ÑESEPORAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2820,
      "word": "ÑESEPORATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2821,
      "word": "ÑESEPORU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2822,
      "word": "ÑESEREPOKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2823,
      "word": "ÑESEREPOKETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2824,
      "word": "ÑESEWSU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2825,
      "word": "ÑESEWSUYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2826,
      "word": "ÑESEYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2827,
      "word": "ÑESEYAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2828,
      "word": "ÑESEYAMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2829,
      "word": "ÑESEYAMYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2830,
      "word": "ÑESEYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2831,
      "word": "ÑESEYKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2832,
      "word": "ÑESOHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2833,
      "word": "ÑESOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2834,
      "word": "ÑESOKYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2835,
      "word": "ÑESOKYATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2836,
      "word": "ÑESONMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2837,
      "word": "ÑETAKNAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2838,
      "word": "ÑETAKNAMAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2839,
      "word": "ÑETAKNAME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2840,
      "word": "ÑETAKNAMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2841,
      "word": "ÑETAME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2842,
      "word": "ÑETAMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2843,
      "word": "ÑETAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2844,
      "word": "ÑETAPACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2845,
      "word": "ÑETAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2846,
      "word": "ÑETARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2847,
      "word": "ÑETARMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2848,
      "word": "ÑETARMACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2849,
      "word": "ÑETARMESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2850,
      "word": "ÑETARMETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2851,
      "word": "ÑETAXIKWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2852,
      "word": "ÑETÎRAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2853,
      "word": "ÑETÎRAMÃ HARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2854,
      "word": "ÑETÎRAMETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2855,
      "word": "ÑETUKMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2856,
      "word": "ÑETUKMAMYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2857,
      "word": "ÑETUKMAMYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2858,
      "word": "NETWÎRÎYAKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2859,
      "word": "ÑEWANOMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2860,
      "word": "ÑEWANOMACE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2861,
      "word": "ÑEWANOMAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2862,
      "word": "ÑEWANOME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2863,
      "word": "ÑEWANOMETKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2864,
      "word": "ÑEWANOMETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2865,
      "word": "ÑEWČOKOČOKONA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2866,
      "word": "ÑEWOMCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2867,
      "word": "ÑEWOMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2868,
      "word": "ÑEWOMYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2869,
      "word": "ÑEWOMYATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2870,
      "word": "ÑEWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2871,
      "word": "ÑEXAMRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2872,
      "word": "ÑEYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2873,
      "word": "ÑEYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2874,
      "word": "ÑEYAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2875,
      "word": "ÑEYAMCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2876,
      "word": "ÑEYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2877,
      "word": "ÑHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2878,
      "word": "ÑHESEHCEMETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2879,
      "word": "ÑHE TAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2880,
      "word": "NHNK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2881,
      "word": "ÑICIHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2882,
      "word": "ÑIČIHYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2883,
      "word": "ÑICIPINWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2884,
      "word": "ÑICIPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2885,
      "word": "ÑICWINTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2886,
      "word": "ÑICWINWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2887,
      "word": "NÎHČESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2888,
      "word": "ÑIHCINTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2889,
      "word": "ÑIHCINWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2890,
      "word": "ÑIHCIRIW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2891,
      "word": "ÑIHCIW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2892,
      "word": "ÑIHCIW HÁ?",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2893,
      "word": "ÑIHCIYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2894,
      "word": "ÑIHCIYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2895,
      "word": "NÎHPOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2896,
      "word": "NÎHPOKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2897,
      "word": "NÎHPOKEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2898,
      "word": "NÎHPOKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2899,
      "word": "ÑIIPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2900,
      "word": "ÑIKIÑIM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2901,
      "word": "ÑIKIÑIMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2902,
      "word": "ÑIKITHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2903,
      "word": "NÎKMORWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2904,
      "word": "NÎKROKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2905,
      "word": "NÎMTAWAKRONWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2906,
      "word": "NÎMTAWAYMAMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2907,
      "word": "ÑIPITA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2908,
      "word": "ÑIPITACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2909,
      "word": "ÑIPIWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2910,
      "word": "ÑIRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2911,
      "word": "NÎRAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2912,
      "word": "NÎRAKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2913,
      "word": "NÎRAKEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2914,
      "word": "ÑIRAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2915,
      "word": "NÎRAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2916,
      "word": "NÎRAPEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2917,
      "word": "ÑÎRAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2918,
      "word": "NÎRAPOY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2919,
      "word": "ÑIRATKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2920,
      "word": "ÑIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2921,
      "word": "NÎRWONASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2922,
      "word": "NÎWÎRÎMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2923,
      "word": "NÎWÎRÎYAKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2924,
      "word": "NKM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2925,
      "word": "NOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2926,
      "word": "NOCWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2927,
      "word": "NOCWAKOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2928,
      "word": "NOHČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2929,
      "word": "NOKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2930,
      "word": "ÑOKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2931,
      "word": "NOMKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2932,
      "word": "NOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2933,
      "word": "NOÑETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2934,
      "word": "NONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2935,
      "word": "NOONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2936,
      "word": "ÑOOÑO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2937,
      "word": "NORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2938,
      "word": "NORO ENTAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2939,
      "word": "NORO RMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2940,
      "word": "NORO WENARI ETOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2941,
      "word": "NORO YAHSÎSO ETOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2942,
      "word": "NORO YON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2943,
      "word": "NOŘWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2944,
      "word": "NORWA THO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2945,
      "word": "NUCUTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2946,
      "word": "NUCUWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2947,
      "word": "NUPUPUREW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2948,
      "word": "NUPURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2949,
      "word": "NUPURAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2950,
      "word": "NUPURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2951,
      "word": "NUPURUKWASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2952,
      "word": "ÑURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2953,
      "word": "NUUÑI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2954,
      "word": "O",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2955,
      "word": "OCACAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2956,
      "word": "OCAMKÎNON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2957,
      "word": "OCANAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2958,
      "word": "OCEMARON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2959,
      "word": "OCIPIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2960,
      "word": "OCORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2961,
      "word": "OČORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2962,
      "word": "OCORONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2963,
      "word": "OCORORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2964,
      "word": "OČOWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2965,
      "word": "OCURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2966,
      "word": "OHČÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2967,
      "word": "OHPOČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2968,
      "word": "OHRAKNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2969,
      "word": "OHREPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2970,
      "word": "OHRORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2971,
      "word": "OHROXOXON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2972,
      "word": "OHTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2973,
      "word": "OHTAYARAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2974,
      "word": "OHTÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2975,
      "word": "OHYAPAMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2976,
      "word": "OHYAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2977,
      "word": "OKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2978,
      "word": "OKAAMON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2979,
      "word": "OKAMAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2980,
      "word": "OKANAPAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2981,
      "word": "OKANAWARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2982,
      "word": "OKAYARITOMON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2983,
      "word": "OKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2984,
      "word": "OKNO MÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2985,
      "word": "OKOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2986,
      "word": "OKOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2987,
      "word": "OKOPUCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2988,
      "word": "OKOPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2989,
      "word": "OKOPUTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2990,
      "word": "OKOPU YAHRUTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2991,
      "word": "OKOPU YEKEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2992,
      "word": "OKOYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2993,
      "word": "OKOYICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2994,
      "word": "OKOYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2995,
      "word": "OKRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2996,
      "word": "OKRE RO MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2997,
      "word": "OKRE THOYME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2998,
      "word": "OKREXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 2999,
      "word": "OKURUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3000,
      "word": "OKUYWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3001,
      "word": "OKWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3002,
      "word": "OKYO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3003,
      "word": "OMARARÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3004,
      "word": "OMARIYAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3005,
      "word": "OMAYWEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3006,
      "word": "OMHAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3007,
      "word": "OMHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3008,
      "word": "OMÎTWONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3009,
      "word": "OMKARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3010,
      "word": "OMOTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3011,
      "word": "OMREN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3012,
      "word": "OMRERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3013,
      "word": "OMTAPOTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3014,
      "word": "OMTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3015,
      "word": "OMTARÎ PIČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3016,
      "word": "OMUMURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3017,
      "word": "OMXÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3018,
      "word": "ONAHRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3019,
      "word": "ONAHRUNKATHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3020,
      "word": "ONAHRU THO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3021,
      "word": "ONAMARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3022,
      "word": "ONAMCIKATHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3023,
      "word": "ONAÑIKÎTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3024,
      "word": "ONAPUTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3025,
      "word": "OÑENÎTHOPÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3026,
      "word": "ONI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3027,
      "word": "ONÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3028,
      "word": "ONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3029,
      "word": "ONOKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3030,
      "word": "ONOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3031,
      "word": "ONOMTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3032,
      "word": "ONOWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3033,
      "word": "ONPORMAMNORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3034,
      "word": "OÑURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3035,
      "word": "OONA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3036,
      "word": "OONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3037,
      "word": "OOPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3038,
      "word": "OOPICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3039,
      "word": "OOPICINHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3040,
      "word": "OORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3041,
      "word": "OORU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3042,
      "word": "OOTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3043,
      "word": "OOTÎ YANÎMÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3044,
      "word": "OOWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3045,
      "word": "OOXATÎ PÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3046,
      "word": "OOXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3047,
      "word": "OPAMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3048,
      "word": "OPANARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3049,
      "word": "OPANATANMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3050,
      "word": "OPARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3051,
      "word": "OPAŘKAKAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3052,
      "word": "OPEŘA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3053,
      "word": "OPETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3054,
      "word": "OPICIRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3055,
      "word": "OPÎMÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3056,
      "word": "OPOCON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3057,
      "word": "OPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3058,
      "word": "OPOÑURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3059,
      "word": "OPOYENO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3060,
      "word": "OPOYENORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3061,
      "word": "OPOYERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3062,
      "word": "OPOYINO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3063,
      "word": "ORAHNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3064,
      "word": "ORAMHAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3065,
      "word": "ORANCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3066,
      "word": "ORKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3067,
      "word": "OROMAMÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3068,
      "word": "OROMAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3069,
      "word": "OROPOTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3070,
      "word": "OROSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3071,
      "word": "OROTAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3072,
      "word": "OROTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3073,
      "word": "OROTORARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3074,
      "word": "OROTO RMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3075,
      "word": "OROTO RO MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3076,
      "word": "OSKÎSKÎMESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3077,
      "word": "OSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3078,
      "word": "OSOHKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3079,
      "word": "OSOHTOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3080,
      "word": "OSOKMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3081,
      "word": "OSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3082,
      "word": "OSOMTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3083,
      "word": "OSOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3084,
      "word": "OSORWAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3085,
      "word": "OSORWAW RO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3086,
      "word": "OSOSWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3087,
      "word": "OSOTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3088,
      "word": "OSOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3089,
      "word": "OTAMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3090,
      "word": "OTI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3091,
      "word": "OTOWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3092,
      "word": "OTPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3093,
      "word": "OU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3094,
      "word": "OWAKOWAK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3095,
      "word": "OW AKRONOMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3096,
      "word": "OWARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3097,
      "word": "OWARAWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3098,
      "word": "OWARAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3099,
      "word": "OWARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3100,
      "word": "OWAYAHRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3101,
      "word": "OWAYAMAKASÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3102,
      "word": "OWAYAMNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3103,
      "word": "OWEHTORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3104,
      "word": "OWENATHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3105,
      "word": "OWETHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3106,
      "word": "OWEWETKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3107,
      "word": "OWHOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3108,
      "word": "OWÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3109,
      "word": "OWOKRU XE WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3110,
      "word": "OWOSOTO WENWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3111,
      "word": "OWOXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3112,
      "word": "OWYAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3113,
      "word": "OWYANÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3114,
      "word": "OWYAN THO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3115,
      "word": "OW YUKURUNPEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3116,
      "word": "OXATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3117,
      "word": "OYAKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3118,
      "word": "OYAKNONHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3119,
      "word": "OYAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3120,
      "word": "OYAKRONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3121,
      "word": "OYAKRORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3122,
      "word": "OYAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3123,
      "word": "OYAMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3124,
      "word": "OYAMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3125,
      "word": "OYAMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3126,
      "word": "OYAMORÎ YEMHÎTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3127,
      "word": "OYAMOXOXON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3128,
      "word": "OYAMOYARAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3129,
      "word": "OYAMOYEKNARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3130,
      "word": "OYAMOYERETARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3131,
      "word": "OYANAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3132,
      "word": "OYANAN KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3133,
      "word": "OYANTON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3134,
      "word": "OYAPEPEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3135,
      "word": "OYAPORESÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3136,
      "word": "OYATON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3137,
      "word": "OYAWCIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3138,
      "word": "OYEKATKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3139,
      "word": "OYEMEKNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3140,
      "word": "OYEMSÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3141,
      "word": "OYEPATAKEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3142,
      "word": "OYEPEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3143,
      "word": "OYERERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3144,
      "word": "OYETAPIČKATAMČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3145,
      "word": "OYEWAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3146,
      "word": "OYEWKPOČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3147,
      "word": "OYEWNARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3148,
      "word": "OYEWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3149,
      "word": "OYEXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3150,
      "word": "OYEYATARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3151,
      "word": "OYIÑONHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3152,
      "word": "OYOČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3153,
      "word": "OYOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3154,
      "word": "OYOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3155,
      "word": "OYORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3156,
      "word": "OYORÎ PIČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3157,
      "word": "OYOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3158,
      "word": "OYOSOKMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3159,
      "word": "OYOSOTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3160,
      "word": "OYOTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3161,
      "word": "PAACIVA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3162,
      "word": "PAAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3163,
      "word": "PAAKA KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3164,
      "word": "PAAKA PIČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3165,
      "word": "PAAKA WOOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3166,
      "word": "PAAKA XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3167,
      "word": "PAAKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3168,
      "word": "PAAKUCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3169,
      "word": "PAAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3170,
      "word": "PAAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3171,
      "word": "PAARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3172,
      "word": "PAARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3173,
      "word": "PAAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3174,
      "word": "PAAYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3175,
      "word": "PACIYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3176,
      "word": "PAHKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3177,
      "word": "PAHNOKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3178,
      "word": "PAHXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3179,
      "word": "PAHXANTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3180,
      "word": "PAHXARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3181,
      "word": "PAHXAXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3182,
      "word": "PAHXAXARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3183,
      "word": "PAHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3184,
      "word": "PAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3185,
      "word": "PAKAKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3186,
      "word": "PAKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3187,
      "word": "PAKRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3188,
      "word": "PAKŘA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3189,
      "word": "PAKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3190,
      "word": "PAMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3191,
      "word": "PANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3192,
      "word": "PANACAKAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3193,
      "word": "PANACAŘKAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3194,
      "word": "PANAHCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3195,
      "word": "PANAHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3196,
      "word": "PANAHNONTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3197,
      "word": "PANAHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3198,
      "word": "PANAHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3199,
      "word": "PANAKAŘMIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3200,
      "word": "PANAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3201,
      "word": "PANAMACKOŘPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3202,
      "word": "PANAPANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3203,
      "word": "PANAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3204,
      "word": "PANAPEÑAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3205,
      "word": "PANAPICKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3206,
      "word": "PANAPOROKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3207,
      "word": "PANARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3208,
      "word": "PANATANMEKNO RITOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3209,
      "word": "PANATARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3210,
      "word": "PANATORI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3211,
      "word": "PANATOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3212,
      "word": "PANAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3213,
      "word": "PANAXERERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3214,
      "word": "PANAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3215,
      "word": "PANAYKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3216,
      "word": "PAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3217,
      "word": "PAPAHCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3218,
      "word": "PAPAK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3219,
      "word": "PAPAKYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3220,
      "word": "PAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3221,
      "word": "PARAKWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3222,
      "word": "PARANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3223,
      "word": "PARANAKARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3224,
      "word": "PARANCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3225,
      "word": "PARANČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3226,
      "word": "PAŘAŘAMUTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3227,
      "word": "PARARE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3228,
      "word": "PARATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3229,
      "word": "PARATA WARAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3230,
      "word": "PARAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3231,
      "word": "PARAWAKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3232,
      "word": "PARAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3233,
      "word": "PARAXKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3234,
      "word": "PARAXKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3235,
      "word": "PARETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3236,
      "word": "PARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3237,
      "word": "PAŘKAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3238,
      "word": "PARURMEÑEKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3239,
      "word": "PASAHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3240,
      "word": "PASARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3241,
      "word": "PATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3242,
      "word": "PATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3243,
      "word": "PATIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3244,
      "word": "PAWANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3245,
      "word": "PAWKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3246,
      "word": "PAWXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3247,
      "word": "PAWXIYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3248,
      "word": "PAXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3249,
      "word": "PAXIXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3250,
      "word": "PAXKACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3251,
      "word": "PAXKI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3252,
      "word": "PAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3253,
      "word": "PAYAHEUCURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3254,
      "word": "PAYANTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3255,
      "word": "PAYAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3256,
      "word": "PAYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3257,
      "word": "PE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3258,
      "word": "PEE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3259,
      "word": "PEECA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3260,
      "word": "PEEHU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3261,
      "word": "PEEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3262,
      "word": "PEEMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3263,
      "word": "PEEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3264,
      "word": "PEEU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3265,
      "word": "PEHWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3266,
      "word": "PEIPEI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3267,
      "word": "PEIPEYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3268,
      "word": "PEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3269,
      "word": "PEÑEPÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3270,
      "word": "PENÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3271,
      "word": "PEPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3272,
      "word": "PEPE KAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3273,
      "word": "PEPESMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3274,
      "word": "PEPEYURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3275,
      "word": "PERAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3276,
      "word": "PERAMKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3277,
      "word": "PERAMUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3278,
      "word": "PERAMUKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3279,
      "word": "PEŘAWOKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3280,
      "word": "PERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3281,
      "word": "PEREHXAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3282,
      "word": "PEREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3283,
      "word": "PEREMKIRIKIRIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3284,
      "word": "PEREMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3285,
      "word": "PERENASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3286,
      "word": "PEREPERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3287,
      "word": "PERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3288,
      "word": "PESMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3289,
      "word": "PETA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3290,
      "word": "PETAKMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3291,
      "word": "PETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3292,
      "word": "PÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3293,
      "word": "PIČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3294,
      "word": "PÎHPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3295,
      "word": "PÎÎMÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3296,
      "word": "PIÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3297,
      "word": "PIIRI AWOMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3298,
      "word": "PÎKRÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3299,
      "word": "PÎMÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3300,
      "word": "PÎMÎKRAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3301,
      "word": "PÎMÎMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3302,
      "word": "PÎMÎSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3303,
      "word": "PÎMTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3304,
      "word": "PÎNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3305,
      "word": "PÎNÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3306,
      "word": "PÎPÎTHÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3307,
      "word": "PÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3308,
      "word": "PÎRÎKÎSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3309,
      "word": "PÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3310,
      "word": "PÎTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3311,
      "word": "PÎTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3312,
      "word": "PÎTÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3313,
      "word": "PÎTÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3314,
      "word": "PÎTKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3315,
      "word": "PIXKARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3316,
      "word": "PIXKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3317,
      "word": "PIXOU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3318,
      "word": "POHCIW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3319,
      "word": "POHČIW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3320,
      "word": "POHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3321,
      "word": "POKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3322,
      "word": "POKONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3323,
      "word": "POKUMNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3324,
      "word": "POMOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3325,
      "word": "PONAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3326,
      "word": "PONARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3327,
      "word": "POÑKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3328,
      "word": "PONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3329,
      "word": "PONOMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3330,
      "word": "PONONTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3331,
      "word": "POÑWETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3332,
      "word": "POOME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3333,
      "word": "POOMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3334,
      "word": "POONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3335,
      "word": "POONOTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3336,
      "word": "POONO YEWRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3337,
      "word": "POOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3338,
      "word": "POOTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3339,
      "word": "POOWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3340,
      "word": "POOYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3341,
      "word": "POPOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3342,
      "word": "PORIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3343,
      "word": "PORINKOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3344,
      "word": "PORINME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3345,
      "word": "PORIN PEN KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3346,
      "word": "PORIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3347,
      "word": "PORITOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3348,
      "word": "POŘMAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3349,
      "word": "POŘMAMNOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3350,
      "word": "POROHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3351,
      "word": "POROKOTKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3352,
      "word": "POROKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3353,
      "word": "PORORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3354,
      "word": "POROTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3355,
      "word": "POTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3356,
      "word": "POTKUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3357,
      "word": "POTOKOI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3358,
      "word": "POTOKOMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3359,
      "word": "POTOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3360,
      "word": "POTOXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3361,
      "word": "POTU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3362,
      "word": "POTUHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3363,
      "word": "POTUPOTURE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3364,
      "word": "POTUPOTURI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3365,
      "word": "POTUREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3366,
      "word": "POTURME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3367,
      "word": "POTURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3368,
      "word": "POTURURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3369,
      "word": "POTWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3370,
      "word": "POTWO RORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3371,
      "word": "POTWOYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3372,
      "word": "POW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3373,
      "word": "POWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3374,
      "word": "POWAME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3375,
      "word": "POXORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3376,
      "word": "POXU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3377,
      "word": "POXUMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3378,
      "word": "POXWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3379,
      "word": "POXWEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3380,
      "word": "POYENO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3381,
      "word": "POYERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3382,
      "word": "POYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3383,
      "word": "POYINO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3384,
      "word": "POYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3385,
      "word": "PRATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3386,
      "word": "PU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3387,
      "word": "PUCUKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3388,
      "word": "PUČUKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3389,
      "word": "PUHCA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3390,
      "word": "PUHCA YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3391,
      "word": "PUHTOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3392,
      "word": "PUHYAPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3393,
      "word": "PUKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3394,
      "word": "PUKNOROW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3395,
      "word": "PUKWOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3396,
      "word": "PUM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3397,
      "word": "PUME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3398,
      "word": "PUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3399,
      "word": "PUPRIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3400,
      "word": "PUPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3401,
      "word": "PUPURI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3402,
      "word": "PUPUSMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3403,
      "word": "PUR",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3404,
      "word": "PURANTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3405,
      "word": "PURAPURARE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3406,
      "word": "PURESKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3407,
      "word": "PURMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3408,
      "word": "PURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3409,
      "word": "PURUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3410,
      "word": "PURUMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3411,
      "word": "PURUMÃ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3412,
      "word": "PURUPURPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3413,
      "word": "PURUPURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3414,
      "word": "PURUPURUHNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3415,
      "word": "PURUPURUPE NASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3416,
      "word": "PURUPURUYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3417,
      "word": "PURURI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3418,
      "word": "PURWETO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3419,
      "word": "PUTUPUTURI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3420,
      "word": "PUU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3421,
      "word": "PUUCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3422,
      "word": "PUU KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3423,
      "word": "PUXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3424,
      "word": "PUYAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3425,
      "word": "PUYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3426,
      "word": "RA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3427,
      "word": "RAAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3428,
      "word": "ŘAAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3429,
      "word": "RAAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3430,
      "word": "RAATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3431,
      "word": "RAATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3432,
      "word": "RACO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3433,
      "word": "RAÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3434,
      "word": "RAIXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3435,
      "word": "RAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3436,
      "word": "RAKATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3437,
      "word": "RAKATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3438,
      "word": "RAKATAWRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3439,
      "word": "RAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3440,
      "word": "RAMHA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3441,
      "word": "RAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3442,
      "word": "RATA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3443,
      "word": "RATARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3444,
      "word": "ŘAWŘA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3445,
      "word": "RAYXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3446,
      "word": "-RE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3447,
      "word": "RE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3448,
      "word": "REEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3449,
      "word": "REERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3450,
      "word": "REEYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3451,
      "word": "REHA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3452,
      "word": "REHRETHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3453,
      "word": "REKMET",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3454,
      "word": "REKMETU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3455,
      "word": "REPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3456,
      "word": "RERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3457,
      "word": "REREHRERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3458,
      "word": "RET",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3459,
      "word": "RETÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3460,
      "word": "REYAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3461,
      "word": "RIIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3462,
      "word": "RÎÎRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3463,
      "word": "RÎÎWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3464,
      "word": "RIKOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3465,
      "word": "RÍNATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3466,
      "word": "RÎPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3467,
      "word": "RIW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3468,
      "word": "RÎWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3469,
      "word": "-RÎ + YARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3470,
      "word": "RMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3471,
      "word": "ŘMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3472,
      "word": "ROKOHČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3473,
      "word": "ROKOROKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3474,
      "word": "ROMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3475,
      "word": "RO MAKÎ ... +",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3476,
      "word": "ROMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3477,
      "word": "ROOMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3478,
      "word": "ROONA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3479,
      "word": "ROOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3480,
      "word": "ROOPORA WAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3481,
      "word": "ROOPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3482,
      "word": "ROOPORE ÑHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3483,
      "word": "ROOPO WAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3484,
      "word": "ROOPO WEHXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3485,
      "word": "ROOWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3486,
      "word": "ROPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3487,
      "word": "ROPONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3488,
      "word": "ROPOTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3489,
      "word": "ROPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3490,
      "word": "ŘOŘKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3491,
      "word": "RORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3492,
      "word": "ŘPONKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3493,
      "word": "RURPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3494,
      "word": "RUUMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3495,
      "word": "RUUPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3496,
      "word": "RUUSU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3497,
      "word": "RUUWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3498,
      "word": "SAA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3499,
      "word": "SAAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3500,
      "word": "SAAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3501,
      "word": "SAHSA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3502,
      "word": "SAHSAMAXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3503,
      "word": "SAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3504,
      "word": "SAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3505,
      "word": "SAKA KAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3506,
      "word": "SAKMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3507,
      "word": "SAKMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3508,
      "word": "SAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3509,
      "word": "SAMAPORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3510,
      "word": "SAMAPURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3511,
      "word": "SAPUPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3512,
      "word": "SARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3513,
      "word": "SARA NÎÎKA OWYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3514,
      "word": "SARAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3515,
      "word": "SARARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3516,
      "word": "SARARAMAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3517,
      "word": "SARARARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3518,
      "word": "SARARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3519,
      "word": "SARAYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3520,
      "word": "SARORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3521,
      "word": "SAWAKWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3522,
      "word": "SAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3523,
      "word": "SEE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3524,
      "word": "SEESE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3525,
      "word": "SEHRERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3526,
      "word": "SEHRERE MÎÎKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3527,
      "word": "SE KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3528,
      "word": "SEKESEKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3529,
      "word": "SEKESEKE KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3530,
      "word": "SERERE KAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3531,
      "word": "SÎÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3532,
      "word": "SÎÎKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3533,
      "word": "SÎÎKO KEÑARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3534,
      "word": "SÎKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3535,
      "word": "SÎNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3536,
      "word": "SÎNKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3537,
      "word": "SÎPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3538,
      "word": "SÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3539,
      "word": "SÎWÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3540,
      "word": "SKAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3541,
      "word": "SKÎSKÎMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3542,
      "word": "SKURUMI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3543,
      "word": "SKUYPAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3544,
      "word": "SMESME KASKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3545,
      "word": "SMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3546,
      "word": "SO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3547,
      "word": "SOČA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3548,
      "word": "SON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3549,
      "word": "SOOYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3550,
      "word": "SORORONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3551,
      "word": "SOROROPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3552,
      "word": "SOROSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3553,
      "word": "SOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3554,
      "word": "SOSOHNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3555,
      "word": "SOSOPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3556,
      "word": "SOWTATU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3557,
      "word": "SOWTATU KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3558,
      "word": "SPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3559,
      "word": "SPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3560,
      "word": "SPOSPOTURE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3561,
      "word": "SUKUSUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3562,
      "word": "SUM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3563,
      "word": "SUMAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3564,
      "word": "SUME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3565,
      "word": "SUMHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3566,
      "word": "SUNAWI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3567,
      "word": "SURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3568,
      "word": "SURATI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3569,
      "word": "SURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3570,
      "word": "SUU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3571,
      "word": "SUUM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3572,
      "word": "SUURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3573,
      "word": "SUWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3574,
      "word": "SWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3575,
      "word": "SWAA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3576,
      "word": "SWARUWARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3577,
      "word": "TA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3578,
      "word": "TAA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3579,
      "word": "TAACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3580,
      "word": "TAAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3581,
      "word": "TAAMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3582,
      "word": "TAAMUCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3583,
      "word": "TAARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3584,
      "word": "TAARORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3585,
      "word": "TAATÎTÎY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3586,
      "word": "TAATÎY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3587,
      "word": "TAAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3588,
      "word": "TACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3589,
      "word": "TAHCA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3590,
      "word": "TAHCASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3591,
      "word": "TAHCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3592,
      "word": "TAHKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3593,
      "word": "TAHKAXMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3594,
      "word": "TAHREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3595,
      "word": "TAHRORONTAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3596,
      "word": "TAHROROPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3597,
      "word": "TAHSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3598,
      "word": "TAHTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3599,
      "word": "TAHTARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3600,
      "word": "TAHWORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3601,
      "word": "TAHWOREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3602,
      "word": "TAHXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3603,
      "word": "TAIXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3604,
      "word": "TAKACOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3605,
      "word": "TAKAIWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3606,
      "word": "TAKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3607,
      "word": "TAKARÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3608,
      "word": "TAKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3609,
      "word": "TAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3610,
      "word": "TAKÎHKNOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3611,
      "word": "TAKÎHSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3612,
      "word": "TAKÎHSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3613,
      "word": "TAKÎHSO YÎHTÎNOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3614,
      "word": "TAKNAMACERÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3615,
      "word": "TAKNAMARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3616,
      "word": "TAKNAMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3617,
      "word": "TAKÑIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3618,
      "word": "TAKÑISO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3619,
      "word": "TAKÑISOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3620,
      "word": "TAKNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3621,
      "word": "TAKNOYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3622,
      "word": "TAKNOYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3623,
      "word": "TAKPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3624,
      "word": "TAMARAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3625,
      "word": "TAMARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3626,
      "word": "TAMATAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3627,
      "word": "TAMATÎKAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3628,
      "word": "TAMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3629,
      "word": "TAMEKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3630,
      "word": "TAMEKÎ THO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3631,
      "word": "TAMÎTKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3632,
      "word": "TAMKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3633,
      "word": "TAMNOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3634,
      "word": "TAMRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3635,
      "word": "TAMTAKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3636,
      "word": "TAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3637,
      "word": "TANANÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3638,
      "word": "TAN AWEXITAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3639,
      "word": "TANHAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3640,
      "word": "TANHAMYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3641,
      "word": "TANÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3642,
      "word": "TAÑIHSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3643,
      "word": "TANMERO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3644,
      "word": "TANTIRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3645,
      "word": "TANTONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3646,
      "word": "TANTONORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3647,
      "word": "TAPATAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3648,
      "word": "TAPATAWNO PÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3649,
      "word": "TAPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3650,
      "word": "TAPONUKYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3651,
      "word": "TAPOTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3652,
      "word": "TARAHXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3653,
      "word": "TARAK",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3654,
      "word": "TARAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3655,
      "word": "TARARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3656,
      "word": "TARARA YESAMARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3657,
      "word": "TARATARA YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3658,
      "word": "TARAYI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3659,
      "word": "TARIÑEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3660,
      "word": "TARITARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3661,
      "word": "TARKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3662,
      "word": "TAWAKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3663,
      "word": "TAXIKWOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3664,
      "word": "TENENE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3665,
      "word": "THO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3666,
      "word": "-TÎHKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3667,
      "word": "TÎHPOKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3668,
      "word": "TÎHYOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3669,
      "word": "TÎKPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3670,
      "word": "TIMARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3671,
      "word": "TÎMÎYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3672,
      "word": "TÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3673,
      "word": "TÎMXÎKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3674,
      "word": "TÎMXÎKRÎ ÑIIRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3675,
      "word": "TÎMXÎKYEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3676,
      "word": "TÎPÎÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3677,
      "word": "TÎPÎÑEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3678,
      "word": "TÎRAPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3679,
      "word": "TÎRAPONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3680,
      "word": "TÎSWAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3681,
      "word": "TÎTKEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3682,
      "word": "TÎTPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3683,
      "word": "TÎXEWEKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3684,
      "word": "TÎYOHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3685,
      "word": "TMANÎMSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3686,
      "word": "TMATAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3687,
      "word": "TMEMESE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3688,
      "word": "TMÑEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3689,
      "word": "TOCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3690,
      "word": "TOHKARARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3691,
      "word": "TOHSOM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3692,
      "word": "TOKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3693,
      "word": "TOM HÁ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3694,
      "word": "TOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3695,
      "word": "TONOHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3696,
      "word": "TONOPORE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3697,
      "word": "TONOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3698,
      "word": "TOONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3699,
      "word": "TOOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3700,
      "word": "TOOPU YAŘMAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3701,
      "word": "TOOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3702,
      "word": "TOOTO KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3703,
      "word": "TOOTO YEKATÎNHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3704,
      "word": "TOPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3705,
      "word": "TOPO + ME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3706,
      "word": "TOROWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3707,
      "word": "TOTKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3708,
      "word": "TOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3709,
      "word": "TPANAXKEM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3710,
      "word": "TPAPAKYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3711,
      "word": "TPOTKE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3712,
      "word": "TPOXWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3713,
      "word": "TRISTE KACAMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3714,
      "word": "TUKRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3715,
      "word": "TUKURUY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3716,
      "word": "TUKUSU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3717,
      "word": "TUMUTWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3718,
      "word": "TUNAYANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3719,
      "word": "TUPURANTAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3720,
      "word": "TUPURUKYE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3721,
      "word": "TURPE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3722,
      "word": "TURUNI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3723,
      "word": "TURUTURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3724,
      "word": "TUSMUY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3725,
      "word": "TUTUM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3726,
      "word": "TUTURUY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3727,
      "word": "TUUNA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3728,
      "word": "TUUNA PÎTHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3729,
      "word": "TUUNA YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3730,
      "word": "TUUNA YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3731,
      "word": "TUURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3732,
      "word": "TUUWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3733,
      "word": "TUWUÑUREM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3734,
      "word": "TUXKUKUYURE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3735,
      "word": "TUXMA YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3736,
      "word": "TWAYHSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3737,
      "word": "TWEENOPÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3738,
      "word": "TWOTME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3739,
      "word": "UMANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3740,
      "word": "UMAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3741,
      "word": "UMAYINO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3742,
      "word": "UUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3743,
      "word": "UUMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3744,
      "word": "UUXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3745,
      "word": "WA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3746,
      "word": "WAACA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3747,
      "word": "WAAČA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3748,
      "word": "WAAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3749,
      "word": "WAANO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3750,
      "word": "WAAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3751,
      "word": "WAAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3752,
      "word": "WAAŘASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3753,
      "word": "WAARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3754,
      "word": "WAATO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3755,
      "word": "WAAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3756,
      "word": "WACAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3757,
      "word": "WAČMIYKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3758,
      "word": "WAHCESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3759,
      "word": "WAHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3760,
      "word": "WAHRAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3761,
      "word": "WAHRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3762,
      "word": "WAHRUNKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3763,
      "word": "WAHRUNKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3764,
      "word": "WAHRUYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3765,
      "word": "WAHSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3766,
      "word": "WAHSÎYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3767,
      "word": "WAHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3768,
      "word": "WAHXAYKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3769,
      "word": "WAHYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3770,
      "word": "WAIWAI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3771,
      "word": "WAKANAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3772,
      "word": "WAKÎHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3773,
      "word": "WAKÎKNOFU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3774,
      "word": "WAKÎKNOYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3775,
      "word": "WAKÎKNOYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3776,
      "word": "WAKÎMHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3777,
      "word": "WAKNAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3778,
      "word": "WAKÑIFU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3779,
      "word": "WAKÑIYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3780,
      "word": "WAKNONKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3781,
      "word": "WAKON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3782,
      "word": "WAKOROKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3783,
      "word": "WAKPAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3784,
      "word": "WAKRON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3785,
      "word": "WAKRONOMAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3786,
      "word": "WAKRONOMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3787,
      "word": "WAKRONOMESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3788,
      "word": "WAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3789,
      "word": "WAMATÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3790,
      "word": "WAME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3791,
      "word": "WAMESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3792,
      "word": "WAMPOSOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3793,
      "word": "WANANPÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3794,
      "word": "WANARU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3795,
      "word": "WANOHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3796,
      "word": "WANOMAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3797,
      "word": "WANOMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3798,
      "word": "WAPAHTOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3799,
      "word": "WAPANTAW NAXE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3800,
      "word": "WAPONUKYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3801,
      "word": "WARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3802,
      "word": "WARA EXIRÎ KE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3803,
      "word": "WARAHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3804,
      "word": "WARAHYAKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3805,
      "word": "WARAPAPOTURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3806,
      "word": "WARAPOTURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3807,
      "word": "WARKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3808,
      "word": "WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3809,
      "word": "WASIKWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3810,
      "word": "WATAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3811,
      "word": "WATMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3812,
      "word": "WATMUNKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3813,
      "word": "WATOCOW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3814,
      "word": "WATOSO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3815,
      "word": "WATOTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3816,
      "word": "WATWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3817,
      "word": "WATWA YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3818,
      "word": "WAW KAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3819,
      "word": "WAYAHRU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3820,
      "word": "WAYAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3821,
      "word": "WAYAMAKASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3822,
      "word": "WAYAMARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3823,
      "word": "WAYAMNU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3824,
      "word": "WAYAMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3825,
      "word": "WAYAMUMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3826,
      "word": "WAYAPAMSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3827,
      "word": "WAYAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3828,
      "word": "WAYAWAYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3829,
      "word": "WAYHKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3830,
      "word": "WAYMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3831,
      "word": "WAYPÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3832,
      "word": "WAYPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3833,
      "word": "WAYPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3834,
      "word": "WAYPURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3835,
      "word": "WAYWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3836,
      "word": "WAYWÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3837,
      "word": "WEČIKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3838,
      "word": "WEECI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3839,
      "word": "WEEÑASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3840,
      "word": "WEENU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3841,
      "word": "WEENU MÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3842,
      "word": "WEEŘA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3843,
      "word": "WEETO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3844,
      "word": "WEEWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3845,
      "word": "WEEWE MÎTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3846,
      "word": "WEEWE PIČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3847,
      "word": "WEEWE YEHKURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3848,
      "word": "WEEWE YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3849,
      "word": "WEEYU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3850,
      "word": "WEHTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3851,
      "word": "WEHTO RORON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3852,
      "word": "WEHTO YEN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3853,
      "word": "WEHTO YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3854,
      "word": "WEHTOYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3855,
      "word": "WEHYATKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3856,
      "word": "WEKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3857,
      "word": "WEMČINOYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3858,
      "word": "WEMRONHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3859,
      "word": "WENARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3860,
      "word": "WENASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3861,
      "word": "WEÑASÎYKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3862,
      "word": "WENCES",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3863,
      "word": "WEÑEKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3864,
      "word": "WENPORÎW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3865,
      "word": "WENTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3866,
      "word": "WENTAPORMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3867,
      "word": "WENWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3868,
      "word": "WEPAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3869,
      "word": "WEPEMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3870,
      "word": "WEPETHÎKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3871,
      "word": "WEPORAS",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3872,
      "word": "WEREWERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3873,
      "word": "WERMONHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3874,
      "word": "WESUNKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3875,
      "word": "WETAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3876,
      "word": "WETAPA OYAMORÎ KE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3877,
      "word": "WETHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3878,
      "word": "WEWČOKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3879,
      "word": "WEWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3880,
      "word": "WEXKIRIRIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3881,
      "word": "WEYPOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3882,
      "word": "WEYUNME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3883,
      "word": "WÎHČAMNOPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3884,
      "word": "WÎHČAMNOYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3885,
      "word": "WÎHKOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3886,
      "word": "WÎHMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3887,
      "word": "WÎHMAMEKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3888,
      "word": "WÎHMAMESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3889,
      "word": "WÎHTÎNOYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3890,
      "word": "WIHXIKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3891,
      "word": "WÎHYAKÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3892,
      "word": "WÎHYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3893,
      "word": "WÎÎKESÎ MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3894,
      "word": "WÎÎPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3895,
      "word": "WIIRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3896,
      "word": "WÎÎRE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3897,
      "word": "WIIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3898,
      "word": "WÎÎWÎRÎYAKES MIKI TOOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3899,
      "word": "WIKOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3900,
      "word": "WÎMEÑEKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3901,
      "word": "WÎMHOKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3902,
      "word": "WÎMÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3903,
      "word": "WIMIU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3904,
      "word": "WÎMYASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3905,
      "word": "WIPIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3906,
      "word": "WÎRAČONKESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3907,
      "word": "WÎRAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3908,
      "word": "WÎSPOMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3909,
      "word": "WÎTWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3910,
      "word": "WIYAMU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3911,
      "word": "WIYAMYASU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3912,
      "word": "WOHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3913,
      "word": "WOK MÎTÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3914,
      "word": "WOKPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3915,
      "word": "WOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3916,
      "word": "WOÑESU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3917,
      "word": "WONO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3918,
      "word": "WOOKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3919,
      "word": "WOOSÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3920,
      "word": "WOOSÎCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3921,
      "word": "WOOSÎ WAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3922,
      "word": "WOOTO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3923,
      "word": "WOOXAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3924,
      "word": "WOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3925,
      "word": "WOPOÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3926,
      "word": "WOROKYAM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3927,
      "word": "WOSKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3928,
      "word": "WOW KAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3929,
      "word": "WUKUKMESÎ MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3930,
      "word": "XAAMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3931,
      "word": "XAAPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3932,
      "word": "XAARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3933,
      "word": "XA HARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3934,
      "word": "XAKAWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3935,
      "word": "XAMAHNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3936,
      "word": "XAPARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3937,
      "word": "XAPIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3938,
      "word": "XAPOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3939,
      "word": "XAWARAPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3940,
      "word": "XE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3941,
      "word": "XEERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3942,
      "word": "XEHXA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3943,
      "word": "XERE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3944,
      "word": "XIIKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3945,
      "word": "XIIPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3946,
      "word": "XIMXIM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3947,
      "word": "XIPIPI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3948,
      "word": "XIRIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3949,
      "word": "XIRIRI THO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3950,
      "word": "XIRKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3951,
      "word": "XIŘKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3952,
      "word": "XIRKO YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3953,
      "word": "XIRPA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3954,
      "word": "XIXIM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3955,
      "word": "XIXKÓ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3956,
      "word": "XMARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3957,
      "word": "XOHRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3958,
      "word": "XPARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3959,
      "word": "XUKURWA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3960,
      "word": "XUMBU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3961,
      "word": "XUUKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3962,
      "word": "XUXUNURI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3963,
      "word": "YAACI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3964,
      "word": "YAAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3965,
      "word": "YAAMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3966,
      "word": "YAANA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3967,
      "word": "YAANA PÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3968,
      "word": "YAANA RO MAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3969,
      "word": "YAANA THO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3970,
      "word": "YAARE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3971,
      "word": "YAARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3972,
      "word": "YAARO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3973,
      "word": "YAARO HARE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3974,
      "word": "YAARONO TAPOTA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3975,
      "word": "YAASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3976,
      "word": "YAHČOME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3977,
      "word": "YAKAYAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3978,
      "word": "YAKRO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3979,
      "word": "YAKWE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3980,
      "word": "YAMORO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3981,
      "word": "YAMORO ÑHE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3982,
      "word": "YAMOROROMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3983,
      "word": "YAMURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3984,
      "word": "YAPOCI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3985,
      "word": "YARAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3986,
      "word": "YARARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3987,
      "word": "YARENHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3988,
      "word": "YARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3989,
      "word": "YARÎHRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3990,
      "word": "YASKOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3991,
      "word": "YATHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3992,
      "word": "YATÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3993,
      "word": "YAWAKA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3994,
      "word": "YAWARI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3995,
      "word": "YAXAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3996,
      "word": "YAYPÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3997,
      "word": "YEME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3998,
      "word": "YEMEME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 3999,
      "word": "YENAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4000,
      "word": "YEPATAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4001,
      "word": "YEPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4002,
      "word": "YÎHČAMNOPÎRA ESKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4003,
      "word": "YIHCIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4004,
      "word": "YÎHČÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4005,
      "word": "YIHČIRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4006,
      "word": "YIHČIRÎ ME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4007,
      "word": "YIHCIRME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4008,
      "word": "YIHCITOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4009,
      "word": "YÎHMAMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4010,
      "word": "YÎHPOČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4011,
      "word": "YÎHPOCI PATAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4012,
      "word": "YÎHPOCKIRIRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4013,
      "word": "YÎHPOCPON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4014,
      "word": "YÎHPORA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4015,
      "word": "YÎHREPURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4016,
      "word": "YÎHTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4017,
      "word": "YÎHTÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4018,
      "word": "YÎHTÎPÎRÎ YARÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4019,
      "word": "YIHXIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4020,
      "word": "YIHXIRORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4021,
      "word": "YÎHYAPAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4022,
      "word": "YÎHYAPAMTOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4023,
      "word": "YÎÎM",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4024,
      "word": "YÎÎM KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4025,
      "word": "YIIXERA RO MAK NASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4026,
      "word": "YIIXE THAKWA WASI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4027,
      "word": "YIIXE WASÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4028,
      "word": "YIKINÎMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4029,
      "word": "YIKMORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4030,
      "word": "YIKMORÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4031,
      "word": "YIMICIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4032,
      "word": "YIMIČIN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4033,
      "word": "YIMICOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4034,
      "word": "YÎMÎHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4035,
      "word": "YIMIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4036,
      "word": "YÎMÎTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4037,
      "word": "YÎMÎTÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4038,
      "word": "YÎMÎTÎ KEÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4039,
      "word": "YÎMÎTÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4040,
      "word": "YÎMÎTÎYMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4041,
      "word": "YIMITOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4042,
      "word": "YÎMÎTWO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4043,
      "word": "YÎMKARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4044,
      "word": "YÎMKAW KÎWČESÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4045,
      "word": "YÎMKAY",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4046,
      "word": "YÎMTAPOTAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4047,
      "word": "YÎMTAPOTAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4048,
      "word": "YÎMTAPOTARÎ KOMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4049,
      "word": "YÎMTARÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4050,
      "word": "YIMXIKRI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4051,
      "word": "YÎNÎMKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4052,
      "word": "YÎNOČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4053,
      "word": "YÎNPANATANMEKRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4054,
      "word": "YÎNPORMAMNORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4055,
      "word": "YÎNPOŘMAMNORÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4056,
      "word": "YIPICI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4057,
      "word": "YIPIČI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4058,
      "word": "YIPIHKACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4059,
      "word": "YIPIHNÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4060,
      "word": "YÎPÎMÎMIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4061,
      "word": "YÎPÎMÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4062,
      "word": "YÎPÎMTAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4063,
      "word": "YÎPÎPÎTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4064,
      "word": "YÎPÎRÎ THO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4065,
      "word": "YIPITACHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4066,
      "word": "YIPITARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4067,
      "word": "YÎPÎTÎKARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4068,
      "word": "YÎPÎTÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4069,
      "word": "YÎRAČONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4070,
      "word": "YÎRAMANKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4071,
      "word": "YÎRETÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4072,
      "word": "YIRIKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4073,
      "word": "YÎRÎYAKAÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4074,
      "word": "YÎRÎYAKAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4075,
      "word": "YÎSÎN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4076,
      "word": "YÎSÎN YEPATAKAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4077,
      "word": "YÎSON",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4078,
      "word": "YÎSPOMAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4079,
      "word": "YÎWÎNKÎRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4080,
      "word": "YÎWÎRÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4081,
      "word": "YÎWÎRÎYAKATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4082,
      "word": "YÎWÎYAKAXI",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4083,
      "word": "YÎWRATARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4084,
      "word": "YÎWYAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4085,
      "word": "YMO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4086,
      "word": "YOHNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4087,
      "word": "YOOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4088,
      "word": "YUČURERA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4089,
      "word": "YUHME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4090,
      "word": "YUHNARE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4091,
      "word": "YUHNAW",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4092,
      "word": "YUHNAWNO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4093,
      "word": "YUKU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4094,
      "word": "YUKUHYA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4095,
      "word": "YUKUKMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4096,
      "word": "YUKUKMARA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4097,
      "word": "YUKUKNOMAČO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4098,
      "word": "YUKUKNOMAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4099,
      "word": "YUKUMTOKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4100,
      "word": "YUKURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4101,
      "word": "YUKURUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4102,
      "word": "YUKURUNKAKÎ",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4103,
      "word": "YUKURUNPEKO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4104,
      "word": "YUMUMURU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4105,
      "word": "YUPUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4106,
      "word": "YUPUÑE",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4107,
      "word": "YUPUPUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4108,
      "word": "YUPURANTAMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4109,
      "word": "YUPURANTAN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4110,
      "word": "YUPURUKUN",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4111,
      "word": "YUPURURA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4112,
      "word": "YUPURUTATOPO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4113,
      "word": "YUPUXAPU",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4114,
      "word": "YUPUYME",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4115,
      "word": "YURUMA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4116,
      "word": "YUSMUMRA",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    },
    {
      "id": 4117,
      "word": "YUU YUU KAČHO",
      "phonemic": null,
      "created_at": "2024-02-29T22:50:02.794409Z",
      "update_at": "2024-02-29T22:50:02.794409Z",
      "user_id": 1
    }
  ]

  const dataString = JSON.stringify(data);
  const length = Buffer.byteLength(dataString, 'utf8');

  res.setHeader('Content-Length', length);
  res.status(200).json(data);
}
