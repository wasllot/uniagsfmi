<template>
    <div>
        <div class="row page-titles">
            <div class="col-md-6 col-8 align-self-center">
                <h3 class="text-themecolor m-b-0 m-t-0">{{ trans('page.certs') }}</h3>
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
                            <page-sidebar menu="published" :statistics="statistics"></page-sidebar>
                            <div class="col-10 col-lg-10 col-md-10">
                                <h4 class="card-title">{{ trans('page.published_box') }}</h4>
                                <h6 class="card-subtitle" v-if="pages">
                                    {{ trans('general.total_result_found',{'count': pages.total}) }}</h6>
                                <h6 class="card-subtitle" v-else>{{ trans('general.no_result_found') }}</h6>
                                <div class="table-responsive">
                                    <table class="table" v-if="pages.total">
                                        <thead>
                                        <tr>
                                            <th>{{ trans('page.title') }}</th>
                                            <th>{{ trans('post.cover') }}</th>
                                            <th>{{ trans('page.published_at') }}</th>
                                            <th class="table-option">{{ trans('general.action') }}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="published in pages.data">
                                            <td v-text="published.title"></td>
                                            <td> <img :src="'/'+published.cover"  width="50" alt=""></td>
                                            <td>{{ published.created_at }}</td>
                                            <td class="table-option">
                                                <div class="btn-group">
                                                    <button class="btn btn-info btn-sm" v-tooltip="trans('page.copy_link')" v-on:click="copy(published.slug)">
                                                        <i class="fas fa-link"></i>
                                                    </button>
                                                    <router-link :to="`/page/${published.slug}/cover`"
                                                                 class="btn btn-success btn-sm"
                                                                 v-tooltip="trans('post.upload_cover')">
                                                        <i class="far fa-images"></i>
                                                    </router-link>
                                                    <router-link :to="`/page/${published.slug}/edit`"
                                                                 class="btn btn-info btn-sm"
                                                                 v-tooltip="trans('page.edit_published')">
                                                        <i class="fas fa-edit"></i>
                                                    </router-link>
                                                    <button class="btn btn-danger btn-sm"
                                                            :key="published.id"
                                                            v-confirm="{ok: confirmDelete(published)}"
                                                            v-tooltip="trans('page.delete_published')">
                                                        <i class="fas fa-trash"></i>
                                                    </button> 
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <pagination-record :page-length.sync="filterPageForm.page_length" :records="pages"
                                                   @updateRecords="getPages"
                                                   @change.native="getPages"></pagination-record>
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
    import pageSidebar from './PageSidebar'
    import dateRangePicker from '../../components/DateRangePicker'

    export default {
        components: {pageSidebar, dateRangePicker},
        data() {
            return {
                pages: {
                    total: 0,
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
            getPages(page) {
                if (typeof page !== 'number') {
                    page = 1;
                }
                let url = helper.getFilterURL(this.filterPageForm);
                helper.showSpinner();
                axios.get('/api/page/published?page=' + page + url)
                    .then(response => response.data)
                    .then(response => {
                        this.pages = response.pages;
                        helper.hideSpinner();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                        helper.hideSpinner();
                    });
            },
            confirmDelete(published) {
                return dialog => this.deletePage(published);
            },
            deletePage(published) {
                axios.delete('/api/page/' + published.slug)
                    .then(response => response.data)
                    .then(response => {
                        toastr.success(response.page);
                        this.statistics.published -= 1;
                        this.getPages();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                    });
            },
            copy (slug) {

              this.text = this.text + '/'+slug;
             

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
