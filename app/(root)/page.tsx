
import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";


export default async function Home({searchParams}:{searchparams:Promise<{query?:string}>}) {
  const query = (await searchParams).query
  const post = [{
    createdAt:Date(),
    views: 100,
    author: {_id:1 , name:'Aaryan'},
    _id: 1,
    description: "This is a description",
    image: 'https://plus.unsplash.com/premium_vector-1721820882783-334a705b89c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww',
    category: "Robots",
    title: "We Robots"
  }]
  return (
    <>
    <section className="pink_container">

    <h1 className="heading">Pitch Your Startup, <br /> Connect with Entrepreneurs</h1>
    <p className="sub-heading !max-w-3xl">
    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
    </p>
    <SearchForm
    query={query}
    />
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query?`search relults for "${query}"`: "All Startups"}
      </p>
      <ul className="mt-7 card_grid">
        {post?.length > 0 ? (
          post.map((post:StatupCardType, index:number) => (
            
              <StartupCard key={post?._id} post={post} />
            
          ))
        ):(
          <p className="no-results">No startups found</p>
        )}
      </ul>
    </section>
    </>
  );
}
