import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// The Layout component has <Outlet> and <Link> elements.
// The <Outlet> renders the current route selected.
const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };

  const Home = () => {
    return <h1>Home</h1>;
  };

  const Blogs = () => {
    return <h1>Blog Articles</h1>;
  };

  const Contact = () => {
    return <h1>Contact Me</h1>;
  };

  const NoPage = () => {
    return <h1>404</h1>;
  };

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
/**
 * We wrap our content first with <BrowserRouter>.

Then we define our <Routes>. An application can have multiple <Routes>. 

<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.

The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.

The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.

Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

Hooks

1. useNavigate -> to navigate to another page or we can use <Navigate to ="" /> component
usage: let navigate = useNavigate();
    navigate('/about', { replace: true })
2. useHistory -> It lets you access the history instance used by React Router. Using the history instance you can redirect users to another page
 */
