<template>
    <form @submit.prevent="submit" @keydown="pageForm.errors.clear($event.target.name)">
        <div class="row">
            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label>{{ trans('page.title') }}</label>
                    <input class="form-control" type="text" value="" v-model="pageForm.title" name="title"
                           :placeholder="trans('page.title')" maxlength="420">
                    <show-error :form-name="pageForm" prop-name="title"></show-error>
                </div>
            </div>
            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label>{{ trans('page.section') }} 1</label>
                    <summernote-editor
                            type="page"
                            :model.sync="pageForm.section_1"
                            :isUpdate="true"
                            @clearErrors="pageForm.errors.clear('section_1')">
                    </summernote-editor>
                    <show-error :form-name="pageForm" prop-name="section_1"></show-error>
                </div>
            </div>            

            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label>{{ trans('page.section') }} 2</label>
                    <summernote-editor
                            type="page"
                            :model.sync="pageForm.section_2"
                            :isUpdate="true"
                            @clearErrors="pageForm.errors.clear('section_2')">
                    </summernote-editor>
                    <show-error :form-name="pageForm" prop-name="section_2"></show-error>
                </div>
            </div>            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label>{{ trans('page.section') }} 3</label>
                    <summernote-editor
                            type="page"
                            :model.sync="pageForm.section_3"
                            :isUpdate="true"
                            @clearErrors="pageForm.errors.clear('section_3')">
                    </summernote-editor>
                    <show-error :form-name="pageForm" prop-name="section_3"></show-error>
                </div>
            </div>            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label>{{ trans('page.section') }} 4</label>
                    <summernote-editor
                            type="page"
                            :model.sync="pageForm.section_4"
                            :isUpdate="true"
                            @clearErrors="pageForm.errors.clear('section_4')">
                    </summernote-editor>
                    <show-error :form-name="pageForm" prop-name="section_4"></show-error>
                </div>
            </div>            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label>{{ trans('page.section') }} 5</label>
                    <summernote-editor
                            type="page"
                            :model.sync="pageForm.section_5"
                            :isUpdate="true"
                            @clearErrors="pageForm.errors.clear('section_5')">
                    </summernote-editor>
                    <show-error :form-name="pageForm" prop-name="section_5"></show-error>
                </div>
            </div>            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label>{{ trans('page.section') }} 6</label>
                    <summernote-editor
                            type="page"
                            :model.sync="pageForm.section_6"
                            :isUpdate="true"
                            @clearErrors="pageForm.errors.clear('section_6')">
                    </summernote-editor>
                    <show-error :form-name="pageForm" prop-name="section_6"></show-error>
                </div>
            </div>
        </div>
        <div class="form-group pull-right">
            <button type="submit" class="btn btn-success waves-effect waves-light">
                <i class="far fa-share-square"></i> {{ trans('general.update') }}
            </button>
        </div>
    </form>
</template>

<script>
    import summernoteEditor from '../../components/SummernoteEditor'

    export default {
        components: {summernoteEditor},
        data() {
            return {
                pageForm: new Form({
                    id: '',
                    title: '',
                    section_1: '',
                    section_2: '',
                    section_3: '',
                    section_4: '',
                    section_5: '',
                    section_6: '',
                }),
                statistics: {
                    published: 0
                }
            };
        },
        mounted() {
      
	        helper.showSpinner();
	        axios.get('/api/page/main')
	            .then(response => response.data)
	            .then(response => {
	            	

	                this.pageForm.title = response.page.title;
	                this.pageForm.section_1 = response.page.section_1;
	                this.pageForm.section_2 = response.page.section_2;
	                this.pageForm.section_3 = response.page.section_3;
	                this.pageForm.section_4 = response.page.section_4;
	                this.pageForm.section_5 = response.page.section_5;
	                this.pageForm.section_6 = response.page.section_6;
	                this.pageForm.id = response.page.id;
	                helper.hideSpinner();
	            })
	            .catch(error => {
	                helper.showDataErrorMsg(error);
	                helper.hideSpinner();
	            });
            
        },
        methods: {
            submit() {
                // this.pageForm.body = this.cleanHTML(this.pageForm.body);
                this.pageForm.section_1 = this.addAttributes(this.pageForm.section_1);
                this.pageForm.section_2 = this.addAttributes(this.pageForm.section_2);
                this.pageForm.section_3 = this.addAttributes(this.pageForm.section_3);
                this.pageForm.section_4 = this.addAttributes(this.pageForm.section_4);
                this.pageForm.section_5 = this.addAttributes(this.pageForm.section_5);
                this.pageForm.section_6 = this.addAttributes(this.pageForm.section_6);

                this.pageForm.post('/api/page/main/update')
                    .then(response => {
                        toastr.success(response.page);
                         this.$router.push('/');
                        
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
                    '<ul>', '<ol>', '<li>', '<b>', '<strong>', '<i>', '<u>', '<a>', '<img>', '<iframe>', '<hr>', '<div>', '<section>'
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
