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

          <div class="jumbotron">

            
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

              <section id="study">

                <div class="container">

                  <div class="row fill-80-viewport pt-5 align-items-center">

                    <div class="col d-none d-md-block align-self-end">

                     <img src="https://images.pexels.com/photos/2124916/pexels-photo-2124916.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="img-fluid"/>

                    </div>

                    <div class="col">

                     <h6 class="text-uppercase text-black-40">
                      Oferta académica
                    </h6>
                     <h2>Bienvenido a la unviersidad de </h2>
                     <p>La Universidad te ofrece numerosos grados, másteres y programas de doctorado en sus 4 campus. ¿Sabes ya qué quieres estudiar? Entra y elige el tuyo.</p>
                    
                    <div class="row">

                      <div class="d-none d-md-block col">

                        <h5>Maestrías</h5>
                        <h5>Pregrados</h5>
                        <h5>Cursos</h5>
                        
                        <a href="#">Ver más</a>
                      </div>
                      <div class="d-none d-lg-block col">
                        <h5><a href="/faq">¿Necesitas ayuda? Nosotros te asesoramos</a></h5>
                        <p>Aquí encontrarás toda la información necesaria</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </section>

                        <!--customer-->
              <div class="customer">
                  <div class="container">
                    <h2>TRANSFERENCIA E INVESTIGACIÓN CON IMPACTO SOCIAL</h2>
                    <span>Generamos alianzas y agregaciones con los sectores público y privado para identificar aquellos retos de conocimiento que preocupan a la sociedad en general y aportar soluciones para mejorar la vida de las personas.</span>
                  </div>
              </div>

              <div class="news p-1">
                <div class="row">
                   <div class="col-12 pb-5">
                      <!--SECTION START-->
                      <post-slider></post-slider>
                      <!--END SECTION-->
                  </div>
                </div>
              </div>

              <!--builder-->
              <div class="builder clearfix" id="services">
                <div class="container">
                  <h2>Estudia en la Universidad de Melbourne</h2>
                  <div class="row">
                    <div class="col-lg-5 col-md-6 text-justify">
                      <h5>Para competir en el escenario mundial, necesitas una educación de nivel mundial. En la Universidad de Melbourne, obtendrá un título reconocido internacionalmente que abrirá puertas a un futuro sobresaliente.</h5>
                      <p>¿cómo funciona?</p>
                      <span>1. Comienza con un título universitario (licenciatura) o un paquete de licenciatura + posgrado.</span><br/>
                     <span>2. Durante tres años desarrollará una comprensión profunda de un área de estudio en particular: su especialidad.</span><br/>
                      <span>3. También estudiarás materias de fuera de tu área de estudio principal; a esto le llamamos amplitud.</span><br>
                      <span>4. Después de su licenciatura, puede ingresar a la fuerza laboral o progresar a una maestría de posgrado especializada. Obtendrá una calificación competitiva reconocida internacionalmente y las habilidades y conocimientos necesarios para la práctica profesional experta.</span><br>
                    </div>            

                    <div class="col-lg-7 col-md-6">
                      <div class="">
                       <img class="img-fluid" src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <!--testing-->

              <div class="testing clearfix" id="about">
                <div class="container">
                  <h2>Aprende de la mejor manera</h2>
                  <div class="row">
                    <div class="col-lg-5 col-md-6">                
                      <p>Nuestra experiencia distintiva en Melbourne ayuda a los graduados a convertirse en profesionales completos, reflexivos y calificados, lo que tiene un impacto positivo en todo el mundo. </p>
                      <p>Queremos que cree su propia ruta de estudio, con el poder de elegir su propia dirección y explorar nuevas opciones en el camino. Esto es importante en un mundo donde las carreras están cambiando rápidamente y los empleadores valoran el pensamiento independiente. </p>
                      <p>Pocas personas que se gradúen hoy permanecerán en la misma industria para siempre. Con nuestros títulos, puede desarrollar las habilidades adecuadas para adaptarse y cambiar con éxito.</p>
                    </div>
                    <div class="col-lg-5 col-md-6">
                      <div class="">
                        <img class="img-fluid" src="https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&h=750&w=1260">
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              <!--conversion-->
              <div class="conversion">
                <div class="container">
                  <h2>Prepárate para tu carrera</h2>
                  <p>Los graduados de esta universidad son muy buscados por los empleadores y la industria. Te ayudaremos a prepararte para el trabajo a lo largo de tu carrera.</p>
                  <a href="#" class="btn">Leer más</a>
                </div>
              </div>

              <!--portfolio-->


              <div class="portfolio" id="portfolio">
                <div class="container">
                  <h2>Certificaciones</h2>
                  <p>La excelencia atrae la excelencia. Estamos orgullosos de ofrecer algunos de los más grados de mayor demanda en el país. Colaborarás en clase o en el laboratorio con compañeros inspiradores y ambiciosos que trabajaron arduamente para llegar a Melbourne y quieren aprovechar al máximo cada oportunidad.<br/></p>
                  
                  <br>
<!--                   <div class="container">
                    <div class="row">
                      
                        <div class="col-md-6 jasgrid">
                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            City in the sky: world's biggest hotel to open in Mecca
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/22/1432299215355/baff131f-a335-44eb-ad66-03c52c5c2213-620x372.jpeg?w=700&q=85&auto=format&sharp=10&s=31a22f00a85840740c2a8af5604abfb0" alt="City in the sky: world's biggest hotel to open in Mecca" 
                                class="">        
                            </div>

                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            Why Palladio is the world's favourite 16th-century architect
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/9/11/1441964447628/5f03adcd-3947-4aec-ba42-8d9365fcf755-620x615.jpeg?w=700&q=85&auto=format&sharp=10&s=661551e4de042aee3003bca57aca876c" alt="Why Palladio is the world's favourite 16th-century architect" 
                                class="">        
                            </div>

                              <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            Return of the prefabs: inside Richard Rogers' Y:Cube homes for homeless people
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/media/ef4a19c1582b9feb6c49e7f6d783aa234dc3c60c/0_0_2480_1487/master/2480.jpg?w=700&q=85&auto=format&sharp=10&s=a7485a359c5c19e89d7f0e8f71b31c8c" alt="Return of the prefabs: inside Richard Rogers' Y:Cube homes for homeless people" 
                                class="">        
                            </div>

                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            The ‘sky pool’ is just the start: London prepares for a flood of bathing oligarchs
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/8/20/1440084421494/658509dc-71ec-4329-a44a-65a8968f31eb-2060x1236.jpeg?w=700&q=85&auto=format&sharp=10&s=95d11c21789512a206c58f6e09161c3b" alt="The ‘sky pool’ is just the start: London prepares for a flood of bathing oligarchs" 
                                class="">        
                            </div>

                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            Carbuncle Cup: Walkie Talkie wins prize for worst building of the year
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/9/1/1441111760813/babad85b-8749-43dd-8b0a-dda57f7de279-2060x1236.jpeg?w=700&q=85&auto=format&sharp=10&s=943b47a6776b1ecbfb4c6db7d8932d45" alt="Carbuncle Cup: Walkie Talkie wins prize for worst building of the year" 
                                class="">        
                            </div>

                        </div>

                        <div class="col-md-6 jasgrid">
                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            'This design is total rubbish': Preston's majestic bus station gets a zombie makeover
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/8/18/1439900836746/9e43bef2-d7c7-4a97-a1bc-93636ce361a7-620x372.jpeg?w=620&q=85&auto=format&sharp=10&s=7f9bd5cd72f68f040252a9dca512778c" alt="'This design is total rubbish': Preston's majestic bus station gets a zombie makeover" 
                                class="">        
                            </div>

                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Tech</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            Why Apple shouldn’t be selling a 16GB iPhone 6S or 6S Plus
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/media/bbf4a7d1df33ad2604638c03787e7eb0e1f17394/0_149_3000_1800/master/3000.jpg?w=700&q=85&auto=format&sharp=10&s=3ecfcbb58d169db2a27a9718e4689b83" alt="Why Apple shouldn’t be selling a 16GB iPhone 6S or 6S Plus" 
                                class="">        
                            </div>

                                <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Tech</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            iPhone text message bug can crash Apple Watch, iPad and Mac too
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/28/1432806359426/84fba44c-44eb-47b4-acf2-c02c5dd579b9-2060x1237.jpeg?w=700&q=85&auto=format&sharp=10&s=0c5743ab8796e6326e7257f3563727b5" alt="iPhone text message bug can crash Apple Watch, iPad and Mac too" 
                                class="">        
                            </div>

                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            Sailing off Iceland … is no holiday
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/9/10/1441897683067/cbd64c76-4d4b-4fdc-b21e-09ee8c61fe84-2060x1371.jpeg?w=620&q=85&auto=format&sharp=10&s=902f73c53527356ce69674be7218a12b" alt="Sailing off Iceland is no holiday" 
                                class="">        
                            </div>

                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            Online Gothenburg: tech travel tips 
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/media/45532d8551c9033d4bc18abf7adfc5ee29405fff/0_928_3220_1932/master/3220.jpg?w=700&q=85&auto=format&sharp=10&s=776a7ea32d0c2df42d8470d4cc210bfe" alt="Online Gothenburg: tech travel tips" 
                                class="">        
                            </div>
                            
                            <div class="box-item">
                                <div class="box-post">
                                    <span class="label label-success">
                                        <a href="#" rel="tag">Travel</a>
                                    </span>
                                    <h1 class="post-title">
                                        <a href="#">
                                            Online Gothenburg: tech travel tips 
                                        </a>
                                    </h1>
                                    <span class="meta">
                                        <span><i class="glyphicon glyphicon-comment"></i> <a href="http://wordpress.thebebel.com/showcase/newsbook/2015/01/19/meet-asias-best-destinations-for-the-summer/#respond">No Comments</a></span>
                                        <span><i class="glyphicon glyphicon-time"></i> Sep 15, 2015</span>
                                    </span>
                                </div>
                                <img src="https://i.guim.co.uk/img/media/5563b9b5cd87bab2e9c9279a8f0c7268b69471bc/0_172_5616_3368/master/5616.jpg?w=700&q=85&auto=format&sharp=10&s=7a9664aabfe4b691120166f61759ba68" alt="Explore Lyon: essential travel apps and tips" 
                                class="">        
                            </div>

                        </div>

                      <page-list></page-list>
                        
                    </div>

                </div> -->

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
                isLoading: false
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

            document.title = `${helper.getConfig('company_name')}`;
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
