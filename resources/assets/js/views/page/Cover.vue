<template>
    <div>
        <div class="row page-titles">
            <div class="col-md-6 col-8 align-self-center">
                <h3 class="text-themecolor m-b-0 m-t-0">{{ trans('page.pages') }}</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/home">{{ trans('general.home') }}</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/post">{{ trans('post.posts') }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ trans('post.cover') }}</li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <page-sidebar :statistics="statistics"></page-sidebar>
                            <div class="col-10 col-lg-10 col-md-10">
                                <h4 class="card-title">{{ trans('post.cover') }}</h4>
                                <h6 class="card-subtitle">
                                    {{ page.title }}
                                </h6>
                                <upload-image
                                        id="cover"
                                        :upload-path="`/page/cover/${id}`"
                                        :remove-path="`/page/cover/remove/${id}`"
                                        :image-source="cover.page">
                                </upload-image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pageSidebar from './PageSidebar'
    import uploadImage from '../../components/UploadImage'

    export default {
        components: {pageSidebar, uploadImage},
        data() {
            return {
                id: '',
                slug: '',
                page: '',
                cover: {
                    page: ''
                },
                statistics: {
                    published: 0,
                    draft: 0
                }
            };
        },
        mounted() {
            if (!helper.hasPermission('access-page')) {
                helper.notAccessibleMsg();
                this.$router.push('/home');
            }
            this.slug = this.$route.params.slug;
            axios.post('/api/page/statistics')
                .then(response => response.data)
                .then(response => {
                    this.statistics.published = response.published;
                    this.statistics.draft = response.draft;
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                });
            helper.showSpinner();
            axios.get('/api/page/' + this.slug)
                .then(response => response.data)
                .then(response => {
                    this.id = response.page.id;
                    this.page = response.page;
                    if (response.page.cover !== 'uploads/images/cover-default.png') {
                        this.cover.page = response.page.cover;
                    }
                    helper.hideSpinner();
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                    this.$router.push('/page');
                    helper.hideSpinner();
                })
        }
    }
</script>
