<template>
    <footer class="footer d-print-none text-center" style="left:0">
              <div class="container my-2">
            <div class="row">
                <div class="col-12 col-md-12 col-sm-12 col-xs-12">
                   <ul class="social-icons-ql" style="justify-content: center;display: flex;">
                       <li><a :href="getConfig('facebook')" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                       <li><a :href="getConfig('linkedin')" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                       <li><a :href="getConfig('whatsapp')" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                       <li><a :href="getConfig('instagram')" target="_blank"><i class="fab fa-instagram"></i></a></li>
                       
                   
                   </ul>
               </div>
          
            </div>

        </div>
        {{ getConfig('footer_credit') }}
    </footer>
</template>

<script>
    export default {
        methods: {
            getConfig(config) {
                return helper.getConfig(config);
            }
        }
    }
</script>
