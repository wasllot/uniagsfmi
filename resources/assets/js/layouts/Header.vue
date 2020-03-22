<template>
<div v-if="$route.name !=='main'">

   <header class="header">

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

                    <ul class="nav navbar-nav navbar-logo mr-auto">

                        <router-link class="nav-link nav-brand" to="/">
                                <img :src="getLogo()" alt="Logo" class="logo mr-2">
                                
                            </router-link>
                        
                        <li v-if="toggle" class="nav-item">
                            <a class="nav-link nav-toggler hidden-md-up">
                                <i class="fas fa-bars fa-fw"></i>
                            </a>
                        </li>
                        <li v-if="toggle" class="nav-item">
                            <a class="nav-link nav-toggler sidebartoggler hidden-sm-down">
                                <i class="fas fa-bars fa-fw"></i>
                            </a>
                        </li>
                    </ul>


                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link  :to="'/'">
                               Volver
                            </router-link>
                        </li>
                        <li class="nav-item dropdown" v-if="isAuth() && !getTwoFactorCode()">
                            <a class="nav-link dropdown-toggle" href=""
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="username">{{ getAuthUser('full_name') }}</span>
                                <img :src="getAuthUser('avatar')" alt="Avatar" class="profile-pic ml-2">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right animated bounceInDown">
                                <ul class="dropdown-user">
                                    <li>
                                        <div class="dw-user-box text-center">
                                            <div class="u-img">
                                                <img :src="getAuthUser('avatar')" alt="Avatar">
                                            </div>
                                            <div class="u-text">
                                                <h4>{{ getAuthUser('full_name') }}</h4>
                                                <h6>{{ getAuthUser('email') }}</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <router-link to="/profile">
                                            <i class="fas fa-user"></i>
                                            {{ trans('user.update_profile') }}
                                        </router-link>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <router-link to="/change-password">
                                            <i class="fas fa-cogs"></i>
                                            {{ trans('user.change_password') }}
                                        </router-link>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="#" @click.prevent="logout">
                                            <i class="fas fa-power-off"></i>
                                            {{ trans('auth.logout') }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
    };
</script>

<style>
    .nav-brand .logo, .nav-link img{
        width: 40px;
    }
</style>