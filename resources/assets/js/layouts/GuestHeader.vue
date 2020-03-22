<template>
<div>

        <header class="header">
            <div class="topbar clearfix">
                <div class="container">
                    <div class="row-fluid">
                        <div class="col-md-6 col-sm-6 text-left">
                            <p>
                                <img src="/images/logo-banner.png" class="img-fluid" width="311" alt="">
                            
                            </p>
                            
                        </div>
                        <div class="col-md-6 col-sm-6 hidden-xs text-right">
                            <div class="social">
                                <a class="facebook" :href="getConfig('facebook')" data-tooltip="tooltip" data-placement="bottom" title="Facebook"><i class="fab fa-facebook"></i></a>              
                                <a class="pinterest" :href="getConfig('instagram')" data-tooltip="tooltip" data-placement="bottom" title="Intagram"><i class="fab fa-instagram"></i></a>
                                <a class="google" :href="getConfig('whatsapp')" data-tooltip="tooltip" data-placement="bottom" title="Whastapp"><i class="fab fa-whatsapp"></i></a>
                            </div><!-- end social -->
                        </div><!-- end left -->
                    </div><!-- end row -->
                </div><!-- end container -->
            </div><!-- end topbar -->

            <div class="">
                <nav class="navbar navbar-default yamm ">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                      
                    </div>

                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/">Inicio</a></li>

                            <li class="dropdown hassubmenu" v-for="menu in menus" :key="menu.id">
                                <a href="#" class="dropdown-toggle" :id="'menu_'+menu.id" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{menu.name}} <span class="fas fa-angle-down"></span></a>
                                <ul class="dropdown-menu" role="menu" :aria-labelledby="'menu_'+menu.id">
                                    <li v-for="page in menu.pages" :key="page.id" ><a :href="'/'+`${page.slug}`">{{page.title}}</a></li>
                                    <li class="dropdown hassubmenu" v-if="menu.parent" v-for="parent in menu.parent">

                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" :id="'sub_'+parent.id">{{parent.name}} <span class="fas fa-angle-left"></span></a>

                                        <ul class="dropdown-menu ssubmenu" role="menu" :aria-labelledby="'sub_'+parent.id">
                                            <li v-for="subpage in parent.pages" :key="subpage.id"><a :href="'/'+`${subpage.slug}`">{{subpage.title}}</a></li>
                                        </ul>

                                    </li>
                                </ul>
                            </li>
<!--                             <li class="dropdown hassubmenu">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="blog" role="button" aria-expanded="false">Blog <span class="fas fa-angle-down"></span></a>
    <ul class="dropdown-menu" role="menu" aria-labelledby="blog">
        <li><a href="blog.html">Blog Right Sidebar</a></li>
        <li><a href="blog-1.html">Blog Left Sidebar</a></li>
        <li><a href="blog-2.html">Blog Grid Sidebar</a></li>
        <li><a href="blog-3.html">Blog Grid Fullwidth</a></li>
        <li><a href="blog-single.html">Blog Single</a></li>
        <li class="dropdown hassubmenu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" id="subblog">Blog <span class="fas fa-angle-down"></span></a>
            <ul class="dropdown-menu ssubmenu" role="menu" aria-labelledby="subblog">
                <li><a href="blog.html">Blog Right Sidebar</a></li>
                <li><a href="blog-1.html">Blog Left Sidebar</a></li>
                <li><a href="blog-2.html">Blog Grid Sidebar</a></li>
                <li><a href="blog-3.html">Blog Grid Fullwidth</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
            </ul>
        </li>
    </ul>
</li> -->
                            <li >
                                <a href="/blog/1/list">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio/1/list">
                                    Portafolio
                                </a>
                            </li>


                            <li v-if="isAuth() && !getTwoFactorCode()">
                                <router-link  :to="'/home'">
                                   Panel
                                </router-link>
                            </li>

                        </ul>
                    </div>
                </nav><!-- end navbar -->
            </div><!-- end container -->
        </header>
    
</div>


</template>

<script>
    import {EventBus} from '../event-bus';
    import scrollLink from '../components/ScrollLink';

    export default {
        props: {
            toggle: {
                default: true
            }
        },
        data() {
            return {
                search_query: '',
                menus: []
            }
        },
        mounted() {

            axios
                .get('/api/menus')
                .then(response => response.data)
                .then(response => {

                    this.menus = response;

                }).catch(error => {
                    helper.showDataErrorMsg(error);
                });
        },
        components: {
            scrollLink,
        },

        created() {
            EventBus.$on("config::set", () => {
                this.$forceUpdate();
            });
        },
        methods: {
            getLogo() {
                if (helper.getConfig('logo')) {
                    return '/' + helper.getConfig('logo');
                }

                return '/uploads/config/logo/logo.png';
            },
            logout() {
                helper.logout().then(() => {
                    this.$store.dispatch('resetAuthUserDetail');
                    this.$router.push('/login');
                })
            },
            getAuthUser(name) {
                return helper.getAuthUser(name);
            },
            getTwoFactorCode() {
                return helper.getTwoFactorCode();
            },
            isScreenLocked() {
                return helper.isScreenLocked();
            },
            isAuth() {
                return helper.isAuth();
            },
            getConfig(name) {
                return helper.getConfig(name);
            },
            search() {
                this.showSpinner();
                this.$store.dispatch('setSearchQuery', this.search_query);
                this.$refs.li.classList.remove("show");
                this.$refs.div.classList.remove("show");
                this.$router.push('/search');
            },
            showSpinner() {
                if (this.$route.name !=='main') return helper.showSpinner();
            }
        }
    }
</script>
