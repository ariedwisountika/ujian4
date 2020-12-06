import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {


    render(){
        return (
            <div className="pushmenu menu-home5">
        <div className="menu-push">
          <span className="close-left js-close"><i className="fa fa-times f-20" /></span>
          <div className="clearfix" />
          <form role="search" method="get" id="searchform" className="searchform" action="/search">
            <div>
              <label className="screen-reader-text" htmlFor="q" />
              <input type="text" placeholder="Search for products" defaultValue name="q" id="q" autoComplete="off" />
              <input type="hidden" name="type" defaultValue="product" />
              <button type="submit" id="searchsubmit"><i className="ion-ios-search-strong" /></button>
            </div>
          </form>
          <ul className="nav-home5 js-menubar">
            <li className="level1 active dropdown">
              <Link to="#">Home</Link>
              <span className="icon-sub-menu" />
              <ul className="menu-level1 js-open-menu">
                <li className="level2"><Link to="home_v1.html" title>Home 1</Link></li>
                <li className="level2"><Link to="home_v2.html" title>Home 2</Link></li>
                <li className="level2"><Link to="home_v3.html" title>Home 3</Link></li>
              </ul>
            </li>
            <li className="level1 active dropdown"><Link to="#">Shop</Link>
              <span className="icon-sub-menu" />
              <div className="menu-level1 js-open-menu">
                <ul className="level1">
                  <li className="level2">
                    <Link to="#">Shop Type</Link>
                    <ul className="menu-level-2">
                      <li className="level3"><Link to="category_v1.html" title>Category V1</Link></li>
                      <li className="level3"><Link to="category_v1_2.html" title>Category V1.2</Link></li>
                      <li className="level3"><Link to="category_v2.html" title>Category V2</Link></li>
                      <li className="level3"><Link to="category_v2_2.html" title>Category V2.2</Link></li>
                      <li className="level3"><Link to="category_v3.html" title>Category V3</Link></li>
                      <li className="level3"><Link to="category_v3_2.html" title>Category V3.2</Link></li>
                      <li className="level3"><Link to="category_v4.html" title>Category V4</Link></li>
                      <li className="level3"><Link to="category_v4_2.html" title>Category V4.2</Link></li>
                    </ul>
                  </li>
                  <li className="level2">
                    <Link to="#">Single Product Type</Link>
                    <ul className="menu-level-2">
                      <li className="level3"><Link to="product_v1.html" title>Product Single 1</Link></li>
                      <li className="level3"><Link to="product_v2.html" title>Product Single 2</Link></li>
                      <li className="level3"><Link to="product_v3.html" title>Product Single 3</Link></li>
                    </ul>
                  </li>
                  <li className="level2">
                    <Link to="#">Order Page</Link>
                    <ul className="menu-level-2">
                      <li className="level3"><Link to="cartpage.html" title>Cart Page</Link></li>
                      <li className="level3"><Link to="checkout.html" title>Checkout</Link></li>
                      <li className="level3"><Link to="compare.html" title>Compare</Link></li>
                      <li className="level3"><Link to="quickview.html" title>Quickview</Link></li>
                      <li className="level3"><Link to="trackyourorder.html">Track Order</Link></li>
                      <li className="level3"><Link to="wishlist.html">WishList</Link></li>
                    </ul>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
            </li>
            <li className="level1">
              <Link to="#">Pages</Link>
              <span className="icon-sub-menu" />
              <ul className="menu-level1 js-open-menu">
                <li className="level2"><Link to="about.html" title="About Us ">About Us </Link></li>
                <li className="level2"><Link to="contact.html" title="Contact">Contact</Link></li>
                <li className="level2"><Link to="404.html" title={404}>404</Link></li>
              </ul>
            </li>
            <li className="level1">
              <Link to="#">Blog</Link>
              <span className="icon-sub-menu" />
              <ul className="menu-level1 js-open-menu">
                <li className="level2"><Link to="blog.html" title="Blog Standar">Blog Category</Link></li>
                <li className="level2"><Link to="blogdetail.html" title="Blog Gird">Blog Detail</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
           
        );
    }

}

export default Header;