<template>
	<div>
		
		<div v-if="1">

			<section class="section db p120 sec" :style="{ 'background-image' : 'url(\'' + getConfig('background') + '\')' }">
	            <div class="container">
	                <div class="row">
	                    <div class="col-md-12">
	                        <div class="tagline-message page-title text-center">
	                            <h3>Aquí puedes ver algunas de las imágenes de la UNIAGSFMI</h3><br>
	                            <h5>Certificaciones, convenios y otros.</h5>
	                            <ul class="breadcrumb">
	                                <li><a href="/">Inicio</a></li>
	                                <li class="active">Portafolio</li>
	                            </ul>
	                        </div>
	                    </div><!-- end col -->
	                </div><!-- end row -->
	            </div><!-- end container -->
	        </section><!-- end section -->

	        <section class="portfolio section gb nopadtop" style="height: 100vh;">
	            <div class="container">
	                <div class="boxed">
	                  

		                  <div v-if="portfolio.total">

			                     <div class="filters">
					              <ul>
					                <li class="active" data-filter="*">Todas</li>
					                <li :data-filter="'.'+category.slug" v-for="category in categories"  :key="category.id">{{category.name}}</li>
					                
					              </ul>
					            </div>

					            <silentbox-group>

					            
						            <div class="filters-content">


								              <div class="row grid">


						      		                  <div :class="'col-md-4 all '+ item.category.slug"  :key="item.id" v-for="item in portfolio.data">

								                                  <div class="item">

																		<silentbox-item :src="item.img"  :description="item.title" >


											                                    <img :src="item.img" class="img-fluid" :alt="item.title">

											                            </silentbox-item>


								                                    <div class="p-inner">
								                                        <h5>{{item.title}} - {{ item.category.name}}</h5>

								                                        <div class="cat">{{item.subtile}}</div>

								                                    </div>

								                                  </div>

						                                </div>
								                
								              </div>

						            </div>

								</silentbox-group>

		                    </div>

		                    <div v-else>
		                        <h2 class="text-center">No hay publicaciones</h2>
		                    </div>

		                    <div class="container row"> 
			              	
				              	<div class="col-md-12 text-center">

				              		<pagination-record
		                                    :page-length.sync="filterRoleForm.page_length"
		                                    :records="portfolio"
		                                    @updateRecords="getPortfolio"
		                                    @change.native="getPortfolio">
		                            </pagination-record>
				              		

				              	</div>

			              </div>


		                

	                      
	                </div><!-- end boxed -->
	            </div><!-- end container -->
	        </section>

	    </div>

		<div v-else>
	        <page-not-found></page-not-found>
	    </div>

	</div>

</template>

<script>

    import pageNotFound from '../../errors/PageNotFound'
    import pageList from '../../page/List'



    export default {
    	components: {
            pageNotFound,
            pageList
        },
        data() {
            return {
                categories: [],
                portfolio: {
 					total: 0,
                    data: []

                },
                filterRoleForm: {
                    page_length: helper.getConfig('page_length')
                }            
            };
        },
        mounted() {
        	helper.showSpinner();
            axios.get('/api/portfolio')
                .then(response => response.data)
                .then(response => {
                    this.categories  = response.categories;
                    this.portfolio = response.portfolioItems;

                    helper.hideSpinner();
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                    helper.hideSpinner();
                });
           
            
            
        },
        methods: {
            getPortfolio(page) {
                if (typeof page !== 'number') {
                    page = 1;
                }
                let url = helper.getFilterURL(this.filterRoleForm);
                helper.showSpinner();
                axios.get('/api/portfolio?page=' + page + url)
                    .then(response => response.data)
                    .then(response => {
                        this.portfolios = response.portfolioItems;
                        helper.hideSpinner();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                        helper.hideSpinner();
                    });
            },
            getConfig(name) {
                return helper.getConfig(name);
            },
        }
    };
</script>

<style type="text/css">
	
	#silentbox-overlay {

	    z-index: 9999999 !important;
	}

    .sec{
        background-size: cover;
        background-position: top;
        height: 50vh;
    }

    .sec .page-title{
        margin-top: 10% !important;
    }
</style>