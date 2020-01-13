<template>
    
        <div class="row">
            <div class="col-12 col-md-12">
                <div class="form-group">
                	<h2>{{ trans('page.component') }}s</h2>
                    <label>{{ trans('page.message') }}</label>
                    
                </div>
            </div>
            <br>
            <div class="col-12 col-md-12" v-for="(component, index) in components">
                <div class="form-group">
                    <summernote-editor
                            type="page"
                            :model.sync="component.component"
                            :isUpdate="true">
                    </summernote-editor>
                </div>
            </div>            
		</div>
    
</template>

<script>
    import summernoteEditor from '../../components/SummernoteEditor'

    export default {
        components: {summernoteEditor},
        data() {
            return {
               components: [],
                statistics: {
                    published: 0
                }
            };
        },
        mounted() {
      
	        helper.showSpinner();
	        axios.get('/api/default/components')
	            .then(response => response.data)
	            .then(response => {
	            	this.components = response.pages;
	                helper.hideSpinner();
	            })
	            .catch(error => {
	                helper.showDataErrorMsg(error);
	                helper.hideSpinner();
	            });
            
        },
        methods: {
          
        }
    }
</script>
