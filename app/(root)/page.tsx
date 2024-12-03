

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if(!response.ok) throw new Error('error while fetching album');

  const albums = await response.json();
  return (
    <>
    <h1 className="text-2xl">Home</h1>
    </>
  );
}
