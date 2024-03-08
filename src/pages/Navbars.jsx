import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import log1 from '../assets/logo1.png';
import log2 from '../assets/logo2.png';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import ShuffleHero from "./ShuffleHero";
import Health from "./Health";
import Sports from "./Sports";
import Buissness from "./Buissness";
import Entertainment from "./Entertainment";
import General from './General';
import Technology from "./Technology";
import Science from "./Science";
import Login from "./Login";
import Signup from "./Signup";
import Contact from "./Contact";

Link
 
const navListMenuItems = [
  {
    title: "Business",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Entertainment",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "General",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Health",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Science",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Sports",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "Technology",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: RectangleGroupIcon,
//   },
//   {
//     title: "Special Offers",
//     description: "Explore limited-time deals and bundles",
//     icon: TagIcon,
//   },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <Link to={`/${title}`} >
        <MenuItem className="flex items-center gap-3 rounded-lg" key={key}>
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Categories
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to='/'> <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem></Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
       <Link to='/contact'><ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem></Link> 
      </Typography>
    </List>
  );
}
 
function Navbars() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Router>
    <Navbar className="mx-auto max-w-screen px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
      <Link to='/'><img src={log2} className="h-11"></img></Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
         <Link to='/login'><Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button></Link> 
          <Link to='/signup'><Button variant="gradient" size="sm">
            Sign In
          </Button></Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
    <Routes>
        <Route path="/" element={<ShuffleHero/>}></Route>
        <Route path="/health" element={<Health/>}></Route>
        <Route path="/sports" element={<Sports/>}></Route>
        <Route path="/business" element={<Buissness/>}></Route>
        <Route path="/entertainment" element={<Entertainment/>}></Route>
        <Route path="/general" element={<General/>}></Route>
        <Route path="/science" element={<Science/>}></Route>
        <Route path="/technology" element={<Technology/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </Router>
  );
}

export default Navbars;