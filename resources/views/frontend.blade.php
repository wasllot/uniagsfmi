<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('config.company_name') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <link rel="icon" href="/{{ config('config.logo') }}">
    <meta name="theme-color" content="#ffffff">
    <link href="{{ asset('/frontend/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/frontend/css/carousel.css') }}" rel="stylesheet">
    <link href="{{ asset('/frontend/css/animate.css') }}" rel="stylesheet">
    <link href="{{ mix('/css/frontend.css') }}" rel="stylesheet">

    <link href="{{ asset('/frontend/css/font-awesome.min.css') }}" rel="stylesheet">
    <style>
      @font-face {
        font-family: baskerville;
        src: url('BASKE1.woff');
      }

      body {
        font-family: baskerville !important;
      }
    </style>

</head>
<body class="">
<div id="root">
    <router-view></router-view>
</div>




<script src="/js/lang"></script>

<script src="{{ asset('/frontend/js/jquery.min.js') }}"></script>
<script src="{{ asset('/frontend/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('/frontend/js/animate.js') }}"></script>
<script src="{{ asset('/frontend/js/custom.js') }}"></script>
<script src="{{ asset('/frontend/js/videobg.js') }}"></script>
<script src="{{ asset('/js/pcoded.min.js') }}"></script>

<script src="{{ mix('/js/frontend-plugins.js') }}"></script>
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAkADq7R0xf6ami9YirAM1N-yl7hdnYBhM "></script>
    <!-- MAP & CONTACT -->

<script src="{{ asset('/js/isotope.pkgd.min.js') }}"></script>


<script src="{{ mix('/js/frontend.js') }}"></script>

<script>
    $(document).ready(function(){

        $('#contact-click').on('click', function(){

            window.location.href="https://wa.me/584167813210";
        });

    });

    function contact_click(){

        window.location.href="https://wa.me/584167813210";
    }

</script>
<script>
          $(document).ready(function() {


            setTimeout(function(){

           $('.navbar-light .dmenu').hover(function () {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });

            }, 2999);

          
                $('.filters ul li').click(function(){
                  $('.filters ul li').removeClass('active');
                  $(this).addClass('active');
                  
                  var data = $(this).attr('data-filter');
                  $grid.isotope({
                    filter: data
                  })
                });

                var $grid = $(".grid").isotope({
                  itemSelector: ".all",
                  percentPosition: true,
                  masonry: {
                    columnWidth: ".all"
                  }
                })

        });

</script>
</body>
</html>
