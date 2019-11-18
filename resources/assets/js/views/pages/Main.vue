<template>
    <section id="wrapper">
      <contact-form></contact-form>
      

        <div v-if="getConfig('public_login') && !isAuth" class="hero d-flex" :style="{ 'background-image' : 'url(\'' + getBackground + '\')' }">
            <div class="login-box card row justify-content-center align-self-center">
                <div class="card-body">
                    <form class="form-horizontal form-material" id="loginform" @submit.prevent="submit"
                          @keydown="loginForm.errors.clear($event.target.name)">
                        <h3 class="box-title m-b-20">{{ trans('auth.login') }}</h3>
                        <div class="form-group ">
                            <input type="text" name="email" class="form-control" :placeholder="trans('auth.email')"
                                   v-model="loginForm.email" autocapitalize="none">
                            <show-error :form-name="loginForm" prop-name="email"></show-error>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control"
                                   :placeholder="trans('auth.password')" v-model="loginForm.password">
                            <show-error :form-name="loginForm" prop-name="password"></show-error>
                        </div>
                        <div class="form-group text-center m-t-20">
                            <button-spinner
                                    :btn-text="trans('auth.sign_in')"
                                    :class="'btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light'"
                                    :is-loading="isLoading"
                                    :disabled="isLoading">
                            </button-spinner>
                        </div>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                <p v-if="getConfig('reset_password')">
                                    {{ trans('auth.forgot_your_password?') }}
                                    <router-link to="/password" class="text-info m-l-5">
                                        <b>{{ trans('auth.reset_here!') }}</b>
                                    </router-link>
                                </p>
                                <p v-if="getConfig('registration')">
                                    {{ trans('auth.create_account?') }}
                                    <router-link to="/register" class="text-info m-l-5">
                                        <b>{{trans('auth.sign_up')}}</b>
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-else>

          <div class="jumbotron" :style="{ 'background-image' : 'url(\'' + getBackground + '\')' }">
            
            <div id="black"></div>
            
            <div style="" class="animated fadeInDown">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">

                    <div class="row">
                      <div class="col-md-6">
                        <h1>{{ getConfig('company_description') }}</h1>
                        <hr style="width:25%;text-align:left;margin:30px 0; border:2.5px solid #fff;"/>
                      </div>
                      <div class="col-md-6 d-flex h-100 justify-content-center align-items-center">

                          <img :src="'/'+getConfig('logo')" alt="Logo" style="width: 300px;" class="mr-2 my-auto">
                          
                        </div>                    
                      </div>                  
                  </div>
                </div>
              
              </div>
            </div>
          </div>


          <div class="wrapper">

              <!-- programs -->

              <div v-html="page.section_1"></div>

              <!--customer-->
              <div v-html="page.section_2"></div>
              

              <div class="news p-1">
                <div class="row">
                  <div class="container">
                    <h2 class="py-2">Noticias</h2>
                  </div>
                  <br>
                   <div class="col-12 pb-5">
                      <!--SECTION START-->
                      <post-slider></post-slider>
                      <!--END SECTION-->
                  </div>
                </div>
              </div>

              <!--builder-->
              <div v-html="page.section_3"></div>
             
              <!--testing-->

              <div v-html="page.section_4"></div>
              

              <!--conversion-->
              <div v-html="page.section_5"></div>

              <!--portfolio-->


              <div class="portfolio" id="portfolio">
                <div class="container">
                <div v-html="page.section_6"></div>
                  
                  <br>

                  <page-list></page-list>
                  

               </div>
             </div>

          </div>
        </div>
        <!-- <post-list></post-list> -->
    </section>
</template>

<script>
    import postList from '../post/List'
    import pageList from '../page/List'
    import contactForm from '../../components/ContactForm'
    import postSlider from '../../components/PostSlider'
    import buttonSpinner from '../../components/ButtonSpinner';

    export default {
        data() {
            return {
                loginForm: new Form({
                    email: '',
                    password: ''
                }),
                isLoading: false,
                page: new Form({
                    id: '',
                    title: '',
                    section_1: '',
                    section_2: '',
                    section_3: '',
                    section_4: '',
                    section_5: '',
                    section_6: '',
                }),
            }
        },
        components: {
            postList,
            pageList,
            contactForm,
            postSlider,
            buttonSpinner
        },
        computed: {
            getBackground() {
                if (helper.getConfig('background')) {
                    return '/' + helper.getConfig('background');
                }

                return '/uploads/config/background/background.jpg'
            },            

            getLogo() {
                if (helper.getConfig('logo')) {
                    return '/' + helper.getConfig('logo');
                }

                return '/uploads/config/logo/logo.png';
            },

        },
        mounted() {
          helper.showSpinner();

          document.title = `${helper.getConfig('company_name')}`;
          axios.get('/api/page/main')
              .then(response => response.data)
              .then(response => {
                

                  this.page.title = response.page.title;
                  this.page.section_1 = response.page.section_1;
                  this.page.section_2 = response.page.section_2;
                  this.page.section_3 = response.page.section_3;
                  this.page.section_4 = response.page.section_4;
                  this.page.section_5 = response.page.section_5;
                  this.page.section_6 = response.page.section_6;
                  this.page.id = response.page.id;
                  helper.hideSpinner();
              })
              .catch(error => {
                  helper.showDataErrorMsg(error);
                  helper.hideSpinner();
              });

        },
        methods: {
            submit() {
                this.isLoading = true;
                this.loginForm.post('/api/auth/login')
                    .then(response => {
                        localStorage.setItem('auth_token', response.token);
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
                        this.$store.dispatch('setAuthStatus');
                        this.$store.dispatch('setLastActivity');
                        if (helper.getConfig('two_factor_security') && response.two_factor_code) {
                            this.$store.dispatch('setTwoFactorCode', response.two_factor_code);
                            this.$router.push('/auth/security');
                        } else {
                            this.$store.dispatch('resetTwoFactorCode');
                            this.$router.push('/home');
                        }
                    })
                    .catch(error => {
                        helper.showErrorMsg(error);
                        this.isLoading = false;
                    });
            },
            getConfig(config) {
                return helper.getConfig(config);
            },

            isAuth() {
                return helper.isAuth();
            }
        }
    }
</script>
