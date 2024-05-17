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

export default function get(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {

  const data = [
    {
      "id": 1,
      "word": "A",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2,
      "word": "AACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3,
      "word": "AAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4,
      "word": "AAKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 5,
      "word": "AAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 6,
      "word": "AAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 7,
      "word": "AAMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 8,
      "word": "AAMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 9,
      "word": "AAÑAPOTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 10,
      "word": "AAÑO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 11,
      "word": "AAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 12,
      "word": "AAPE YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 13,
      "word": "AAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 14,
      "word": "AAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 15,
      "word": "AARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 16,
      "word": "AARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 17,
      "word": "AARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 18,
      "word": "AASU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 19,
      "word": "AASUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 20,
      "word": "AATO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 21,
      "word": "AATUPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 22,
      "word": "AAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 23,
      "word": "AAXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 24,
      "word": "AAXERA WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 25,
      "word": "AAXE WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 26,
      "word": "ACA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 27,
      "word": "ACACAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 28,
      "word": "ACANAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 29,
      "word": "ACARAKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 30,
      "word": "ACETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 31,
      "word": "ACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 32,
      "word": "AČIMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 33,
      "word": "ACINÎMTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 34,
      "word": "ACINTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 35,
      "word": "ACIRIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 36,
      "word": "ACKICKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 37,
      "word": "ACKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 38,
      "word": "ACKOROKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 39,
      "word": "ACORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 40,
      "word": "ACPOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 41,
      "word": "AHCE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 42,
      "word": "AHČE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 43,
      "word": "AHCE KACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 44,
      "word": "AHČE KAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 45,
      "word": "AHCE MAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 46,
      "word": "AHCEMAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 47,
      "word": "AHČEMAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 48,
      "word": "AHCEMAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 49,
      "word": "AHCE ÑEEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 50,
      "word": "AHCE POYERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 51,
      "word": "AHCEWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 52,
      "word": "AHČE WA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 53,
      "word": "AHCEWA EXIRKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 54,
      "word": "AHCEWA HA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 55,
      "word": "AHCEWA HÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 56,
      "word": "AHCEWA MAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 57,
      "word": "AHCEWA MEEXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 58,
      "word": "AHCEWA MEHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 59,
      "word": "AHCEWA ÑEEXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 60,
      "word": "AHCE WECE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 61,
      "word": "AHCE XE MAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 62,
      "word": "AHCE YAKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 63,
      "word": "AHCE YANME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 64,
      "word": "AHCIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 65,
      "word": "AHCIKÎRÎRÎNKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 66,
      "word": "AHCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 67,
      "word": "AHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 68,
      "word": "AHKACOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 69,
      "word": "AHKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 70,
      "word": "AHKAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 71,
      "word": "AHKAÑERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 72,
      "word": "AHKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 73,
      "word": "AHKOROMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 74,
      "word": "AHNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 75,
      "word": "AHNÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 76,
      "word": "AHNA MÎÎCE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 77,
      "word": "AHNA MÎTOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 78,
      "word": "AHNA TOCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 79,
      "word": "AHNA TOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 80,
      "word": "AHNA XÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 81,
      "word": "AHNAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 82,
      "word": "AHÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 83,
      "word": "AHÑERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 84,
      "word": "AHNIXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 85,
      "word": "AHÑIXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 86,
      "word": "AHNORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 87,
      "word": "AHNORONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 88,
      "word": "AHNORONO KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 89,
      "word": "AHPOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 90,
      "word": "AHRAKNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 91,
      "word": "AHREPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 92,
      "word": "AHRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 93,
      "word": "AHŘIČHOPICHOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 94,
      "word": "AHŘIPIČHOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 95,
      "word": "AHRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 96,
      "word": "AHROMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 97,
      "word": "AHRORON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 98,
      "word": "AHRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 99,
      "word": "AHRUCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 100,
      "word": "AHRUKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 101,
      "word": "AHRUMCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 102,
      "word": "AHRUMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 103,
      "word": "AHRUMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 104,
      "word": "AHRUMTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 105,
      "word": "AHRUMTOPORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 106,
      "word": "AHRUNKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 107,
      "word": "AHRUNKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 108,
      "word": "AHRUNKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 109,
      "word": "AHRUNKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 110,
      "word": "AHRUNKARA KA NAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 111,
      "word": "AHRUNKATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 112,
      "word": "AHRUNKATOPONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 113,
      "word": "AHRUPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 114,
      "word": "AHRUPORA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 115,
      "word": "AHRUPOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 116,
      "word": "AHRUPOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 117,
      "word": "AHRURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 118,
      "word": "AHRURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 119,
      "word": "AHRUTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 120,
      "word": "AHRUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 121,
      "word": "AHRUTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 122,
      "word": "AHŘUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 123,
      "word": "AHSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 124,
      "word": "AHSÎKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 125,
      "word": "AHSÎÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 126,
      "word": "AHSÎPÎNKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 127,
      "word": "AHSÎPÎNKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 128,
      "word": "AHSÎPÎNKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 129,
      "word": "AHSÎPÎNKARA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 130,
      "word": "AHSÎSÎKNOKÓ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 131,
      "word": "AHSÎSÎKNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 132,
      "word": "AHSÎSÎKNOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 133,
      "word": "AHSÎSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 134,
      "word": "AHSÎTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 135,
      "word": "AHSÎXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 136,
      "word": "AHSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 137,
      "word": "AHTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 138,
      "word": "AHTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 139,
      "word": "AHTARÎ KE ETAPAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 140,
      "word": "AHTAYARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 141,
      "word": "AHTÎPÎRÎ KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 142,
      "word": "AHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 143,
      "word": "AHTOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 144,
      "word": "AHTONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 145,
      "word": "AHTOXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 146,
      "word": "AHTO XÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 147,
      "word": "AHTUTUMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 148,
      "word": "AHWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 149,
      "word": "AHWOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 150,
      "word": "AHWOKAMEXPOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 151,
      "word": "AHWOKAMEXPOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 152,
      "word": "AHWOKANÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 153,
      "word": "AHWON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 154,
      "word": "AHWON KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 155,
      "word": "AHWORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 156,
      "word": "AHWOREÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 157,
      "word": "AHWORESO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 158,
      "word": "AHWORETOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 159,
      "word": "AHXAIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 160,
      "word": "AHXIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 161,
      "word": "AHXUKRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 162,
      "word": "AHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 163,
      "word": "AHYAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 164,
      "word": "AHYAKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 165,
      "word": "AHYA MA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 166,
      "word": "AHYAPAMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 167,
      "word": "AHYAPAMKO ÑHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 168,
      "word": "AHYARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 169,
      "word": "AHYAXKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 170,
      "word": "AI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 171,
      "word": "AÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 172,
      "word": "AIMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 173,
      "word": "AIMARAHEI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 174,
      "word": "AÎNÎN YAW WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 175,
      "word": "AIPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 176,
      "word": "AIWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 177,
      "word": "AKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 178,
      "word": "AKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 179,
      "word": "AKACHOTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 180,
      "word": "AKAMISAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 181,
      "word": "AKAMONÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 182,
      "word": "AKANAHTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 183,
      "word": "AKANAPAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 184,
      "word": "AKANAWARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 185,
      "word": "AKANÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 186,
      "word": "AKARITAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 187,
      "word": "AKARITOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 188,
      "word": "AKARITOÑERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 189,
      "word": "AKAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 190,
      "word": "AKAWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 191,
      "word": "AKAYINÎMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 192,
      "word": "AKAYRIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 193,
      "word": "AKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 194,
      "word": "AKIHKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 195,
      "word": "AKÎHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 196,
      "word": "AKIHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 197,
      "word": "AKÎHXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 198,
      "word": "AKÎKNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 199,
      "word": "AKÎPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 200,
      "word": "AKIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 201,
      "word": "AKÎRÎKÎRÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 202,
      "word": "AKÎRÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 203,
      "word": "AKIŘWAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 204,
      "word": "AKÎTANMEKÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 205,
      "word": "AKMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 206,
      "word": "AKNAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 207,
      "word": "AKNAMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 208,
      "word": "AKNAMAPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 209,
      "word": "AKNAMAPORA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 210,
      "word": "AKÑICOKO HÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 211,
      "word": "AKÑIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 212,
      "word": "AKÑIPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 213,
      "word": "AKÑIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 214,
      "word": "AKÑIPURA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 215,
      "word": "AK ÑIYO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 216,
      "word": "AKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 217,
      "word": "AKNOMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 218,
      "word": "AKNONKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 219,
      "word": "AKNONKAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 220,
      "word": "AKOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 221,
      "word": "AKOROKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 222,
      "word": "AKOWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 223,
      "word": "AKOWERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 224,
      "word": "AKPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 225,
      "word": "AKPACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 226,
      "word": "AKPACOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 227,
      "word": "AKPAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 228,
      "word": "AKPAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 229,
      "word": "AKPAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 230,
      "word": "AKPARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 231,
      "word": "AKPARA CEXPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 232,
      "word": "AKPARA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 233,
      "word": "AKPATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 234,
      "word": "AKPÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 235,
      "word": "AKPÎN KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 236,
      "word": "AKPÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 237,
      "word": "AKPÎRA YÎHTÎNOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 238,
      "word": "AKPOROHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 239,
      "word": "AKPOROPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 240,
      "word": "AKPOTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 241,
      "word": "AKRAKRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 242,
      "word": "AKRAPAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 243,
      "word": "AKRAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 244,
      "word": "AKREWETÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 245,
      "word": "AKRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 246,
      "word": "AKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 247,
      "word": "AKRÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 248,
      "word": "AKRÎRÎPAMTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 249,
      "word": "AKRÎRPAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 250,
      "word": "AKRÎTANMEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 251,
      "word": "AKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 252,
      "word": "AKRONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 253,
      "word": "AKRONOMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 254,
      "word": "AKRONOMACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 255,
      "word": "AKRONOMACHORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 256,
      "word": "AKRONOMAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 257,
      "word": "AKRONOMAÑERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 258,
      "word": "AKRONOMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 259,
      "word": "AKRONONKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 260,
      "word": "AKRONONKAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 261,
      "word": "AKRONORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 262,
      "word": "AKRORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 263,
      "word": "AKROROSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 264,
      "word": "AKROSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 265,
      "word": "AKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 266,
      "word": "AKUHŘAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 267,
      "word": "AKUKMAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 268,
      "word": "AKUKMAÑENHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 269,
      "word": "AKUKMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 270,
      "word": "AKUKMAXE WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 271,
      "word": "AKUMHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 272,
      "word": "AKUMINTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 273,
      "word": "AKUMKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 274,
      "word": "AKUMRUKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 275,
      "word": "AKUMYAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 276,
      "word": "AKUPUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 277,
      "word": "AKURUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 278,
      "word": "AKUYWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 279,
      "word": "AKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 280,
      "word": "AKWAHSÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 281,
      "word": "AKWEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 282,
      "word": "AKWERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 283,
      "word": "AKWERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 284,
      "word": "AKWOWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 285,
      "word": "AMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 286,
      "word": "AMACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 287,
      "word": "AMACIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 288,
      "word": "AMACOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 289,
      "word": "AMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 290,
      "word": "AMANARIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 291,
      "word": "AMANATÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 292,
      "word": "AMANÎCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 293,
      "word": "AMANÎMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 294,
      "word": "AMANÎMTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 295,
      "word": "AMANÎMTOPO KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 296,
      "word": "AMAPIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 297,
      "word": "AMARARÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 298,
      "word": "AMARIYAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 299,
      "word": "AMATKÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 300,
      "word": "AMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 301,
      "word": "AMAWKAŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 302,
      "word": "AMAYAMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 303,
      "word": "AMCIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 304,
      "word": "AMCIKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 305,
      "word": "AMČIKÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 306,
      "word": "AMCIKIRIRINKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 307,
      "word": "AMCO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 308,
      "word": "AME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 309,
      "word": "AMEHCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 310,
      "word": "AMEHKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 311,
      "word": "AMEHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 312,
      "word": "AMEHTOPONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 313,
      "word": "AMEHTOPORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 314,
      "word": "AMEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 315,
      "word": "AMEKÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 316,
      "word": "AMENOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 317,
      "word": "AMETATAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 318,
      "word": "AMETATANTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 319,
      "word": "AMEYAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 320,
      "word": "AMEYANTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 321,
      "word": "AMHOSOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 322,
      "word": "AMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 323,
      "word": "AMICHIRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 324,
      "word": "AMICHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 325,
      "word": "AMICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 326,
      "word": "AMICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 327,
      "word": "AMICINTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 328,
      "word": "AMICITHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 329,
      "word": "AMIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 330,
      "word": "AMKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 331,
      "word": "AMKARARAKAK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 332,
      "word": "AMKARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 333,
      "word": "AMKOYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 334,
      "word": "AMKUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 335,
      "word": "AMNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 336,
      "word": "AMÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 337,
      "word": "AMÑE XA SO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 338,
      "word": "AMNONOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 339,
      "word": "AMNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 340,
      "word": "AMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 341,
      "word": "AMOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 342,
      "word": "AMOHCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 343,
      "word": "AMOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 344,
      "word": "AMOKO XIYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 345,
      "word": "AMOKUKWEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 346,
      "word": "AMOMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 347,
      "word": "AMOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 348,
      "word": "AMOMRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 349,
      "word": "AMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 350,
      "word": "AMORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 351,
      "word": "AMOTÎWÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 352,
      "word": "AMOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 353,
      "word": "AMOTOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 354,
      "word": "AMOXOXO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 355,
      "word": "AMOXOXON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 356,
      "word": "AMOYARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 357,
      "word": "AMOYARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 358,
      "word": "AMOYEKNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 359,
      "word": "AMOYERETA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 360,
      "word": "AMOYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 361,
      "word": "AMPOSOHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 362,
      "word": "AMRINA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 363,
      "word": "AMRINAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 364,
      "word": "AMRIŘPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 365,
      "word": "AMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 366,
      "word": "AMRUKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 367,
      "word": "AMRURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 368,
      "word": "AMRUYATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 369,
      "word": "AMTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 370,
      "word": "AMTACME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 371,
      "word": "AMTAKPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 372,
      "word": "AMTAPOTAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 373,
      "word": "AMTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 374,
      "word": "AMTARINO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 375,
      "word": "AMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 376,
      "word": "AMUE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 377,
      "word": "AMUMURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 378,
      "word": "AMUYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 379,
      "word": "AMXIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 380,
      "word": "AMXIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 381,
      "word": "AMXÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 382,
      "word": "AMXIRIRIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 383,
      "word": "AMXO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 384,
      "word": "AMXOTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 385,
      "word": "AMYAMRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 386,
      "word": "ANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 387,
      "word": "ANAHMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 388,
      "word": "ANAHMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 389,
      "word": "ANAHMATOPO KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 390,
      "word": "ANAHRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 391,
      "word": "ANAKIRWAMATHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 392,
      "word": "ANAKÎTOTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 393,
      "word": "ANAKÑIPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 394,
      "word": "ANANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 395,
      "word": "ANAÑIXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 396,
      "word": "ANAPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 397,
      "word": "ANARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 398,
      "word": "ANARÎ HARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 399,
      "word": "ANARI KOMO YEHTOPO YIMICIN YATI TATIHTAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 400,
      "word": "ANARIMAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 401,
      "word": "ANARÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 402,
      "word": "ANARÎTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 403,
      "word": "ANARME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 404,
      "word": "ANARME ČIRKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 405,
      "word": "ANARMERPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 406,
      "word": "ANATÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 407,
      "word": "ANATO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 408,
      "word": "ANATOXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 409,
      "word": "ANCU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 410,
      "word": "AÑENÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 411,
      "word": "AÑEYAMRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 412,
      "word": "ANEYIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 413,
      "word": "ANHMARA NAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 414,
      "word": "AÑIHKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 415,
      "word": "AÑIKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 416,
      "word": "ANÎMÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 417,
      "word": "ANÎMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 418,
      "word": "ANÎMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 419,
      "word": "ANÎNOMRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 420,
      "word": "ANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 421,
      "word": "ANKAŘWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 422,
      "word": "ANME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 423,
      "word": "ANOMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 424,
      "word": "ANORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 425,
      "word": "ANTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 426,
      "word": "ANTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 427,
      "word": "ANTOMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 428,
      "word": "ANWEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 429,
      "word": "ANWEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 430,
      "word": "APA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 431,
      "word": "APACAK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 432,
      "word": "APACAKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 433,
      "word": "APAČAKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 434,
      "word": "APACAKRÎ KÎHTAYAHSÎÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 435,
      "word": "APAIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 436,
      "word": "APAMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 437,
      "word": "APANARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 438,
      "word": "APANATAN MEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 439,
      "word": "APANATARÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 440,
      "word": "APAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 441,
      "word": "APAPA CACAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 442,
      "word": "APAPA PAMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 443,
      "word": "APAPA POCON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 444,
      "word": "APAPA TAMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 445,
      "word": "APAPA YAKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 446,
      "word": "APAPA YEPEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 447,
      "word": "APAPA YÎM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 448,
      "word": "APAPA YON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 449,
      "word": "APARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 450,
      "word": "APARACA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 451,
      "word": "APARACAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 452,
      "word": "APARATAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 453,
      "word": "APARA YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 454,
      "word": "APARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 455,
      "word": "APAŘPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 456,
      "word": "APARPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 457,
      "word": "APASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 458,
      "word": "APAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 459,
      "word": "APAWANARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 460,
      "word": "APAWAREKÓ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 461,
      "word": "APAYINOHKARA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 462,
      "word": "APAYINOKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 463,
      "word": "APAYIRÎ YAKRORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 464,
      "word": "APAYITOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 465,
      "word": "APAYITOPO YEMAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 466,
      "word": "APAYIYATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 467,
      "word": "APAYPÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 468,
      "word": "APAYPÎNÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 469,
      "word": "APAYUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 470,
      "word": "APAYXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 471,
      "word": "APE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 472,
      "word": "APEHCE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 473,
      "word": "APEHCEME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 474,
      "word": "APEHČEME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 475,
      "word": "APEHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 476,
      "word": "APEHNÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 477,
      "word": "APEHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 478,
      "word": "APEHRA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 479,
      "word": "APEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 480,
      "word": "APEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 481,
      "word": "APENEKANE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 482,
      "word": "APEÑE PÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 483,
      "word": "APEPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 484,
      "word": "APERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 485,
      "word": "APESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 486,
      "word": "APICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 487,
      "word": "APICKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 488,
      "word": "APIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 489,
      "word": "APIKMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 490,
      "word": "APIKRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 491,
      "word": "APÎMÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 492,
      "word": "APÎNÎNYAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 493,
      "word": "APIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 494,
      "word": "APÎTÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 495,
      "word": "APO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 496,
      "word": "APOCKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 497,
      "word": "APOCKAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 498,
      "word": "APOCON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 499,
      "word": "APOHANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 500,
      "word": "APOHKAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 501,
      "word": "APOHKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 502,
      "word": "APOHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 503,
      "word": "APOHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 504,
      "word": "APOKAXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 505,
      "word": "APOMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 506,
      "word": "APOMRIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 507,
      "word": "APON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 508,
      "word": "APONA WIIŘASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 509,
      "word": "APONKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 510,
      "word": "APONUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 511,
      "word": "APOÑURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 512,
      "word": "APOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 513,
      "word": "APOŘAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 514,
      "word": "APORARAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 515,
      "word": "APORESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 516,
      "word": "APORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 517,
      "word": "APORÎ KEEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 518,
      "word": "APORÎ PÎÎTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 519,
      "word": "APORÎ PORIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 520,
      "word": "APORÎ PORINTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 521,
      "word": "APORÎ WAHRAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 522,
      "word": "APORÎ WAHRAY CIK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 523,
      "word": "APORÎYAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 524,
      "word": "APORKAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 525,
      "word": "APORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 526,
      "word": "APOROTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 527,
      "word": "APORWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 528,
      "word": "APOSOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 529,
      "word": "APOSOKAXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 530,
      "word": "APOSOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 531,
      "word": "APOTKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 532,
      "word": "APOTMÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 533,
      "word": "APOTURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 534,
      "word": "APOXIXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 535,
      "word": "APOYPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 536,
      "word": "APU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 537,
      "word": "APUHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 538,
      "word": "APUHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 539,
      "word": "APUNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 540,
      "word": "ARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 541,
      "word": "ARAKAPUSA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 542,
      "word": "ARAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 543,
      "word": "ARAMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 544,
      "word": "ARAMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 545,
      "word": "ARAPAPETO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 546,
      "word": "ARARAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 547,
      "word": "ARAWANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 548,
      "word": "ARAWÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 549,
      "word": "ARECINA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 550,
      "word": "ARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 551,
      "word": "ARÎHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 552,
      "word": "ARIKNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 553,
      "word": "ARIMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 554,
      "word": "ARÎNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 555,
      "word": "ARÎRKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 556,
      "word": "ARÎXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 557,
      "word": "ARIXKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 558,
      "word": "ARJ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 559,
      "word": "ARKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 560,
      "word": "ARKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 561,
      "word": "AŘMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 562,
      "word": "AŘMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 563,
      "word": "AŘMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 564,
      "word": "ARMOMIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 565,
      "word": "ARMONI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 566,
      "word": "ARNTAWNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 567,
      "word": "ARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 568,
      "word": "AROKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 569,
      "word": "AROKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 570,
      "word": "AROKORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 571,
      "word": "AROOWON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 572,
      "word": "AROPOTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 573,
      "word": "ARPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 574,
      "word": "ARUPUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 575,
      "word": "ARUWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 576,
      "word": "AŘWAŘWAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 577,
      "word": "ASAKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 578,
      "word": "ASAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 579,
      "word": "ASAKÎ MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 580,
      "word": "ASAKÎ RO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 581,
      "word": "ASAKÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 582,
      "word": "ASAKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 583,
      "word": "ASAKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 584,
      "word": "ASAYAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 585,
      "word": "ASÎSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 586,
      "word": "ASÎSÎ CICIWIYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 587,
      "word": "ASÎSÎ COMOTA PONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 588,
      "word": "ASÎSÎ CUCUREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 589,
      "word": "ASÎSÎ KAWKAWNOTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 590,
      "word": "ASÎSÎKNOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 591,
      "word": "ASÎSÎ MARATIYEXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 592,
      "word": "ASÎSÎ POROTO YOORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 593,
      "word": "ASÎSÎ WAHRAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 594,
      "word": "ASÎSÎ XÎPÎRÎ YOORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 595,
      "word": "ASÎSÎ YAYMOYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 596,
      "word": "ASONÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 597,
      "word": "ASOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 598,
      "word": "ASUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 599,
      "word": "ASWANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 600,
      "word": "ATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 601,
      "word": "ATAMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 602,
      "word": "ATARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 603,
      "word": "ATARARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 604,
      "word": "ATI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 605,
      "word": "ATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 606,
      "word": "ATÎK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 607,
      "word": "ATÎKRON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 608,
      "word": "ATÎTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 609,
      "word": "ATÎTMAMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 610,
      "word": "ATÎ WIČAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 611,
      "word": "ATÎXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 612,
      "word": "ATKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 613,
      "word": "ATKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 614,
      "word": "ATMUNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 615,
      "word": "ATO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 616,
      "word": "ATPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 617,
      "word": "ATPORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 618,
      "word": "ATUKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 619,
      "word": "ATUMNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 620,
      "word": "ATUWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 621,
      "word": "ATWEIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 622,
      "word": "AWAKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 623,
      "word": "AWAKNONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 624,
      "word": "AWAKON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 625,
      "word": "AWAKONÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 626,
      "word": "AWAKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 627,
      "word": "AWAKRONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 628,
      "word": "AWAKRORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 629,
      "word": "AWAKROROSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 630,
      "word": "AWAKROSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 631,
      "word": "AWAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 632,
      "word": "AWAMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 633,
      "word": "AWAMOYARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 634,
      "word": "AWANAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 635,
      "word": "AWANOME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 636,
      "word": "AWANORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 637,
      "word": "AWAPARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 638,
      "word": "AWAPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 639,
      "word": "AWAPORAKAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 640,
      "word": "AWAPORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 641,
      "word": "AWARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 642,
      "word": "AWARAWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 643,
      "word": "AWARAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 644,
      "word": "AWARAY PÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 645,
      "word": "AWARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 646,
      "word": "AWARKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 647,
      "word": "AWAROKORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 648,
      "word": "AWARPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 649,
      "word": "AWARPAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 650,
      "word": "AWARPANCHERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 651,
      "word": "AWARPANCHEW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 652,
      "word": "AWARPANTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 653,
      "word": "AWATAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 654,
      "word": "AWATAKA CEXEWEKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 655,
      "word": "AWAWCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 656,
      "word": "AWAWCIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 657,
      "word": "AWAWRUTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 658,
      "word": "AWAWYOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 659,
      "word": "AWAYAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 660,
      "word": "AWAYAMA KAWAWANO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 661,
      "word": "AWAYAMA KAWKAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 662,
      "word": "AWAYAMA TAMNONEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 663,
      "word": "AWAYAMA TANNONEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 664,
      "word": "AWAYAMNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 665,
      "word": "AWAYARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 666,
      "word": "AWAYKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 667,
      "word": "AWAYTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 668,
      "word": "AWCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 669,
      "word": "AWČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 670,
      "word": "AWCIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 671,
      "word": "AWCITHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 672,
      "word": "AWEHTORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 673,
      "word": "AWEHYATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 674,
      "word": "AWEHYATKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 675,
      "word": "AWEHYUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 676,
      "word": "AWEKAREW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 677,
      "word": "AWEKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 678,
      "word": "AWEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 679,
      "word": "AWEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 680,
      "word": "AWEMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 681,
      "word": "AWEMYAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 682,
      "word": "AWEMYAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 683,
      "word": "AWENÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 684,
      "word": "AWENÎMRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 685,
      "word": "AWEPAKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 686,
      "word": "AWEPEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 687,
      "word": "AWERERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 688,
      "word": "AWETHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 689,
      "word": "AWETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 690,
      "word": "AWEWAHRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 691,
      "word": "AWEWKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 692,
      "word": "AWEWNARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 693,
      "word": "AWEWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 694,
      "word": "AWEWRUTOPONHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 695,
      "word": "AWEWRUYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 696,
      "word": "AWEWTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 697,
      "word": "AWEWTON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 698,
      "word": "AWEYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 699,
      "word": "AWEYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 700,
      "word": "AWEYAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 701,
      "word": "AWEYAMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 702,
      "word": "AWEYAMYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 703,
      "word": "AWEYÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 704,
      "word": "AWEYPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 705,
      "word": "AWEYPOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 706,
      "word": "AWEYPOÑENHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 707,
      "word": "AWEYPOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 708,
      "word": "AWEYPOTOPONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 709,
      "word": "AWEYURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 710,
      "word": "AWITOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 711,
      "word": "AWKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 712,
      "word": "AWNUKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 713,
      "word": "AWNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 714,
      "word": "AWOCORON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 715,
      "word": "AWOKPOWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 716,
      "word": "AWOKRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 717,
      "word": "AWOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 718,
      "word": "AWOMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 719,
      "word": "AWOMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 720,
      "word": "AWOMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 721,
      "word": "AWONOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 722,
      "word": "AWOSÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 723,
      "word": "AWOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 724,
      "word": "AWOSOKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 725,
      "word": "AWOSOKMURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 726,
      "word": "AWOSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 727,
      "word": "AWOSOREÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 728,
      "word": "AWOSOREÑE RORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 729,
      "word": "AWOSOTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 730,
      "word": "AWOSOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 731,
      "word": "AWOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 732,
      "word": "AWOWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 733,
      "word": "AWRONOHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 734,
      "word": "AWRUTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 735,
      "word": "AWRUTAWNO POONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 736,
      "word": "AWSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 737,
      "word": "AWXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 738,
      "word": "AWYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 739,
      "word": "AWYAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 740,
      "word": "AWYOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 741,
      "word": "AWYUKUNTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 742,
      "word": "AWYURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 743,
      "word": "AXAPIKAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 744,
      "word": "AXAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 745,
      "word": "AXAWA YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 746,
      "word": "AXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 747,
      "word": "AXIKWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 748,
      "word": "AXKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 749,
      "word": "AXKIXKIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 750,
      "word": "AXPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 751,
      "word": "AXWIXWIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 752,
      "word": "AYAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 753,
      "word": "AYANI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 754,
      "word": "AYAWAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 755,
      "word": "AYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 756,
      "word": "AYINTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 757,
      "word": "AYKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 758,
      "word": "AYKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 759,
      "word": "AYOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 760,
      "word": "AYOPONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 761,
      "word": "AYORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 762,
      "word": "AYUKWARÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 763,
      "word": "BABY    RIKOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 764,
      "word": "CA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 765,
      "word": "CAA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 766,
      "word": "CAACA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 767,
      "word": "CAAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 768,
      "word": "CAANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 769,
      "word": "CAARAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 770,
      "word": "ČAARAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 771,
      "word": "ČAAWAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 772,
      "word": "CAAYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 773,
      "word": "CAHCAKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 774,
      "word": "CAHCAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 775,
      "word": "CAIWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 776,
      "word": "CAK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 777,
      "word": "CAKANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 778,
      "word": "CAKANACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 779,
      "word": "CAKAŘMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 780,
      "word": "CAKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 781,
      "word": "CAMKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 782,
      "word": "CAMKÎNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 783,
      "word": "CAMKÎNO PÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 784,
      "word": "CAMKÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 785,
      "word": "CAMNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 786,
      "word": "ČAMNAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 787,
      "word": "ČAMNAYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 788,
      "word": "CAMNAYMOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 789,
      "word": "ČAMNAYMOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 790,
      "word": "CANAIMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 791,
      "word": "CANANO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 792,
      "word": "CAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 793,
      "word": "CAPAHNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 794,
      "word": "CAPAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 795,
      "word": "CARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 796,
      "word": "CARAICARAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 797,
      "word": "CARAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 798,
      "word": "CARAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 799,
      "word": "CARARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 800,
      "word": "CARARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 801,
      "word": "CARATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 802,
      "word": "ČARATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 803,
      "word": "CARATACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 804,
      "word": "CARUKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 805,
      "word": "CARUMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 806,
      "word": "CAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 807,
      "word": "ČAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 808,
      "word": "CAWANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 809,
      "word": "CAWAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 810,
      "word": "ČAWAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 811,
      "word": "CAYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 812,
      "word": "CE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 813,
      "word": "CECEHKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 814,
      "word": "CECEHKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 815,
      "word": "CECEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 816,
      "word": "CECEÑAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 817,
      "word": "CECEPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 818,
      "word": "ČEČEPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 819,
      "word": "CE CEY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 820,
      "word": "CEEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 821,
      "word": "CEEPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 822,
      "word": "CEESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 823,
      "word": "CEESOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 824,
      "word": "CEETÎI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 825,
      "word": "CEHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 826,
      "word": "CEHCOWHAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 827,
      "word": "ČEHKUKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 828,
      "word": "ČEHÑAXI WIIRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 829,
      "word": "CEHSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 830,
      "word": "CEHSOMRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 831,
      "word": "CEHYAKATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 832,
      "word": "CEHYUMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 833,
      "word": "CEHYUYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 834,
      "word": "CEI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 835,
      "word": "CEIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 836,
      "word": "CEIXU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 837,
      "word": "CEKARKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 838,
      "word": "CEKARKAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 839,
      "word": "ČEKAYMORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 840,
      "word": "CEKYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 841,
      "word": "CEKYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 842,
      "word": "CEKYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 843,
      "word": "CEMARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 844,
      "word": "ČEMARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 845,
      "word": "ČEMARONWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 846,
      "word": "CEMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 847,
      "word": "ČEMKUTUÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 848,
      "word": "CEMYAPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 849,
      "word": "CEMYAWNOYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 850,
      "word": "CEÑASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 851,
      "word": "CEÑASÎYKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 852,
      "word": "CEÑEPAÑEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 853,
      "word": "ČEÑEPAÑEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 854,
      "word": "CENPOREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 855,
      "word": "ČENPOREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 856,
      "word": "CENPOSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 857,
      "word": "CENSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 858,
      "word": "CENTAPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 859,
      "word": "CENTAPOREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 860,
      "word": "CENTAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 861,
      "word": "CEPAHSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 862,
      "word": "CEPAMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 863,
      "word": "CEPATASMUYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 864,
      "word": "CEPEMAPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 865,
      "word": "CEPEMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 866,
      "word": "CEPERAYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 867,
      "word": "CEPERKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 868,
      "word": "CEPERKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 869,
      "word": "CEPETAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 870,
      "word": "ČEPETHÎKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 871,
      "word": "CEPÎRKAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 872,
      "word": "CEPOCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 873,
      "word": "CEPOHKAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 874,
      "word": "CEPOMOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 875,
      "word": "CEPORÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 876,
      "word": "CEREREPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 877,
      "word": "CERMAHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 878,
      "word": "CESEPORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 879,
      "word": "CESESMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 880,
      "word": "CESEYSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 881,
      "word": "CESKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 882,
      "word": "CETAHKAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 883,
      "word": "CETAHWOREFOSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 884,
      "word": "CETÎRAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 885,
      "word": "CETPOXEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 886,
      "word": "CETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 887,
      "word": "CETUHMEKAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 888,
      "word": "CETWAYIHKAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 889,
      "word": "CETWOSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 890,
      "word": "CEWANOMARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 891,
      "word": "CEWANOME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 892,
      "word": "CEWARARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 893,
      "word": "CEWAWKUNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 894,
      "word": "CEWAXKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 895,
      "word": "CEWEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 896,
      "word": "CEWNAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 897,
      "word": "CEWÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 898,
      "word": "ČEWÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 899,
      "word": "ČEWÑE MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 900,
      "word": "ČEWÑE SUNTI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 901,
      "word": "CEWOMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 902,
      "word": "CEWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 903,
      "word": "CEWYARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 904,
      "word": "CEWYOWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 905,
      "word": "CEXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 906,
      "word": "CEXEWEKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 907,
      "word": "CEXEWNUSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 908,
      "word": "CEYAMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 909,
      "word": "CEYEKYEW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 910,
      "word": "CEYPAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 911,
      "word": "CEYPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 912,
      "word": "ČEYPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 913,
      "word": "CHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 914,
      "word": "ČHO + ME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 915,
      "word": "CHOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 916,
      "word": "CICAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 917,
      "word": "ČIČAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 918,
      "word": "ČIČAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 919,
      "word": "CICAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 920,
      "word": "CICIPIYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 921,
      "word": "CICIŘMAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 922,
      "word": "CICKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 923,
      "word": "CICWIYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 924,
      "word": "ČIČWIYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 925,
      "word": "CICWIYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 926,
      "word": "CIHXICERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 927,
      "word": "CIHXIKYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 928,
      "word": "CIHXIKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 929,
      "word": "CIHXIMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 930,
      "word": "CIHXISO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 931,
      "word": "CIHYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 932,
      "word": "CIHYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 933,
      "word": "ČIHYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 934,
      "word": "CIIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 935,
      "word": "ČIIÑOYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 936,
      "word": "CIIPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 937,
      "word": "CIISO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 938,
      "word": "CIISOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 939,
      "word": "CIISUSU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 940,
      "word": "CIKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 941,
      "word": "CÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 942,
      "word": "CIKIÑIMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 943,
      "word": "CÎKÎNÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 944,
      "word": "CIKIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 945,
      "word": "ČIKIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 946,
      "word": "CÎKÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 947,
      "word": "CIMICISO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 948,
      "word": "CIMICISOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 949,
      "word": "CIMICIYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 950,
      "word": "CIMICIYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 951,
      "word": "CÎMÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 952,
      "word": "ČÎMÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 953,
      "word": "CIMISO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 954,
      "word": "CIMÑIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 955,
      "word": "ČIMÑIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 956,
      "word": "CIÑOY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 957,
      "word": "CIÑOYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 958,
      "word": "CIPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 959,
      "word": "CIPICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 960,
      "word": "CIRAK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 961,
      "word": "CIRICIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 962,
      "word": "CIRIHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 963,
      "word": "CIRIHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 964,
      "word": "CIRIKRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 965,
      "word": "CIRIPIPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 966,
      "word": "ČIŘIPIPIPOTOŘUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 967,
      "word": "ČIŘIPIPIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 968,
      "word": "CÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 969,
      "word": "CIRIXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 970,
      "word": "CIRKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 971,
      "word": "ČIRKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 972,
      "word": "CIŘMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 973,
      "word": "CIROW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 974,
      "word": "CIRPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 975,
      "word": "CIWYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 976,
      "word": "CÎWYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 977,
      "word": "ČIWYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 978,
      "word": "CIXKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 979,
      "word": "CIYAXKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 980,
      "word": "CMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 981,
      "word": "CMAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 982,
      "word": "CMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 983,
      "word": "CMOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 984,
      "word": "COIHCOI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 985,
      "word": "COKNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 986,
      "word": "COKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 987,
      "word": "COKOCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 988,
      "word": "COKOHCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 989,
      "word": "COKONA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 990,
      "word": "COKOPOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 991,
      "word": "COMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 992,
      "word": "COMOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 993,
      "word": "COMOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 994,
      "word": "COMOTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 995,
      "word": "ČOMOTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 996,
      "word": "COOWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 997,
      "word": "COPOYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 998,
      "word": "ČOPOYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 999,
      "word": "CORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1000,
      "word": "ČORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1001,
      "word": "COROPOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1002,
      "word": "COŘOŘMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1003,
      "word": "COŘOŘO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1004,
      "word": "CORORWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1005,
      "word": "COŘOŘWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1006,
      "word": "COW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1007,
      "word": "COWHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1008,
      "word": "CPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1009,
      "word": "CU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1010,
      "word": "CUCUK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1011,
      "word": "CUCUKMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1012,
      "word": "CUCURE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1013,
      "word": "ČUČURE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1014,
      "word": "CUCUREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1015,
      "word": "CUHCU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1016,
      "word": "CUHWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1017,
      "word": "CUKMANO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1018,
      "word": "CUKMAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1019,
      "word": "ČUKMAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1020,
      "word": "CUKUHCUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1021,
      "word": "CUKUMURURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1022,
      "word": "CUKUPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1023,
      "word": "CUKUYWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1024,
      "word": "CUMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1025,
      "word": "CUMURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1026,
      "word": "CURE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1027,
      "word": "CURUHTOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1028,
      "word": "CUTAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1029,
      "word": "CUUPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1030,
      "word": "ČUUPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1031,
      "word": "CUURE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1032,
      "word": "ČUURE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1033,
      "word": "CWAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1034,
      "word": "CWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1035,
      "word": "CWOTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1036,
      "word": "ECAHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1037,
      "word": "ECAKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1038,
      "word": "EČAKÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1039,
      "word": "ECANAMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1040,
      "word": "ECANAMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1041,
      "word": "ECARAKARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1042,
      "word": "ECE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1043,
      "word": "EČEČETOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1044,
      "word": "ECECOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1045,
      "word": "ECEHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1046,
      "word": "ECEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1047,
      "word": "ECENARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1048,
      "word": "ECEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1049,
      "word": "ECEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1050,
      "word": "ECHI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1051,
      "word": "EČHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1052,
      "word": "ECIHTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1053,
      "word": "ECIHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1054,
      "word": "ECIHXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1055,
      "word": "ECIM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1056,
      "word": "EC(I)PU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1057,
      "word": "ECIRIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1058,
      "word": "ECIRPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1059,
      "word": "ECITOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1060,
      "word": "ECIXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1061,
      "word": "ECMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1062,
      "word": "EČMAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1063,
      "word": "ECOCORONKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1064,
      "word": "ECORI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1065,
      "word": "EČORÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1066,
      "word": "EE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1067,
      "word": "EECO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1068,
      "word": "EECO PÓ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1069,
      "word": "EECO PONA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1070,
      "word": "EEI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1071,
      "word": "EEKI EEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1072,
      "word": "EEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1073,
      "word": "EEMIPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1074,
      "word": "EEMÎTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1075,
      "word": "EEMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1076,
      "word": "EEN EEPATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1077,
      "word": "EEPATAPORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1078,
      "word": "EEPATARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1079,
      "word": "EEPATARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1080,
      "word": "EEPOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1081,
      "word": "EEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1082,
      "word": "EEPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1083,
      "word": "EEPU YICIHTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1084,
      "word": "EERÎ EETA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1085,
      "word": "EETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1086,
      "word": "EEWINIKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1087,
      "word": "EEWOPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1088,
      "word": "EEXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1089,
      "word": "EHCAYAMAPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1090,
      "word": "EHCEMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1091,
      "word": "EHCEMACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1092,
      "word": "EHCEMAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1093,
      "word": "EHCEMAWRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1094,
      "word": "EHCEMNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1095,
      "word": "EHCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1096,
      "word": "EHČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1097,
      "word": "EHCIÑONKANÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1098,
      "word": "EHCI POKONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1099,
      "word": "EHCOKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1100,
      "word": "EHCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1101,
      "word": "EHCOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1102,
      "word": "EHCOPORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1103,
      "word": "EHCOYOPONKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1104,
      "word": "EHČOYOPONKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1105,
      "word": "EHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1106,
      "word": "EHKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1107,
      "word": "EHKUNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1108,
      "word": "EHKURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1109,
      "word": "EHMAMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1110,
      "word": "EHMAMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1111,
      "word": "EHÑA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1112,
      "word": "EHROKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1113,
      "word": "EHSAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1114,
      "word": "EHSAMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1115,
      "word": "EHTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1116,
      "word": "EHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1117,
      "word": "EHTURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1118,
      "word": "EHTURA KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1119,
      "word": "EHYAPAMNOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1120,
      "word": "EHYASMACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1121,
      "word": "EHYATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1122,
      "word": "EHYATKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1123,
      "word": "EHYATKAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1124,
      "word": "EHYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1125,
      "word": "EHYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1126,
      "word": "EHYUMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1127,
      "word": "EHYUNTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1128,
      "word": "EHYUNTAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1129,
      "word": "EIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1130,
      "word": "EIKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1131,
      "word": "EKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1132,
      "word": "EKAHRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1133,
      "word": "EKAHXIMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1134,
      "word": "EKAHXINKATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1135,
      "word": "EKAIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1136,
      "word": "EKAIMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1137,
      "word": "EKAIPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1138,
      "word": "EKAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1139,
      "word": "EKAMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1140,
      "word": "EKAMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1141,
      "word": "EKANÎPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1142,
      "word": "EKARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1143,
      "word": "EKARITO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1144,
      "word": "EKARITOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1145,
      "word": "EKARITOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1146,
      "word": "EKAŘKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1147,
      "word": "EKATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1148,
      "word": "EKATÎMÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1149,
      "word": "EKATÎMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1150,
      "word": "EKATÎNHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1151,
      "word": "EKATÎNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1152,
      "word": "EKATKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1153,
      "word": "EKAYIMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1154,
      "word": "EKAYIMTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1155,
      "word": "EKAYMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1156,
      "word": "EKAYMORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1157,
      "word": "EKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1158,
      "word": "EKETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1159,
      "word": "EKEXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1160,
      "word": "EKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1161,
      "word": "EKÎHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1162,
      "word": "EKIÑIMTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1163,
      "word": "EKIÑIMXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1164,
      "word": "EKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1165,
      "word": "EKMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1166,
      "word": "EKMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1167,
      "word": "EKNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1168,
      "word": "EKNARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1169,
      "word": "EKNARÎ PATAWNO WEWE TATIKROYIM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1170,
      "word": "EKNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1171,
      "word": "EKOMSÎNKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1172,
      "word": "EKOMSINKATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1173,
      "word": "EKONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1174,
      "word": "EKPOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1175,
      "word": "EKPOSÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1176,
      "word": "EKŘAMANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1177,
      "word": "EKREWEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1178,
      "word": "EKUHYATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1179,
      "word": "EKUM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1180,
      "word": "EKUMPARAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1181,
      "word": "EKUNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1182,
      "word": "EKUSU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1183,
      "word": "EMACAKAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1184,
      "word": "EMAHCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1185,
      "word": "EMAHČIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1186,
      "word": "EMAKPOPONKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1187,
      "word": "EMAKPO PON KACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1188,
      "word": "EMAÑIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1189,
      "word": "EMAPIPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1190,
      "word": "EMAPONA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1191,
      "word": "EMARAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1192,
      "word": "EMARARÎNMAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1193,
      "word": "EMASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1194,
      "word": "EMASÎSPONA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1195,
      "word": "EMASMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1196,
      "word": "EMAXIXITO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1197,
      "word": "EMČAPÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1198,
      "word": "EMCAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1199,
      "word": "EMCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1200,
      "word": "EMČINOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1201,
      "word": "EME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1202,
      "word": "EMEKNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1203,
      "word": "EMEKNAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1204,
      "word": "EMEKNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1205,
      "word": "EMEKNUM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1206,
      "word": "EMEKNUWARKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1207,
      "word": "EMEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1208,
      "word": "EMETANMEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1209,
      "word": "EMICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1210,
      "word": "EMICIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1211,
      "word": "EMICIRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1212,
      "word": "EMICITOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1213,
      "word": "EMICIXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1214,
      "word": "EMÎČKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1215,
      "word": "EMÎKNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1216,
      "word": "EMÎRÎXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1217,
      "word": "EMÎRPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1218,
      "word": "EMKNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1219,
      "word": "EMKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1220,
      "word": "EMKUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1221,
      "word": "EMOKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1222,
      "word": "EMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1223,
      "word": "EMSI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1224,
      "word": "EMSÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1225,
      "word": "EMTACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1226,
      "word": "EMTAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1227,
      "word": "EMTAKAIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1228,
      "word": "EMTARAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1229,
      "word": "EMTARAKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1230,
      "word": "EMTAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1231,
      "word": "EMTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1232,
      "word": "EMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1233,
      "word": "EMYACOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1234,
      "word": "EMYAPOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1235,
      "word": "EMYARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1236,
      "word": "EMYARKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1237,
      "word": "EMYATI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1238,
      "word": "EMYAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1239,
      "word": "EMYAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1240,
      "word": "EMYAWNOMNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1241,
      "word": "EN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1242,
      "word": "ENA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1243,
      "word": "ENATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1244,
      "word": "ENATÎTATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1245,
      "word": "ENATÎTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1246,
      "word": "ENATKATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1247,
      "word": "ENATKAXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1248,
      "word": "ENAYKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1249,
      "word": "ENCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1250,
      "word": "EÑEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1251,
      "word": "EÑEKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1252,
      "word": "EÑEKANO RIÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1253,
      "word": "EÑEMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1254,
      "word": "EÑEPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1255,
      "word": "EÑEPA ME ÑIIŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1256,
      "word": "EÑEPANÎMXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1257,
      "word": "EÑEPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1258,
      "word": "EÑEPEXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1259,
      "word": "EÑETI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1260,
      "word": "EÑETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1261,
      "word": "EÑEXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1262,
      "word": "ENHÎYAKAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1263,
      "word": "ENÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1264,
      "word": "ENICHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1265,
      "word": "ENÎHMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1266,
      "word": "ENÎHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1267,
      "word": "ENÎHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1268,
      "word": "ENÎHTOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1269,
      "word": "ENÎÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1270,
      "word": "ENÎÑENHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1271,
      "word": "ENÎRKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1272,
      "word": "ENÎXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1273,
      "word": "ENKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1274,
      "word": "ENKAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1275,
      "word": "ENKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1276,
      "word": "ENKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1277,
      "word": "ENKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1278,
      "word": "ENKOXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1279,
      "word": "ENKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1280,
      "word": "ENMAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1281,
      "word": "ENMAMNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1282,
      "word": "ENMAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1283,
      "word": "ENMARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1284,
      "word": "ENMARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1285,
      "word": "ENMARÎYAKRORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1286,
      "word": "ENMARÎYATÎXERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1287,
      "word": "ENMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1288,
      "word": "ENMAXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1289,
      "word": "ENMAYATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1290,
      "word": "ENMEKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1291,
      "word": "ENMEKÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1292,
      "word": "ENORI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1293,
      "word": "ENORINÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1294,
      "word": "ENORIRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1295,
      "word": "ENORITOPONHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1296,
      "word": "ENORIXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1297,
      "word": "ENPAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1298,
      "word": "ENPAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1299,
      "word": "ENPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1300,
      "word": "ENPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1301,
      "word": "ENPORI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1302,
      "word": "ENTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1303,
      "word": "ENTARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1304,
      "word": "ENTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1305,
      "word": "ENUHMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1306,
      "word": "EPAHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1307,
      "word": "EPAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1308,
      "word": "EPAMKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1309,
      "word": "EPAMORÎRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1310,
      "word": "EPAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1311,
      "word": "EPAMRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1312,
      "word": "EPANÎPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1313,
      "word": "EPANTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1314,
      "word": "EPATAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1315,
      "word": "EPATAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1316,
      "word": "EPATARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1317,
      "word": "EPEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1318,
      "word": "EPEMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1319,
      "word": "EPEMAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1320,
      "word": "EPEMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1321,
      "word": "EPEMRUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1322,
      "word": "EPEMRUTUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1323,
      "word": "EPEMRUTUN WEEWE POKO CEHSOMU NAATI TAWYOCI\nTATIHTAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1324,
      "word": "EPEMRUTUN WEEWE POKO CEHSOMU WEEWE\nKAWUCEHSOMU ECEPU KOMO CUUPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1325,
      "word": "EPEMRUTUN WEEWE POKO CEHSOMU WEEWE\nKAWUCEHSOMU NAATI ROOWO PORERONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1326,
      "word": "EPEMRUTUN WEEWE POKO CEHSOMU WEEWE\nKAWUCEHSOMU NAATI ROOWO PORERONO (ROPARE\nTATIHTAXMU)",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1327,
      "word": "EPEMRUTUN WEEWE POKO CEHSOMU WEEWE\nKAWUCEHSOMU NAATI ROPARERONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1328,
      "word": "EPEMRUTUN WEEWE POKO CEHSOMU WEEWE\nKAWUCEHSOMU WEEWE KAW TATIHTAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1329,
      "word": "EPEMRUTUN WEEWE POKO CEHSOMU WEEWE\nKAWUCEHSOMU XAARI YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1330,
      "word": "EPEMRUTUN WEEWE POKO CEHSOMU WEEWE\nKAWUCEHSOMU YEHKNARI\n",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1331,
      "word": "EPERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1332,
      "word": "EPEŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1333,
      "word": "EPERAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1334,
      "word": "EPEŘAWOKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1335,
      "word": "EPERAYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1336,
      "word": "EPERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1337,
      "word": "EPERÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1338,
      "word": "EPERÎRÎ YENMETOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1339,
      "word": "EPERMUTUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1340,
      "word": "EPETHÎMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1341,
      "word": "EPETHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1342,
      "word": "EPIPITKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1343,
      "word": "EPIRKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1344,
      "word": "EPÎRKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1345,
      "word": "EPIŘMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1346,
      "word": "EPITAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1347,
      "word": "EPIXIRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1348,
      "word": "EPIXIRORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1349,
      "word": "EPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1350,
      "word": "EPOHKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1351,
      "word": "EPOHKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1352,
      "word": "EPOHKAXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1353,
      "word": "EPOKARE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1354,
      "word": "EPONAMEŘE RE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1355,
      "word": "EPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1356,
      "word": "EPORENO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1357,
      "word": "EPORENOMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1358,
      "word": "EPORENOMANÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1359,
      "word": "EPORENONTOXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1360,
      "word": "EPORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1361,
      "word": "EPOYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1362,
      "word": "EPUMNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1363,
      "word": "EPUNWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1364,
      "word": "EPUNWEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1365,
      "word": "EPUPRIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1366,
      "word": "EPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1367,
      "word": "ERAHTÎMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1368,
      "word": "ERASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1369,
      "word": "ERASÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1370,
      "word": "ERASÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1371,
      "word": "ERASMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1372,
      "word": "ERASMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1373,
      "word": "ERASPEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1374,
      "word": "ERASPETO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1375,
      "word": "ERASPETOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1376,
      "word": "ERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1377,
      "word": "EREKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1378,
      "word": "EREKAME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1379,
      "word": "EREKAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1380,
      "word": "EREKANÎMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1381,
      "word": "EREKANMEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1382,
      "word": "EREKAYAKAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1383,
      "word": "EREKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1384,
      "word": "EREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1385,
      "word": "EREMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1386,
      "word": "EREMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1387,
      "word": "EREMANMEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1388,
      "word": "EREMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1389,
      "word": "EREMHOSI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1390,
      "word": "EREMKAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1391,
      "word": "EREMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1392,
      "word": "ERENAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1393,
      "word": "EREPIKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1394,
      "word": "EREPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1395,
      "word": "EREPOKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1396,
      "word": "EREPOKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1397,
      "word": "EREPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1398,
      "word": "EREPORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1399,
      "word": "ERERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1400,
      "word": "ERESI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1401,
      "word": "ERESPOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1402,
      "word": "ERETA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1403,
      "word": "EŘETAWANANYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1404,
      "word": "EREW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1405,
      "word": "EREWNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1406,
      "word": "EREWRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1407,
      "word": "EREWSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1408,
      "word": "EREWTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1409,
      "word": "EREXHU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1410,
      "word": "EREXKUMHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1411,
      "word": "EREXUK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1412,
      "word": "EREYECEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1413,
      "word": "ERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1414,
      "word": "ERÎHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1415,
      "word": "ERINATKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1416,
      "word": "ERÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1417,
      "word": "ERÎ YAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1418,
      "word": "ERKAŘWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1419,
      "word": "ERMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1420,
      "word": "EŘMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1421,
      "word": "ERMOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1422,
      "word": "ERMONOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1423,
      "word": "ERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1424,
      "word": "EROKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1425,
      "word": "EROMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1426,
      "word": "ERO MAHYAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1427,
      "word": "ERO MAKATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1428,
      "word": "ERORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1429,
      "word": "EROROMERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1430,
      "word": "ERO WA KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1431,
      "word": "EROWARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1432,
      "word": "ERO WARA NASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1433,
      "word": "EROWARA RORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1434,
      "word": "EROYANME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1435,
      "word": "ERO YAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1436,
      "word": "ERO YAWHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1437,
      "word": "EŘPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1438,
      "word": "EŘPOČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1439,
      "word": "ESAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1440,
      "word": "ESAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1441,
      "word": "ESAMATO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1442,
      "word": "ESAWNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1443,
      "word": "ESAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1444,
      "word": "ESEHSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1445,
      "word": "ESEHTÎNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1446,
      "word": "ESEMAÑIPÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1447,
      "word": "ESEMEŘWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1448,
      "word": "ESEMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1449,
      "word": "ESEMÎKNON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1450,
      "word": "ESEMOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1451,
      "word": "ESENEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1452,
      "word": "ESENEPANMEKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1453,
      "word": "ESENMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1454,
      "word": "ESEPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1455,
      "word": "ESEPATAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1456,
      "word": "ESEPOTPONA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1457,
      "word": "ESEREPOKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1458,
      "word": "ESERESMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1459,
      "word": "ESERESMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1460,
      "word": "ESERESMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1461,
      "word": "ESERESMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1462,
      "word": "ESERINATKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1463,
      "word": "ESESÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1464,
      "word": "ESEWAKOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1465,
      "word": "ESEWAKRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1466,
      "word": "ESEWRUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1467,
      "word": "ESEWYETKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1468,
      "word": "ESEYAMCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1469,
      "word": "ESEYAMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1470,
      "word": "ESEYAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1471,
      "word": "ESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1472,
      "word": "ESKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1473,
      "word": "ESKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1474,
      "word": "ESMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1475,
      "word": "ESOHSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1476,
      "word": "ESOHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1477,
      "word": "ESOKURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1478,
      "word": "ESONI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1479,
      "word": "ESU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1480,
      "word": "ESUNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1481,
      "word": "ETACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1482,
      "word": "ETAHKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1483,
      "word": "ETAHKAXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1484,
      "word": "ETAHSÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1485,
      "word": "ETAHSÎTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1486,
      "word": "ETAHWOREKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1487,
      "word": "ETAHWOREPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1488,
      "word": "ETAHWOREPORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1489,
      "word": "ETAHWOREPOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1490,
      "word": "ETAHWORESO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1491,
      "word": "ETAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1492,
      "word": "ETAKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1493,
      "word": "ETAKÎKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1494,
      "word": "ETAKPARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1495,
      "word": "ETAKPAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1496,
      "word": "ETAKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1497,
      "word": "ETAMERENAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1498,
      "word": "ETAMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1499,
      "word": "ETAMOKŘAMANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1500,
      "word": "ETAMTAPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1501,
      "word": "ETAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1502,
      "word": "ETAPACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1503,
      "word": "ETAPAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1504,
      "word": "ETAPIČKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1505,
      "word": "ETAPIČKATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1506,
      "word": "ETAPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1507,
      "word": "ETAPOYPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1508,
      "word": "ETARA POXARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1509,
      "word": "ETARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1510,
      "word": "ETAŘKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1511,
      "word": "ETAŘMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1512,
      "word": "ETAŘMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1513,
      "word": "ETÎMTAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1514,
      "word": "ETIŘAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1515,
      "word": "ETÎRAPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1516,
      "word": "ETÎTÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1517,
      "word": "ETÎXATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1518,
      "word": "ETÎXATPÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1519,
      "word": "ETÎXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1520,
      "word": "ETKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1521,
      "word": "ETOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1522,
      "word": "ETOWTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1523,
      "word": "ETOWURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1524,
      "word": "ETOWXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1525,
      "word": "ETPIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1526,
      "word": "ETPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1527,
      "word": "ETPOČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1528,
      "word": "ETPOKO NAXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1529,
      "word": "ETPONANMEÑE RE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1530,
      "word": "EW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1531,
      "word": "EWAHPEÑAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1532,
      "word": "EWAHRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1533,
      "word": "EWAHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1534,
      "word": "EWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1535,
      "word": "EWANKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1536,
      "word": "EWANOMACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1537,
      "word": "EWANOMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1538,
      "word": "EWANOMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1539,
      "word": "EWAPUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1540,
      "word": "EWAPURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1541,
      "word": "EWAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1542,
      "word": "EWAXIRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1543,
      "word": "EWCOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1544,
      "word": "EWCOKOCOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1545,
      "word": "EWČOKOČOKON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1546,
      "word": "EWEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1547,
      "word": "EWETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1548,
      "word": "EWETKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1549,
      "word": "EWEYPONKAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1550,
      "word": "EWKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1551,
      "word": "EWKAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1552,
      "word": "EWKANAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1553,
      "word": "EWKANOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1554,
      "word": "EWKARANPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1555,
      "word": "EWKOŘMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1556,
      "word": "EWKPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1557,
      "word": "EWKPOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1558,
      "word": "EWKRAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1559,
      "word": "EWKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1560,
      "word": "EWKUCANMEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1561,
      "word": "EWKUKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1562,
      "word": "EWKUKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1563,
      "word": "EWKUKMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1564,
      "word": "EWKUKMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1565,
      "word": "EWKUKMATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1566,
      "word": "EWKUNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1567,
      "word": "EWKURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1568,
      "word": "EWKUYMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1569,
      "word": "EWKWIYKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1570,
      "word": "EWNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1571,
      "word": "EWNACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1572,
      "word": "EWNA KPOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1573,
      "word": "EWNAPEÑAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1574,
      "word": "EWNAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1575,
      "word": "EWNAPOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1576,
      "word": "EWNAPOTOKON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1577,
      "word": "EWNAŘAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1578,
      "word": "EWNARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1579,
      "word": "EWNAXKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1580,
      "word": "EWNAXUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1581,
      "word": "EWNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1582,
      "word": "EWOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1583,
      "word": "EWOMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1584,
      "word": "EWOMNOPUXERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1585,
      "word": "EWOMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1586,
      "word": "EWOMTOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1587,
      "word": "EWOMTORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1588,
      "word": "EWOPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1589,
      "word": "EWOPONPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1590,
      "word": "EWPEÑAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1591,
      "word": "EWRAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1592,
      "word": "EWRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1593,
      "word": "EWREMETO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1594,
      "word": "EWRERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1595,
      "word": "EWRESAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1596,
      "word": "EWROROMUTWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1597,
      "word": "EWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1598,
      "word": "EWRUCHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1599,
      "word": "EWRUCPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1600,
      "word": "EWRU PIČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1601,
      "word": "EWRURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1602,
      "word": "EWRUTOPONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1603,
      "word": "EWRUYATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1604,
      "word": "EWSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1605,
      "word": "EWTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1606,
      "word": "EWTANÎRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1607,
      "word": "EWTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1608,
      "word": "EWTI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1609,
      "word": "EWTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1610,
      "word": "EWTOTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1611,
      "word": "EWTO YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1612,
      "word": "EWTOYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1613,
      "word": "EWTOYMO CI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1614,
      "word": "EWTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1615,
      "word": "EWU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1616,
      "word": "EWUHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1617,
      "word": "EWUHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1618,
      "word": "EWUHRENTORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1619,
      "word": "EWUHRENTOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1620,
      "word": "EWYAKNAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1621,
      "word": "EWYARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1622,
      "word": "EWYETAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1623,
      "word": "EWYOKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1624,
      "word": "EWYOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1625,
      "word": "EWYOMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1626,
      "word": "EWYOMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1627,
      "word": "EXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1628,
      "word": "EXEKMÎNPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1629,
      "word": "EXEKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1630,
      "word": "EXENAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1631,
      "word": "EXEPEYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1632,
      "word": "EXETORI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1633,
      "word": "EXEWARKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1634,
      "word": "EXEWNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1635,
      "word": "EXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1636,
      "word": "EXIHNAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1637,
      "word": "EXIHNÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1638,
      "word": "EXIRKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1639,
      "word": "EXISTIUKAA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1640,
      "word": "EXITAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1641,
      "word": "EXITAWSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1642,
      "word": "EYAMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1643,
      "word": "EYAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1644,
      "word": "EYAMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1645,
      "word": "EYATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1646,
      "word": "EYEHKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1647,
      "word": "EYEHKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1648,
      "word": "EYEHSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1649,
      "word": "EYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1650,
      "word": "EYEPURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1651,
      "word": "EYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1652,
      "word": "EYIHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1653,
      "word": "EYIHKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1654,
      "word": "EYÎHRA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1655,
      "word": "EYKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1656,
      "word": "EYKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1657,
      "word": "EYKAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1658,
      "word": "EYKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1659,
      "word": "EYSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1660,
      "word": "EYUHKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1661,
      "word": "EYUHTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1662,
      "word": "HA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1663,
      "word": "HAMHAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1664,
      "word": "HARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1665,
      "word": "HCAMHOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1666,
      "word": "HCAMNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1667,
      "word": "HCAWNUK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1668,
      "word": "HCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1669,
      "word": "HCÎPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1670,
      "word": "HCIRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1671,
      "word": "HKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1672,
      "word": "HKAÑAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1673,
      "word": "HKAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1674,
      "word": "HKATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1675,
      "word": "HKOŘOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1676,
      "word": "HKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1677,
      "word": "HMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1678,
      "word": "HNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1679,
      "word": "HNAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1680,
      "word": "HNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1681,
      "word": "HPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1682,
      "word": "HRAK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1683,
      "word": "HRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1684,
      "word": "HREKAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1685,
      "word": "HREPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1686,
      "word": "HRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1687,
      "word": "HROXOXO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1688,
      "word": "HRUNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1689,
      "word": "HSA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1690,
      "word": "HTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1691,
      "word": "HTAKMARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1692,
      "word": "HTAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1693,
      "word": "HTÎKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1694,
      "word": "HTÎNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1695,
      "word": "HTIPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1696,
      "word": "HTÎPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1697,
      "word": "HTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1698,
      "word": "HXIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1699,
      "word": "HYAPAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1700,
      "word": "HYNSIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1701,
      "word": "HYOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1702,
      "word": "IHSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1703,
      "word": "II",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1704,
      "word": "IIME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1705,
      "word": "IIMEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1706,
      "word": "IIMEN PÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1707,
      "word": "IIMERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1708,
      "word": "IIME RORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1709,
      "word": "IIMEXAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1710,
      "word": "IIMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1711,
      "word": "IINA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1712,
      "word": "IINA ČIRKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1713,
      "word": "IIÑOMNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1714,
      "word": "ÎÎPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1715,
      "word": "ÎÎPÎCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1716,
      "word": "ÎÎPÎYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1717,
      "word": "IIPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1718,
      "word": "IIPONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1719,
      "word": "IITO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1720,
      "word": "IITONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1721,
      "word": "IITONONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1722,
      "word": "IITORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1723,
      "word": "IIXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1724,
      "word": "IIXERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1725,
      "word": "IIXERA WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1726,
      "word": "IIXE WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1727,
      "word": "INARE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1728,
      "word": "ÎNHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1729,
      "word": "IPIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1730,
      "word": "IPIPITKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1731,
      "word": "IPONONHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1732,
      "word": "ÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1733,
      "word": "IŔO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1734,
      "word": "IŘO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1735,
      "word": "IROYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1736,
      "word": "IŘOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1737,
      "word": "ITOXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1738,
      "word": "ITOXARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1739,
      "word": "IXAMNÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1740,
      "word": "IYAMSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1741,
      "word": "IYOČHO YEWTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1742,
      "word": "IYOHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1743,
      "word": "IYOHYARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1744,
      "word": "IYOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1745,
      "word": "IYOMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1746,
      "word": "IYOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1747,
      "word": "IYOPORO MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1748,
      "word": "IYORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1749,
      "word": "IYOTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1750,
      "word": "IYOTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1751,
      "word": "KA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1752,
      "word": "KAAMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1753,
      "word": "KAAMO KUKNON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1754,
      "word": "KAAMORÎ KOMO POKO KEHCAMHOKACO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1755,
      "word": "KAAMORÎ POKO KEHCAMHOKACO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1756,
      "word": "KAAMO YEMIČITOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1757,
      "word": "KAAMO YEPATAKAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1758,
      "word": "KAAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1759,
      "word": "KAAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1760,
      "word": "KAAN MÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1761,
      "word": "KAAN YA TÎMSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1762,
      "word": "KAAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1763,
      "word": "KAAPU SMUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1764,
      "word": "KAAPUSMUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1765,
      "word": "KAARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1766,
      "word": "KAARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1767,
      "word": "KAAWAXIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1768,
      "word": "KACAMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1769,
      "word": "KACAMAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1770,
      "word": "KACE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1771,
      "word": "KACINASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1772,
      "word": "KACINÎMTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1773,
      "word": "KACINMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1774,
      "word": "KACIPARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1775,
      "word": "KAČIPARA YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1776,
      "word": "KACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1777,
      "word": "KACWORU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1778,
      "word": "KAHKAPUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1779,
      "word": "KAHÑERU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1780,
      "word": "KAHÑERU WOOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1781,
      "word": "KAHÑERU XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1782,
      "word": "KAHRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1783,
      "word": "KAHRUTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1784,
      "word": "KAHSÎ ENKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1785,
      "word": "KAHWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1786,
      "word": "KAHWOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1787,
      "word": "KAHWOKANMEXPOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1788,
      "word": "KAHWOKATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1789,
      "word": "KAHWOKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1790,
      "word": "KAHWOREÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1791,
      "word": "KAHWOTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1792,
      "word": "KAHWOTANMEXPOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1793,
      "word": "KAHWOTATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1794,
      "word": "KAHXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1795,
      "word": "KAKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1796,
      "word": "KAKNO KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1797,
      "word": "KAKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1798,
      "word": "KAKRONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1799,
      "word": "KAKRONO KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1800,
      "word": "KAKRONOMAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1801,
      "word": "KAKROSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1802,
      "word": "KAMAHXU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1803,
      "word": "KAMAHXUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1804,
      "word": "KAMAHXU ÑESUNUKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1805,
      "word": "KAMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1806,
      "word": "KAMARACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1807,
      "word": "KAMARAČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1808,
      "word": "KAMARAKATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1809,
      "word": "KAMAŘAŘIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1810,
      "word": "KAMARA YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1811,
      "word": "KAMAXAKARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1812,
      "word": "KAMERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1813,
      "word": "KAMERU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1814,
      "word": "KAMINA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1815,
      "word": "KAMISA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1816,
      "word": "KAMISACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1817,
      "word": "KAMISA KAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1818,
      "word": "KAMISAMNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1819,
      "word": "KAMISAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1820,
      "word": "KAMISAN KAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1821,
      "word": "KAMISAYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1822,
      "word": "KAMOKOWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1823,
      "word": "KAMONTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1824,
      "word": "KAMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1825,
      "word": "KAMOWRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1826,
      "word": "KAMOXOKWENTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1827,
      "word": "KAMOXOXON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1828,
      "word": "KAMOYARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1829,
      "word": "KAMOYEKNARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1830,
      "word": "KAMPEPERU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1831,
      "word": "KAMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1832,
      "word": "KAMUXPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1833,
      "word": "KAMUXPATHO YEKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1834,
      "word": "KAMUXPAYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1835,
      "word": "KAMUXPA YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1836,
      "word": "KAMUYWAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1837,
      "word": "KAMXUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1838,
      "word": "KANAHMUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1839,
      "word": "KANAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1840,
      "word": "KANAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1841,
      "word": "KANAWA MIČI WARAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1842,
      "word": "KANAWARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1843,
      "word": "KANAWATHO TO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1844,
      "word": "KANAYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1845,
      "word": "KANTOMAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1846,
      "word": "KANWEKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1847,
      "word": "KAPAŘUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1848,
      "word": "KAPEW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1849,
      "word": "KAPEYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1850,
      "word": "KAPIKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1851,
      "word": "KAPIKARA WOOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1852,
      "word": "KAPIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1853,
      "word": "KAPIKMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1854,
      "word": "KAPIKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1855,
      "word": "KAPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1856,
      "word": "KAPORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1857,
      "word": "KAPUHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1858,
      "word": "KAPUWINI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1859,
      "word": "KARAMAMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1860,
      "word": "KAŘAMTUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1861,
      "word": "KARAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1862,
      "word": "KARASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1863,
      "word": "KARITA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1864,
      "word": "KARITA ENKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1865,
      "word": "KARITA MEWRETOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1866,
      "word": "KAŘME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1867,
      "word": "KAŘPAMXAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1868,
      "word": "KAR̃PAMXAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1869,
      "word": "KAŘPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1870,
      "word": "KAŘPERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1871,
      "word": "KAŘUTUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1872,
      "word": "KAŘWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1873,
      "word": "KAS",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1874,
      "word": "KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1875,
      "word": "KATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1876,
      "word": "KATÎHCARAMAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1877,
      "word": "KATÎHPOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1878,
      "word": "KATÎHPOČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1879,
      "word": "KATÎHWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1880,
      "word": "KATÎHYAMCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1881,
      "word": "KATPAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1882,
      "word": "KATPANAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1883,
      "word": "KATPANAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1884,
      "word": "KATPAN PÓ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1885,
      "word": "KATPÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1886,
      "word": "KATUHKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1887,
      "word": "KATUPICIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1888,
      "word": "KATURIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1889,
      "word": "KATUŘIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1890,
      "word": "KATWARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1891,
      "word": "KAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1892,
      "word": "KAWAHMAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1893,
      "word": "KAWAHMANYYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1894,
      "word": "KAWAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1895,
      "word": "KAWAIPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1896,
      "word": "KAWARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1897,
      "word": "KAWARU KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1898,
      "word": "KAWARU WOOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1899,
      "word": "KAWARU XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1900,
      "word": "KAWAU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1901,
      "word": "KAWAU AMNONOXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1902,
      "word": "KAWAWANO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1903,
      "word": "KAWAWAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1904,
      "word": "KAWAWYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1905,
      "word": "KAWAXIY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1906,
      "word": "KAWAXIYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1907,
      "word": "KAWAXIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1908,
      "word": "KAWAYAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1909,
      "word": "KAWAYKAWAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1910,
      "word": "KAW CEPETAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1911,
      "word": "KAW ČEPETAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1912,
      "word": "KAWERESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1913,
      "word": "KAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1914,
      "word": "KAWNO PÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1915,
      "word": "KAWNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1916,
      "word": "KAWRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1917,
      "word": "KAWRUTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1918,
      "word": "KAWU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1919,
      "word": "KAWURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1920,
      "word": "KAXARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1921,
      "word": "KAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1922,
      "word": "KAXIRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1923,
      "word": "KAXMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1924,
      "word": "KAXMI YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1925,
      "word": "KAYARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1926,
      "word": "KAYARITOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1927,
      "word": "KAYARITOMO PURANTAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1928,
      "word": "KAYATÎTKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1929,
      "word": "KAYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1930,
      "word": "KAYINASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1931,
      "word": "KAYIÑEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1932,
      "word": "KAYINÎMSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1933,
      "word": "KAYINMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1934,
      "word": "KAYKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1935,
      "word": "KAYKAHA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1936,
      "word": "KAYKATKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1937,
      "word": "KAYKOKORONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1938,
      "word": "KAYKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1939,
      "word": "KAYKUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1940,
      "word": "KAYRIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1941,
      "word": "KE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1942,
      "word": "KECEKERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1943,
      "word": "KECEKEŘEYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1944,
      "word": "KEČEÑAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1945,
      "word": "KEHCAMHOKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1946,
      "word": "KEHCAMHOKACHO TOOTO PUM POKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1947,
      "word": "KEHČAMHOKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1948,
      "word": "KEHČEMAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1949,
      "word": "KEHRERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1950,
      "word": "KEHYUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1951,
      "word": "KEKAŘKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1952,
      "word": "KEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1953,
      "word": "KEMAHCIWU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1954,
      "word": "KEMAHCIYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1955,
      "word": "KEMAHCIYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1956,
      "word": "KEMEKNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1957,
      "word": "KEMEKNUMCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1958,
      "word": "KEMÎKNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1959,
      "word": "KEMÎKNOYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1960,
      "word": "KEMÎKNOYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1961,
      "word": "KEMÎRPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1962,
      "word": "KEMTAKAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1963,
      "word": "KEMYARÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1964,
      "word": "KEMYAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1965,
      "word": "KEMYAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1966,
      "word": "KEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1967,
      "word": "KENE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1968,
      "word": "KEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1969,
      "word": "KENEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1970,
      "word": "KENPAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1971,
      "word": "KENPESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1972,
      "word": "KENPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1973,
      "word": "KENPOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1974,
      "word": "KENTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1975,
      "word": "KENTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1976,
      "word": "KENWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1977,
      "word": "KEPAMTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1978,
      "word": "KEPANÎÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1979,
      "word": "KEPANÎÑERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1980,
      "word": "KEPANÎYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1981,
      "word": "KEPANTOME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1982,
      "word": "KEPATAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1983,
      "word": "KEPETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1984,
      "word": "KERAHTÎM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1985,
      "word": "KERASWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1986,
      "word": "KEREKANASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1987,
      "word": "KEREPAMNOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1988,
      "word": "KERETAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1989,
      "word": "KEREWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1990,
      "word": "KERMOMÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1991,
      "word": "KESEHTÎNOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1992,
      "word": "KESEMETANMEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1993,
      "word": "KESEMETANMEKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1994,
      "word": "KESENMETOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1995,
      "word": "KESENTACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1996,
      "word": "KESENTACHOMÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1997,
      "word": "KESEREPOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1998,
      "word": "KESEREPOKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 1999,
      "word": "KESESÎTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2000,
      "word": "KESETAKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2001,
      "word": "KESEYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2002,
      "word": "KESEYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2003,
      "word": "KESKAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2004,
      "word": "KESMUNKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2005,
      "word": "KESMUREW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2006,
      "word": "KETAPESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2007,
      "word": "KETARASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2008,
      "word": "KETARMESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2009,
      "word": "KETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2010,
      "word": "KETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2011,
      "word": "KEWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2012,
      "word": "KEWANOMAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2013,
      "word": "KEWANOMEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2014,
      "word": "KEWANOMESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2015,
      "word": "KEWANOMESÎRORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2016,
      "word": "KEWEKUKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2017,
      "word": "KEWEYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2018,
      "word": "KEWKARANPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2019,
      "word": "KEWKPENASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2020,
      "word": "KEWKUKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2021,
      "word": "KEWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2022,
      "word": "KEWRU.",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2023,
      "word": "KEWRUCPEW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2024,
      "word": "KEWRUTPESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2025,
      "word": "KEXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2026,
      "word": "KEYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2027,
      "word": "KEYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2028,
      "word": "KEYEHYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2029,
      "word": "KEYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2030,
      "word": "KEYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2031,
      "word": "KEYKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2032,
      "word": "KEYKURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2033,
      "word": "KEYÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2034,
      "word": "KEYUKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2035,
      "word": "KICA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2036,
      "word": "KÎČEMARON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2037,
      "word": "KICICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2038,
      "word": "KICICIME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2039,
      "word": "KICICINTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2040,
      "word": "KICICITHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2041,
      "word": "KICICME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2042,
      "word": "KIČIČME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2043,
      "word": "KIČIČME EXIHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2044,
      "word": "KIČIČME WEESXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2045,
      "word": "KÎČOKONASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2046,
      "word": "KÎHREPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2047,
      "word": "KÎHTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2048,
      "word": "KÎHTARÎ WOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2049,
      "word": "KÎHTÎPÎRÎ POKO KEHCAMHOKATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2050,
      "word": "KÎÎMÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2051,
      "word": "KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2052,
      "word": "KÎÎRÎ MREN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2053,
      "word": "KIIRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2054,
      "word": "KIIWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2055,
      "word": "KÎÎWÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2056,
      "word": "KÎÎYÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2057,
      "word": "KÎK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2058,
      "word": "KIKWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2059,
      "word": "KÎMTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2060,
      "word": "KIPIHXIRON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2061,
      "word": "KIPIKIPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2062,
      "word": "KIPIXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2063,
      "word": "KIPIXI MEKMATKÎR",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2064,
      "word": "KIPIXIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2065,
      "word": "KIRICICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2066,
      "word": "KÎRICICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2067,
      "word": "KÎRIČIČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2068,
      "word": "KIRIKIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2069,
      "word": "KÎRÎKÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2070,
      "word": "KIRIMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2071,
      "word": "KÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2072,
      "word": "KÎRÎRÎNKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2073,
      "word": "KÎRÎSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2074,
      "word": "KIŘWAÑHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2075,
      "word": "KIŘWANTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2076,
      "word": "KÎTATANASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2077,
      "word": "KÎTÎTMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2078,
      "word": "KÎTÎTPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2079,
      "word": "KÎTMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2080,
      "word": "KÎTMO CI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2081,
      "word": "KÎTMO PORIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2082,
      "word": "KIWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2083,
      "word": "KÎWYAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2084,
      "word": "KMACIKMACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2085,
      "word": "KMAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2086,
      "word": "KMAKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2087,
      "word": "KMAMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2088,
      "word": "KMAMYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2089,
      "word": "KMARAWETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2090,
      "word": "KMASMAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2091,
      "word": "KMERETKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2092,
      "word": "KMEWREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2093,
      "word": "KMÎRÎKMÎR",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2094,
      "word": "KMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2095,
      "word": "KMOK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2096,
      "word": "KMOKMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2097,
      "word": "KMOKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2098,
      "word": "KMOKYASÎ WA HA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2099,
      "word": "KMORÎK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2100,
      "word": "KMOWAÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2101,
      "word": "KMUHU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2102,
      "word": "KNAHMESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2103,
      "word": "KNAHRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2104,
      "word": "KNAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2105,
      "word": "KNAMARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2106,
      "word": "KNARARAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2107,
      "word": "KNATÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2108,
      "word": "KNAWARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2109,
      "word": "KNEREIKNEREI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2110,
      "word": "KNERERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2111,
      "word": "KNOI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2112,
      "word": "KNOKOKNOKOPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2113,
      "word": "KNOKOKNOKOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2114,
      "word": "KNOMÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2115,
      "word": "KNOMYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2116,
      "word": "KNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2117,
      "word": "KNOROW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2118,
      "word": "KNOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2119,
      "word": "KNOWKNOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2120,
      "word": "KNOWKRAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2121,
      "word": "KNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2122,
      "word": "KNUK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2123,
      "word": "KNURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2124,
      "word": "KO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2125,
      "word": "KOIKOY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2126,
      "word": "KOK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2127,
      "word": "KOKMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2128,
      "word": "KOKMAMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2129,
      "word": "KOKMAMYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2130,
      "word": "KOKOK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2131,
      "word": "KOKOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2132,
      "word": "KOKOKO KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2133,
      "word": "KOKONATÊ CEXEWEKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2134,
      "word": "KOKONATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2135,
      "word": "KOKONATÎ CEXEWEKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2136,
      "word": "KOKONATÎ TÎSWAYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2137,
      "word": "KOKOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2138,
      "word": "KOKOÑI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2139,
      "word": "KOKOÑORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2140,
      "word": "KOKRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2141,
      "word": "KOMKOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2142,
      "word": "KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2143,
      "word": "KOMOMOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2144,
      "word": "KOMSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2145,
      "word": "KOMSÎNASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2146,
      "word": "KOÑESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2147,
      "word": "KONOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2148,
      "word": "KOOKOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2149,
      "word": "KOORU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2150,
      "word": "KOOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2151,
      "word": "KOOSOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2152,
      "word": "KOOSO KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2153,
      "word": "KOOSO WETHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2154,
      "word": "KOOSO XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2155,
      "word": "KOOSOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2156,
      "word": "KOOTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2157,
      "word": "KOPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2158,
      "word": "KOPOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2159,
      "word": "KOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2160,
      "word": "KORÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2161,
      "word": "KORKORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2162,
      "word": "KOŘMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2163,
      "word": "KOROKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2164,
      "word": "KOROKORAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2165,
      "word": "KOŘOPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2166,
      "word": "KORORO NÎÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2167,
      "word": "KOŘPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2168,
      "word": "KOSOKMURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2169,
      "word": "KOSOKMURU PO ČEREMAČERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2170,
      "word": "KOSOPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2171,
      "word": "KOTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2172,
      "word": "KOTÎSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2173,
      "word": "KOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2174,
      "word": "KOTOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2175,
      "word": "KOTOKEMUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2176,
      "word": "KOTOKEMYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2177,
      "word": "KOTOWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2178,
      "word": "KOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2179,
      "word": "KOWUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2180,
      "word": "KOYOKOYO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2181,
      "word": "KPAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2182,
      "word": "KPAKAPARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2183,
      "word": "KPANAPIČKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2184,
      "word": "KPANARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2185,
      "word": "KPANATANMETOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2186,
      "word": "KPARAKPARAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2187,
      "word": "KPATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2188,
      "word": "KPAXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2189,
      "word": "KPERAMKWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2190,
      "word": "KPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2191,
      "word": "KRAA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2192,
      "word": "KRAHKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2193,
      "word": "KRAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2194,
      "word": "KRAÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2195,
      "word": "KŘAMANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2196,
      "word": "KRAMOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2197,
      "word": "KRAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2198,
      "word": "KRAPARAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2199,
      "word": "KRARASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2200,
      "word": "KRATÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2201,
      "word": "KRAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2202,
      "word": "KRAWOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2203,
      "word": "KREI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2204,
      "word": "KREKREKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2205,
      "word": "KRERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2206,
      "word": "KRERU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2207,
      "word": "KREWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2208,
      "word": "KREWETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2209,
      "word": "KRICE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2210,
      "word": "KRIKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2211,
      "word": "KRÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2212,
      "word": "KRIKIKRIKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2213,
      "word": "KRÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2214,
      "word": "KRÎPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2215,
      "word": "KRÎRÎNKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2216,
      "word": "KROKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2217,
      "word": "KROW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2218,
      "word": "KŘOWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2219,
      "word": "KROWON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2220,
      "word": "KRUK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2221,
      "word": "KRUMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2222,
      "word": "KUCPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2223,
      "word": "KUČPI KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2224,
      "word": "KUHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2225,
      "word": "KUHRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2226,
      "word": "KUHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2227,
      "word": "KUHYATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2228,
      "word": "KUKAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2229,
      "word": "KUKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2230,
      "word": "KUKNOMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2231,
      "word": "KUKNONKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2232,
      "word": "KUKUXWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2233,
      "word": "KUKUYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2234,
      "word": "KUKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2235,
      "word": "KUM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2236,
      "word": "KUMASA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2237,
      "word": "KUMHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2238,
      "word": "KUMIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2239,
      "word": "KUMIXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2240,
      "word": "KUMKUMHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2241,
      "word": "KUMNATO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2242,
      "word": "KUMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2243,
      "word": "KUMWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2244,
      "word": "KUM YEPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2245,
      "word": "KUÑIMIXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2246,
      "word": "KUNUŘIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2247,
      "word": "KUÑURU.",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2248,
      "word": "KUNWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2249,
      "word": "KUPAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2250,
      "word": "KUPANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2251,
      "word": "KUPRURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2252,
      "word": "KUPUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2253,
      "word": "KUPUPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2254,
      "word": "KURARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2255,
      "word": "KURAYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2256,
      "word": "KUREI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2257,
      "word": "KURIPARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2258,
      "word": "KURIXIXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2259,
      "word": "KURKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2260,
      "word": "KURPEWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2261,
      "word": "KURUM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2262,
      "word": "KURUMPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2263,
      "word": "KURUMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2264,
      "word": "KURUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2265,
      "word": "KURUNANPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2266,
      "word": "KURUNAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2267,
      "word": "KURUNI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2268,
      "word": "KUŘUNIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2269,
      "word": "KURUNKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2270,
      "word": "KURURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2271,
      "word": "KURURURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2272,
      "word": "KURUTMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2273,
      "word": "KURUTWITWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2274,
      "word": "KURUXMAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2275,
      "word": "KURWARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2276,
      "word": "KUSAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2277,
      "word": "KUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2278,
      "word": "KUTUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2279,
      "word": "KUU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2280,
      "word": "KUUMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2281,
      "word": "KUUM WARAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2282,
      "word": "KUUPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2283,
      "word": "KUUPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2284,
      "word": "KUURI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2285,
      "word": "KUUSA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2286,
      "word": "KUUTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2287,
      "word": "KUUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2288,
      "word": "KUUXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2289,
      "word": "KUUXI KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2290,
      "word": "KUUXI WOOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2291,
      "word": "KUUXI XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2292,
      "word": "KUUYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2293,
      "word": "KUWAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2294,
      "word": "KUWIKUWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2295,
      "word": "KUWUÑWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2296,
      "word": "KUXPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2297,
      "word": "KUXPAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2298,
      "word": "KUXUKWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2299,
      "word": "KUXUXWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2300,
      "word": "KUXXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2301,
      "word": "KUY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2302,
      "word": "KUYANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2303,
      "word": "KUYURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2304,
      "word": "KUYUWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2305,
      "word": "KUYWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2306,
      "word": "KWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2307,
      "word": "KWAANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2308,
      "word": "KWACAKWACAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2309,
      "word": "KWACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2310,
      "word": "KWAČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2311,
      "word": "KWACIMAKOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2312,
      "word": "KWAČIMAKOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2313,
      "word": "KWACINAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2314,
      "word": "KWAHSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2315,
      "word": "KWAHXARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2316,
      "word": "KWAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2317,
      "word": "KWAIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2318,
      "word": "KWAKWARARE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2319,
      "word": "KWAKWARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2320,
      "word": "KWAKWARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2321,
      "word": "KWANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2322,
      "word": "KWANAIMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2323,
      "word": "KWANAMARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2324,
      "word": "KWANAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2325,
      "word": "KWARAKWARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2326,
      "word": "KWARAWANTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2327,
      "word": "KWARAWANTAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2328,
      "word": "KWAWNO MICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2329,
      "word": "KWAXARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2330,
      "word": "KWAYARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2331,
      "word": "KWAYARPETARMEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2332,
      "word": "KWCIMAKOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2333,
      "word": "KWEEYO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2334,
      "word": "KWEIKWEI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2335,
      "word": "KWEPIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2336,
      "word": "KWEREKWERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2337,
      "word": "KWEREKWERE KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2338,
      "word": "KWERU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2339,
      "word": "KWEŘUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2340,
      "word": "KWETÎRÎ.",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2341,
      "word": "KWEXIXPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2342,
      "word": "KWEYKWEY KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2343,
      "word": "KWICIKWICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2344,
      "word": "KWÎKWÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2345,
      "word": "KWORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2346,
      "word": "KWOROIMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2347,
      "word": "KWOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2348,
      "word": "KWOTOMATKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2349,
      "word": "KYAKYAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2350,
      "word": "KYAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2351,
      "word": "KYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2352,
      "word": "MA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2353,
      "word": "MAAÑI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2354,
      "word": "MAARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2355,
      "word": "MAAŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2356,
      "word": "MAAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2357,
      "word": "MAAWA YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2358,
      "word": "MAAXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2359,
      "word": "MACAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2360,
      "word": "MACANARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2361,
      "word": "MACAPÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2362,
      "word": "MACE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2363,
      "word": "MACEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2364,
      "word": "MACICIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2365,
      "word": "MACIKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2366,
      "word": "MACIKOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2367,
      "word": "MACOHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2368,
      "word": "MACUCU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2369,
      "word": "MAHCA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2370,
      "word": "MAHCARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2371,
      "word": "MAHČARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2372,
      "word": "MAHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2373,
      "word": "MAHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2374,
      "word": "MAHNAKURI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2375,
      "word": "MAHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2376,
      "word": "MAHRANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2377,
      "word": "MAHRIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2378,
      "word": "MAHTÎKÎTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2379,
      "word": "MAHTÎKÎTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2380,
      "word": "MAHTÎWÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2381,
      "word": "MAHTOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2382,
      "word": "MAHWOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2383,
      "word": "MAHWOKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2384,
      "word": "MAHWOKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2385,
      "word": "MAHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2386,
      "word": "MAHYAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2387,
      "word": "MAHYANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2388,
      "word": "MAHYATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2389,
      "word": "MAHYAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2390,
      "word": "MAHYAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2391,
      "word": "MAKAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2392,
      "word": "MAKANARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2393,
      "word": "MAKAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2394,
      "word": "MAKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2395,
      "word": "MAKAŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2396,
      "word": "MAKAŘAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2397,
      "word": "MAKATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2398,
      "word": "MAKATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2399,
      "word": "MAKAWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2400,
      "word": "MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2401,
      "word": "MAKÎ HAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2402,
      "word": "MAKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2403,
      "word": "MAKOŘMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2404,
      "word": "MAKOŘMAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2405,
      "word": "MAKOWRIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2406,
      "word": "MAKPOPONK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2407,
      "word": "MAKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2408,
      "word": "MAKUKUWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2409,
      "word": "MAKUMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2410,
      "word": "MAKUYWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2411,
      "word": "MAKWACIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2412,
      "word": "MAKWANAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2413,
      "word": "MAKWAWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2414,
      "word": "MAKWAWŘUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2415,
      "word": "MAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2416,
      "word": "MAMAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2417,
      "word": "MAMAKAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2418,
      "word": "MAMAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2419,
      "word": "MAMAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2420,
      "word": "MAMHOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2421,
      "word": "MAMKURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2422,
      "word": "MAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2423,
      "word": "MAMRIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2424,
      "word": "MAMTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2425,
      "word": "MAMTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2426,
      "word": "MAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2427,
      "word": "MANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2428,
      "word": "MANAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2429,
      "word": "MANAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2430,
      "word": "MANARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2431,
      "word": "MANATÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2432,
      "word": "MAÑAWÑA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2433,
      "word": "MAÑI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2434,
      "word": "MAÑIÑKAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2435,
      "word": "MANIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2436,
      "word": "MANKANO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2437,
      "word": "MANMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2438,
      "word": "MAÑPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2439,
      "word": "MAPARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2440,
      "word": "MAPATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2441,
      "word": "MAPATAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2442,
      "word": "MAPEPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2443,
      "word": "MAPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2444,
      "word": "MAPIHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2445,
      "word": "MAPIKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2446,
      "word": "MAPIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2447,
      "word": "MAPIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2448,
      "word": "MAPIRWOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2449,
      "word": "MAPITA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2450,
      "word": "MAPITAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2451,
      "word": "MAPITU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2452,
      "word": "MAPIYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2453,
      "word": "MAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2454,
      "word": "MAPOHXANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2455,
      "word": "MAPOMRIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2456,
      "word": "MAPOTAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2457,
      "word": "MAPOYANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2458,
      "word": "MAPOYANAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2459,
      "word": "MAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2460,
      "word": "MAPUERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2461,
      "word": "MAŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2462,
      "word": "MARAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2463,
      "word": "MARAKASÎSI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2464,
      "word": "MARAKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2465,
      "word": "MARARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2466,
      "word": "MARARÎMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2467,
      "word": "MARARIYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2468,
      "word": "MARATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2469,
      "word": "MARAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2470,
      "word": "MAŘAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2471,
      "word": "MAŘAWAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2472,
      "word": "MARAWICA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2473,
      "word": "MARHA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2474,
      "word": "MARIYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2475,
      "word": "MARKUKUWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2476,
      "word": "MARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2477,
      "word": "MAŘPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2478,
      "word": "MARWAWANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2479,
      "word": "MARWAWANAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2480,
      "word": "MASAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2481,
      "word": "MASAKÎIMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2482,
      "word": "MASKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2483,
      "word": "MASMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2484,
      "word": "MASMACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2485,
      "word": "MASMETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2486,
      "word": "MASMETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2487,
      "word": "MATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2488,
      "word": "MATARAWRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2489,
      "word": "MATAWARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2490,
      "word": "MATAXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2491,
      "word": "MATÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2492,
      "word": "MATÎTKAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2493,
      "word": "MATÎWÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2494,
      "word": "MATÎWÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2495,
      "word": "MATKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2496,
      "word": "MATKÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2497,
      "word": "MATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2498,
      "word": "MATUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2499,
      "word": "MAWANARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2500,
      "word": "MAWIKATHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2501,
      "word": "MAWÎRKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2502,
      "word": "MAWKÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2503,
      "word": "MAWRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2504,
      "word": "MAWRÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2505,
      "word": "MAWRÎ YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2506,
      "word": "MAWTOHRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2507,
      "word": "MAWYUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2508,
      "word": "MAXAIMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2509,
      "word": "MAXAWARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2510,
      "word": "MAXETO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2511,
      "word": "MAXEWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2512,
      "word": "MAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2513,
      "word": "MAXIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2514,
      "word": "MAXIXIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2515,
      "word": "MAXKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2516,
      "word": "MAXKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2517,
      "word": "MAXKUNK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2518,
      "word": "MAXKUNTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2519,
      "word": "MAXMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2520,
      "word": "MAXMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2521,
      "word": "MAXWEREÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2522,
      "word": "MAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2523,
      "word": "MAYAKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2524,
      "word": "MAYAWARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2525,
      "word": "MAYAWAWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2526,
      "word": "MAYEWNARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2527,
      "word": "MAYO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2528,
      "word": "MAYWEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2529,
      "word": "ME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2530,
      "word": "MECAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2531,
      "word": "MECEHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2532,
      "word": "MECEWU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2533,
      "word": "MECIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2534,
      "word": "MEEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2535,
      "word": "MEEKÎ HÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2536,
      "word": "MEEKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2537,
      "word": "MEEKURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2538,
      "word": "MEEPICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2539,
      "word": "MEHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2540,
      "word": "MEHCOW HA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2541,
      "word": "MEHMERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2542,
      "word": "MEHXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2543,
      "word": "MEHXANÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2544,
      "word": "MEHXANÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2545,
      "word": "MEHXARPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2546,
      "word": "MEKAHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2547,
      "word": "MEKYAŘANYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2548,
      "word": "MEMEHSE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2549,
      "word": "MEÑEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2550,
      "word": "MEÑEKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2551,
      "word": "MEÑEKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2552,
      "word": "MEÑEKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2553,
      "word": "MEÑEKETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2554,
      "word": "MENKARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2555,
      "word": "MENTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2556,
      "word": "MERESÎIMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2557,
      "word": "MERETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2558,
      "word": "MERETÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2559,
      "word": "MERKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2560,
      "word": "MEŘPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2561,
      "word": "MEŘPONO PÎN TOOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2562,
      "word": "MERPORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2563,
      "word": "MEŘPORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2564,
      "word": "MERURKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2565,
      "word": "MERURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2566,
      "word": "METATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2567,
      "word": "METATA YEČEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2568,
      "word": "METU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2569,
      "word": "MEWKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2570,
      "word": "MEWRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2571,
      "word": "MEWREKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2572,
      "word": "MEWXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2573,
      "word": "MEXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2574,
      "word": "MEYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2575,
      "word": "MEYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2576,
      "word": "MEYEHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2577,
      "word": "MEYEHRA TOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2578,
      "word": "MEYEHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2579,
      "word": "MEYEÑHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2580,
      "word": "MEYENOPÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2581,
      "word": "MEYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2582,
      "word": "MEYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2583,
      "word": "MHETHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2584,
      "word": "MHÎTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2585,
      "word": "MHOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2586,
      "word": "MHONOI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2587,
      "word": "MI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2588,
      "word": "MÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2589,
      "word": "MÎCETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2590,
      "word": "MICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2591,
      "word": "MIHCIW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2592,
      "word": "MÎHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2593,
      "word": "MÎHTÎPÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2594,
      "word": "MIHXIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2595,
      "word": "MIHXIKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2596,
      "word": "MÎÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2597,
      "word": "MÎÎCE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2598,
      "word": "MÎÎMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2599,
      "word": "MÎÎMOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2600,
      "word": "MÎÎMO POČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2601,
      "word": "MÎÎMOYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2602,
      "word": "MÎÎNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2603,
      "word": "MIIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2604,
      "word": "MÎÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2605,
      "word": "MÎÎSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2606,
      "word": "MÎÎYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2607,
      "word": "MÎK HA MEHXAN PO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2608,
      "word": "MÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2609,
      "word": "MÎKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2610,
      "word": "MÎKYAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2611,
      "word": "MÎMOHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2612,
      "word": "MÎMOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2613,
      "word": "MÎMOKYATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2614,
      "word": "MÎMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2615,
      "word": "MÎMYATKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2616,
      "word": "MÎMYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2617,
      "word": "MÎNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2618,
      "word": "MIÑIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2619,
      "word": "MIÑIŘMOMOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2620,
      "word": "MÎNOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2621,
      "word": "MÎNOMCE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2622,
      "word": "MÎNOMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2623,
      "word": "MÎNOMYATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2624,
      "word": "MÎNPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2625,
      "word": "MÎNPON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2626,
      "word": "MÎNTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2627,
      "word": "MÎRÎKÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2628,
      "word": "MIŘIKIXIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2629,
      "word": "MÎRÎWÎTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2630,
      "word": "MÎRONSE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2631,
      "word": "MÎT",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2632,
      "word": "MÎTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2633,
      "word": "MIXWOME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2634,
      "word": "MIYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2635,
      "word": "MÎYAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2636,
      "word": "MKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2637,
      "word": "MKAHSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2638,
      "word": "MKAKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2639,
      "word": "MKAPICHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2640,
      "word": "MNARÎHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2641,
      "word": "MOHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2642,
      "word": "MOHRAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2643,
      "word": "MOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2644,
      "word": "MOKO HARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2645,
      "word": "MOKRAWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2646,
      "word": "MOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2647,
      "word": "MOMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2648,
      "word": "MOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2649,
      "word": "MOMOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2650,
      "word": "MOOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2651,
      "word": "MOOPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2652,
      "word": "MOORU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2653,
      "word": "MOOXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2654,
      "word": "MOPEIMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2655,
      "word": "MOREYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2656,
      "word": "MOŘKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2657,
      "word": "MOŔOKWEYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2658,
      "word": "MOŘOKWEYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2659,
      "word": "MORUHRAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2660,
      "word": "MORURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2661,
      "word": "MOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2662,
      "word": "MOSU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2663,
      "word": "MOTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2664,
      "word": "MOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2665,
      "word": "MOWNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2666,
      "word": "MOWU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2667,
      "word": "MOXAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2668,
      "word": "MOXAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2669,
      "word": "MOXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2670,
      "word": "MOYOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2671,
      "word": "MOYOSKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2672,
      "word": "MRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2673,
      "word": "MREN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2674,
      "word": "MRERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2675,
      "word": "MREWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2676,
      "word": "MSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2677,
      "word": "MTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2678,
      "word": "MTACARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2679,
      "word": "MTAKMAKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2680,
      "word": "MTAKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2681,
      "word": "MTAKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2682,
      "word": "MTAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2683,
      "word": "MTAWAYMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2684,
      "word": "MTAYAKÎTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2685,
      "word": "MTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2686,
      "word": "MU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2687,
      "word": "MUKUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2688,
      "word": "MUMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2689,
      "word": "MUNUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2690,
      "word": "MURIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2691,
      "word": "MURPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2692,
      "word": "MURUXAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2693,
      "word": "MUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2694,
      "word": "MUUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2695,
      "word": "MUUWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2696,
      "word": "MUUXU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2697,
      "word": "MUYWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2698,
      "word": "MYAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2699,
      "word": "NA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2700,
      "word": "NAAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2701,
      "word": "NAAKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2702,
      "word": "NAAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2703,
      "word": "NAAME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2704,
      "word": "NAAPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2705,
      "word": "NAAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2706,
      "word": "NAARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2707,
      "word": "NAATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2708,
      "word": "NAATÎ CEKYEKYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2709,
      "word": "NAATI ČEWUKŘEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2710,
      "word": "NAATI CEYAMSON ROOWO CHEKA NAATI TATIHTAXMU ROOWO\nCHEI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2711,
      "word": "NAATI CEYAMSON ROOWO CHEKA NAATI TUMUNTAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2712,
      "word": "NAATI CEYAMSON ROOWO CHEKA NAATI WARAI\nTUMUNTAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2713,
      "word": "NAATI CEYAMSON ROOWO CHEKA NAATI WARAI\nTUMUNTAXMU NAATI COW WARAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2714,
      "word": "NAATI CEYAMSON ROOWO CHEKA NAATI WARAI\nTUMUNTAXMU NAATI ROOWO PORENO TATIHTAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2715,
      "word": "NAATI CEYAMSON ROOWO CHEKA NAATI\nWARAITUMUNTAXMU NAATI TUMUNTAXMU TAMNONESO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2716,
      "word": "NAATI CEYPU CEKNAKE TATIHTAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2717,
      "word": "NAATI WEEWE WMICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2718,
      "word": "NAATI YEEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2719,
      "word": "NAATI YEPETACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2720,
      "word": "NAATI YEPETACHO WEEWE MICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2721,
      "word": "NAATI YIMICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2722,
      "word": "NAATI YIMIČIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2723,
      "word": "NAAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2724,
      "word": "NACE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2725,
      "word": "NACINA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2726,
      "word": "NACINATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2727,
      "word": "NACINÎMCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2728,
      "word": "NACINMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2729,
      "word": "NACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2730,
      "word": "NACPOKYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2731,
      "word": "NACPOKYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2732,
      "word": "NAHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2733,
      "word": "NAHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2734,
      "word": "NAHKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2735,
      "word": "NAHKAMEXPETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2736,
      "word": "NAHKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2737,
      "word": "NAHKETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2738,
      "word": "NAHRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2739,
      "word": "NAHSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2740,
      "word": "NAHSÎYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2741,
      "word": "NAHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2742,
      "word": "NAHYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2743,
      "word": "NAKÑIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2744,
      "word": "NAKÑIYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2745,
      "word": "NAKÑIYATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2746,
      "word": "NAKRONOMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2747,
      "word": "NAKRONOMAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2748,
      "word": "NAKRONOME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2749,
      "word": "NAKRONOMEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2750,
      "word": "NAKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2751,
      "word": "NAKWATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2752,
      "word": "NAMEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2753,
      "word": "NAMEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2754,
      "word": "NAMEKYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2755,
      "word": "NAMEKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2756,
      "word": "NAMENA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2757,
      "word": "NAMETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2758,
      "word": "NAMKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2759,
      "word": "NAMOTOYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2760,
      "word": "NAMOWETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2761,
      "word": "NAMOWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2762,
      "word": "NAMOWOCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2763,
      "word": "NAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2764,
      "word": "NANÎMCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2765,
      "word": "NANÎMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2766,
      "word": "NANÎMYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2767,
      "word": "NANÎMYATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2768,
      "word": "NANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2769,
      "word": "NANMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2770,
      "word": "ÑAPAMCE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2771,
      "word": "NAPIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2772,
      "word": "NAPIKYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2773,
      "word": "NAPIKYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2774,
      "word": "NAPIKYATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2775,
      "word": "NAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2776,
      "word": "NARATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2777,
      "word": "NASÎNASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2778,
      "word": "NASÎSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2779,
      "word": "NATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2780,
      "word": "NATI KOMOMICIN PARI KOMO MICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2781,
      "word": "NATI KOMO MICIN ROOWO CEWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2782,
      "word": "NAUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2783,
      "word": "NAWSÎNASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2784,
      "word": "ÑECAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2785,
      "word": "ÑECAKYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2786,
      "word": "ÑECAKYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2787,
      "word": "ÑECANAME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2788,
      "word": "ÑEEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2789,
      "word": "NEENEYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2790,
      "word": "ÑEEXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2791,
      "word": "ÑEHCAMHOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2792,
      "word": "ÑEHCAMHOKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2793,
      "word": "ÑEHCAMHOKEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2794,
      "word": "ÑEHCAMNOCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2795,
      "word": "ÑEHCAMNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2796,
      "word": "ÑEHCAMNOYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2797,
      "word": "ÑEHCEMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2798,
      "word": "ÑEHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2799,
      "word": "ÑEHCOWPE KRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2800,
      "word": "ÑEHMAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2801,
      "word": "ÑEKAMTÎKA HÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2802,
      "word": "ÑEKAMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2803,
      "word": "ÑEKAMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2804,
      "word": "ÑEKARKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2805,
      "word": "ÑEKARKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2806,
      "word": "ÑEKARKEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2807,
      "word": "ÑEKARKETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2808,
      "word": "ÑEKAYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2809,
      "word": "ÑEKPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2810,
      "word": "ÑEKPOY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2811,
      "word": "ÑEKYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2812,
      "word": "ÑEKYATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2813,
      "word": "ÑEMAHCICOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2814,
      "word": "ÑEMAHČIČOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2815,
      "word": "ÑEMAHCIW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2816,
      "word": "ÑEMAHCIYATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2817,
      "word": "ÑEMARAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2818,
      "word": "ÑEMASÎNTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2819,
      "word": "ÑEMASÎREW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2820,
      "word": "ÑEMASMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2821,
      "word": "ÑENANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2822,
      "word": "ÑENANKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2823,
      "word": "ÑENATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2824,
      "word": "ÑEÑEPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2825,
      "word": "ÑEÑEPEW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2826,
      "word": "ÑENORASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2827,
      "word": "ÑENORAXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2828,
      "word": "ÑENORICOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2829,
      "word": "ÑENORIW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2830,
      "word": "ÑENWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2831,
      "word": "ÑEPAHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2832,
      "word": "ÑEPAMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2833,
      "word": "ÑEPAMYATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2834,
      "word": "ÑEPAMYATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2835,
      "word": "ÑEPANÎYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2836,
      "word": "ÑEPANÎYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2837,
      "word": "ÑEPANPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2838,
      "word": "ÑEPAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2839,
      "word": "ÑEPARAMATÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2840,
      "word": "ÑEPATAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2841,
      "word": "ÑEPATAKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2842,
      "word": "ÑEPATAKETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2843,
      "word": "ÑEPEMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2844,
      "word": "ÑEPEMA AHNORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2845,
      "word": "ÑEPEMATÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2846,
      "word": "ÑEPEME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2847,
      "word": "ÑEPERAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2848,
      "word": "ÑEPERAMATÎKAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2849,
      "word": "ÑEPERAMAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2850,
      "word": "ÑEPERANTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2851,
      "word": "ÑEPÎRKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2852,
      "word": "ÑEPORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2853,
      "word": "ÑEPOTUTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2854,
      "word": "ÑERAHTÎM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2855,
      "word": "ÑERASMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2856,
      "word": "ÑERASWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2857,
      "word": "ÑERASWAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2858,
      "word": "ÑERASWATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2859,
      "word": "ÑERASWATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2860,
      "word": "ÑEREWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2861,
      "word": "ÑEREWAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2862,
      "word": "ÑEREWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2863,
      "word": "ÑESAMACEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2864,
      "word": "ÑESAMAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2865,
      "word": "ÑESAMATO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2866,
      "word": "ÑESAYANCE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2867,
      "word": "ÑESAYANKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2868,
      "word": "ÑESAYANKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2869,
      "word": "ÑESAYANKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2870,
      "word": "ÑESAYANKETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2871,
      "word": "ÑESAYANTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2872,
      "word": "ÑESEHCEMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2873,
      "word": "ÑESEHCEME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2874,
      "word": "ÑESEMAÑICHOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2875,
      "word": "ÑESEMAÑIYATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2876,
      "word": "ÑESEMAÑPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2877,
      "word": "ÑESEMERWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2878,
      "word": "ÑESEMETANMEKYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2879,
      "word": "ÑESENČEXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2880,
      "word": "ÑESEÑEPANMECOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2881,
      "word": "ÑESEÑEPANMEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2882,
      "word": "ÑESENKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2883,
      "word": "ÑESENKAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2884,
      "word": "ÑESENKETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2885,
      "word": "ÑESENMEKYAXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2886,
      "word": "ÑESENPONKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2887,
      "word": "ÑESENTÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2888,
      "word": "ÑESENTÎKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2889,
      "word": "ÑESEPEME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2890,
      "word": "ÑESEPERANTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2891,
      "word": "ÑESEPORAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2892,
      "word": "ÑESEPORATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2893,
      "word": "ÑESEPORU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2894,
      "word": "ÑESEREPOKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2895,
      "word": "ÑESEREPOKETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2896,
      "word": "ÑESEWSU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2897,
      "word": "ÑESEWSUYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2898,
      "word": "ÑESEYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2899,
      "word": "ÑESEYAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2900,
      "word": "ÑESEYAMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2901,
      "word": "ÑESEYAMYATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2902,
      "word": "ÑESEYATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2903,
      "word": "ÑESEYKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2904,
      "word": "ÑESOHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2905,
      "word": "ÑESOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2906,
      "word": "ÑESOKYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2907,
      "word": "ÑESOKYATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2908,
      "word": "ÑESONMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2909,
      "word": "ÑETAKNAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2910,
      "word": "ÑETAKNAMAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2911,
      "word": "ÑETAKNAME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2912,
      "word": "ÑETAKNAMEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2913,
      "word": "ÑETAME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2914,
      "word": "ÑETAMEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2915,
      "word": "ÑETAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2916,
      "word": "ÑETAPACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2917,
      "word": "ÑETAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2918,
      "word": "ÑETARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2919,
      "word": "ÑETARMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2920,
      "word": "ÑETARMACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2921,
      "word": "ÑETARMESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2922,
      "word": "ÑETARMETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2923,
      "word": "ÑETAXIKWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2924,
      "word": "ÑETÎRAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2925,
      "word": "ÑETÎRAMÃ HARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2926,
      "word": "ÑETÎRAMETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2927,
      "word": "ÑETUKMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2928,
      "word": "ÑETUKMAMYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2929,
      "word": "ÑETUKMAMYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2930,
      "word": "ÑEWANOMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2931,
      "word": "ÑEWANOMACE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2932,
      "word": "ÑEWANOMAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2933,
      "word": "ÑEWANOME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2934,
      "word": "ÑEWANOMETKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2935,
      "word": "ÑEWANOMETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2936,
      "word": "ÑEWČOKOČOKONA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2937,
      "word": "ÑEWOMCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2938,
      "word": "ÑEWOMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2939,
      "word": "ÑEWOMYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2940,
      "word": "ÑEWOMYATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2941,
      "word": "ÑEWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2942,
      "word": "ÑEXAMRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2943,
      "word": "ÑEYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2944,
      "word": "ÑEYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2945,
      "word": "ÑEYAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2946,
      "word": "ÑEYAMCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2947,
      "word": "ÑEYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2948,
      "word": "ÑHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2949,
      "word": "ÑHESEHCEMETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2950,
      "word": "ÑHE TAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2951,
      "word": "NHNK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2952,
      "word": "ÑICIHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2953,
      "word": "ÑIČIHYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2954,
      "word": "ÑICIPINWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2955,
      "word": "ÑICIPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2956,
      "word": "ÑICWINTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2957,
      "word": "ÑICWINWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2958,
      "word": "NÎHČESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2959,
      "word": "ÑIHCINTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2960,
      "word": "ÑIHCINWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2961,
      "word": "ÑIHCIRIW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2962,
      "word": "ÑIHCIW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2963,
      "word": "ÑIHCIW HÁ?",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2964,
      "word": "ÑIHCIYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2965,
      "word": "ÑIHCIYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2966,
      "word": "NÎHPOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2967,
      "word": "NÎHPOKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2968,
      "word": "NÎHPOKEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2969,
      "word": "NÎHPOKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2970,
      "word": "NIIKITHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2971,
      "word": "ÑIIPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2972,
      "word": "ÑIKIÑIM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2973,
      "word": "ÑIKIÑIMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2974,
      "word": "ÑIKITHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2975,
      "word": "NÎKMORWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2976,
      "word": "NÎKROKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2977,
      "word": "NÎMTAWAKRONWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2978,
      "word": "NÎMTAWAYMAMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2979,
      "word": "ÑIPITA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2980,
      "word": "ÑIPITACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2981,
      "word": "ÑIPIWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2982,
      "word": "ÑIRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2983,
      "word": "NÎRAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2984,
      "word": "NÎRAKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2985,
      "word": "NÎRAKEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2986,
      "word": "ÑIRAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2987,
      "word": "NÎRAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2988,
      "word": "NÎRAPEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2989,
      "word": "ÑÎRAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2990,
      "word": "NÎRAPOY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2991,
      "word": "ÑIRATKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2992,
      "word": "ÑIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2993,
      "word": "NÎRWONASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2994,
      "word": "NÎWÎRÎMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2995,
      "word": "NKM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2996,
      "word": "NOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2997,
      "word": "NOCWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2998,
      "word": "NOCWAKOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 2999,
      "word": "NOHČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3000,
      "word": "NOKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3001,
      "word": "ÑOKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3002,
      "word": "NOMKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3003,
      "word": "NOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3004,
      "word": "NOÑETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3005,
      "word": "NONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3006,
      "word": "NOONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3007,
      "word": "ÑOOÑO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3008,
      "word": "NORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3009,
      "word": "NORO ENTAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3010,
      "word": "NORO RMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3011,
      "word": "NORO WENARI ETOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3012,
      "word": "NORO YAHSÎSO ETOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3013,
      "word": "NORO YON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3014,
      "word": "NOŘWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3015,
      "word": "NORWA THO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3016,
      "word": "NUCUTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3017,
      "word": "NUCUWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3018,
      "word": "NUPUPUREW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3019,
      "word": "NUPURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3020,
      "word": "NUPURAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3021,
      "word": "NUPURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3022,
      "word": "NUPURUKWASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3023,
      "word": "ÑURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3024,
      "word": "NUUÑI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3025,
      "word": "ƝEPORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3026,
      "word": "O",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3027,
      "word": "OCACAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3028,
      "word": "OCAMKÎNON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3029,
      "word": "OCANAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3030,
      "word": "OCEMARON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3031,
      "word": "OCIPIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3032,
      "word": "OCORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3033,
      "word": "OČORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3034,
      "word": "OCORONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3035,
      "word": "OCORORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3036,
      "word": "OČOWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3037,
      "word": "OCURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3038,
      "word": "OHČÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3039,
      "word": "OHPOČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3040,
      "word": "OHRAKNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3041,
      "word": "OHREPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3042,
      "word": "OHRORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3043,
      "word": "OHROXOXON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3044,
      "word": "OHTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3045,
      "word": "OHTAYARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3046,
      "word": "OHTÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3047,
      "word": "OHYAPAMTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3048,
      "word": "OHYAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3049,
      "word": "OKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3050,
      "word": "OKAAMON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3051,
      "word": "OKAMAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3052,
      "word": "OKANAPAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3053,
      "word": "OKANAWARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3054,
      "word": "OKAYARITOMON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3055,
      "word": "OKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3056,
      "word": "OKNO MÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3057,
      "word": "OKOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3058,
      "word": "OKOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3059,
      "word": "OKOPUCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3060,
      "word": "OKOPUTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3061,
      "word": "OKOPUTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3062,
      "word": "OKOPU YAHRUTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3063,
      "word": "OKOPU YEKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3064,
      "word": "OKOŘOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3065,
      "word": "OKOYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3066,
      "word": "OKOYICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3067,
      "word": "OKOYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3068,
      "word": "OKRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3069,
      "word": "OKRE RO MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3070,
      "word": "OKRE THOYME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3071,
      "word": "OKREXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3072,
      "word": "OKURUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3073,
      "word": "OKUYWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3074,
      "word": "OKWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3075,
      "word": "OKYO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3076,
      "word": "OMARARÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3077,
      "word": "OMARIYAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3078,
      "word": "OMAYWEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3079,
      "word": "OMHAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3080,
      "word": "OMHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3081,
      "word": "OMÎTWONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3082,
      "word": "OMKARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3083,
      "word": "OMOTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3084,
      "word": "OMRERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3085,
      "word": "OMTAPOTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3086,
      "word": "OMTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3087,
      "word": "OMTARÎ PIČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3088,
      "word": "OMUMURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3089,
      "word": "OMXÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3090,
      "word": "ONAHRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3091,
      "word": "ONAHRUNKATHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3092,
      "word": "ONAHRU THO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3093,
      "word": "ONAMARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3094,
      "word": "ONAMCIKATHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3095,
      "word": "ONAÑIKÎTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3096,
      "word": "ONAPUTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3097,
      "word": "OÑENÎTHOPÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3098,
      "word": "ONI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3099,
      "word": "ONÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3100,
      "word": "ONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3101,
      "word": "ONOKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3102,
      "word": "ONOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3103,
      "word": "ONOMTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3104,
      "word": "ONOMTOYMOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3105,
      "word": "ONOWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3106,
      "word": "OÑURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3107,
      "word": "OONA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3108,
      "word": "OONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3109,
      "word": "OOPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3110,
      "word": "OOPICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3111,
      "word": "OOPICINHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3112,
      "word": "OORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3113,
      "word": "OORU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3114,
      "word": "OOTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3115,
      "word": "OOTÎ YANÎMÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3116,
      "word": "OOWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3117,
      "word": "OOXATÎ PÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3118,
      "word": "OOXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3119,
      "word": "OPAMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3120,
      "word": "OPANARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3121,
      "word": "OPANATANMEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3122,
      "word": "OPARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3123,
      "word": "OPAŘKAKAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3124,
      "word": "OPEŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3125,
      "word": "OPETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3126,
      "word": "OPICIRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3127,
      "word": "OPÎMÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3128,
      "word": "OPOCON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3129,
      "word": "OPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3130,
      "word": "OPOÑURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3131,
      "word": "OPOYENO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3132,
      "word": "OPOYENORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3133,
      "word": "OPOYERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3134,
      "word": "OPOYINO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3135,
      "word": "ORAHNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3136,
      "word": "ORAMHAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3137,
      "word": "ORANCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3138,
      "word": "ORANCI KAWAWANO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3139,
      "word": "ORISIYMOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3140,
      "word": "ORKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3141,
      "word": "OROMAMÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3142,
      "word": "OROMAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3143,
      "word": "OROPOTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3144,
      "word": "OROSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3145,
      "word": "OROSI CEXEWEKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3146,
      "word": "OROSI YMO YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3147,
      "word": "OROTAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3148,
      "word": "OROTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3149,
      "word": "OROTORARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3150,
      "word": "OROTO RMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3151,
      "word": "OROTO RO MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3152,
      "word": "OSKÎSKÎMESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3153,
      "word": "OSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3154,
      "word": "OSOHKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3155,
      "word": "OSOHTOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3156,
      "word": "OSOKMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3157,
      "word": "OSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3158,
      "word": "OSOMTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3159,
      "word": "OSOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3160,
      "word": "OSORWAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3161,
      "word": "OSORWAW RO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3162,
      "word": "OSOSWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3163,
      "word": "OSOTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3164,
      "word": "OSOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3165,
      "word": "OTAMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3166,
      "word": "OTI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3167,
      "word": "OTOWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3168,
      "word": "OTPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3169,
      "word": "OU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3170,
      "word": "OVELHA (FILHOTE)",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3171,
      "word": "OWAKOWAK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3172,
      "word": "OW AKRONOMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3173,
      "word": "OWARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3174,
      "word": "OWARAWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3175,
      "word": "OWARAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3176,
      "word": "OWARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3177,
      "word": "OWAYAHRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3178,
      "word": "OWAYAMAKASÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3179,
      "word": "OWAYAMNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3180,
      "word": "OWEHTORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3181,
      "word": "OWENATHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3182,
      "word": "OWETHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3183,
      "word": "OWEWETKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3184,
      "word": "OWHOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3185,
      "word": "OWÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3186,
      "word": "OWOKRU XE WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3187,
      "word": "OWOSOTO WENWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3188,
      "word": "OWOXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3189,
      "word": "OWYAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3190,
      "word": "OWYANÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3191,
      "word": "OWYAN THO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3192,
      "word": "OW YUKURUNPEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3193,
      "word": "OXATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3194,
      "word": "OYAKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3195,
      "word": "OYAKNONHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3196,
      "word": "OYAKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3197,
      "word": "OYAKRONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3198,
      "word": "OYAKRORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3199,
      "word": "OYAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3200,
      "word": "OYAMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3201,
      "word": "OYAMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3202,
      "word": "OYAMORÎ YEMHÎTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3203,
      "word": "OYAMOXOXON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3204,
      "word": "OYAMOYARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3205,
      "word": "OYAMOYEKNARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3206,
      "word": "OYAMOYERETARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3207,
      "word": "OYANAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3208,
      "word": "OYANAN KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3209,
      "word": "OYANTON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3210,
      "word": "OYAPEPEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3211,
      "word": "OYAPORESÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3212,
      "word": "OYATON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3213,
      "word": "OYAWCIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3214,
      "word": "OYEKATKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3215,
      "word": "OYEMEKNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3216,
      "word": "OYEMSÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3217,
      "word": "OYEPATAKEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3218,
      "word": "OYEPEKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3219,
      "word": "OYERERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3220,
      "word": "OYETAPIČKATAMČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3221,
      "word": "OYEWAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3222,
      "word": "OYEWKPOČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3223,
      "word": "OYEWNARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3224,
      "word": "OYEWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3225,
      "word": "OYEXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3226,
      "word": "OYEYATARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3227,
      "word": "OYOČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3228,
      "word": "OYOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3229,
      "word": "OYOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3230,
      "word": "OYORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3231,
      "word": "OYORÎ PIČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3232,
      "word": "OYOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3233,
      "word": "OYOSIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3234,
      "word": "OYOSOKMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3235,
      "word": "OYOSOTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3236,
      "word": "OYOTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3237,
      "word": "PAACIVA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3238,
      "word": "PAAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3239,
      "word": "PAAKA KÎÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3240,
      "word": "PAAKA PIČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3241,
      "word": "PAAKA WOOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3242,
      "word": "PAAKA XÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3243,
      "word": "PAAKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3244,
      "word": "PAAKUCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3245,
      "word": "PAAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3246,
      "word": "PAAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3247,
      "word": "PAARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3248,
      "word": "PAARI CUNACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3249,
      "word": "PAARI KWEYO KARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3250,
      "word": "PAARI MARAHCICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3251,
      "word": "PAARI TUMUTWEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3252,
      "word": "PAARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3253,
      "word": "PAAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3254,
      "word": "PAAYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3255,
      "word": "PACIYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3256,
      "word": "PAHKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3257,
      "word": "PAHNOKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3258,
      "word": "PAHXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3259,
      "word": "PAHXANTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3260,
      "word": "PAHXARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3261,
      "word": "PAHXAXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3262,
      "word": "PAHXAXARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3263,
      "word": "PAHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3264,
      "word": "PAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3265,
      "word": "PAKAKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3266,
      "word": "PAKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3267,
      "word": "PAKRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3268,
      "word": "PAKŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3269,
      "word": "PAKŘAKŘAPANYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3270,
      "word": "PAKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3271,
      "word": "PAMAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3272,
      "word": "PAMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3273,
      "word": "PANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3274,
      "word": "PANACAKAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3275,
      "word": "PANACAŘKAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3276,
      "word": "PANAHCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3277,
      "word": "PANAHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3278,
      "word": "PANAHNONTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3279,
      "word": "PANAHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3280,
      "word": "PANAHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3281,
      "word": "PANAKAŘMIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3282,
      "word": "PANAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3283,
      "word": "PANAMACKOŘPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3284,
      "word": "PANAPANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3285,
      "word": "PANAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3286,
      "word": "PANAPEÑAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3287,
      "word": "PANAPICKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3288,
      "word": "PANAPOROKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3289,
      "word": "PANARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3290,
      "word": "PANATANMEKNO RITOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3291,
      "word": "PANATARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3292,
      "word": "PANATORI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3293,
      "word": "PANATOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3294,
      "word": "PANAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3295,
      "word": "PANAXERERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3296,
      "word": "PANAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3297,
      "word": "PANAYKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3298,
      "word": "PAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3299,
      "word": "PAPAHCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3300,
      "word": "PAPAK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3301,
      "word": "PAPAKYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3302,
      "word": "PAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3303,
      "word": "PARAKWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3304,
      "word": "PARANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3305,
      "word": "PARANAKARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3306,
      "word": "PARANCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3307,
      "word": "PARANČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3308,
      "word": "PARANCI TÎSWAYEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3309,
      "word": "PAŘAŘAMUTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3310,
      "word": "PARARE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3311,
      "word": "PARATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3312,
      "word": "PARATA WARAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3313,
      "word": "PARAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3314,
      "word": "PARAWAKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3315,
      "word": "PARAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3316,
      "word": "PARAXKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3317,
      "word": "PARAXKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3318,
      "word": "PARETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3319,
      "word": "PARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3320,
      "word": "PAŘKAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3321,
      "word": "PARRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3322,
      "word": "PARRI CUNACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3323,
      "word": "PARRI TUMUIWEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3324,
      "word": "PARURMEN̂EKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3325,
      "word": "PASAHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3326,
      "word": "PASARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3327,
      "word": "PATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3328,
      "word": "PATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3329,
      "word": "PATIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3330,
      "word": "PAWANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3331,
      "word": "PAWKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3332,
      "word": "PAWXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3333,
      "word": "PAWXIMAKAWANYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3334,
      "word": "PAWXIYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3335,
      "word": "PAXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3336,
      "word": "PAXIXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3337,
      "word": "PAXKACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3338,
      "word": "PAXKI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3339,
      "word": "PAXKIPITHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3340,
      "word": "PAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3341,
      "word": "PAYAHEUCURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3342,
      "word": "PAYANTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3343,
      "word": "PAYAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3344,
      "word": "PAYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3345,
      "word": "PE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3346,
      "word": "PEE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3347,
      "word": "PEECA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3348,
      "word": "PEEHU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3349,
      "word": "PEEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3350,
      "word": "PEEMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3351,
      "word": "PEEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3352,
      "word": "PEEU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3353,
      "word": "PEHWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3354,
      "word": "PEIPEI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3355,
      "word": "PEIPEYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3356,
      "word": "PEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3357,
      "word": "PEÑEPÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3358,
      "word": "PENÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3359,
      "word": "PENI YAWYOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3360,
      "word": "PEPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3361,
      "word": "PEPE KAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3362,
      "word": "PEPESMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3363,
      "word": "PEPEYURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3364,
      "word": "PERAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3365,
      "word": "PERAMKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3366,
      "word": "PERAMUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3367,
      "word": "PERAMUKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3368,
      "word": "PEŘAWOKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3369,
      "word": "PERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3370,
      "word": "PEREHXAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3371,
      "word": "PEREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3372,
      "word": "PEREMKIRIKIRIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3373,
      "word": "PEREMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3374,
      "word": "PERENASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3375,
      "word": "PEREPERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3376,
      "word": "PERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3377,
      "word": "PESMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3378,
      "word": "PETA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3379,
      "word": "PETAKMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3380,
      "word": "PETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3381,
      "word": "PÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3382,
      "word": "PIČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3383,
      "word": "PÎHPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3384,
      "word": "PÎÎMÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3385,
      "word": "PIÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3386,
      "word": "PIIRI AWOMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3387,
      "word": "PÎKRÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3388,
      "word": "PÎMÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3389,
      "word": "PÎMÎKRAS",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3390,
      "word": "PÎMÎMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3391,
      "word": "PÎMÎSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3392,
      "word": "PIMIXKAMČIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3393,
      "word": "PIMIXKAMCIYEPY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3394,
      "word": "PÎMTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3395,
      "word": "PÎNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3396,
      "word": "PÎNÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3397,
      "word": "PÎPÎTHÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3398,
      "word": "PÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3399,
      "word": "PÎRÎKÎSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3400,
      "word": "PÎRÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3401,
      "word": "PÎTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3402,
      "word": "PÎTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3403,
      "word": "PÎTÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3404,
      "word": "PÎTÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3405,
      "word": "PÎTKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3406,
      "word": "PIXKARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3407,
      "word": "PIXKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3408,
      "word": "PIXOU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3409,
      "word": "POHCIW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3410,
      "word": "POHČIW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3411,
      "word": "POHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3412,
      "word": "POKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3413,
      "word": "POKONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3414,
      "word": "POKUMNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3415,
      "word": "POMOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3416,
      "word": "PONAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3417,
      "word": "PONARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3418,
      "word": "POÑKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3419,
      "word": "PONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3420,
      "word": "PONOMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3421,
      "word": "PONONTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3422,
      "word": "POÑWETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3423,
      "word": "POOME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3424,
      "word": "POOMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3425,
      "word": "POONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3426,
      "word": "POONOTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3427,
      "word": "POONO YEWRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3428,
      "word": "POOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3429,
      "word": "POOTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3430,
      "word": "POOWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3431,
      "word": "POOYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3432,
      "word": "POPOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3433,
      "word": "PORIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3434,
      "word": "PORINKOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3435,
      "word": "PORINME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3436,
      "word": "PORIN PEN KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3437,
      "word": "PORIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3438,
      "word": "PORITOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3439,
      "word": "POŘMAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3440,
      "word": "POŘMAMNOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3441,
      "word": "POROHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3442,
      "word": "POROKOTKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3443,
      "word": "POROKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3444,
      "word": "PORORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3445,
      "word": "POROTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3446,
      "word": "POTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3447,
      "word": "POTKUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3448,
      "word": "POTOKOI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3449,
      "word": "POTOKOMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3450,
      "word": "POTOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3451,
      "word": "POTOXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3452,
      "word": "POTU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3453,
      "word": "POTUHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3454,
      "word": "POTUPOTURE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3455,
      "word": "POTUPOTURI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3456,
      "word": "POTUREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3457,
      "word": "POTURME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3458,
      "word": "POTURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3459,
      "word": "POTURURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3460,
      "word": "POTWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3461,
      "word": "POTWO RORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3462,
      "word": "POTWOYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3463,
      "word": "POW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3464,
      "word": "POWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3465,
      "word": "POWAME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3466,
      "word": "POXORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3467,
      "word": "POXU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3468,
      "word": "POXUMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3469,
      "word": "POXWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3470,
      "word": "POXWEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3471,
      "word": "POYENO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3472,
      "word": "POYERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3473,
      "word": "POYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3474,
      "word": "POYINO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3475,
      "word": "POYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3476,
      "word": "PRATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3477,
      "word": "PU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3478,
      "word": "PUCUKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3479,
      "word": "PUČUKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3480,
      "word": "PUHCA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3481,
      "word": "PUHCA YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3482,
      "word": "PUHČAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3483,
      "word": "PUHTOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3484,
      "word": "PUHYAPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3485,
      "word": "PUKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3486,
      "word": "PUKNOROW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3487,
      "word": "PUKWOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3488,
      "word": "PUM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3489,
      "word": "PUME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3490,
      "word": "PUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3491,
      "word": "PUPRIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3492,
      "word": "PUPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3493,
      "word": "PUPURI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3494,
      "word": "PUPUSMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3495,
      "word": "PUR",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3496,
      "word": "PURANTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3497,
      "word": "PURAPURARE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3498,
      "word": "PURESKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3499,
      "word": "PURMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3500,
      "word": "PURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3501,
      "word": "PURUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3502,
      "word": "PURUMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3503,
      "word": "PURUMÃ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3504,
      "word": "PURUPURPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3505,
      "word": "PURUPURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3506,
      "word": "PURUPURUHNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3507,
      "word": "PURUPURUPE NASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3508,
      "word": "PURUPURUYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3509,
      "word": "PURURI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3510,
      "word": "PURWETO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3511,
      "word": "PUTUPUTURI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3512,
      "word": "PUU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3513,
      "word": "PUUCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3514,
      "word": "PUU KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3515,
      "word": "PUXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3516,
      "word": "PUYAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3517,
      "word": "PUYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3518,
      "word": "PUYUŘU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3519,
      "word": "RA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3520,
      "word": "RAAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3521,
      "word": "ŘAAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3522,
      "word": "RAAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3523,
      "word": "RAATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3524,
      "word": "RAATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3525,
      "word": "RACO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3526,
      "word": "RAÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3527,
      "word": "RAIXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3528,
      "word": "RAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3529,
      "word": "RAKATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3530,
      "word": "RAKATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3531,
      "word": "RAKATAWRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3532,
      "word": "RAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3533,
      "word": "RAMHA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3534,
      "word": "ŘAPAŘAPAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3535,
      "word": "RAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3536,
      "word": "RATA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3537,
      "word": "RATARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3538,
      "word": "ŘAWŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3539,
      "word": "RAYXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3540,
      "word": "RE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3541,
      "word": "REEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3542,
      "word": "REERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3543,
      "word": "REEYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3544,
      "word": "REHA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3545,
      "word": "REHRETHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3546,
      "word": "REKMET",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3547,
      "word": "REKMETU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3548,
      "word": "REPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3549,
      "word": "RERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3550,
      "word": "REREHRERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3551,
      "word": "ŘEŘETAWANANYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3552,
      "word": "RET",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3553,
      "word": "RETÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3554,
      "word": "REYAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3555,
      "word": "RIIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3556,
      "word": "RÎÎRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3557,
      "word": "RÎÎWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3558,
      "word": "RIKOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3559,
      "word": "RÍNATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3560,
      "word": "RÎPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3561,
      "word": "RIW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3562,
      "word": "RÎWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3563,
      "word": "RÎ + YARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3564,
      "word": "RMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3565,
      "word": "ŘMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3566,
      "word": "ROKOHČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3567,
      "word": "ROKOROKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3568,
      "word": "ŘOKOŘOKOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3569,
      "word": "ROMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3570,
      "word": "RO MAKÎ ... +",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3571,
      "word": "ROMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3572,
      "word": "ROOMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3573,
      "word": "ROONA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3574,
      "word": "ROOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3575,
      "word": "ROOPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3576,
      "word": "ROOPORE ÑHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3577,
      "word": "ROOWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3578,
      "word": "ROPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3579,
      "word": "ROPONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3580,
      "word": "ROPOTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3581,
      "word": "ROPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3582,
      "word": "ŘOŘKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3583,
      "word": "RORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3584,
      "word": "ŘPONKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3585,
      "word": "RURPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3586,
      "word": "RUUMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3587,
      "word": "RUUPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3588,
      "word": "RUUSU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3589,
      "word": "RUUWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3590,
      "word": "SAA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3591,
      "word": "SAAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3592,
      "word": "SAAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3593,
      "word": "SAHSA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3594,
      "word": "SAHSAMAXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3595,
      "word": "SAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3596,
      "word": "SAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3597,
      "word": "SAKA KAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3598,
      "word": "SAKMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3599,
      "word": "SAKMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3600,
      "word": "SAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3601,
      "word": "SAMAPORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3602,
      "word": "SAMAPURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3603,
      "word": "SAPUPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3604,
      "word": "SARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3605,
      "word": "SARA NÎÎKA OWYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3606,
      "word": "SARAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3607,
      "word": "SARARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3608,
      "word": "SARARAMAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3609,
      "word": "SARARARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3610,
      "word": "SARARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3611,
      "word": "SARAYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3612,
      "word": "SAŘAYIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3613,
      "word": "SARORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3614,
      "word": "SAWAKWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3615,
      "word": "SAWAKWAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3616,
      "word": "SAWAŘATI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3617,
      "word": "SAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3618,
      "word": "SEE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3619,
      "word": "SEESE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3620,
      "word": "SEHRERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3621,
      "word": "SEHRERE MÎÎKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3622,
      "word": "SE KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3623,
      "word": "SEKESEKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3624,
      "word": "SEKESEKE KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3625,
      "word": "SERERE KAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3626,
      "word": "SÎÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3627,
      "word": "SÎÎKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3628,
      "word": "SÎÎKO KEÑARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3629,
      "word": "SÎKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3630,
      "word": "SÎNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3631,
      "word": "SÎNKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3632,
      "word": "SÎPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3633,
      "word": "SÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3634,
      "word": "SÎWÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3635,
      "word": "SKAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3636,
      "word": "SKÎSKÎMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3637,
      "word": "SKURUMI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3638,
      "word": "SKUYPAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3639,
      "word": "SMESME KASKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3640,
      "word": "SMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3641,
      "word": "SO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3642,
      "word": "SOČA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3643,
      "word": "SON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3644,
      "word": "SOOYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3645,
      "word": "SORORONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3646,
      "word": "SOROROPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3647,
      "word": "SOROSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3648,
      "word": "SOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3649,
      "word": "SOSOHNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3650,
      "word": "SOSOPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3651,
      "word": "SOWTATU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3652,
      "word": "SOWTATU KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3653,
      "word": "SPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3654,
      "word": "SPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3655,
      "word": "SPOSPOTURE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3656,
      "word": "SUKUSUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3657,
      "word": "SUM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3658,
      "word": "SUMAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3659,
      "word": "SUME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3660,
      "word": "SUMHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3661,
      "word": "SUNAWI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3662,
      "word": "SURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3663,
      "word": "SURATI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3664,
      "word": "SURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3665,
      "word": "SUU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3666,
      "word": "SUUM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3667,
      "word": "SUURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3668,
      "word": "SUWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3669,
      "word": "SWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3670,
      "word": "SWAA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3671,
      "word": "SWARUWARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3672,
      "word": "TA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3673,
      "word": "TAA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3674,
      "word": "TAACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3675,
      "word": "TAAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3676,
      "word": "TAAMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3677,
      "word": "TAAMUCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3678,
      "word": "TAARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3679,
      "word": "TAARORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3680,
      "word": "TAATÎTÎY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3681,
      "word": "TAATÎY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3682,
      "word": "TAAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3683,
      "word": "TACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3684,
      "word": "TAHCA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3685,
      "word": "TAHCASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3686,
      "word": "TAHCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3687,
      "word": "TAHKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3688,
      "word": "TAHKAXMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3689,
      "word": "TAHREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3690,
      "word": "TAHRORONTAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3691,
      "word": "TAHROROPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3692,
      "word": "TAHSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3693,
      "word": "TAHTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3694,
      "word": "TAHTARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3695,
      "word": "TAHWORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3696,
      "word": "TAHWOREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3697,
      "word": "TAHXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3698,
      "word": "TAHXAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3699,
      "word": "TAIXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3700,
      "word": "TAKACOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3701,
      "word": "TAKAIWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3702,
      "word": "TAKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3703,
      "word": "TAKARÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3704,
      "word": "TAKAŘAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3705,
      "word": "TAKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3706,
      "word": "TAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3707,
      "word": "TAKÎHKNOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3708,
      "word": "TAKÎHSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3709,
      "word": "TAKÎHSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3710,
      "word": "TAKÎHSO YÎHTÎNOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3711,
      "word": "TAKNAMACERÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3712,
      "word": "TAKNAMARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3713,
      "word": "TAKNAMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3714,
      "word": "TAKÑIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3715,
      "word": "TAKÑISO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3716,
      "word": "TAKÑISOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3717,
      "word": "TAKNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3718,
      "word": "TAKNOYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3719,
      "word": "TAKNOYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3720,
      "word": "TAKPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3721,
      "word": "TAMARAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3722,
      "word": "TAMARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3723,
      "word": "TAMATAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3724,
      "word": "TAMATÎKAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3725,
      "word": "TAMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3726,
      "word": "TAMEKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3727,
      "word": "TAMEKÎ THO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3728,
      "word": "TAMÎTKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3729,
      "word": "TAMKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3730,
      "word": "TAMNOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3731,
      "word": "TAMRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3732,
      "word": "TAMTAKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3733,
      "word": "TAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3734,
      "word": "TANANÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3735,
      "word": "TAN AWEXITAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3736,
      "word": "TANHAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3737,
      "word": "TANHAMYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3738,
      "word": "TANÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3739,
      "word": "TAÑIHSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3740,
      "word": "TANMERO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3741,
      "word": "TANTIRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3742,
      "word": "TANTONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3743,
      "word": "TANTONORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3744,
      "word": "TAPATAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3745,
      "word": "TAPATAWNO (PÎN)",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3746,
      "word": "TAPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3747,
      "word": "TAPONUKYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3748,
      "word": "TAPOTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3749,
      "word": "TARAHXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3750,
      "word": "TARAK",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3751,
      "word": "TARAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3752,
      "word": "TARARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3753,
      "word": "TARARA YESAMARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3754,
      "word": "TARATARA YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3755,
      "word": "TARAYI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3756,
      "word": "TARIÑEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3757,
      "word": "TARITARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3758,
      "word": "TARKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3759,
      "word": "TAWAKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3760,
      "word": "TAXIKWOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3761,
      "word": "TENENE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3762,
      "word": "TEWNA KWCWENO MININ YIMICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3763,
      "word": "THO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3764,
      "word": "TÎHKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3765,
      "word": "TÎHPOKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3766,
      "word": "TÎHYOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3767,
      "word": "TÎKPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3768,
      "word": "TÎMÎYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3769,
      "word": "TÎMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3770,
      "word": "TÎMXÎKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3771,
      "word": "TÎMXÎKRÎ ÑIIRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3772,
      "word": "TÎMXÎKYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3773,
      "word": "TÎPÎÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3774,
      "word": "TÎPÎÑEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3775,
      "word": "TÎRAPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3776,
      "word": "TÎRAPONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3777,
      "word": "TÎSWAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3778,
      "word": "TÎTÎHNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3779,
      "word": "TÎTKEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3780,
      "word": "TÎTPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3781,
      "word": "TÎXEWEKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3782,
      "word": "TÎYOHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3783,
      "word": "TMANÎMSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3784,
      "word": "TMATAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3785,
      "word": "TMEMESE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3786,
      "word": "TMÑEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3787,
      "word": "TOCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3788,
      "word": "TOHKARARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3789,
      "word": "TOHMAKATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3790,
      "word": "TOHSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3791,
      "word": "TOKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3792,
      "word": "TOM HÁ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3793,
      "word": "TOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3794,
      "word": "TONOHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3795,
      "word": "TONOPORE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3796,
      "word": "TONOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3797,
      "word": "TOONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3798,
      "word": "TOOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3799,
      "word": "TOOPU YAŘMAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3800,
      "word": "TOOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3801,
      "word": "TOOTO KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3802,
      "word": "TOOTO PUM YÎHTÎNOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3803,
      "word": "TOOTO\tYEKATÎNHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3804,
      "word": "TOPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3805,
      "word": "TOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3806,
      "word": "TOPO + ME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3807,
      "word": "TOROWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3808,
      "word": "TOTKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3809,
      "word": "TOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3810,
      "word": "TPANAXKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3811,
      "word": "TPAPAKYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3812,
      "word": "TPOTKE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3813,
      "word": "TPOXWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3814,
      "word": "TUKRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3815,
      "word": "TUKURUY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3816,
      "word": "TUKUSU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3817,
      "word": "TUMUTWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3818,
      "word": "TUNAYANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3819,
      "word": "TUNAYARIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3820,
      "word": "TUPURANTAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3821,
      "word": "TUPURUKYE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3822,
      "word": "TUŘATUŘAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3823,
      "word": "TURPE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3824,
      "word": "TURUNI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3825,
      "word": "TURUTURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3826,
      "word": "TUSMUY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3827,
      "word": "TUTUM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3828,
      "word": "TUTUMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3829,
      "word": "TUTURUY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3830,
      "word": "TUUNA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3831,
      "word": "TUUNA PÎÎTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3832,
      "word": "TUUNA PÎTHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3833,
      "word": "TUUNA YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3834,
      "word": "TUUNAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3835,
      "word": "TUUNA YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3836,
      "word": "TUURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3837,
      "word": "TUUWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3838,
      "word": "TUWUÑUREM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3839,
      "word": "TUXKUKUYURE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3840,
      "word": "TUXMA YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3841,
      "word": "TWAYHSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3842,
      "word": "TWEENOPÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3843,
      "word": "TWOTME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3844,
      "word": "UFUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3845,
      "word": "UMANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3846,
      "word": "UMAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3847,
      "word": "UMAYINO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3848,
      "word": "UUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3849,
      "word": "UUMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3850,
      "word": "UUPUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3851,
      "word": "UUWI XERE TAKIHSON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3852,
      "word": "UUXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3853,
      "word": "WA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3854,
      "word": "WAACA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3855,
      "word": "WAAČA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3856,
      "word": "WAAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3857,
      "word": "WAANO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3858,
      "word": "WAAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3859,
      "word": "WAAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3860,
      "word": "WAAŘASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3861,
      "word": "WAARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3862,
      "word": "WAATO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3863,
      "word": "WAAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3864,
      "word": "WACAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3865,
      "word": "WAČMIYKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3866,
      "word": "WAHCESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3867,
      "word": "WAHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3868,
      "word": "WAHRAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3869,
      "word": "WAHRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3870,
      "word": "WAHRUNKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3871,
      "word": "WAHRUNKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3872,
      "word": "WAHRUYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3873,
      "word": "WAHSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3874,
      "word": "WAHSÎYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3875,
      "word": "WAHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3876,
      "word": "WAHXAYKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3877,
      "word": "WAHYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3878,
      "word": "WAI-WAI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3879,
      "word": "WAKANAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3880,
      "word": "WAKÎHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3881,
      "word": "WAKÎKNOFU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3882,
      "word": "WAKÎKNOYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3883,
      "word": "WAKÎKNOYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3884,
      "word": "WAKÎMHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3885,
      "word": "WAKNAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3886,
      "word": "WAKÑIFU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3887,
      "word": "WAKÑIYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3888,
      "word": "WAKNONKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3889,
      "word": "WAKON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3890,
      "word": "WAKOROKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3891,
      "word": "WAKPAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3892,
      "word": "WAKRON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3893,
      "word": "WAKRONOMAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3894,
      "word": "WAKRONOMEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3895,
      "word": "WAKRONOMESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3896,
      "word": "WAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3897,
      "word": "WAMATÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3898,
      "word": "WAME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3899,
      "word": "WAMESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3900,
      "word": "WAMPOSOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3901,
      "word": "WANANPÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3902,
      "word": "WANARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3903,
      "word": "WANOHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3904,
      "word": "WANOMAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3905,
      "word": "WANOMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3906,
      "word": "WAPAHTOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3907,
      "word": "WAPANTAW NAXE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3908,
      "word": "WAPONUKYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3909,
      "word": "WARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3910,
      "word": "WARA EXIRÎ KE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3911,
      "word": "WARAHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3912,
      "word": "WARAHYAKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3913,
      "word": "WARAMAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3914,
      "word": "WAŘAMAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3915,
      "word": "WAŘAMAYRPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3916,
      "word": "WARAPAPOTURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3917,
      "word": "WAŘAPAŘI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3918,
      "word": "WARAPOTURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3919,
      "word": "WAŘIMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3920,
      "word": "WAŘIWAŘIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3921,
      "word": "WARKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3922,
      "word": "WARWARU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3923,
      "word": "WAŘWAŘU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3924,
      "word": "WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3925,
      "word": "WASIKWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3926,
      "word": "WATAKIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3927,
      "word": "WATAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3928,
      "word": "WATAPAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3929,
      "word": "WATAŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3930,
      "word": "WATAŘAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3931,
      "word": "WATMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3932,
      "word": "WATMUNKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3933,
      "word": "WATOCOW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3934,
      "word": "WATOSO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3935,
      "word": "WATOTOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3936,
      "word": "WATWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3937,
      "word": "WATWAPIMČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3938,
      "word": "WATWA YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3939,
      "word": "WAW KAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3940,
      "word": "WAWKUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3941,
      "word": "WAYAHRU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3942,
      "word": "WAYAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3943,
      "word": "WAYAMAKASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3944,
      "word": "WAYAMAKASIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3945,
      "word": "WAYAMARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3946,
      "word": "WAYAMNU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3947,
      "word": "WAYAMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3948,
      "word": "WAYAMUMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3949,
      "word": "WAYAPAMSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3950,
      "word": "WAYAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3951,
      "word": "WAYAPUEYPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3952,
      "word": "WAYAPUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3953,
      "word": "WAYAŘAYMOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3954,
      "word": "WAYAWAYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3955,
      "word": "WAYHKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3956,
      "word": "WAYMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3957,
      "word": "WAYPÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3958,
      "word": "WAYPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3959,
      "word": "WAYPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3960,
      "word": "WAYPURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3961,
      "word": "WAYWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3962,
      "word": "WAY WÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3963,
      "word": "WAYWÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3964,
      "word": "WEČIKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3965,
      "word": "WEECI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3966,
      "word": "WEEÑASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3967,
      "word": "WEENU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3968,
      "word": "WEENU MÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3969,
      "word": "WEEŘA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3970,
      "word": "WEETO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3971,
      "word": "WEEWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3972,
      "word": "WEEWE MÎTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3973,
      "word": "WEEWE PIČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3974,
      "word": "WEEWE POKO CEHSOM EPEMRUTUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3975,
      "word": "WEEWE WMICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3976,
      "word": "WEEWE YEEPU ITONORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3977,
      "word": "WEEWE YEHKURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3978,
      "word": "WEEWE YEPENŘUTUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3979,
      "word": "WEEWE YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3980,
      "word": "WEEWE YEPU KAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3981,
      "word": "WEEYU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3982,
      "word": "WEEYUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3983,
      "word": "WEEYUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3984,
      "word": "WEHTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3985,
      "word": "WEHTO RORON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3986,
      "word": "WEHTO YEN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3987,
      "word": "WEHTO YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3988,
      "word": "WEHTOYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3989,
      "word": "WEHYATKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3990,
      "word": "WEKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3991,
      "word": "WEMČINOYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3992,
      "word": "WEMRONHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3993,
      "word": "WENARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3994,
      "word": "WENASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3995,
      "word": "WEÑEKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3996,
      "word": "WENPORÎW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3997,
      "word": "WENTA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3998,
      "word": "WENTAPORMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 3999,
      "word": "WEPAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4000,
      "word": "WEPEMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4001,
      "word": "WEPETHÎKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4002,
      "word": "WEREKOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4003,
      "word": "WEŘEKOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4004,
      "word": "WEREWERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4005,
      "word": "WERMONHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4006,
      "word": "WESUNKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4007,
      "word": "WETAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4008,
      "word": "WETAPA OYAMORÎ KE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4009,
      "word": "WETHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4010,
      "word": "WEWČOKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4011,
      "word": "WEWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4012,
      "word": "WEXKIRIRIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4013,
      "word": "WEYPOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4014,
      "word": "WEYUČIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4015,
      "word": "WEYUNME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4016,
      "word": "WÎHČAMNOPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4017,
      "word": "WÎHČAMNOYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4018,
      "word": "WÎHKOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4019,
      "word": "WÎHMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4020,
      "word": "WÎHMAMEKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4021,
      "word": "WÎHMAMESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4022,
      "word": "WÎHTÎNOYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4023,
      "word": "WIHXIKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4024,
      "word": "WÎHYAKÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4025,
      "word": "WÎHYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4026,
      "word": "WÎÎKESÎ MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4027,
      "word": "WÎÎPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4028,
      "word": "WIIRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4029,
      "word": "WÎÎRE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4030,
      "word": "WIIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4031,
      "word": "WIKOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4032,
      "word": "WÎMEÑEKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4033,
      "word": "WÎMHOKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4034,
      "word": "WÎMÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4035,
      "word": "WIMIU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4036,
      "word": "WÎMYASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4037,
      "word": "WIPIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4038,
      "word": "WÎRAČONKESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4039,
      "word": "WÎRAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4040,
      "word": "WÎSPOMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4041,
      "word": "WÎTWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4042,
      "word": "WIYAMU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4043,
      "word": "WIYAMYASU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4044,
      "word": "WOHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4045,
      "word": "WOK MÎTÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4046,
      "word": "WOKPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4047,
      "word": "WOKŘAWETIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4048,
      "word": "WOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4049,
      "word": "WOÑESU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4050,
      "word": "WONIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4051,
      "word": "WONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4052,
      "word": "WOOKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4053,
      "word": "WOOSÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4054,
      "word": "WOOSÎCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4055,
      "word": "WOOSÎ WAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4056,
      "word": "WOOTO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4057,
      "word": "WOOXAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4058,
      "word": "WOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4059,
      "word": "WOPOÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4060,
      "word": "WOROKYAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4061,
      "word": "WOSKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4062,
      "word": "WOW KAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4063,
      "word": "WUKUKMESÎ MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4064,
      "word": "XAAMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4065,
      "word": "XAAPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4066,
      "word": "XAARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4067,
      "word": "XAAWUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4068,
      "word": "XA HARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4069,
      "word": "XAKAWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4070,
      "word": "XAMAHNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4071,
      "word": "XAPARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4072,
      "word": "XAPIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4073,
      "word": "XAPIKA MEANS 'HAT'.",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4074,
      "word": "XAPOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4075,
      "word": "XAWARAPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4076,
      "word": "XAWIŘKAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4077,
      "word": "XAWUČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4078,
      "word": "XAWUYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4079,
      "word": "XE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4080,
      "word": "XEERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4081,
      "word": "XEHXA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4082,
      "word": "XERE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4083,
      "word": "XERETAHSON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4084,
      "word": "XEWEPUYEPY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4085,
      "word": "XIIKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4086,
      "word": "XIIPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4087,
      "word": "XIKYATI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4088,
      "word": "XIMXIM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4089,
      "word": "XIPIPI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4090,
      "word": "XIPIRIMARAKANYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4091,
      "word": "XIRIRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4092,
      "word": "XIRIRI THO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4093,
      "word": "XIRKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4094,
      "word": "XIŘKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4095,
      "word": "XIRKO YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4096,
      "word": "XIRPA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4097,
      "word": "XIXIM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4098,
      "word": "XIXKÓ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4099,
      "word": "XMARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4100,
      "word": "XMAŘIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4101,
      "word": "XOHRI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4102,
      "word": "XOHRIPICHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4103,
      "word": "XOHŘIPICHOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4104,
      "word": "XOKŘEWEYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4105,
      "word": "XOŘOXOŘOIMOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4106,
      "word": "XOŘOXOŘOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4107,
      "word": "XPARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4108,
      "word": "XUKURWA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4109,
      "word": "XUMBU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4110,
      "word": "XUUKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4111,
      "word": "XUXUNURI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4112,
      "word": "YAACI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4113,
      "word": "YAAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4114,
      "word": "YAAMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4115,
      "word": "YAANA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4116,
      "word": "YAANA PÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4117,
      "word": "YAANA RO MAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4118,
      "word": "YAANA THO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4119,
      "word": "YAARE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4120,
      "word": "YAARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4121,
      "word": "YAARO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4122,
      "word": "YAASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4123,
      "word": "YAHČOME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4124,
      "word": "YAKAYAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4125,
      "word": "YAKRO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4126,
      "word": "YAKWE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4127,
      "word": "YAMORO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4128,
      "word": "YAMORO ÑHE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4129,
      "word": "YAMOROROMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4130,
      "word": "YAMURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4131,
      "word": "YAPOCI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4132,
      "word": "YARAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4133,
      "word": "YARARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4134,
      "word": "YARENHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4135,
      "word": "YARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4136,
      "word": "YARÎ AHCOPORONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4137,
      "word": "YAŘÎ ALNOŘONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4138,
      "word": "YAŘÎ ČEKANAKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4139,
      "word": "YAŘÎ CEKEYEKYEM (APAŘA YAHÎ WAY)",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4140,
      "word": "YAŘÎ CEKYEKYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4141,
      "word": "YAŘÎ ČEWYAŘONO KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4142,
      "word": "YAŘÎ ECECOKAN EHCOPORONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4143,
      "word": "YAŘÎ ECECOKAN PORIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4144,
      "word": "YAŘÎ EPUPOŘEŘONO EČEČOKAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4145,
      "word": "YARÎ ESEPATAKARENO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4146,
      "word": "YARÎHRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4147,
      "word": "YAŘÎ MOXESOCEHSOM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4148,
      "word": "YAŘÎ PINIIČIE ČEČOKAM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4149,
      "word": "YAŘÎ PINNIPIČE (ČOUWAY)",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4150,
      "word": "YAŘÎ PONEŘONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4151,
      "word": "YAŘÎ TIŘACOYEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4152,
      "word": "YAŘÎ TIYOKEM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4153,
      "word": "YAŘÎ TRÊS NO ENATIŘIMENO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4154,
      "word": "YAŘÎ YAHKENO INAŘENO ECEPU YAHŘAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4155,
      "word": "YAŘÎ YAKENO TAŘA TAŘA YAŘA WAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4156,
      "word": "YAŘKAYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4157,
      "word": "YASKOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4158,
      "word": "YATHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4159,
      "word": "YATÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4160,
      "word": "YAWAKA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4161,
      "word": "YAWARI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4162,
      "word": "YAWAYMOYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4163,
      "word": "YAXAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4164,
      "word": "YAYPÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4165,
      "word": "YEEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4166,
      "word": "YEME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4167,
      "word": "YEMEME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4168,
      "word": "YENAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4169,
      "word": "YEPATAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4170,
      "word": "YEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4171,
      "word": "YÎHČAMNOPÎRA ESKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4172,
      "word": "YIHCIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4173,
      "word": "YÎHČÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4174,
      "word": "YIHČIRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4175,
      "word": "YIHČIRÎ ME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4176,
      "word": "YIHCIRME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4177,
      "word": "YIHCITOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4178,
      "word": "YÎHMAMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4179,
      "word": "YÎHPOČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4180,
      "word": "YÎHPORA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4181,
      "word": "YÎHREPURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4182,
      "word": "YÎHTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4183,
      "word": "YÎHTÎPÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4184,
      "word": "YÎHTÎPÎRÎ YARÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4185,
      "word": "YIHXIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4186,
      "word": "YIHXIRORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4187,
      "word": "YÎHYAPAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4188,
      "word": "YÎÎM",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4189,
      "word": "YÎÎM KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4190,
      "word": "YIIXERA RO MAK NASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4191,
      "word": "YIIXE THAKWA WASI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4192,
      "word": "YIIXE WASÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4193,
      "word": "YIKINÎMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4194,
      "word": "YIKMORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4195,
      "word": "YIKMORÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4196,
      "word": "YIMICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4197,
      "word": "YIMIČIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4198,
      "word": "YIMICIN CESENPOSOM NEERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4199,
      "word": "YIMICIN CESENPOSOM NESEHSA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4200,
      "word": "YIMICIN CESENPOSOM ROOWO PORERONO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4201,
      "word": "YIMICIN CESENPOSOM WEEWE YIMKARENO YIMICIN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4202,
      "word": "YIMICIN CESENPOSOM YEMICIN PENAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4203,
      "word": "YIMICIN CESENPOSOM YIMICIN KAWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4204,
      "word": "YIMICOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4205,
      "word": "YÎMÎHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4206,
      "word": "YIMIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4207,
      "word": "YÎMÎTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4208,
      "word": "YÎMÎTÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4209,
      "word": "YÎMÎTÎ KEÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4210,
      "word": "YÎMÎTÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4211,
      "word": "YÎMÎTÎYMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4212,
      "word": "YIMITOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4213,
      "word": "YÎMÎTWO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4214,
      "word": "YÎMKARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4215,
      "word": "YÎMKAW KÎWČESÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4216,
      "word": "YÎMKAY",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4217,
      "word": "YÎMTAPOTAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4218,
      "word": "YÎMTAPOTAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4219,
      "word": "YÎMTAPOTARÎ KOMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4220,
      "word": "YÎMTARÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4221,
      "word": "YÎNÎMKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4222,
      "word": "YÎNOČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4223,
      "word": "YÎNPANATANMEKRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4224,
      "word": "YÎNPORMAMNORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4225,
      "word": "YÎNPOŘMAMNORÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4226,
      "word": "YIPICI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4227,
      "word": "YIPIČI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4228,
      "word": "YIPIHKACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4229,
      "word": "YIPIHNÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4230,
      "word": "YÎPÎMÎMIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4231,
      "word": "YÎPÎMÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4232,
      "word": "YÎPÎMTAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4233,
      "word": "YÎPÎPÎTHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4234,
      "word": "YÎPÎRÎ THO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4235,
      "word": "YIPITACHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4236,
      "word": "YÎPÎTÎKARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4237,
      "word": "YÎPÎTÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4238,
      "word": "YÎRAČONHÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4239,
      "word": "YÎRAMANKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4240,
      "word": "YÎRETÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4241,
      "word": "YIRIKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4242,
      "word": "YIŘISIPIMIRIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4243,
      "word": "YIŘISPIMIŘIYEPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4244,
      "word": "YÎRÎYAKAÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4245,
      "word": "YÎRÎYAKAXI",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4246,
      "word": "YÎSÎN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4247,
      "word": "YÎSÎN YEPATAKAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4248,
      "word": "YÎSON",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4249,
      "word": "YÎSPOMAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4250,
      "word": "YÎWÎNKÎRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4251,
      "word": "YÎWÎRÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4252,
      "word": "YÎWÎRÎYAKATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4253,
      "word": "YÎWRATARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4254,
      "word": "YÎWYAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4255,
      "word": "YMO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4256,
      "word": "YOCHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4257,
      "word": "YOHNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4258,
      "word": "YOOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4259,
      "word": "YUČURERA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4260,
      "word": "YUHME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4261,
      "word": "YUHNARE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4262,
      "word": "YUHNAW",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4263,
      "word": "YUHNAWNO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4264,
      "word": "YUKU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4265,
      "word": "YUKUHYA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4266,
      "word": "YUKUKMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4267,
      "word": "YUKUKMARA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4268,
      "word": "YUKUKNOMAČO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4269,
      "word": "YUKUKNOMAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4270,
      "word": "YUKUMTOKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4271,
      "word": "YUKURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4272,
      "word": "YUKURUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4273,
      "word": "YUKURUNKAKÎ",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4274,
      "word": "YUKURUNPEKO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4275,
      "word": "YUMUMURU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4276,
      "word": "YUPUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4277,
      "word": "YUPUÑE",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4278,
      "word": "YUPUPUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4279,
      "word": "YUPURANTAMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4280,
      "word": "YUPURANTAN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4281,
      "word": "YUPURUKUN",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4282,
      "word": "YUPURURA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4283,
      "word": "YUPURUTATOPO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4284,
      "word": "YUPUXAPU",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4285,
      "word": "YUPUYME",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4286,
      "word": "YURUMA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4287,
      "word": "YUSMUMRA",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4288,
      "word": "YUU YUU KAČHO",
      "phonemic": null,
      "created_at": "2024-05-15T00:43:13.037004Z",
      "update_at": "2024-05-15T00:43:13.037004Z",
      "user_id": 1
    },
    {
      "id": 4289,
      "word": "string",
      "phonemic": "string",
      "created_at": "2024-05-16T23:17:52.794061Z",
      "update_at": "2024-05-16T23:17:52.794061Z",
      "user_id": 1
    }
  ]

  const dataString = JSON.stringify(data);
  const length = Buffer.byteLength(dataString, 'utf8');

  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Length', length);
  res.status(200).json(data);
}
