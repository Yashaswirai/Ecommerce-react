import { Link, useLocation } from "react-router-dom";
import Router from "./utils/Router";
function App() {
  const { search, pathname } = useLocation();
  return (
    <div className="w-full h-screen flex relative">
      <Router />
      {pathname !== '/' || search !== '' ? <Link to="/" className="absolute top-0 left-0 m-4 bg-blue-500 text-white p-2 rounded-md">Home</Link> : ""}
    </div>
  )
}

export default App
