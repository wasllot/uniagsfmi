<template>
    <section id="wrapper">    

        <div v-if="getConfig('public_login') && !isAuth">

        </div>


        <div v-else>
              <section id="home" class="video-section js-height-full" :style="{ 'background' : ' url(\'' + getBackground + '\') no-repeat left top' }">
                  <div class="overlay"></div>
                  <div class="home-text-wrapper relative container">
                      <div class="home-message">
                          <p>BIENVENIDO A LA {{getConfig('company_name')}}</p>
                          <small>{{ getConfig('company_description') }}</small>
       
                      </div>
                  </div>

              </section>
    



          <div class="wrapper">

              <!-- programs -->

                <div v-html="page.section_1"></div>



              <!--customer-->
              <div v-html="page.section_2"></div>
              

              <!--builder-->
              <div v-html="page.section_3"></div>


              <!-- <team-list></team-list> -->

             <page-list></page-list>
              <!--testing-->

              <div v-html="page.section_4"></div>
              
              <portfolio-list></portfolio-list>

             

              

              
              <!--portfolio-->

              <div v-html="page.section_5"></div>
              
               <main-list></main-list>



              <div v-html="page.section_6"></div>




        </div>
      </div>
        <!-- <post-list></post-list> -->
    </section>
</template>

<script>
    import postList from '../post/List'
    import pageList from '../page/List'
    import teamList from '../team/List'
    import mainList from '../post/MainList'
    import portfolioList from '../statics/portfolio/List'
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
            mainList,
            pageList,
            teamList,
            postSlider,
            buttonSpinner,
            portfolioList
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
              })
              .catch(error => {
                  helper.showDataErrorMsg(error);
              });



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
    };


</script>
