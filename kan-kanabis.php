<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Male_Fashion Template">
    <meta name="keywords" content="Male_Fashion, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Kan-Kanabis</title>
    <link rel="icon" type="image/x-icon" href="/img/icon/icon_logo.png">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
    rel="stylesheet">

    <!-- Css Styles -->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="css/elegant-icons.css" type="text/css">
    <link rel="stylesheet" href="css/magnific-popup.css" type="text/css">
    <link rel="stylesheet" href="css/nice-select.css" type="text/css">
    <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css">
    <link rel="stylesheet" href="css/slicknav.min.css" type="text/css">
    <link rel="stylesheet" href="css/style.css" type="text/css">
</head>

<body>
    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Offcanvas Menu Begin -->
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__option">
            <div class="offcanvas__links">
                <a id="logout-resp" type  = "button" onclick = "logout()" style="cursor: pointer;">Log Out</a>
                <a id="login-resp" href  = "login.html">Sign In</a>
                <a id="or-resp" style = "font-style: italic;">or</a>
                <a id="register-resp" href  = "register.html">Sign Up</a>
            </div>
           
        </div>
        <div id="mobile-menu-wrap"></div>
        <div class="offcanvas__text">
            <p class="username" style = "font-weight:bold; font-size: 15px"></p>
            <a class = "admin-button" href = "admin.html">ADMIN PAGE</a>
        </div>
    </div>
    <!-- Offcanvas Menu End -->

    <!-- Header Section Begin -->
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-7">
                    <div class="header__top__left">
                            <p class = "username"></p>
                            <a class = "admin-button" href = "admin.html">ADMIN PAGE</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-5">
                        <div class="header__top__right">
                        <div class="header__top__links">
                                <a id="loginLink" href="./login.html">Login</a>
                                <a id="signUpLink" href="./register.html">Sign up</a>
                                <a id="logoutLink" type = "button" onclick = "logout()" style="cursor: pointer;">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div class="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <nav class="header__menu mobile-menu">
                    <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li class="active"><a href="./shop.html">Shop</a>
                                <ul class="dropdown">
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                </ul>
                            </li>
                            <li><a href="#">About</a>
                                <ul class="dropdown">
                                    <li><a href="./about.html">About Us</a></li>
                                    <li><a href="./blog.html">Collections</a> </li>
                               </ul>
                            </li>
                            <li><a href="./contact.html">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
              
            </div>
            <div class="canvas__open"><i class="fa fa-bars"></i></div>
        </div>
    </header>
    <!-- Header Section End -->

    <!-- Shop Details Section Begin -->
    <section class="shop-details">
        <div class="product__details__pic">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product__details__breadcrumb">
                            <a href="./index.html">Home</a>
                            <a href="./shop.html">Shop</a>
                            <span>Product Details</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-3">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                    <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/kanabis-prev1.jpg">
                                    </div>
                                </a>
                            </li>                     
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-9">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__pic__item">
                                    <img src="img/shop-details/kanabis-prev1.jpg" alt="">
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="product__details__content">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                    <div class="product__details__text">
    <h4>Kan Kanabis</h4>
    <h3>₱549.00</h3>
    <p>This is a silkscreen-printed T-Shirt with the logo printed on the front, and an unknown girl face on the back. This is made out of 100% cotton, providing comfort and style to your fit.</p>
    <div class="product__details__option">
        <div class="product__details__option__size">
            <span>Size:</span>
            <label for="xxl">
                <input type="radio" id="xxl" name="size" value="xxl"> xxl
            </label>
            <label class="active" for="xl">
                <input type="radio" id="xl" name="size" value="xl"> xl
            </label>
            <label for="l">
                <input type="radio" id="l" name="size" value="l"> l
            </label>
            <label for="sm">
                <input type="radio" id="sm" name="size" value="s"> s
            </label>
        </div>
    </div>
    <div class="product__details__cart__option">
        <div class="quantity">
            <div class="pro-qty">
                <input type="number" id="quantityInput" value="1" min="1">
            </div>
        </div>
        <button type="button" class="primary-btn" id="add-to-cart-btn14" onclick="addProductToCart('product14');">add to cart</button>
    </div>
    <div class="product__details__last__option">
        <h5><span>Guaranteed Safe Checkout</span></h5>
        <img src="img/jat.png" alt=""><img src="img/paypal.png" alt="">
    </div>
</div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product__details__tab">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#tabs-5"
                                    role="tab">Description</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shop Details Section End -->

    <!-- Related Section Begin -->
    <section class="related spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="related-title" style="color: white">Related Product</h3>
                </div>
            </div>
            <div class="row">
            <?php

$display1 = rand(1,14);
$display2 = rand(1,14);
$display3 = rand(1,14);
$display4 = rand(1,14);

if ($display1 === $display2 || $display1 === $display3 || $display1 === $display4) {
    $display1 = rand(1, 14);
}
if ($display2 === $display3 || $display2 === $display4) {
    $display2 = rand(1, 14);
}
if ($display3 === $display4) {
    $display3 = rand(1, 14);
}


switch($display1){

case 1:
echo '
      <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
       <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Desolated - Black</h6>
            <a href="kan-desolated-black.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 2:
echo'
<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-14.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Dyob 1st Release - White</h6>
            <a href="kan-dyob-white.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 3:
     echo'
<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Monogram Logo - Black</h6>
            <a href="kan-mono-black.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;


case 4:
    echo'
<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Dyob 1st Release - Black</h6>
            <a href="kan-dyob-black.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 5:
    echo '
    <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
            </div>
            <div class="product__item__text">
                <h6>Kan Nude Logo - Black</h6>
                <a href="kan-nude-logo-black.php" class="add-cart">+ Add To Cart</a>
                <h5>₱549</h5>
            </div>
        </div>
    </div>';
break;

case 6: 
    echo'
<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Monogram Logo - White</h6>
            <a href="kan-mono-white.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 7:
    echo'
<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Monogram Logo - Black</h6>
            <a href="kan-mono-black.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 8:
    echo'

<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-9.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Girl Fuck Everyone - Black</h6>
            <a href="kan-girl-black.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 9:
    echo'

<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-10.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Girl Fuck Everyone -  Yellow</h6>
            <a href="kan-girl-yellow.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 10:
    echo'
<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-11.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Girl Fuck Everyone - Blue</h6>
            <a href="kan-girl-blue.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;


case 11:
    echo'
<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-12.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Monogram Logo - White</h6>
            <a href="kan-mono-white.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 12:
    echo'

<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-13.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Kanabis - White Shirt</h6>
            <a href="kan-kanabis.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 13:
    echo'

<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-15.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Sin Island - White</h6>
            <a href="kan-sin-island.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

case 14:
    echo'

<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-16.jpg">
        </div>
        <div class="product__item__text">
            <h6>Kan Desolated - White</h6>
            <a href="kan-desolated-white.php" class="add-cart">+ Add To Cart</a>
            <h5>₱549</h5>
        </div>
    </div>
</div>';
break;

}

switch($display2){

    case 1:
        echo '
              <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
               <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Desolated - Black</h6>
                    <a href="kan-desolated-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 2:
        echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-14.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Dyob 1st Release - White</h6>
                    <a href="kan-dyob-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 3:
             echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - Black</h6>
                    <a href="kan-mono-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        
        case 4:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Dyob 1st Release - Black</h6>
                    <a href="kan-dyob-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 5:
            echo '
            <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
                    </div>
                    <div class="product__item__text">
                        <h6>Kan Nude Logo - Black</h6>
                        <a href="kan-nude-logo-black.php" class="add-cart">+ Add To Cart</a>
                        <h5>₱549</h5>
                    </div>
                </div>
            </div>';
        break;
        
        case 6: 
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - White</h6>
                    <a href="kan-mono-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 7:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - Black</h6>
                    <a href="kan-mono-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 8:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-9.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone - Black</h6>
                    <a href="kan-girl-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 9:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-10.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone -  Yellow</h6>
                    <a href="kan-girl-yellow.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 10:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-11.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone - Blue</h6>
                    <a href="kan-girl-blue.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        
        case 11:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-12.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - White</h6>
                    <a href="kan-mono-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 12:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-13.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Kanabis - White Shirt</h6>
                    <a href="kan-kanabis.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 13:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-15.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Sin Island - White</h6>
                    <a href="kan-sin-island.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 14:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-16.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Desolated - White</h6>
                    <a href="kan-desolated-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
}

switch($display3){
    case 1:
        echo '
              <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
               <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Desolated - Black</h6>
                    <a href="kan-desolated-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 2:
        echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-14.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Dyob 1st Release - White</h6>
                    <a href="kan-dyob-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 3:
             echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - Black</h6>
                    <a href="kan-mono-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        
        case 4:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Dyob 1st Release - Black</h6>
                    <a href="kan-dyob-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 5:
            echo '
            <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
                    </div>
                    <div class="product__item__text">
                        <h6>Kan Nude Logo - Black</h6>
                        <a href="kan-nude-logo-black.php" class="add-cart">+ Add To Cart</a>
                        <h5>₱549</h5>
                    </div>
                </div>
            </div>';
        break;
        
        case 6: 
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - White</h6>
                    <a href="kan-mono-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 7:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - Black</h6>
                    <a href="kan-mono-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 8:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-9.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone - Black</h6>
                    <a href="kan-girl-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 9:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-10.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone -  Yellow</h6>
                    <a href="kan-girl-yellow.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 10:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-11.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone - Blue</h6>
                    <a href="kan-girl-blue.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        
        case 11:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-12.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - White</h6>
                    <a href="kan-mono-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 12:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-13.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Kanabis - White Shirt</h6>
                    <a href="kan-kanabis.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 13:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-15.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Sin Island - White</h6>
                    <a href="kan-sin-island.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 14:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-16.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Desolated - White</h6>
                    <a href="kan-desolated-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;

}
switch($display4){
    case 1:
        echo '
              <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
               <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Desolated - Black</h6>
                    <a href="kan-desolated-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 2:
        echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-14.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Dyob 1st Release - White</h6>
                    <a href="kan-dyob-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 3:
             echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - Black</h6>
                    <a href="kan-mono-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        
        case 4:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Dyob 1st Release - Black</h6>
                    <a href="kan-dyob-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 5:
            echo '
            <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
                    </div>
                    <div class="product__item__text">
                        <h6>Kan Nude Logo - Black</h6>
                        <a href="kan-nude-logo-black.php" class="add-cart">+ Add To Cart</a>
                        <h5>₱549</h5>
                    </div>
                </div>
            </div>';
        break;
        
        case 6: 
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - White</h6>
                    <a href="kan-mono-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 7:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - Black</h6>
                    <a href="kan-mono-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 8:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-9.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone - Black</h6>
                    <a href="kan-girl-black.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 9:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-10.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone -  Yellow</h6>
                    <a href="kan-girl-yellow.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 10:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-11.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Girl Fuck Everyone - Blue</h6>
                    <a href="kan-girl-blue.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        
        case 11:
            echo'
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-12.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Monogram Logo - White</h6>
                    <a href="kan-mono-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 12:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-13.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Kanabis - White Shirt</h6>
                    <a href="kan-kanabis.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 13:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-15.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Sin Island - White</h6>
                    <a href="kan-sin-island.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;
        
        case 14:
            echo'
        
        <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-16.jpg">
                </div>
                <div class="product__item__text">
                    <h6>Kan Desolated - White</h6>
                    <a href="kan-desolated-white.php" class="add-cart">+ Add To Cart</a>
                    <h5>₱549</h5>
                </div>
            </div>
        </div>';
        break;

}



?>
            </div>
        </div>
    </section>
    <!-- Related Section End -->

    <!-- Footer Section Begin -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer__about">
                        <div class="footer__logo">
                            <a href="#"><img src="img/logo.png" alt=""></a>
                        </div>
                        <p>Shirt that suits your fashion</p>

                    </div>
                </div>
                <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Clothing Store</a></li>
                         
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Services</h6>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                         
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                  
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Section End -->

    <!-- Search Begin -->
      
    <!-- Search End -->

    <!-- Js Plugins -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.nice-select.min.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/jquery.slicknav.js"></script>
    <script src="js/mixitup.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
    <script src = "https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
    <script src = "https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js"></script>
    <script src = "https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>
    <script src = "js/login.js"></script>
    <script src = "js/loggedoutclick.js"></script>
    <script src="js/createUserCart.js"></script>
    <script src="js/fetchProducts.js"></script>
    <script src="js/addProductToCart.js"></script>
   
</body>

</html>