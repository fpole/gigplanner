// export async function GET() {
//   const API_KEY = process.env.TICKETMASTER_APIKEY;
//   const res = await fetch(
//     `https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&attractionId=K8vZ917KNX7&locale=*`
//   );
//   const data = await res.json();
//   const fetchedGigs = data._embedded?.events || [];
//   //console.log(fetchedArtists);
//   return Response.json({ fetchedGigs });
//   // return { status: 200, body: Response.json(data) };
// }

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // console.log(id);
  const API_KEY = process.env.TICKETMASTER_APIKEY;
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&attractionId=${id}&locale=*`
  );
  const data = await res.json();
  const fetchedGigs = data._embedded?.events || [];
  //console.log(fetchedArtists);
  return Response.json({ fetchedGigs });
  // return { status: 200, body: Response.json(data) };
}

// EXAMPLE WITH SEARCH PARAMS

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')
//   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY!,
//     },
//   })
//   const product = await res.json()

//   return Response.json({ product })
// }
