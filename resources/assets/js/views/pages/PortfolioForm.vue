<template>
    <form @submit.prevent="storePortfolioItem" @keydown="portfolioForm.errors.clear($event.target.name)">

        <div class="row">

            <div class="col-md-6 col-12">
                
                <div class="form-group">
                    <label>{{ trans('general.title') }}</label>
                    <input class="form-control" type="text" value="" v-model="portfolioForm.title" name="title"
                           :placeholder="trans('general.title')">
                    <show-error :form-name="portfolioForm" prop-name="title"></show-error>
                </div>

            </div>            

            <div class="col-md-6 col-12">
                
                <div class="form-group">
                    <label>{{ trans('general.subtitle') }}</label>
                    <input class="form-control" type="text" value="" v-model="portfolioForm.subtitle" name="subtitle"
                           :placeholder="trans('general.subtitle')">
                    <show-error :form-name="portfolioForm" prop-name="subtitle"></show-error>
                </div>

            </div>            

            <div class="col-md-6 col-12">
                
                <div class="form-group">
                    <label>{{ trans('category.category') }}</label>
                    <select class="form-control custom-select" name="category_id"
                            v-model="portfolioForm.category_id">
                        <option value="">{{ trans('category.select_category') }}</option>
                        <option v-for="category in categories" :value="category.value">
                            {{ category.text }}
                        </option>
                    </select>
                    <show-error :form-name="portfolioForm" prop-name="category_id"></show-error>
                </div>

            </div>
            
        </div>

                    <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{ trans('user.avatar') }}</h4>
                        <upload-image
                                id="avatar"
                                :upload-path="`/portfolio/image/`"
                                :remove-path="`/portfolio/image/remove/${id}`"
                                :image-source="portfolioForm.img" @uploaded="setImg"
                                 @removed="setImg">
                        </upload-image>
                    </div>
                </div>
            </div>
        <button type="submit" class="btn btn-info waves-effect waves-light pull-right">
            <span>{{ trans('general.save') }}</span>
        </button>
    </form>
</template>

<script>
    import uploadImage from '../../components/UploadImage'

    export default {
        components: {uploadImage},

        data() {
            return {
                id: '',
                portfolioForm: new Form({
                    title: '',
                    subtitle: '',
                    category_id:'',
                    img:''
                }),
                categories: []
            };
        },
        mounted(){
            axios.get('/api/portfolio/pre-requisite')
                .then(response => response.data)
                .then(response => {
                    this.categories = response;
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                });

        },
        methods: {
            storePortfolioItem() {
                this.portfolioForm.post('/api/portfolio')
                    .then(response => {
                        toastr.success(response.message);
                        window.location.reload();
                    })
                    .catch(error => {
                        helper.showErrorMsg(error);
                    });
            },
            setImg(val){

                console.log(val);

                this.portfolioForm.img = val;
            }
        }
    }
</script>
