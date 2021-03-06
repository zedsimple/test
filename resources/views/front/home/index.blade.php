@extends('layouts.front')
@section('assets')
<link rel="stylesheet" type="text/css" href="{!! asset('plugins/home/css/style.css') !!}">
<script type="text/javascript" src="{!! asset('plugins/home/js/jssor.slider-21.1.6.min.js') !!}"></script>
<script type="text/javascript" src="{!! asset('plugins/home/js/index.js') !!}"></script>
@endsection
@section('content')
@include('layouts.header')

<!-- body -->
<section class="home-body container">
    <!-- slideshow-->
    <section class="home-body-slideshow">
        <div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 1300px; height: 570px; visibility: hidden;">
            <div class="female-category category-menu-container">
                @include('front.category.female-category', ['female_categories' => $female_categories])
            </div>
            <div class="male-category category-menu-container">
                @include('front.category.male-category', ['male_categories' => $male_categories])
            </div>
            <!-- sub menu -->
            <section class="sub-menu">
                <ul class="nav navbar-nav">
                    <li><a href="" title="">TRANG CHỦ</a></li>
                    <li><a href="" title="">SHOP</a></li>
                    <li><a href="" title="">BỘ SƯU TẬP</a></li>
                    <li>
                        <a href="" title="" class="dropdown-toggle" data-toggle="dropdown" href="" aria-expanded="false">
                            ĐỊA ĐIỂM
                            <span style="margin-left:5px"><img src="http://i.imgur.com/4QUY0ge.png" alt=""></span>
                        </a>
                        <ul class="dropdown-menu sub-menu-dropdown">
                            <li><a href="" title="">Hà Nội</a></li>
                            <li><a href="" title="">TP. HCM</a></li>
                            <li><a href="" title="">Đà Nẵng</a></li>
                        </ul>
                    </li>
                </ul>
            </section><!-- end sub menu -->

            <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 1300px; height: 570px; overflow: hidden;" class="slideshow">
                <div data-p="225.00" style="display: none;">
                    <div class="row slide-2">
                        <div class="col-md-6 col-xs-6">
                            <img data-u="image" src="http://i.imgur.com/ErEelvp.jpg" />
                        </div>
                        <div class="col-md-6 col-xs-6">
                            <img data-u="image" src="http://i.imgur.com/EFBjjXM.jpg" style="width:100%;">
                        </div>
                     </div>
                </div>
                <div data-p="225.00" style="display: none;">
                    <div class="row slide-4">
                        <div class="col-md-6 col-xs-6">
                            <img data-u="image" src="http://i.imgur.com/ErEelvp.jpg" />
                        </div>
                        <div class="col-md-6 col-xs-6">
                            <div class="row col-md-12 col-xs-12">
                                <div class="col-md-6 col-xs-6"><img src="http://i.imgur.com/4BWKhkc.jpg" alt=""></div>
                                <div class="col-md-6 col-xs-6"><img src="http://i.imgur.com/yvh0xU1.jpg" alt=""></div>
                            </div>
                            <div class="row col-md-12 col-xs-12">
                                <img src="http://i.imgur.com/xul9n6y.jpg" alt="">
                            </div>
                        </div>
                     </div>
                </div>
                <div data-p="225.00" style="display: none;">
                    <div class="row slide-4">
                        <div class="col-md-6 col-xs-6">
                            <img data-u="image" src="http://i.imgur.com/ErEelvp.jpg" />
                        </div>
                        <div class="col-md-6 col-xs-6">
                            <div class="row col-md-12 col-xs-12">
                                <div class="col-md-6 col-xs-6"><img src="http://i.imgur.com/4BWKhkc.jpg" alt=""></div>
                                <div class="col-md-6 col-xs-6"><img src="http://i.imgur.com/yvh0xU1.jpg" alt=""></div>
                            </div>
                            <div class="row col-md-12 col-xs-12">
                                <img src="http://i.imgur.com/xul9n6y.jpg" alt="">
                            </div>
                        </div>
                     </div>
                </div>
                <div data-p="225.00" style="display: none;">
                    <div class="row slide-1">
                        <div class="col-md-12">
                            <img data-u="image" src="http://i.imgur.com/mjhcbGL.jpg" />
                        </div>
                     </div>
                </div>
            </div>
            <!-- Bullet Navigator -->
            <div data-u="navigator" class="jssorb05" style="bottom:16px;right:16px;" data-autocenter="1">
                <!-- bullet navigator item prototype -->
                <div data-u="prototype" style="width:16px;height:16px;"></div>
            </div>
            <!-- Arrow Navigator -->
            <span data-u="arrowleft" class="jssora22l" style="top:0px;left:10px;width:40px;height:58px;" data-autocenter="2"></span>
            <span data-u="arrowright" class="jssora22r" style="top:0px;right:-10px;width:40px;height:58px;" data-autocenter="2"></span>
        </div><!-- #endregion Jssor Slider End -->
    </section><!-- slideshow -->
    <div class="home-body-content clearfix">
        <!-- collection list container -->
        <div class="collection-list-container col-lg-3 col-md-3 col-sm-4">
            <aside class="collection-list">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse sidebar-navbar-collapse">
                    <ul class="nav navbar-nav collection-item-container">
                        @include('front.home.collection', ['collections' => $collections])
                    </ul>        
                </div>
            </aside>
        </div><!-- collection list container -->
        <div class="product-list-container col-lg-9 col-md-9 col-sm-8">
            <div class="product-list">
                <div class="kindof-product-container clearfix">
                    <ul class="row kindof-product">
                        <li class="active" data-target="newest"><a href="javascript:void(0)"><p>MỚI NHẤT</p></a></li>
                        <li data-target="most-like"><a href="javascript:void(0)"><p>THÍCH NHIỀU NHẤT</p></a></li>
                        <li data-target="discount"><a href="javascript:void(0)"><p>SALE</p></a></li>
                        <li data-target="tendency"><a href="javascript:void(0)"><p>XU HƯỚNG</p></a></li>
                    </ul>
                </div>
                <div class="product">
                    <div class="product-container">
                        <ul class="product-item-container clearfix">
                            @include('front.product.newestproduct', ['newest_products' => $newest_products])
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="home-footer">
    <div class="main-footer-container container">
        <div class="row">
            <div class="col-sm-4">
                <p>LIÊN HỆ</p>
                <a href="" title=""><p>0162.784.3619</p></a>
                <a href="" title=""><p>mixvn2016@gmail.com</p></a>
                <a href="" title=""><p>KẾT NỐI</p></a>
            </div>
            <div class="col-sm-4">
                <a href="" title=""><img src="http://i.imgur.com/whiYcw8.png" alt=""></a>
                <p>Tổng hợp và đem cả thế giới thời trang sôi</p>
                <p>động đến với bạn</p>
                <p>nơi bạn có thể tìm thấy bất kỳ món đồ nào</p>
                <p>một cách CHÍNH XÁC, NHANH CHÓNG, VÀ ƯNG Ý NHẤT.</p>
            </div>
            <div class="col-sm-4">
                <p>FIND US ON</p>
                <div class="contact-container row">
                    <div class="col-xs-12">
                        <div class="facebook-contact contact">
                            <a href="" title=""><img src="http://i.imgur.com/T7EQIQ7.png" alt=""></a>
                        </div>
                        <div class="instagram-contact contact">
                            <a href="" title=""><img src="http://i.imgur.com/vLop4mN.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="mix-contact contact">
                            <a href="" title=""><img src="http://i.imgur.com/NG7VQAP.jpg" alt=""></a>
                        </div>
                        <div class="zalo-contact contact">
                            <a href="" title=""><img src="http://i.imgur.com/BbdRLJm.png" alt=""></a>
                        </div>
                        <div class="youtube-contact contact">
                            <a href="" title=""><img src="http://i.imgur.com/BgqGlMO.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script type="text/javascript">
    $(document).ready(function(){
        Register.init();
        SlideShow.init();
        ProductDetail.init();
        SearchTagging.init();
        ProductShow.init();
        var collection_p = $(".collection-list");
        var collection_c = $(".collection-item-container");
        var collection_id = $("#collection-total-page");
        var collection_url = "http://localhost:8000/collection?page=";
        var append_pos = $(".collection-item-container");
        Scroll.init(collection_c, collection_p, collection_id, collection_url, append_pos);
    });
</script>
@endsection