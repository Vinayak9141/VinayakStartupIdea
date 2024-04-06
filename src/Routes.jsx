import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SERVICE = React.lazy(() => import("pages/SERVICE"));
const SERVICEFour = React.lazy(() => import("pages/SERVICEFour"));
const SERVICETwo = React.lazy(() => import("pages/SERVICETwo"));
const SERVICEOne = React.lazy(() => import("pages/SERVICEOne"));
const SERVICEThree = React.lazy(() => import("pages/SERVICEThree"));
const ProductDetailspage = React.lazy(() => import("pages/ProductDetailspage"));
const Error = React.lazy(() => import("pages/Error"));
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const Account = React.lazy(() => import("pages/Account"));
const CheckOut = React.lazy(() => import("pages/CheckOut"));
const Cart = React.lazy(() => import("pages/Cart"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const CategoryDropdown = React.lazy(() => import("pages/CategoryDropdown"));
const AccountDropdownWithaccount = React.lazy(() =>
  import("pages/AccountDropdownWithaccount")
);
const LogIn = React.lazy(() => import("pages/LogIn"));
const Login1 = React.lazy(() => import("pages/Login1"));
const Login2 = React.lazy(() => import("pages/Login2"));
const Login3 = React.lazy(() => import("pages/Login3"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const Myorder = React.lazy(() => import("pages/Myorder"));
const MyCancellation = React.lazy(() => import("pages/MyCancellation"));
const Myreviews = React.lazy(() => import("pages/Myreviews"));
const ECommerceHomePage = React.lazy(() => import("pages/ECommerceHomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<AccountDropdownWithaccount />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/ecommercehomepage" element={<ECommerceHomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/login3" element={<Login3 />} />
          <Route
            path="/accountdropdownwithaccount"
            element={<AccountDropdownWithaccount />}
          />
          <Route path="/categorydropdown" element={<CategoryDropdown />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
          <Route path="/productdetailspage" element={<ProductDetailspage />} />
          <Route path="/servicethree" element={<SERVICEThree />} />
          <Route path="/serviceone" element={<SERVICEOne />} />
          <Route path="/servicetwo" element={<SERVICETwo />} />
          <Route path="/servicefour" element={<SERVICEFour />} />
          <Route path="/service" element={<SERVICE />} />
          <Route path="/myorder" element={<Myorder />} />
          <Route path="/mycancellation" element={<MyCancellation />} />
          <Route path="/myreviews" element={<Myreviews />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
