$(document).ready(function () {
  $("#alert-login-modal").modal({
                  show: true,
                  keyboard: 'static',
                  backdrop: true
                });
  $(".phone-number-register-form").validate({
    rules: {
      phonenumber_register: {
        required: true,
        number: true,
        minlength: 9,
        maxlength: 12,
        remote: "/user/check_exist_phonenumber/"
      },
      password_register: {
        required: true,
        minlength: 6
      },
      repeatpassword_register: {
        required: true,
        equalTo: "#password_register"
      }
    },
    messages: {
      phonenumber_register: {
        required: "Nhập số điện thoại",
        number: "Số điện thoại ko hợp lệ",
        minlength: "Số điện thoại ko hợp lệ",
        maxlength: "Số điện thoại ko hợp lệ",
        remote: "Số điện thoại đã được đăng ký"
      },
      password_register: {
        required: "Bạn chưa nhập mật khẩu",
        minlength: "Mật khẩu quá ngắn"
      },
      repeatpassword_register: {
        required: "Nhập lại mật khẩu",
        equalTo: "Mật khẩu không khớp"
      }
    }
  });
  $(".phone-number-login-form").validate({
    rules: {
      phonenumber_login: {
        required: true
      },
      password_login: {
        required: true
      }
    },
    messages: {
      phonenumber_login: {
        required: "Nhập số điện thoại"
      },
      password_login: {
        required: "Bạn chưa nhập mật khẩu"
      }
    }
  });
  window.Register = {
    init: function() {
      $(".phone-register").on("click", function(){
        $(".gmail-register").toggle();
        $(".phone-number-register-box").toggle();
        $(".register-form-container").toggleClass("register-height");
        $("#register-box").on('hidden.bs.modal', function () {
          $(".gmail-register").show();
          $(".phone-number-register-box").hide();
          $(".register-form-container").removeClass("register-height");
        });
      });
      $(".phone-login").on("click", function(){
        $(".gmail-login").toggle();
        $(".phone-number-login-box").toggle();
        $(".login-form-container").toggleClass("login-height");
        $("#login-box").on('hidden.bs.modal', function () {
          $(".gmail-login").show();
          $(".phone-number-login-box").hide();
          $(".login-form-container").removeClass("login-height");
        });
      });
      $("#success-modal").modal({
        show: true,
        keyboard: 'static',
        backdrop: true
      });
    }
  };
  window.SlideShow = {
    init: function() {
      
      var jssor_1_SlideoTransitions = [
        [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
        [{b:1900,d:2000,x:-379,e:{x:7}}],
        [{b:1900,d:2000,x:-379,e:{x:7}}],
        [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
      ];

      var jssor_1_options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $CaptionSliderOptions: {
          $Class: $JssorCaptionSlideo$,
          $Transitions: jssor_1_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$
        }
      };

      var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

      //responsive code begin
      //you can remove responsive code if you don't want the slider scales while window resizing
      function ScaleSlider() {
          var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
          if (refSize) {
              refSize = Math.min(refSize, 1920);
              jssor_1_slider.$ScaleWidth(refSize);
          }
          else {
              window.setTimeout(ScaleSlider, 10);
          }
      }
      ScaleSlider();
      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);
      //responsive code end

    }
  };
  window.Scroll = {
    init: function(c, p, id, url, append_pos) {
      var current_page = id.attr("current-page");
      if(p.scrollTop() >= c.height() - p.height()) {
        if(current_page < id.attr("total-page")) {
          current_page++;
          $.ajax({
            async: true,
            url: url + current_page,
            type: "GET",
            dataType: "html",
            success: function(data) {
              c.append(data);
            }
          });
        }
      }
      p.scroll( function() {
        if(p.scrollTop() >= c.height() - p.height()) {
          if(current_page < id.attr("total-page")) {
            current_page++;
            $.ajax({
              async: true,
              url: url + current_page,
              type: "GET",
              dataType: "html",
              success: function(data) {
                append_pos.append(data);
              },
            });
          }
        }
      });
    }
  };
  window.ProductDetail = {
    init: function() {
      $(document).on("click", ".product-image-container", function(e) {
        e.preventDefault();
        $.ajax({
          async: true,
          type: 'GET',
          dataType: 'html',
          url: $(this).attr("href"),
          success: function(data) {
            $("body").prepend(data);
            $("#product-detail").modal({
              show: true,
              keyboard: 'static',
              backdrop: true
            });
            $("#product-detail").on('hidden.bs.modal', function () {
              $("#product-detail").remove();
            });
          }
        });
      });
    }
  };

  window.SearchTagging = {
    init: function() {
      // Hiện thanh menu nam nữ 
      $(".menu-header-container > li > a").on("click", function() {
        var target = $(this).attr("target");
        $(target).toggle();
      });
      $(".pft").on("click", function() {
        $(".category-menu-container").hide();
      });
      $(document).on("click", function() {
        $(".category-menu-container").hide();
      });
      $(".search-tagging > li > a").on("click", function() {
        cls = $(this).attr("class");
        if(cls) {
          if(cls.search("disabled") === -1) {
            if($(this).attr("value")) {
              value = $(this).attr("value");
            }
            length = $(".search-tag-element-container").length + 1;
            if(length) {
              if($(this).attr("class").search("product_feature") !== -1) {
                html = "<div class='search-tag-element-container' value='" + value + "'><a class='delete-search-tag' target='" + value + "' href='javascript:void(0)'>x</a><span class='search-tag-element'>" + value + "</span><input type='text' class='search-tag-element' name='product[feature][" + length + "]' value='" + value + "' /></div>";
              }
              else if($(this).attr("class").search("female") !== -1) {
                name = $(this).attr("name");
                html = "<div class='search-tag-element-container' value='" + value + "'><a class='delete-search-tag' target='" + value + "' href='javascript:void(0)'>x</a><span class='search-tag-element'>" + name + "</span><input type='text' class='search-tag-element' name='cate[female][" + length + "]' value='" + value + "' /></div>";
              }
              else if($(this).attr("class").search("male") !== -1) {
                name = $(this).attr("name");
                html = "<div class='search-tag-element-container' value='" + value + "'><a class='delete-search-tag' target='" + value + "' href='javascript:void(0)'>x</a><span class='search-tag-element'>" + name + "</span><input type='text' class='search-tag-element' name='cate[male][" + length + "]' value='" + value + "' /></div>";
              }
            }
            $(".search-tag-container").append(html);
          }
          else {
            length = $(".search-tag-container > .search-tag-element-container").length;
            for(i = 0; i < length; i++) {
              if($(".search-tag-container > .search-tag-element-container").eq(i).attr("value") === $(this).attr("value")) {
                $(".search-tag-container > .search-tag-element-container").eq(i).remove();
              }
            }
          }
        }
        else {
          if($(this).attr("value")) {
              value = $(this).attr("value");
          }
          length = $(".search-tag-element-container").length + 1;
          if(length) {
            if($(this).attr("class").search("product_feature") !== -1) {
              html = "<div class='search-tag-element-container' value='" + value + "'><a class='delete-search-tag' target='" + value + "' href='javascript:void(0)'>x</a><span class='search-tag-element'>" + value + "</span><input type='text' class='search-tag-element' name='product[feature][" + length + "]' value='" + value + "' /></div>";
            }
            else if($(this).attr("class").search("female") !== -1) {
              name = $(this).attr("name");
              html = "<div class='search-tag-element-container' value='" + value + "'><a class='delete-search-tag' target='" + value + "' href='javascript:void(0)'>x</a><span class='search-tag-element'>" + name + "</span><input type='text' class='search-tag-element' name='cate[female][" + length + "]' value='" + value + "' /></div>";
            }
            else if($(this).attr("class").search("male") !== -1) {
              name = $(this).attr("name");
              html = "<div class='search-tag-element-container' value='" + value + "'><a class='delete-search-tag' target='" + value + "' href='javascript:void(0)'>x</a><span class='search-tag-element'>" + name + "</span><input type='text' class='search-tag-element' name='cate[male][" + length + "]' value='" + value + "' /></div>";
            }
          }
          $(".search-tag-container").append(html);
        }
        $(this).toggleClass("disabled");
      });
      $(document).on("click", ".delete-search-tag", function() {
        length = $(".search-tag-container > .search-tag-element-container").length;
        for(i = 0; i < length; i++) {
          if($(".search-tag-container > .search-tag-element-container").eq(i).attr("value") === $(this).attr("target")) {
            $(".search-tag-container > .search-tag-element-container").eq(i).remove();
          }
        }
        length = $(".disabled").length;
        for(i = 0; i < length; i++) {
          if($(".disabled").eq(i).attr("value") === $(this).attr("target")) {
            $(".disabled").removeClass("disabled");
          }
        }
      });
    }
  };

  window.ProductShow = {
    init: function() {
      $('[data-toggle="tooltip"]').tooltip();
      p = $(".product");
      c = $(".product-item-container");
      length = $(".kindof-product > li").length;
      for(i = 0; i < length; i++) {
        if($(".kindof-product > li").eq(i).attr("class") == "active") {
          target = $(".kindof-product > li").eq(i).attr("data-target");
          url = target;
          id = "." + target + "-product-total-page";
        }
      }
      current_page = $(id).attr("current-page");
      total_page = $(id).attr("total-page");
      $(".kindof-product > li").on("click", function() {
        $(".product").scrollTop(0);
        for(i = 0; i < length; i++) {
          if($(".kindof-product > li").eq(i).attr("class") == "active") {
            $(".kindof-product > li").eq(i).attr("class", "");
          }
        }
        $(this).attr("class", "active");
        url = $(this).attr("data-target");
        $.ajax({
          asyn: true,
          url: "/product/" + url,
          type: "GET",
          dataType: "html",
          success: function(data) {
            $(".product-item-container").html(data);
            id = "." + url + "-product-total-page";
            current_page = $(id).attr("current-page");
            total_page = $(id).attr("total-page");
            $('[data-toggle="tooltip"]').tooltip();
          }
        });
      });
      $(".product").on("scroll", function() {
        if(p.scrollTop() >= c.height() - p.height()) {
          if(current_page < total_page) {
            current_page++;
            $.ajax({
              async: true,
              url: "/product/" + url + "?page=" + current_page,
              type: "GET",
              dataType: "html",
              success: function(data) {
                $(".product-item-container").append(data);
                $('[data-toggle="tooltip"]').tooltip();
              }
            });
          }
        }
      });

      // Like Follow sản phẩm
      $(document).on("click", ".select-action > li", function(){
        target = $(this);
        user_action = target.attr("user-action");
        product = target.attr("product");
        switch(user_action)
        {
          case "like" : 
          {
            $.ajax({
              type: "GET",
              data: {
                product: product
              },
              url: "/user/check-login",
              dataType: "json",
              success: function(a) {
                html = '<div class="modal fade" id="alert-login-modal"><div class="modal-dialog" role="document" id=""><div class="alert-login"><div class="alert-login-background"><div class="alert-login-logo"><a href="" title=""><img src="http://i.imgur.com/qwR1IG9.png" alt=""></a></div><p>Đăng nhập ngay để được cập nhật những item mới nhất theo sở thích của bạn nhé</p><div class="alert-login-footer"><div class="alert-register col-xs-6"><a href="" title="">Đăng ký</a></div><div class="alert-register col-xs-6"><a href="" title="">Đăng nhập</a></div></div></div></div></div></div>'
                if(!a)
                {
                  $("body").prepend(html);
                  $("#alert-login-modal").modal({
                    show: true,
                    keyboard: 'static',
                    backdrop: true
                  });
                  $("#alert-login-modal").on('hidden.bs.modal', function () {
                    $("#alert-login-modal").remove();
                  });
                }
                else
                {
                  cls = target.attr("class");
                  if(cls.search("likedBtn") !== -1) target.removeClass("likedBtn");
                  else target.addClass("likedBtn");
                  $.ajax({
                    type: "GET",
                    data: {
                      product: product
                    },
                    url: "/user-action/like",
                    dataType: "json",
                    success: function(b) {
                      return false;
                    }
                  });
                }
              }
            });
            break;
          }
        }
      });
    }
  }
});