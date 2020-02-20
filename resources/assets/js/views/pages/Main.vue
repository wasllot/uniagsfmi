<template>
    <section id="wrapper">    

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
                       
                    </form>
                </div>
            </div>
        </div>
        <div v-else>
<!--
          <div class="jumbotron" :style="{ 'background-image' : 'url(\'' + getBackground + '\')' }">
          
            
            <div style="" class="animated fadeInDown">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">

                    <div class="row">
                      <div class="col-md-6">
                        <h1 style="color: #595959">{{ getConfig('company_description') }}</h1>
                        <h5>Agencia de Marketing Digital</h5>
                        <hr style="width:25%;text-align:left;margin:30px 0; border:2.5px solid #fff;"/>
                      </div>
                      <div class="col-md-6 d-flex h-100 justify-content-center align-items-center">

                          
                        </div>                    
                      </div>                  
                  </div>
                </div>
              
              </div>
            </div>
          </div>-->

              <div class="header">
      
                <div class="info">

                  <h4>

                      <a href="#">{{ getConfig('company_description') }}</a>

                  </h4>

                  <br>

                  <h1 class="text-white">Bienvenido a Enchufate</h1>

                  <br>

                  <div class="meta">

                    <a  href="#" target="_b" class="author">

                        <img :src="'/'+getConfig('logo')" alt="Logo" class="img-radius wid-60" >

                    </a>

                  </div>

                </div>

              </div>

    



          <div class="wrapper">

              <!-- programs -->

                <div v-html="page.section_1"></div>

                <div class="container">
                  
                  <div class="img-carousel py-4">
          

                      <div class="owl-carousel products-carousel" id="productsCarousel">

                          <div class="item zoom">
                              
                              <img class="img-fluid" src="assets/images/enchufate.jpeg" alt="Image">

                              <a target="_blank" rel="nofollow" href="group-details.html" class="btn btn-arrow">

                                  Code
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>

                              </a>

                          </div>

                          <div class="item zoom">
                           
                              <img class="img-fluid" src="assets/images/enchufate.jpeg" alt="Image">

                              <a target="_blank" rel="nofollow" href="#" class="btn btn-arrow">

                                  Social Media
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>

                              </a>

                          </div>

                          <div class="item zoom">
                             
                              <img class="img-fluid" src="assets/images/enchufate.jpeg" alt="Image">

                              <a target="_blank" rel="nofollow" href="#" class="btn btn-arrow">

                                  Academy
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>

                              </a>

                          </div>

                          <div class="item zoom">
                        
                              <img class="img-fluid" src="assets/images/enchufate.jpeg" alt="Image">

                              <a target="_blank" rel="nofollow" href="#" class="btn btn-arrow">
                                  ServiTech
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>

                              </a>

                          </div>

                      </div>  
                            
                  </div>
                </div>

              <!--customer-->
              <div v-html="page.section_2"></div>
              

              <div class="news p-1">
                <div class="row">
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

              <div class="container">
                
                 <div class="img-carousel py-4">
        

                    <div class="owl-carousel products-carousel" id="productsCarousel">

                        <div class="item zoom">
                            
                            <img class="img-fluid" src="assets/images/enchufate.jpeg" alt="Image">

                            <a target="_blank" rel="nofollow" href="group-details.html" class="btn btn-arrow">

                                Code
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>

                            </a>

                        </div>

                        <div class="item zoom">
                         
                            <img class="img-fluid" src="assets/images/enchufate.jpeg" alt="Image">

                            <a target="_blank" rel="nofollow" href="#" class="btn btn-arrow">

                                Social Media
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>

                            </a>

                        </div>

                        <div class="item zoom">
                           
                            <img class="img-fluid" src="assets/images/enchufate.jpeg" alt="Image">

                            <a target="_blank" rel="nofollow" href="#" class="btn btn-arrow">

                                Academy
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>

                            </a>

                        </div>

                        <div class="item zoom">
                      
                            <img class="img-fluid" src="assets/images/enchufate.jpeg" alt="Image">

                            <a target="_blank" rel="nofollow" href="#" class="btn btn-arrow">
                                ServiTech
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>

                            </a>

                        </div>

                    </div>  
                          
                </div>

              </div>
             
              <!--testing-->

              <div v-html="page.section_4"></div>

              <div class="container">
                
                <div class="row py-4">

                    <div class="col-md-12">

                        <div id="news-slider6" class="owl-carousel">

                            <div class="post-slide6">

                                <div class="post-img">

                                    <img class="img-fluid" src="http://bestjquery.com/tutorial/news-slider/demo28/images/img-1.jpg" alt="">

                                    <div class="post-info">

                                        <ul class="category">

                                            <li>En <a target="_blank" rel="nofollow" href="#">Diseño gráfico</a></li>

                                            <li>por <a target="_blank" rel="nofollow" href="#">admin</a></li>

                                        </ul>

                                        <span class="post-date">Enero 05, 2020</span>

                                    </div>

                                </div>

                                <div class="post-review">

                                    <span class="icons">

                                        <img class="img-fluid" src="http://bestjquery.com/tutorial/news-slider/demo28/images/img-5.jpg" alt="">

                                    </span>

                                    <h3 class="post-title">

                                        <a target="_blank" rel="nofollow" href="#">Banners</a>

                                    </h3>

                                    <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda culpa cumque dicta sint soluta voluptas eius iusto modi reprehenderit sint soluta voluptas.</p>

                                    <a target="_blank" rel="nofollow" href="#" class="read">Leer más</a>

                                </div>

                            </div>
             
                            <div class="post-slide6">

                                <div class="post-img">

                                    <img class="img-fluid" src="http://bestjquery.com/tutorial/news-slider/demo28/images/img-2.jpg" alt="">

                                    <div class="post-info">

                                        <ul class="category">

                                            <li>En <a target="_blank" rel="nofollow" href="#">Diseño gráfico</a></li>

                                            <li>por <a target="_blank" rel="nofollow" href="#">admin</a></li>

                                        </ul>

                                        <span class="post-date">Mayo 07, 2020</span>

                                    </div>

                                </div>

                                <div class="post-review">

                                    <span class="icons">

                                        <img class="img-fluid" src="http://bestjquery.com/tutorial/news-slider/demo28/images/img-6.jpg" alt="">

                                    </span>

                                    <h3 class="post-title"><a target="_blank" rel="nofollow" href="#">Logo</a></h3>

                                    <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda culpa cumque dicta sint soluta voluptas eius iusto modi reprehenderit sint soluta voluptas.</p>

                                    <a target="_blank" rel="nofollow" href="#" class="read">Leer más</a>

                                </div>

                            </div>
                            
                            <div class="post-slide6">

                                <div class="post-img">

                                    <img class="img-fluid" src="http://bestjquery.com/tutorial/news-slider/demo28/images/img-3.jpg" alt="">

                                    <div class="post-info">

                                        <ul class="category">

                                            <li>En <a target="_blank" rel="nofollow" href="#">Programación</a></li>

                                            <li>por <a target="_blank" rel="nofollow" href="#">admin</a></li>

                                        </ul>

                                        <span class="post-date">May 07, 2020</span>

                                    </div>

                                </div>

                                <div class="post-review">

                                    <span class="icons">

                                        <img class="img-fluid" src="http://bestjquery.com/tutorial/news-slider/demo28/images/img-6.jpg" alt="">

                                    </span>

                                    <h3 class="post-title"><a target="_blank" rel="nofollow" href="#">Sistema de inventario</a></h3>

                                    <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda culpa cumque dicta sint soluta voluptas eius iusto modi reprehenderit sint soluta voluptas.</p>

                                    <a target="_blank" rel="nofollow" href="#" class="read">Leer más</a>

                                </div>

                            </div>
                            
                            <div class="post-slide6">

                                <div class="post-img">

                                    <img class="img-fluid" src="http://bestjquery.com/tutorial/news-slider/demo28/images/img-4.jpg" alt="">

                                    <div class="post-info">

                                        <ul class="category">

                                            <li>En <a target="_blank" rel="nofollow" href="#">Social media</a></li>

                                            <li>por <a target="_blank" rel="nofollow" href="#">admin</a></li>

                                        </ul>

                                        <span class="post-date">May 07, 2020</span>

                                    </div>

                                </div>

                                <div class="post-review">

                                    <span class="icons">

                                        <img class="img-fluid" src="http://bestjquery.com/tutorial/news-slider/demo28/images/img-7.jpg" alt="">

                                    </span>

                                    <h3 class="post-title">

                                        <a target="_blank" rel="nofollow" href="#">Plan de marketing</a>

                                    </h3>

                                    <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda culpa cumque dicta sint soluta voluptas eius iusto modi reprehenderit sint soluta voluptas.</p>
                                    

                                    <a target="_blank" rel="nofollow" href="#" class="read">Leer más</a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

              </div>
              

              <!--conversion-->
              <div v-html="page.section_5"></div>

              <div class="container">
                  

                  <div class="row py-4">

                      <div class="col-md-12">

                          <div id="news-slider7" class="owl-carousel">

                              <div class="card p-2 mr-2">

                                  <div class="all corporate">

                                    <div class="item">

                                      <img class="img-fluid" src="http://themes.muffingroup.com/betheme/documentation/doc-images/muffin-options/custom-js.png" alt="Proyecto 1">

                                      <div class="p-inner text-center py-2">

                                        <h5>Proyecto 1</h5>

                                        <div class="cat">Corporate</div>

                                      </div>

                                    </div>

                                  </div>

                              </div>
               
                              <div class="card p-2 mr-2">

                                  <div class="all corporate">

                                    <div class="item">

                                      <img class="img-fluid" src="http://themes.muffingroup.com/betheme/documentation/doc-images/muffin-options/custom-js.png" alt="Proyecto 1">

                                      <div class="p-inner text-center py-2">

                                        <h5>Proyecto 1</h5>

                                        <div class="cat">Corporate</div>

                                      </div>

                                    </div>

                                  </div>

                              </div>
                              
                              <div class="card p-2 mr-2">

                                  <div class="all corporate">

                                    <div class="item">

                                      <img class="img-fluid" src="http://themes.muffingroup.com/betheme/documentation/doc-images/muffin-options/custom-js.png" alt="Proyecto 1">

                                      <div class="p-inner text-center py-2">

                                        <h5>Proyecto 1</h5>

                                        <div class="cat">Corporate</div>

                                      </div>

                                    </div>

                                  </div>

                              </div>
                              
                              <div class="card p-2 mr-2">

                                  <div class="all corporate">

                                    <div class="item">

                                      <img class="img-fluid" src="http://themes.muffingroup.com/betheme/documentation/doc-images/muffin-options/custom-js.png" alt="Proyecto 1">

                                      <div class="p-inner text-center py-2">

                                        <a target="_blank" rel="nofollow" href="portfolio-details.html"><h5>Proyecto 1</h5></a>

                                        <div class="cat">Corporate</div>

                                      </div>

                                    </div>

                                  </div>

                              </div>

                          </div>

                      </div>

                  </div>


              </div>

              <!--portfolio-->


<!--              <div class="portfolio" id="portfolio">
                <div class="container">
                <div v-html="page.section_6"></div>
                  
                  <br>

                  <page-list></page-list>
                  

               </div>
             </div>

          
          </div>
      -->

        </div>
      </div>
        <!-- <post-list></post-list> -->
    </section>
</template>

<script>
    import postList from '../post/List'
    import pageList from '../page/List'
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
