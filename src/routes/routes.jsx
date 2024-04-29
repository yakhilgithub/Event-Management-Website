import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
// import Hackathons from "../../pages/Hackathons/Hackathons";

export const routes = [
  {path:'/',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetail/>},
  // {path:'/hackathon',element:<Hackathons/>}
]
