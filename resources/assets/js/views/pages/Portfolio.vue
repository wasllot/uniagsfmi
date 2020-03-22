<template>
    <div>
        <div class="row page-titles">
            <div class="col-md-6 col-8 align-self-center">
                <h3 class="text-themecolor m-b-0 m-t-0">{{ trans('general.portfolios') }}</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/home">{{ trans('general.home') }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ trans('general.portfolios') }}</li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-lg-12 col-md-12">
                                <div class="row">
                                    <div class="col-12">
                                        <h4 class="card-title">{{ trans('general.add_new') }}</h4>
                                        <portfolio-form ></portfolio-form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="col-12">

                <br>
                <br>
                
                <h4 class="card-title">{{ trans('general.list') }}</h4>

                <h6 class="card-subtitle" v-if="portfolios">
                    {{ trans('general.total_result_found',{'count' : portfolios.total}) }}</h6>
                <h6 class="card-subtitle" v-else>{{ trans('general.no_result_found') }}</h6>
                
                <div class="row grid" v-if="portfolios.total">

                                          
                        <div class="col-sm-4 all corporate" v-for="portfolio in portfolios.data">

                          <div class="item">

                            <img :src="portfolio.img" class="img-fluid img-responsive" :alt="portfolio.title">

                            <div class="p-inner">
                                <h5>{{portfolio.title}} - {{ portfolio.category.name}}</h5>

                                <div class="cat">{{portfolio.subtile}}</div>
                                <br>

                                <div class="btn-group text-center">

                                    <button class="btn btn-danger btn-sm" :key="portfolio.id"
                                            v-confirm="{ok: confirmDelete(portfolio)}"
                                            v-tooltip="trans('portfolio.delete_portfolio')">
                                        <i class="fas fa-trash"></i>
                                    </button>

                                </div>

                            </div>

                          </div>

                        </div>

                </div>

                                        <pagination-record
                                                :page-length.sync="filterRoleForm.page_length"
                                                :records="portfolios"
                                                @updateRecords="getportfolios"
                                                @change.native="getportfolios">
                                        </pagination-record>
            </div>


             
        </div>
    </div>
</template>


<script>
    import portfolioForm from './PortfolioForm'

    export default {
        components: {portfolioForm},
        data() {
            return {
                portfolios: {
                    total: 0,
                    data: []
                },
                name:'',
                filterRoleForm: {
                    page_length: helper.getConfig('page_length')
                }
            };
        },
        mounted() {
            if (!helper.hasPermission('access-configuration')) {
                helper.notAccessibleMsg();
                this.$router.push('/home');
            }
            this.getportfolios();
        },
        methods: {
            getportfolios(page) {
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

            getportfolioName(id){

                axios.get('/api/portfolio/' + id)
                    .then(response => response.data)
                    .then(response => {

                       return response.name;
                       
                    })
                    .catch(error => {

                         return 'Error'; 
                    });

            },
            confirmDelete(portfolio) {
                return dialog => this.deleteRole(portfolio);
            },
            deleteRole(portfolio) {
                axios.get('/api/portfolio/image/remove/' + portfolio.id)
                    .then(response => response.data)
                    .then(response => {
                        toastr.success(response.message);
                        this.getportfolios();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                    });
            }
        }
    }
</script>
