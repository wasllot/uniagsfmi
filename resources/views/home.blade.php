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
    <link href="{{ mix('/css/style.css') }}" rel="stylesheet">
    <!-- <link href="{{ mix('/css/colors/light.css') }}" id="theme" rel="stylesheet"> -->
    <style>
.preloader {
  width: 100%;
  height: 100%;
  top: 0px;
  position: fixed;
  z-index: 99999;
  background: #fff;
}

.preloader .cssload-speeding-wheel {
  position: absolute;
  top: calc(50% - 3.5px);
  left: calc(50% - 3.5px);
}

.topbar {
  background: #FFFFFF;
}

.topbar .navbar-header {
  background: #ffffff;
  box-shadow: 4px -4px 10px rgba(0, 0, 0, 0.05);
}

.topbar .navbar-light .navbar-nav .nav-item > a.nav-link {
  color: rgba(27, 25, 25, 0.8) !important;
}

.topbar .navbar-light .navbar-nav .nav-item > a.nav-link:hover,
.topbar .navbar-light .navbar-nav .nav-item > a.nav-link:focus {
  color: #A0A1A2 !important;
}

a {
  color: #03A9F4;
}

a.link:hover,
a.link:focus {
  color: #03A9F4 !important;
}

.bg-theme {
  background-color: #03A9F4 !important;
}

.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  background-color: #03A9F4;
  border-color: #03A9F4;
}

.post-title {
  color: #03A9F4;
}

.right-sidebar .rpanel-title {
  background: #03A9F4;
}

.stylish-table tbody tr:hover,
.stylish-table tbody tr.active {
  border-right: 4px solid #03A9F4;
}

.text-themecolor {
  color: #03A9F4 !important;
}

.profile-tab li a.nav-link.active,
.customtab li a.nav-link.active {
  border-bottom: 2px solid #03A9F4;
  color: #03A9F4;
}

.profile-tab li a.nav-link:hover,
.customtab li a.nav-link:hover {
  color: #03A9F4;
}

.list-group-item.active,
.list-group .list-group-item.active:hover {
  background: #03A9F4;
  border-color: #03A9F4;
}

.btn-themecolor,
.btn-themecolor.disabled {
  background: #03A9F4;
  color: #ffffff;
  border: 1px solid #03A9F4;
}

.btn-themecolor:hover,
.btn-themecolor.disabled:hover {
  background: #03A9F4;
  opacity: 0.7;
  border: 1px solid #03A9F4;
}

.btn-themecolor.active,
.btn-themecolor:focus,
.btn-themecolor.disabled.active,
.btn-themecolor.disabled:focus {
  background: #A0A1A2;
}

.sidebar-nav {
  background: #fff;
}

.sidebar-nav ul li a {
  color: #54667a;
}

.sidebar-nav ul li a.active,
.sidebar-nav ul li a:hover {
  color: #03A9F4;
}

.sidebar-nav ul li a.active {
  color: #263238;
}

.sidebar-nav ul li.nav-small-cap {
  color: #90a4ae;
}

.sidebar-nav > ul > li.active > a {
  border-right: 3px solid #03A9F4;
  color: #03A9F4;
}

.sidebar-nav > ul > li.active > a i {
  color: #03A9F4;
}

.sidebar-nav > ul > li > a {
  border-right: 3px solid #fff;
}

.sidebar-nav > ul > li > a.active,
.sidebar-nav > ul > li > a:hover {
  border-right: 3px solid #03A9F4;
}

.sidebar-nav > ul > li > a.active i,
.sidebar-nav > ul > li > a:hover i {
  color: #03A9F4;
}

.sidebar-nav > ul > li > a i {
  color: #a6b7bf;
}

.sidebar-nav > ul > li > a.active {
  font-weight: 400;
  background: #ffffff;
  color: #03A9F4;
}

.multiselect__option--highlight {
  background: #03A9F4;
}

.multiselect__tag {
  background: #03A9F4;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: #03A9F4;
}

.multiselect__tag-icon:after {
  color: #fff;
}</style>
</head>
<body class="fix-header fix-sidebar card-no-border">
<div class="preloader">
    <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
</div>
<div id="root">
    <router-view></router-view>
</div>




<script src="/js/lang"></script>
<script src="{{ mix('/js/plugin.js') }}"></script>
<script src="{{ asset('/js/summernote-es-ES.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
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
</body>
</html>
