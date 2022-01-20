import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data:blogs, isPending, error } = useFetch('http://localhost:3004/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>loading....</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
    </div>
  );  
}
 
export default Home;