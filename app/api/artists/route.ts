export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const artistSearch = searchParams.get("artistSearch");
  // console.log(artistSearch);
  const API_KEY = process.env.TICKETMASTER_APIKEY;

  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/attractions?apikey=${API_KEY}&keyword=${artistSearch}&locale=*&size=1`
  );
  const data = await res.json();
  const fetchedArtists = data._embedded?.attractions || [];
  //console.log(fetchedArtists);
  return Response.json({ fetchedArtists });
  // return { status: 200, body: Response.json(data) };
}
