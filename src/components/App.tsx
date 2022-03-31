import FrontPage from './FrontPage';
import BlogList from './BlogList';

function App(props: {blogs: Array<{name: string; to: string; img: string}>}) {

  const {blogs} = props;

  return (
    <div>
      <FrontPage />
      <BlogList blogs = {blogs} />
    </div>
  );
}

export default App;
