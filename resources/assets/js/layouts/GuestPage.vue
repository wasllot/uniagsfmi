<template>
   
    <div class="wrapper">


        <app-header></app-header>
    

        <div class="" style="margin-left:0">
            <router-view></router-view>
            <back-to-top visibleOffset="200"></back-to-top>
            
        </div>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './GuestHeader'
    import AppFooter from './GuestFooter'
    import BackToTop from '../components/BackToTop.vue'

    export default {
        data() {
            return {}
        },
        components: {
            AppHeader,
            AppFooter,
            BackToTop
        },
        mounted() {
            helper.notification();



        }
    }
</script>
