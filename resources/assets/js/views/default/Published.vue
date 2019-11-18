<template>
    <div>
        <div class="row page-titles">
            <div class="col-md-6 col-8 align-self-center">
                <h3 class="text-themecolor m-b-0 m-t-0">{{ trans('page.pages') }}</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/home">{{ trans('general.home') }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ trans('page.published_box') }}</li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-lg-12 col-md-12">
                                <h4 class="card-title">{{ trans('page.published_box') }}</h4>
                                <h6 class="card-subtitle" v-if="pages">
                                    {{ trans('general.total_result_found',{'count': pages.total}) }}</h6>
                                <h6 class="card-subtitle" v-else>{{ trans('general.no_result_found') }}</h6>
                                <div class="table-responsive">
                                    <table class="table" v-if="pages.total">
                                        <thead>
                                        <tr>
                                            <th>{{ trans('page.title') }}</th>
                                            <th>{{ trans('page.published_at') }}</th>
                                            <th class="table-option">{{ trans('general.action') }}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="published in pages.data">
                                            <td v-text="published.title"></td>
                                            <td>{{ published.created_at }}</td>
                                            <td class="table-option">
                                                <div class="btn-group">
                                                    <button class="btn btn-info btn-sm" v-tooltip="trans('page.copy_link')" v-on:click="copy(published.slug)">
                                                        <i class="fas fa-link"></i>
                                                    </button>
                                                    <router-link :to="`/default/${published.slug}/edit`"
                                                                 class="btn btn-info btn-sm"
                                                                 v-tooltip="trans('page.edit_published')">
                                                        <i class="fas fa-edit"></i>
                                                    </router-link>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<input type="hidden" id="text-copy" v-model="text" value="">
    </div>
</template>


<script>
   
    import dateRangePicker from '../../components/DateRangePicker'

    export default {
        components: {dateRangePicker},
        data() {
            return {
                pages: {
                    total: 1,
                    data: []
                },
                filterPageForm: {
                    page_length: helper.getConfig('page_length')
                },
                statistics: {
                    published: 0,
                },
                text: ''
            
            };
        },
        mounted() {
            if (!helper.hasPermission('access-page')) {
                helper.notAccessibleMsg();
                this.$router.push('/home');
            }
            this.getPages();
            this.getStatistics();
            this.text = window.location.hostname;
        },
        methods: {
            getStatistics() {
                axios.post('/api/page/statistics')
                    .then(response => response.data)
                    .then(response => {
                        this.statistics.published = response.published;
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                    });
            },
            getPages() {
                helper.showSpinner();
                axios.get('/api/page/default/published')
                    .then(response => response.data)
                    .then(response => {
                        this.pages.data = response.pages;
                        helper.hideSpinner();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                        helper.hideSpinner();
                    });
            },
            copy (slug) {

              this.text = this.text + '/info/'+slug;
             

              let toCopy = document.querySelector('#text-copy')
              toCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
              toCopy.setAttribute('value', this.text);   

              toCopy.select()

              try {
                var successful = document.execCommand('copy');
                toastr.success('Enlace copiado');
              } catch (err) {
                toastr.success('No se pudo copiar el enlace');
              }

              /* unselect the range */
              toCopy.setAttribute('type', 'hidden')
              window.getSelection().removeAllRanges()
            },
        },
        watch: {
            filterPageForm: {
                handler(val) {
                    this.getPages();
                },
                deep: true
            }
        }
    }
</script>
