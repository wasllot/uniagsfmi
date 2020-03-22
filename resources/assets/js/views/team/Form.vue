<template>
    <form @submit.prevent="submit" @keydown="teamForm.errors.clear($event.target.name)">
        <div class="row">
            <div class="col-12 col-md-8">
                <div class="form-group">
                    <label>{{ trans('team.title') }}</label>
                    <input class="form-control" type="text" value="" v-model="teamForm.title" name="title"
                           :placeholder="trans('team.title')" maxlength="191">
                    <show-error :form-name="teamForm" prop-name="title"></show-error>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="form-group">
                    <label>{{ trans('category.category') }}</label>
                    <select class="form-control custom-select" name="category_id"
                            v-model="teamForm.category_id">
                        <option value="">{{ trans('category.select_category') }}</option>
                        <option v-for="category in categories" :value="category.value">
                            {{ category.text }}
                        </option>
                    </select>
                    <show-error :form-name="teamForm" prop-name="category_id"></show-error>
                </div>
            </div>

            <div class="col-12 col-md-8">
                
                <div class="form-group">
                    <label>{{ trans('team.subtitle') }}</label>
                    <input class="form-control" type="text" value="" v-model="teamForm.subtitle" name="subtitle"
                           :placeholder="trans('team.subtitle')" maxlength="191">
                    <show-error :form-name="teamForm" prop-name="subtitle"></show-error>
                </div>

            </div>
            <div class="col-12 col-md-12">
                <div class="form-group">
                    
                    <label>{{ trans('team.body') }}</label>
                    <summernote-editor
                            type="post"
                            :model.sync="teamForm.body"
                            :isUpdate="slug ? true : false"
                            @clearErrors="teamForm.errors.clear('body')">
                    </summernote-editor>
                    <show-error :form-name="teamForm" prop-name="body"></show-error>
                </div>
            </div>
        </div>
        <div class="form-group pull-right">
            <button type="button" @click="saveAsDraft" class="btn btn-info waves-effect waves-light">
                <i class="fas fa-edit"></i> {{ trans('team.save_as_draft') }}
            </button>
            <router-link to="/team/draft" v-if="teamForm.id" class="btn btn-warning waves-effect waves-light">
                <i class="fas fa-times"></i> {{ trans('team.cancel') }}
            </router-link>
            <button type="submit" class="btn btn-success waves-effect waves-light">
                <i class="far fa-share-square"></i> {{ trans('team.publish') }}
            </button>
        </div>
    </form>
</template>

<script>
    import summernoteEditor from '../../components/SummernoteEditor'

    export default {
        components: {summernoteEditor},
        props: ['slug'],
        data() {
            return {
                teamForm: new Form({
                    id: '',
                    title: '',
                    subtitle: '',
                    body: '',
                    is_draft: 0,
                    category_id: ''
                }),
                statistics: {
                    published: 0,
                    draft: 0,
                },
                categories : []
            };
        },
        mounted() {
            axios.get('/api/team/pre-requisite')
                .then(response => response.data)
                .then(response => {
                    this.categories = response;
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                });

            axios.post('/api/team/statistics')
                .then(response => response.data)
                .then(response => {
                    this.statistics.published = response.published;
                    this.statistics.draft = response.draft;
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                });

            if (this.slug) {
                helper.showSpinner();
                axios.get('/api/team/' + this.slug)
                    .then(response => response.data)
                    .then(response => {
                        this.teamForm.title = response.team.title;
                        this.teamForm.subtitle = response.team.subtitle;
                        this.teamForm.body = response.team.body;
                        this.teamForm.id = response.team.id;
                        this.teamForm.category_id = response.team.category_id;
                        helper.hideSpinner();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                        helper.hideSpinner();
                    });
            }
        },
        methods: {
            submit() {
                this.teamForm.is_draft = 0;
               /* this.teamForm.body = this.cleanHTML(this.this.teamForm.body);
                this.teamForm.body = this.addAttributes(this.teamForm.body);*/
                this.teamForm.post('/api/team/new')
                    .then(response => {
                        toastr.success(response.team);
                        this.$router.push('/team/published');
                    })
                    .catch(error => {
                        helper.showErrorMsg(error);
                    })
            },
            saveAsDraft() {
                this.teamForm.is_draft = 1;
          /*      this.teamForm.body = this.cleanHTML(this.teamForm.body);
               this.teamForm.body = this.addAttributes(this.teamForm.body)*/;
                this.teamForm.post('/api/team/new')
                    .then(response => {
                        toastr.success(response.team);
                        this.$router.push('/team/draft');
                    })
                    .catch(error => {
                        helper.showErrorMsg(error);
                    })
            },
            cleanHTML(bodyHtml) {
                let stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
                let output = bodyHtml.replace(stringStripper, ' ');
                let commentStripper = new RegExp('<!--(.*?)-->', 'g');
                output = output.replace(commentStripper, '');
                let allowedTags = [
                    '<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<p>', '<br>', '<blockquote>', '<code>',
                    '<ul>', '<ol>', '<li>', '<b>', '<strong>', '<i>', '<u>', '<a>', '<img>', '<iframe>', '<hr>'
                ];
                allowedTags = (((allowedTags||'') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
                let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
                output = output.replace(tags, function($0, $1) {
                    return allowedTags.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
                });
                let badAttributes = ['style', 'class', 'align'];
                for (let i = 0; i < badAttributes.length; i++) {
                    let attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"', 'gi');
                    output = output.replace(attributeStripper, '');
                }
                output = output.replace(/[&]nbsp[;]/gi," ");

                return output;
            },
            addAttributes(bodyHtml) {
                bodyHtml = bodyHtml.replace(new RegExp('<a href', 'g'), '<a target="_blank" rel="nofollow" href');
                bodyHtml = bodyHtml.replace(new RegExp('<img src', 'g'), '<img class="img-fluid" src');

                return bodyHtml;
            }
        }
    }
</script>
