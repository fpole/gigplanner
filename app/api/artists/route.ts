// import { NextApiRequest, NextApiResponse } from "next";
//
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const API_KEY = process.env.TICKETMASTER_APIKEY;
//   try {
//     const response = await fetch(
//       `https://app.ticketmaster.com/discovery/v2/attractions?apikey=${API_KEY}&keyword=idles&locale=*&size=1`
//     );
//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching data from Ticketmaster API:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to fetch data from Ticketmaster API" });
//   }
// }

export async function GET() {
  const API_KEY = process.env.TICKETMASTER_APIKEY;
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/attractions?apikey=${API_KEY}&keyword=idles&locale=*&size=1`
  );
  const data = await res.json();
  const fetchedArtists = data._embedded?.attractions || [];
  //console.log(fetchedArtists);
  return Response.json({ fetchedArtists });
  // return { status: 200, body: Response.json(data) };
}
