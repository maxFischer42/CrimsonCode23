import './style.css';
import { Explore } from "./components/Explore";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { BusinessForm } from "./components/BusinessForm";
import { CategoryExplorer } from "./components/CategoryExplorer";
import { BusinessPage } from "./components/BusinessPage";
 
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/explore',
    element: <Explore />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/add',
    element: <BusinessForm/>
  },
  {
    path: '/explore-food',
    element: <CategoryExplorer category="food"/>
  },
  {
    path: '/explore-hobbies',
    element: <CategoryExplorer category="hobbies"/>
  },
  {
    path: '/explore-entertainment',
    element: <CategoryExplorer category="entertainment"/>
  },
  {
    path: '/explore-groceries',
    element: <CategoryExplorer category="groceries"/>
  },
  {
    path: '/explore-sports',
    element: <CategoryExplorer category="sports"/>
  },
  {
    path: '/explore-music',
    element: <CategoryExplorer category="music"/>
  },
  {
    path: '/explore-clothing',
    element: <CategoryExplorer category="clothing"/>
  },
  {
    path: '/explore-hair',
    element: <CategoryExplorer category="hair"/>
  },
  {
    path: '/business',
    element: <BusinessPage />
  }

];

export default AppRoutes;
