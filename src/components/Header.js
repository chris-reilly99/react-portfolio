import React from "react";
// import { Route, Navigate, HashRouter } from "react-router-dom";
import Nav from "./Nav";
// import About from "../About";
// import Portfolio from "../Portfolio";
// import ContactForm from '../Contact';
// import Resume from '../Resume';


// class Header extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <header>
//           <Nav />
//         </header>

//         <div className="content">
//           <Route exact path="/" render={() => <Navigate to="/about" />} />
//           <Route path="/about" component= {About}/>
//           <Route path="/portfolio" component={Portfolio} />
//           <Route path="/contact" component={ContactForm}/>
//           <Route path="/resume" component={Resume}/>
//         </div>
//       </HashRouter>
//     );
//   }
// }

// export default Header;

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div className = "header">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}