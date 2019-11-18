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
                        <router-link to="/default/published">{{ trans('page.pages') }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ trans('page.edit') }}</li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            
                            <div class="col-12 col-lg-12 col-md-12">
                                <h4 class="card-title">{{ trans('page.edit') }}</h4>
                                <page-form :slug="slug"></page-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pageForm from './Form';

    export default {
        components: {pageForm},
        data() {
            return {
                slug: this.$route.params.slug,
                statistics: {
                    published: 0
                }
            };
        },
        mounted() {
            if (!helper.hasPermission('access-page')) {
                helper.notAccessibleMsg();
                this.$router.push('/home');
            }
            axios.post('/api/page/statistics')
                .then(response => response.data)
                .then(response => {
                    this.statistics.published = response.published;
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                });
        }
    }
</script>
