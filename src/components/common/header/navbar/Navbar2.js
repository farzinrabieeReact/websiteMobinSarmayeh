// import React from "react";
// import styles from "./style.module.css";
// import classNames from "classnames";
//
// class NavBar2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sideBar: false,
//     };
//
//     this.handleSidebar = this.handleSidebar.bind(this);
//   }
//
//   handleSidebar() {
//     this.setState({
//       sideBar: !this.state.sideBar,
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <header className={styles.header}>
//           <div className={styles.navContainer}>
//             <span
//               className={styles.logo}
//               style={{ color: "#fff", fontStyle: "italic", fontWeight: "400" }}
//             >
//               React Navigation
//             </span>
//             <nav>
//               <ul
//                 className={styles.mainNav}
//                 style={
//                   this.state.sideBar ? { transform: "translateX(0)" } : null
//                 }
//               >
//                 <li>
//                   <a className={styles.mainNavLink} href="#">
//                     Dummy 1
//                   </a>
//                 </li>
//                 <li>
//                   <a className={styles.mainNavLink} href="#">
//                     Dummy 2
//                   </a>
//                 </li>
//                 <li>
//                   <a className={styles.mainNavLink} href="#">
//                     Dummy 4
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//             <button
//               onClick={this.handleSidebar}
//               // className={styles.navToggle`navToggle ${
//               //   this.state.sideBar ? "open" : null
//               // }`}
//               className={classNames(
//                 styles.navToggle,
//                 this.state.sideBar ? "open" : null
//               )}
//             >
//               <span />
//               <span />
//               <span />
//             </button>
//             <div
//               onClick={this.handleSidebar.bind(this)}
//               // className={styles.overlay`overlay ${
//               //   this.state.sideBar ? "open" : ""
//               // }`}
//               className={classNames(
//                 styles.overlay,
//                 this.state.sideBar ? "open" : ""
//               )}
//             />
//           </div>
//         </header>
//         <div className={styles.wrapper}></div>
//       </div>
//     );
//   }
// }
// export default NavBar2;

import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import classNames from "classnames";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "../style.module.css";

const Navbar2 = () => {
  const [state, setState] = useState({});
  const buttonRef = useRef();

  const handleClick = (e, id) => {
    e.stopPropagation();

    if (id === state.id) {
      setState({});
    } else {
      setState({ id: id });
    }
  };

  const handleClose = () => {
    setState({});
  };

  const handleRoute = (e) => {
    e.stopPropagation();
    buttonRef.current.click();
    setState({});
  };

  return (
    <>
      <nav
        className="navbar navbar-light bg-light fixed-top text-right p-0"
        style={{ minHeight: "6vh" }}
        onBlur={handleClose}
      >
        <div className="container-fluid">
          <button
            // className="navbar-toggler border-0"
            className={classNames(
              styles.iconHamburgeri,
              "navbar-toggler border-0"
            )}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={styled.menuLogo}>
            <Link to={"/"}>
              <img
                src={"/asset/images/Group1.png"}
                className="img-fluid"
                alt="alt"
                width={120}
              />
            </Link>
          </div>

          <div>
            <button className={styled.btnNav}>
              <a
                target="_blank"
                href="https://smart.mobinsb.ir"
                rel="noreferrer"
              >
                ???????????? ????????
              </a>
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                ref={buttonRef}
                onClick={handleClose}
              ></button>
              <div>
                <button className={styled.btnNav}>
                  <a
                    target="_blank"
                    href="https://smart.mobinsb.ir"
                    rel="noreferrer"
                  >
                    ???????????? ????????
                  </a>
                </button>
              </div>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="navbar-nav justify-content-end flex-grow-1 ">
                {/*<li className="nav-item">*/}
                {/*  <a className="nav-systemLink active" aria-current="page" href="#">*/}
                {/*    Home*/}
                {/*  </a>*/}
                {/*</li>*/}
                {item.map((itm, indexx) => (
                  <li
                    // className="nav-item dropdown"
                    className={classNames(
                      styles.itemParent,
                      "nav-item dropdown"
                    )}
                    onClick={(e) => handleClick(e, indexx)}
                    key={indexx}
                  >
                    {itm.sub ? (
                      <a
                        // className="nav-systemLink dropdown-toggle"
                        className={
                          // state.id === ind
                          classNames(
                            styles.subMenuParent,
                            "dropdown-toggle d-flex align-items-center justify-content-between nav-systemLink"
                          )
                        }
                        // style={state.id === ind && { color: "#ff5f00" }}
                        href={itm.route && itm.route}
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {itm.parent}
                        {itm.sub ? (
                          <div
                            className={
                              state.id === indexx ? styles.icon : styles.iconNot
                            }
                          >
                            <ChevronDown />{" "}
                          </div>
                        ) : null}
                      </a>
                    ) : itm.route.includes("http") ? (
                      <a
                        // className="nav-systemLink dropdown-toggle"
                        className={classNames(
                          styles.subMenuParent,
                          "dropdown-toggle d-flex align-items-center justify-content-between",
                          "nav-systemLink"
                        )}
                        href={itm.route && itm.route}
                        id="offcanvasNavbarDropdown"
                        role="button"
                        target="_blank"
                        onClick={handleRoute}
                        rel="noreferrer"

                        // data-bs-toggle="dropdown"
                        // aria-expanded="null"
                      >
                        {itm.parent}
                        {itm.sub ? <ChevronDown /> : null}
                      </a>
                    ) : (
                      <Link
                        // className="nav-systemLink dropdown-toggle"
                        className={classNames(
                          styles.subMenuParent,
                          "dropdown-toggle d-flex align-items-center justify-content-between",
                          "nav-systemLink"
                        )}
                        to={itm.route && itm.route}
                        id="offcanvasNavbarDropdown"
                        role="button"
                        onClick={handleRoute}

                        // data-bs-toggle="dropdown"
                        // aria-expanded="null"
                      >
                        {itm.parent}
                        {itm.sub ? <ChevronDown /> : null}
                      </Link>
                    )}

                    <ul
                      // className="dropdown-menu border-0 text-right"
                      className={classNames(
                        styles.subMenu,
                        "dropdown-menu border-0 text-right  px-3"
                      )}
                      aria-labelledby="offcanvasNavbarDropdown"
                    >
                      <li>
                        {itm.sub
                          ? itm.sub.map((item, index) => (
                              <div key={index}>
                                <a
                                  // className="dropdown-item disabled p-0 pr-2 mb-3 mt-4"
                                  className={
                                    item.route
                                      ? "dropdown-item  p-0 pr-2 mb-3 mt-4"
                                      : "dropdown-item disabled p-0 pr-2 mb-3 mt-4"
                                  }
                                  href={item.route && item.route}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {item.title}
                                </a>

                                <div className="d-flex flex-column">
                                  {item.text
                                    ? item.text.map((itm, ind) =>
                                        itm.route.includes("http") ? (
                                          <a
                                            className={styles.items}
                                            href={itm.route && itm.route}
                                            target="_blank"
                                            onClick={handleRoute}
                                            key={ind}
                                            rel="noreferrer"
                                          >
                                            <span className="ml-2"></span>
                                            {itm.text}
                                          </a>
                                        ) : (
                                          <Link
                                            className={styles.items}
                                            to={itm.route && itm.route}
                                            onClick={handleRoute}
                                            key={ind}
                                          >
                                            <span className="ml-2"></span>
                                            {itm.text}
                                          </Link>
                                        )
                                      )
                                    : null}
                                </div>
                                {/*{itm.sub.length &&*/}
                                {/*  itm.sub.length === index + 1 && <hr />}*/}
                                {/*<hr />*/}
                                {/*{itm.sub.length}*/}
                                {/*{console.log(*/}
                                {/*  "farzinzasf",*/}
                                {/*  itm.sub.length === index + 1*/}
                                {/*)}*/}
                                {/*)}*/}
                                {itm.sub.length !== index + 1 ? <hr /> : null}
                              </div>
                            ))
                          : null}
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
//
// let item = [
//   {
//     title: "???????? ?????????????????????",
//     text: [
//       {
//         text: "???????????? ????????",
//         route: "http://club.mobinsb.com/User/Login?q=",
//       },
//       { text: "???????????? ????????????", route: "/faq" },
//     ],
//   },
//   {
//     title: "?????????? ?? ????????????????????? ????????????????",
//     text: [
//       {
//         text: "???????????? ?????????????? ???????????? ????????",
//         route: "https://online.mobinsb.com/",
//       },
//       { text: "???????????? ?????????????? ???????????? ????????", route: "https://c.mobinsb.com/" },
//       {
//         text: "???????????? ?????????????? ???????????? ??????",
//         route: "https://coinonline.mobinsb.com/",
//       },
//       { text: "???????????? ???????? ??????????", route: " http://sahamedalat.mobinsb.com/" },
//       { text: "??????????????????? ?????????? ??????????", route: "hamrah" },
//     ],
//   },
//
//   {
//     title: "?????????? ???????????????????????",
//     text: [
//       { text: "???????? ?????????? ????????????", route: "securities" },
//       { text: "???????? ????????", route: "merchandise" },
//       { text: "???????? ??????????", route: "bourseEnerzhy" },
//       { text: "?????????? ??????????", route: "derivative" },
//     ],
//   },
// ];

let item = [
  // {
  //   title: "???????? ?????????????????????",
  //   text: [
  //     {
  //       text: "???????????? ????????",
  //       route: "http://club.mobinsb.com/User/Login?q=",
  //     },
  //     { text: "???????????? ????????????", route: "/faq" },
  //   ],
  // },
  // {
  //   title: "?????????? ?? ????????????????????? ????????????????",
  //   text: [
  //     {
  //       text: "???????????? ?????????????? ???????????? ????????",
  //       route: "https://online.mobinsb.com/",
  //     },
  //     { text: "???????????? ?????????????? ???????????? ????????", route: "https://c.mobinsb.com/" },
  //     {
  //       text: "???????????? ?????????????? ???????????? ??????",
  //       route: "https://coinonline.mobinsb.com/",
  //     },
  //     { text: "???????????? ???????? ??????????", route: " http://sahamedalat.mobinsb.com/" },
  //     { text: "??????????????????? ?????????? ??????????", route: "hamrah" },
  //   ],
  // },
  //
  // {
  //   title: "?????????? ???????????????????????",
  //   text: [
  //     { text: "???????? ?????????? ????????????", route: "securities" },
  //     { text: "???????? ????????", route: "merchandise" },
  //     { text: "???????? ??????????", route: "bourseEnerzhy" },
  //     { text: "?????????? ??????????", route: "derivative" },
  //   ],
  // },

  {
    parent: "??????????????",
    sub: [
      {
        title: "???????? ?????????????????????",
        text: [
          {
            text: "???????????? ????????",
            route: "https://smart.mobinsb.ir",
          },
          { text: "???????????? ????????????", route: "/faq" },
        ],
      },
      {
        title: "?????????? ?? ????????????????????? ????????????????",
        text: [
          {
            text: "???????????? ?????????????? ???????????? ????????",
            route: "https://online.mobinsb.ir/",
          },
          {
            text: "???????????? ?????????????? ???????????? ????????",
            route: "https://c.mobinsb.ir/",
          },
          {
            text: "???????????? ?????????????? ???????????? ??????",
            route: "https://coinonline.mobinsb.ir/",
          },
          {
            text: "???????????? ???????? ??????????",
            route: " http://sahamedalat.mobinsb.ir/",
          },
          { text: "??????????????????? ?????????? ??????????", route: "hamrah" },
        ],
      },

      {
        title: "?????????? ???????????????????????",
        text: [
          { text: "???????? ?????????? ????????????", route: "securities" },
          { text: "???????? ????????", route: "merchandise" },
          { text: "???????? ??????????", route: "bourseEnerzhy" },
          { text: "?????????? ??????????", route: "derivative" },
        ],
      },
    ],
  },

  {
    parent: "???????????? ??????????",
    sub: [
      {
        title: "???????? ?????????????????????????",
        text: [
          { text: "????????????????????????? ???? ????????", route: "fund" },
          { text: "???????????? ????????????", route: "/faq" },
        ],
      },
      {
        title: "????????????????????????? ??????????????????",
        text: [{ text: "?????????? ?????????????????????????", route: "/investmentFund" }],
      },
    ],
  },
  { parent: "???????????? ??????????????", route: "http://club.mobinsb.ir/" },
  {
    parent: "??????????",
    sub: [
      {
        title: "????????????????? ????????????",
        route: "https://club.mobinsb.ir/Course/Indexv",
      },
    ],
  },
  {
    parent: "???????????? ????",
    sub: [
      {
        title: "???????????? ???????????????????????",
        text: [
          { text: "??????????", route: "/about" },
          { text: "?????????? ???????????????", route: "/account" },
          // { text: "??????????   ", route: "" },
        ],
      },
      {
        title: "???????? ???? ???? ",
        text: [
          { text: "?????????????? ????????", route: "/contactus" },
          { text: "???????????? ???? ????", route: "/workwithus" },
        ],
      },
    ],
  },
  { parent: "?????? ?? ??????????", route: "/shoab" },
  { parent: "?????????? ???????????? ?? ????????????", route: "/TermsAndConditions" },
];

//
// import { Button } from "react-bootstrap";
// import { useState } from "react";
//
// function OffCanvasExample({ name, ...props }) {
//   const [show, setShow] = useState(false);
//
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow} className="me-2">
//         {name}
//       </Button>
//       <Offcanvas show={show} onHide={handleClose} {...props}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }
//
// function Example() {
//   return (
//     <>
//       {["start", "end", "top", "bottom"].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }
