import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Main extends Component {

    constructor(props){
        super(props)
        this.getBarang=this.getBarang.bind(this);
        this.state={
            datas: [], 
            listCategory: []
        }
    }


componentDidMount(){
    
     this.getBarang()
}

getBarang(){
    fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then(response => {
                let listdummy= []
                response.forEach(element => {
                   let test = listdummy.find(e=>{
                       if(e.category === element.category){
                           return true
                       }else{
                           return false
                       }

                   })
                   if(!test){
                       listdummy.push(element)
                   }
                   
                });
                this.setState({listCategory:listdummy})
                console.log("ini listnya" +this.state.listCategory)
                this.setState({
                  datas: response,
                });
                console.log(response);
              }).catch((reject) => {
                alert(reject);
              });
}

    
    render(){

        const {datas } = this.state;
        console.log("ini data data ",datas);

        const dataArr = datas.reduce((unique, currentValue) => {
            return unique.find(item => item.category === currentValue.category)
                ? unique
                : [...unique, currentValue];
        }, []);


        return (

        
            <div className="wrappage">
        <header className="relative full-width">
          <div className=" container-web relative">
            <div className=" container">
              <div className="row">
                <div className=" header-top">
                  <p className="contact_us_header col-md-4 col-xs-12 col-sm-3 clear-margin">
                    <img src="img/icon_phone_top.png" alt="Icon Phone Top Header" /> Call us <span className="text-red bold">070-7782-7137</span>
                  </p>
                  <div className="menu-header-top text-right col-md-8 col-xs-12 col-sm-6 clear-padding">
                    <ul className="clear-margin">
                      <li className="relative"><Link to="#">My Account</Link></li>
                      <li className="relative"><Link to="#">Wishlist</Link></li>
                      <li className="relative">
                        <Link to="#">EN</Link>
                        <ul>
                          <li className="relative"><Link to="#">JP</Link></li>
                          <li className="relative"><Link to="#">EN</Link></li>
                          <li className="relative"><Link to="#">CN</Link></li>
                        </ul>
                      </li>
                      <li className="relative">
                        <Link to="#">USD</Link>
                        <ul>
                          <li className="relative"><Link to="#">AUD</Link></li>
                          <li className="relative"><Link to="#">USD</Link></li>
                          <li className="relative"><Link to="#">CAD</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="clearfix header-content full-width relative">
                  <div className="clearfix icon-menu-bar">
                    <i className="data-icon data-icon-arrows icon-arrows-hamburger-2 icon-pushmenu js-push-menu" />
                  </div>
                  <div className="clearfix logo">
                    <Link to="#"><img alt="Logo" src="img/logo.png" /></Link>
                  </div>
                  <div className="clearfix search-box relative float-left">
                    <form method="GET" action="/" className>
                      <div className="clearfix category-box relative">
                        <select name="cate_search">
                          <option>All Category</option>
                          <option>Food</option>
                          <option>Mobile &amp; Tablet</option>
                          <option>Electric Appliances</option>
                          <option>Electronics &amp; Technology</option>
                          <option>Fashion</option>
                          <option>Health &amp; Beauty</option>
                          <option>Mother &amp; Baby</option>
                          <option>Books &amp; Stationery</option>
                          <option>Home &amp; Life</option>
                          <option>Sports &amp; Outdoors</option>
                          <option>Auto &amp; Moto</option>
                          <option>Voucher Service</option>
                        </select>
                      </div>
                      <input type="text" name="s" placeholder="Enter keyword here . . ." />
                      <button type="submit" className="animate-default button-hover-red">Search</button>
                    </form>
                  </div>
                  <div className="clearfix icon-search-mobile absolute">
                    <i onclick="showBoxSearchMobile()" className="data-icon data-icon-basic icon-basic-magnifier" />
                  </div>
                  <div className="clearfix cart-website absolute" onclick="showCartBoxDetail()">
                    <img alt="Icon Cart" src="img/icon_cart.png" />
                    <p className="count-total-shopping absolute">2</p>
                  </div>
                  <div className="clearfix cart-website absolute" onclick="showCartBoxDetail()">
                    <img alt="Icon Cart" src="img/icon_cart.png" />
                    <p className="count-total-shopping absolute">2</p>
                  </div>
                  <div className="cart-detail-header border">
                    <div className="relative">
                      <div className="product-cart-son clearfix">
                        <div className="image-product-cart float-left center-vertical-image ">
                          <Link to="#"><img src="img/product_image_6-min.png" alt="" /></Link>
                        </div>
                        <div className="info-product-cart float-left">
                          <p className="title-product title-hover-black"><Link className="animate-default" to="#">MH02-Black09</Link></p>
                          <p className="clearfix price-product">$350 <span className="total-product-cart-son">(x1)</span></p>
                        </div>
                      </div>
                      <div className="product-cart-son">
                        <div className="image-product-cart float-left center-vertical-image">
                          <Link to="#"><img src="img/product_image_7-min.png" alt="" /></Link>
                        </div>
                        <div className="info-product-cart float-left">
                          <p className="title-product title-hover-black"><Link className="animate-default" to="#">Voyage Yoga Bag</Link></p>
                          <p className="clearfix price-product">$350 <span className="total-product-cart-son">(x1)</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="relative border no-border-l no-border-r total-cart-header">
                      <p className="bold clear-margin">Subtotal:</p>
                      <p className=" clear-margin bold">$700</p>
                    </div>
                    <div className="relative btn-cart-header">
                      <Link to="#" className="uppercase bold animate-default">view cart</Link>
                      <Link to="#" className="uppercase bold button-hover-red animate-default">checkout</Link>
                    </div>
                  </div>
                  <div className="mask-search absolute clearfix" onclick="hiddenBoxSearchMobile()" />
                  <div className="clearfix box-search-mobile">
                  </div>
                </div>
              </div>
              <div className="row">
                <Link className="menu-vertical hidden-md hidden-lg" onclick="showMenuMobie()">
                  <span className="animate-default"><i className="fa fa-list" aria-hidden="true" /> all categories</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="menu-header-v3 hidden-ipx">
            <div className="container">
              <div className="row">
                {/* Menu Page */}
                <div className="menu-header full-width">
                  <ul className="clear-margin">
                    <li onclick="showMenuHomeV3()"><Link className="animate-default" to="#"><i className="fa fa-list" aria-hidden="true" /> all categories</Link></li>
                    <li className="title-hover-red">
                      <Link className="animate-default" to="#">home</Link>
                      <ul className="sub-menu mega-menu">
                        <li className="relative">
                          <Link className="animate-default center-vertical-image" to="home_v1.html"><img src="img/home_1_menu-min.png" alt="" /></Link>
                          <p><Link to="home_v1.html">Home 1</Link></p>
                        </li>
                        <li className="relative">
                          <Link className="animate-default center-vertical-image" to="home_v2.html"><img src="img/home_2_menu-min.png" alt="" /></Link>
                          <p><Link to="home_v2.html">Home 2</Link></p>
                        </li>
                        <li className="relative">
                          <Link className="animate-default center-vertical-image" to="home_v3.html"><img src="img/home_3_menu-min.png" alt="" /></Link>
                          <p><Link to="home_v3.html">Home 3</Link></p>
                        </li>
                      </ul>
                    </li>
                    <li className="title-hover-red">
                      <Link className="animate-default" to="#">shop</Link>
                      <div className="sub-menu mega-menu-v2">
                        <ul>
                          <li>Catgory Type</li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v1.html">Category v1</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v1_2.html">Category v1.2</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v2.html">Category v2</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v2_2.html">Category v2.2</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v3.html">Category v3</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v3_2.html">Category v3.2</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v4.html">Category v4</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v4_2.html">Category v4.2</Link></li>
                        </ul>
                        <ul>
                          <li>Single Product Type</li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v1.html">Product Single 1</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v2.html">Product Single 2</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v3.html">Product Single 3</Link></li>
                        </ul>
                        <ul>
                          <li>Order Page</li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="cartpage.html">Cart Page</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="checkout.html">Checkout</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="compare.html">Compare</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="quickview.html">QuickView</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="trackyourorder.html">Track Order</Link></li>
                          <li className="title-hover-red"><Link className="animate-default clear-padding" to="wishlist.html">WishList</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li className="title-hover-red">
                      <Link className="animate-default" to="#">pages</Link>
                      <ul>
                        <li className="title-hover-red"><Link className="animate-default" to="about.html">About Us</Link></li>
                        <li className="title-hover-red"><Link className="animate-default" to="contact.html">Contact</Link></li>
                        <li className="title-hover-red"><Link className="animate-default" to="404.html">404</Link></li>
                      </ul>
                    </li>
                    <li className="title-hover-red">
                      <Link className="animate-default" to="#">Blog</Link>
                      <ul>
                        <li className="title-hover-red"><Link className="animate-default" to="blog.html">Blog Category</Link></li>
                        <li className="title-hover-red"><Link className="animate-default" to="blogdetail.html">Blog Detail</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* End Menu Page */}
              </div>
            </div>
          </div>
          <div className="clearfix menu_more_header menu-web menu-bg-white">
            <ul>
              <li><Link to="#"><img src="img/icon_hot_gray.png" alt="Icon Hot Deals" /> <p>Hot Deals</p></Link></li>
              <li><Link to="#"><img src="img/icon_food_gray.png" alt="Icon Food" /> <p>Food</p></Link></li>
              <li><Link to="#"><img src="img/icon_mobile_gray.png" alt="Icon Mobile & Tablet" /> <p>Mobile &amp; Tablet</p></Link></li>
              <li><Link to="#"><img src="img/icon_electric_gray.png" alt="Icon Electric Appliances" /> <p>Electric Appliances</p></Link></li>
              <li><Link to="#"><img src="img/icon_computer_gray.png" alt="Icon Electronics & Technology" /> <p>Electronics &amp; Technology</p></Link></li>
              <li><Link to="#"><img src="img/icon_fashion_gray.png" alt="Icon Fashion" /> <p>Fashion</p></Link></li>
              <li><Link to="#"><img src="img/icon_health_gray.png" alt="Icon Health & Beauty" /> <p>Health &amp; Beauty</p></Link></li>
              <li><Link to="#"><img src="img/icon_mother_gray.png" alt="Icon Mother & Baby" /> <p>Mother &amp; Baby</p></Link></li>
              <li><Link to="#"><img src="img/icon_book_gray.png" alt="Icon Books & Stationery" /> <p>Books &amp; Stationery</p></Link></li>
              <li><Link to="#"><img src="img/icon_home_gray.png" alt="Icon Home & Life" /> <p>Home &amp; Life</p></Link></li>
              <li><Link to="#"><img src="img/icon_sport_gray.png" alt="Icon Sports & Outdoors" /> <p>Sports &amp; Outdoors</p></Link></li>
              <li><Link to="#"><img src="img/icon_auto_gray.png" alt="Icon Auto & Moto" /> <p>Auto &amp; Moto</p></Link></li>
              <li><Link to="#"><img src="img/icon_voucher_gray.png" alt="Icon Voucher Service" /> <p>Voucher Service</p></Link></li>
            </ul>
          </div>
          <div className="header-ontop">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="clearfix logo">
                    <Link to="#"><img alt="Logo" src="img/logo.png" /></Link>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="menu-header">
                    <ul className="main__menu clear-margin">
                      <li className="title-hover-red">
                        <Link className="animate-default" to="#">home</Link>
                        <ul className="sub-menu mega-menu">
                          <li className="relative">
                            <Link className="animate-default center-vertical-image" to="home_v1.html"><img src="img/home_1_menu-min.png" alt="" /></Link>
                            <p><Link to="home_v1.html">Home 1</Link></p>
                          </li>
                          <li className="relative">
                            <Link className="animate-default center-vertical-image" to="home_v2.html"><img src="img/home_2_menu-min.png" alt="" /></Link>
                            <p><Link to="home_v2.html">Home 2</Link></p>
                          </li>
                          <li className="relative">
                            <Link className="animate-default center-vertical-image" to="home_v3.html"><img src="img/home_3_menu-min.png" alt="" /></Link>
                            <p><Link to="home_v3.html">Home 3</Link></p>
                          </li>
                        </ul>
                      </li>
                      <li className="title-hover-red">
                        <Link className="animate-default" to="#">shop</Link>
                        <div className="sub-menu mega-menu-v2">
                          <ul>
                            <li>Catgory Type</li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v1.html">Category v1</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v1_2.html">Category v1.2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v2.html">Category v2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v2_2.html">Category v2.2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v3.html">Category v3</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v3_2.html">Category v3.2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v4.html">Category v4</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v4_2.html">Category v4.2</Link></li>
                          </ul>
                          <ul>
                            <li>Single Product Type</li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v1.html">Product Single 1</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v2.html">Product Single 2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v3.html">Product Single 3</Link></li>
                          </ul>
                          <ul>
                            <li>Order Page</li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="cartpage.html">Cart Page</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="checkout.html">Checkout</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="compare.html">Compare</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="quickview.html">QuickView</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="trackyourorder.html">Track Order</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="wishlist.html">WishList</Link></li>
                          </ul>
                        </div>
                      </li>
                      <li className="title-hover-red">
                        <Link className="animate-default" to="#">pages</Link>
                        <ul>
                          <li className="title-hover-red"><Link className="animate-default" to="about.html">About Us</Link></li>
                          <li className="title-hover-red"><Link className="animate-default" to="contact.html">Contact</Link></li>
                          <li className="title-hover-red"><Link className="animate-default" to="404.html">404</Link></li>
                        </ul>
                      </li>
                      <li className="title-hover-red">
                        <Link className="animate-default" to="#">Blog</Link>
                        <ul>
                          <li className="title-hover-red"><Link className="animate-default" to="blog.html">Blog Category</Link></li>
                          <li className="title-hover-red"><Link className="animate-default" to="blogdetail.html">Blog Detail</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Box */}
        {/* Content Box */}
        <div className="relative full-width">
          {/* Breadcrumb */}
          <div className="container-web relative">
            <div className="container">
              <div className="row">
                <div className="breadcrumb-web">
                  <ul className="clear-margin">
                    <li className="animate-default title-hover-red"><Link to="#">Home</Link></li>
                    <li className="animate-default title-hover-red"><Link to="#">All Products</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End Breadcrumb */}
          {/* Content Category */}
          <div className="relative container-web">
            <div className="container">
              <div className="row ">
                {/* Sider Bar */}
                <div className="col-md-3 relative right-padding-default clear-padding" id="slide-bar-category">
                  <div className="col-md-12 col-sm-12 col-xs-12 sider-bar-category border bottom-margin-default">
                    <p className="title-siderbar bold">CATEGORIES</p>
                    <ul className="clear-margin list-siderbar">
                      {
                          this.state.listCategory.map(e=>(
                           <li><Link to="#">{e.category}</Link></li>
                            
                          ))
                      }
                     
                    </ul>
                  </div>
                  
                  <div className="col-md-12 col-sm-12 col-xs-12 relative border bottom-margin-default sider-bar-category">
                    
                    <div className="relative border no-border-t no-border-l no-border-r bottom-padding-default">
                      <p className="title-siderbar bold top-padding-default">color</p>
                      <ul className="check-box-custom list-color clearfix clear-margin">
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="relative">
                      <p className="title-siderbar bold top-padding-default">size</p>
                      <ul className="check-box-custom clear-margin">
                        <li>
                          <label>S
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>M
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>L
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>XL
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>XXL
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label>XXXL
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bottom-margin-default banner-siderbar col-md-12 col-sm-12 col-xs-12 clear-padding clearfix">
                    <div className="overfollow-hidden banners-effect5 relative center-vertical-image">
                      <img src="img/banner_siderbar-min.png" alt="Siderbar" />
                      <Link to="#" />
                    </div>
                  </div>
                </div>
                {/* End Sider Bar Box */}
                {/* Content Category */}
                <div className="col-md-9 relative clear-padding">
                  <div className="col-sm-12 col-xs-12 relative overfollow-hidden clear-padding button-show-sidebar">
                    <p onclick="showSideBar()"><span className="ti-filter" /> Sidebar</p>
                  </div>
                            <div className="banner-top-category-page bottom-margin-default effect-bubba zoom-image-hover overfollow-hidden relative full-width">
                    <img src="..." alt="" />
                    <Link to="#" />
                  </div>
        
                  <div className="bar-category bottom-margin-default border no-border-r no-border-l no-border-t">
                    <div className="row">
                      <div className="col-md-5 col-sm-5 col-xs-4">
                        <p className="title-category-page clear-margin">All Category</p>
                      </div>
                      
                      <div className="col-md-5 col-sm-5 col-xs-8 right-category-bar float-right relative">
                        <p className=" float-left">Showing 1 of 20</p>
                        <Link to="#" className=" float-left active-view-bar"><span className="icon-bar-category border ti-layout-grid3" /></Link>
                        <Link to="#" className=" float-left"><span className="icon-bar-category border ti-layout-list-thumb" /></Link>
                      </div>
                    </div>
                  </div>
                  {/* Product Content Category */}
                  <div className="row" style={{justifyContent:"flex-start"}}>
                    {
                        datas.map(e=>(
                            <div className="col-md-4 col-sm-4 col-xs-12 product-category relative effect-hover-boxshadow animate-default">
                      <div className="image-product relative overfollow-hidden">
                        <div className="center-vertical-image">
                          <img src={e.image} style={{maxWidth:"170px", minWidth:"170px", maxHeight:"200px", minHeight:"200px"}}alt="Product" />
                        </div>
                        <Link to="#" />
                        <ul className="option-product animate-default">
                          <li className="relative"><Link to="#"><i className="data-icon data-icon-ecommerce icon-ecommerce-bag" /></Link></li>
                          <li className="relative"><Link to="#"><i className="data-icondata-icon-basic icon-basic-heart" aria-hidden="true" /></Link></li>
                          <li className="relative"><Link to="javascript:;"><i className="data-icon data-icon-basic icon-basic-magnifier" aria-hidden="true" /></Link></li>
                        </ul>
                      </div>
                      <h3 className="title-product clearfix full-width title-hover-black"><Link to="#">{e.title}</Link></h3>
                      <p className="clearfix price-product"><span className="price-old">{e.price}</span> {e.price}</p>
                      <div className="clearfix ranking-product-category ranking-color">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star-half" aria-hidden="true" />
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </div>
                    </div>                    
                        ))
                    }
                </div>



                    
                  <div className="row">
                    <div className="pagging relative">
                      <ul>
                        <li><Link to="#"><i className="fa fa-angle-left" aria-hidden="true" /> First</Link></li>
                        <li className="active-pagging"><Link to="#">1</Link></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li className="dots-pagging">. . .</li>
                        <li><Link to="#">102</Link></li>
                        <li><Link to="#">Last <i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* End Product Content Category */}
                </div>
              </div>
            </div>
          </div>
          {/* End Sider Bar */}
          {/* Support */}
          <div className=" support-box full-width bg-red support_box_v2">
            <div className="container-web">
              <div className=" container">
                <div className="row">
                  <div className=" support-box-info relative col-md-3 col-sm-3 col-xs-6">
                    <img src="img/icon_free_ship_white-min.png" alt="Icon Free Ship" className="absolute" />
                    <p>free shipping</p>
                    <p>on order over $500</p>
                  </div>
                  <div className=" support-box-info relative col-md-3 col-sm-3 col-xs-6">
                    <img src="img/icon_support_white-min.png" alt="Icon Supports" className="absolute" />
                    <p>support</p>
                    <p>life time support 24/7</p>
                  </div>
                  <div className=" support-box-info relative col-md-3 col-sm-3 col-xs-6">
                    <img src="img/icon_patner_white-min.png" alt="Icon partner" className="absolute" />
                    <p>help partner</p>
                    <p>help all aspects</p>
                  </div>
                  <div className=" support-box-info relative col-md-3 col-sm-3 col-xs-6">
                    <img src="img/icon_phone_table_white-min.png" alt="Icon Phone Tablet" className="absolute" />
                    <p>contact with us</p>
                    <p>+07 (0) 7782 9137</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Content Box */}
        {/* Footer Box */}
        <footer className="relative full-width">
          <div className=" top-footer full-width">
            <div className="clearfix container-web relative">
              <div className=" container">
                <div className="row">
                  <div className="clearfix col-md-9 col-sm-12 clear-padding col-xs-12">
                    <div className="clearfix text-subscribe">
                      <i className="fa fa-envelope-o" aria-hidden="true" />
                      <p>sign up for newsletter</p>
                      <p>Get updates on discount &amp; counpons.</p>
                    </div>
                    <div className="clearfix form-subscribe">
                      <input type="text" name="email-subscribe" placeholder="Enter your email . . ." />
                      <button className="animate-default button-hover-red">subscribe</button>
                    </div>
                  </div>
                  <div className="clearfix col-md-3 col-sm-12 col-xs-12 clear-padding social-box text-right">
                    <Link to="#"><img src="img/social_tw-min.png" alt="Icon Social Twiter" /></Link>
                    <Link to="#"><img src="img/social_fa-min.png" alt="Icon Social Facebook" /></Link>
                    <Link to="#"><img src="img/social_int-min.png" alt="Icon Social Instagram" /></Link>
                    <Link to="#"><img src="img/social_yt-min.png" alt="Icon Social Youtube" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix container-web relative">
            <div className=" container clear-padding">
              <div className="row">
                <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                  <p>my account</p>
                  <ul className="list-footer">
                    <li><Link to="#">My Account</Link></li>
                    <li><Link to="#">Login</Link></li>
                    <li><Link to="#">My Cart</Link></li>
                    <li><Link to="#">My Wishlist</Link></li>
                    <li><Link to="#">My Compare</Link></li>
                  </ul>
                </div>
                <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                  <p>information</p>
                  <ul className="list-footer">
                    <li><Link to="#">Information</Link></li>
                    <li><Link to="#">Orders History</Link></li>
                    <li><Link to="#">My Wishlist</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Site Map</Link></li>
                  </ul>
                </div>
                <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                  <p>our services</p>
                  <ul className="list-footer">
                    <li><Link to="#">Product Recall</Link></li>
                    <li><Link to="#">Gift Vouchers</Link></li>
                    <li><Link to="#">Returns And Exchanges</Link></li>
                    <li><Link to="#">Shipping Options</Link></li>
                    <li><Link to="#">Terms Of Use</Link></li>
                  </ul>
                </div>
                <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                  <p>contact us</p>
                  <ul className="icon-footer">
                    <li><i className="fa fa-home" aria-hidden="true" /> 262 Milacina Mrest, Behansed, Paris</li>
                    <li><i className="fa fa-envelope" aria-hidden="true" /> contact@yourcompany.com</li>
                    <li><i className="fa fa-phone" aria-hidden="true" /> 070-7782-9137</li>
                    <li><i className="fa fa-fax" aria-hidden="true" /> 070-7782-9138</li>
                    <li><i className="fa fa-clock-o" aria-hidden="true" /> 09:00 AM - 18:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" bottom-footer full-width">
            <div className="clearfix container-web">
              <div className=" container">
                <div className="row">
                  <div className="clearfix col-md-7 clear-padding copyright">
                    <p className="clear-margin">Copyright © 2018 by EngoCreative. All Rights Reserved.</p>
                  </div>
                  <div className="clearfix footer-icon-bottom col-md-5 float-right clear-padding">
                    <div className="icon_logo_footer float-right">
                      <img src="img/image_payment_footer-min.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
           
        );
    }

}

export default Main;