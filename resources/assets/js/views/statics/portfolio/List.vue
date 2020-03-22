<template>

	<div class="container">
		
		<section class="portfolio section">


	        <silentbox-group>

	        
	            <div class="filters-content">


			              <div class="row" style="position: relative; height: 100% !important;">


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

	                                <br>

			                    <div class="col-md-12 text-center">

						                    <router-link @click.native="showSpinner" :to="`/portfolio/1/list`" class="btn btn-arrow">

						                       Ver todos

						                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

						                    </router-link>
						                 

						             </div>
					                
					         </div>

	            </div>

			</silentbox-group>


	    </section>


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
        }
    };
</script>

<style type="text/css">
	
	#silentbox-overlay {

	    z-index: 9999999 !important;
	}
</style>