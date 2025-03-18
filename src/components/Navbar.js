import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <>
      <Fragment>
        {/* search-box-layout */}
        <div className="wraper_flyout_search">
          <div className="table">
            <div className="table-cell">
              <div className="flyout-search-layer" />
              <div className="flyout-search-layer" />
              <div className="flyout-search-layer" />
              <div className="flyout-search-close">
                <span className="flyout-search-close-line" />
                <span className="flyout-search-close-line" />
              </div>
              <div className="flyout_search">
                <div className="flyout-search-title">
                  <h4>Search</h4>
                </div>
                <div className="flyout-search-bar">
                  <form role="search" method="get" action="#">
                    <div className="form-row">
                      <input
                        type="search"
                        placeholder="Type to search..."
                        defaultValue=""
                        name="s"
                        required=""
                      />
                      <button type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* search-box-layout end */}
        {/* main header */}
        <header className="main-header style-seven style-eight">
          {/* header-upper */}
          <div className="header-upper">
            <div className="container">
              <div className="inner-container clearfix">
                <div className="left-content pull-left">
                  <figure className="logo-box">
                    <a href="index.html">
                      <img src="./assets/images/logo-8.png" alt="" />
                    </a>
                  </figure>
                </div>
                <div className="right-content pull-right">
                  <div className="info-box">
                    <div className="icon-box">
                      <i className="flaticon-telephone" />
                    </div>
                    <h3>
                      <a href="tel:0029191762">002 9191762</a>
                    </h3>
                    <div className="text">Call for any Support</div>
                  </div>
                  <div className="info-box">
                    <div className="icon-box">
                      <i className="flaticon-placeholder" />
                    </div>
                    <h3>Janakpuri, Delhi, India</h3>
                    <div className="text">Main Office location</div>
                  </div>
                  <ul className="social-list">
                    <li>
                      <a href="#">
                        <i className="fab fa-skype" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* header-upper end */}
          {/* header-bottom */}
          <div className="header-bottom">
            <div className="container">
              <div className="outer-container">
                <div className="nav-outer clearfix">
                  <div className="menu-area pull-left clearfix">
                    <nav className="main-menu navbar-expand-lg">
                      <div className="navbar-header">
                        {/* Toggle Button */}
                        <button
                          type="button"
                          className="navbar-toggle"
                          data-toggle="collapse"
                          data-target=".navbar-collapse"
                        >
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                      </div>
                      <div className="navbar-collapse collapse clearfix">
                        <ul className="navigation clearfix">
                          <li className="current dropdown">
                            <a href="#">Home</a>
                            <ul>
                              <li>
                                <a href="index-2.html">Home Factory</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Industry</a>
                              </li>
                              <li>
                                <a href="index-4.html">Home Construction</a>
                              </li>
                              <li>
                                <a href="index-5.html">Home Oil &amp; Gas</a>
                              </li>
                              <li>
                                <a href="index-6.html">Home Power Energy</a>
                              </li>
                              <li>
                                <a href="index-7.html">
                                  Home Industrial Machinery
                                </a>
                              </li>
                              <li>
                                <a href="index-8.html">
                                  Home Fabric &amp; Textile
                                </a>
                              </li>
                              <li>
                                <a href="index-9.html">
                                  Home Medical Equepments
                                </a>
                              </li>
                              <li className="dropdown">
                                <a href="#">Header Styles</a>
                                <ul>
                                  <li>
                                    <a href="index-2.html">Header Style 01</a>
                                  </li>
                                  <li>
                                    <a href="index-3.html">Header Style 02</a>
                                  </li>
                                  <li>
                                    <a href="index-4.html">Header Style 03</a>
                                  </li>
                                  <li>
                                    <a href="index-5.html">Header Style 04</a>
                                  </li>
                                  <li>
                                    <a href="index-6.html">Header Style 05</a>
                                  </li>
                                  <li>
                                    <a href="index-7.html">Header Style 06</a>
                                  </li>
                                  <li>
                                    <a href="index-8.html">Header Style 07</a>
                                  </li>
                                  <li>
                                    <a href="index-9.html">Header Style 08</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Page</a>
                            <ul>
                              <li className="dropdown">
                                <a href="#">About Page</a>
                                <ul>
                                  <li>
                                    <a href="about.html">About Type 01</a>
                                  </li>
                                  <li>
                                    <a href="about-2.html">About Type 02</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <a href="#">Team Page</a>
                                <ul>
                                  <li>
                                    <a href="team.html">Team Type 01</a>
                                  </li>
                                  <li>
                                    <a href="team-2.html">Team Type 02</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <a href="#">Service Page</a>
                                <ul>
                                  <li>
                                    <a href="service.html">Service Type 01</a>
                                  </li>
                                  <li>
                                    <a href="service-2.html">Service Type 02</a>
                                  </li>
                                  <li>
                                    <a href="service-3.html">Service Type 03</a>
                                  </li>
                                  <li>
                                    <a href="service-single.html">
                                      Service Single 01
                                    </a>
                                  </li>
                                  <li>
                                    <a href="service-single-2.html">
                                      Service Single 02
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <a href="#">Shop Page</a>
                                <ul>
                                  <li>
                                    <a href="shop.html">Shop Type 01</a>
                                  </li>
                                  <li>
                                    <a href="shop-2.html">Shop Type 02</a>
                                  </li>
                                  <li>
                                    <a href="shop-single.html">Single Shop</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="history.html">Our History</a>
                              </li>
                              <li>
                                <a href="partner.html">Our Partners</a>
                              </li>
                              <li>
                                <a href="testimonial.html">Our Testimonial</a>
                              </li>
                              <li>
                                <a href="gallery.html">Our Gallery</a>
                              </li>
                              <li>
                                <a href="coming-soon.html">Coming Soon</a>
                              </li>
                              <li>
                                <a href="error.html">Error Page</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Case Studies</a>
                            <ul>
                              <li>
                                <a href="case.html">Case Type 01</a>
                              </li>
                              <li>
                                <a href="case-2.html">Case Type 02</a>
                              </li>
                              <li>
                                <a href="case-3.html">Case Type 03</a>
                              </li>
                              <li>
                                <a href="case-4.html">Case Type 04</a>
                              </li>
                              <li>
                                <a href="case-single.html">Case Single 01</a>
                              </li>
                              <li>
                                <a href="case-single-2.html">Case Single 02</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Blog</a>
                            <ul>
                              <li>
                                <a href="blog-grid.html">Blog Grid</a>
                              </li>
                              <li>
                                <a href="blog-classic.html">Blog Classic</a>
                              </li>
                              <li>
                                <a href="blog-single.html">Blog Single</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Contact</a>
                            <ul>
                              <li>
                                <a href="contact.html">Contact Type 01</a>
                              </li>
                              <li>
                                <a href="contact-2.html">Contact Type 02</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="info-box pull-right clearfix">
                    <div className="btn-box">
                      <a href="#">
                        Get Free Quote
                        <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                    <div className="search-box">
                      <div className="header-flyout-searchbar">
                        <i className="fa fa-search" />
                      </div>
                    </div>
                    <div className="shop-cart">
                      <a href="shop.html">
                        <i className="flaticon-shopping-bag" />
                        <span>0</span>
                      </a>
                    </div>
                    <div className="nav-box">
                      <div className="nav-btn nav-toggler navSidebar-button clearfix">
                        <span className="icon" />
                        <span className="icon" />
                        <span className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-bottom end */}
        </header>
      </Fragment>
    </>
  );
};

export default Navbar;
