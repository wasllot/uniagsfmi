<!DOCTYPE html>
<html lang="<?php echo e(config('app.locale')); ?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo e(config('config.company_name')); ?></title>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>"/>
    <link rel="icon" href="/<?php echo e(config('config.logo')); ?>">
    <meta name="theme-color" content="#ffffff">
    <link href="<?php echo e(mix('/css/style.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(mix('/css/colors/'.config('config.color_theme').'.css')); ?>" id="theme" rel="stylesheet">
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
<script src="<?php echo e(mix('/js/plugin.js')); ?>"></script>
<script src="<?php echo e(asset('/js/summernote-es-ES.js')); ?>"></script>
<script src="<?php echo e(mix('/js/app.js')); ?>"></script>
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
<?php /**PATH C:\Users\User\Desktop\projects\spala\resources\views/home.blade.php ENDPATH**/ ?>