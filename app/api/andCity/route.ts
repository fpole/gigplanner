export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const id = searchParams.get("id");
  const API_KEY = process.env.TICKETMASTER_APIKEY;
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&attractionId=${id}&locale=*&city=${city}`
  );
  const data = await res.json();
  const fetchedGigs = data._embedded?.events || [];
  //console.log(fetchedArtists);
  return Response.json({ fetchedGigs });
  // return { status: 200, body: Response.json(data) };
}
