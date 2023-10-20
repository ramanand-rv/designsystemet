export async function GET(request: Request) {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('Authorization', 'Bearer ' + process.env.VERCEL_TOKEN);

  const res = await fetch(
    'https://api.vercel.com/v4/aliases?teamId=' + process.env.VERCEL_TEAM_ID,
    {
      headers: requestHeaders,
    },
  );
  const data = await res.json();
  return Response.json(data);
}
