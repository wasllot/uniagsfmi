<template>

        <router-link @click.native="showSpinner" :to="`${post.category.slug}/${post.slug}`">

            <div class="col-lg-4 col-md-12">
                <div class="blog-box">
                    <div class="image-wrap entry">
                        <img class="img-fluid" :src="post.cover" :alt="post.title">
                        <div class="magnifier">
                             <router-link @click.native="showSpinner" :to="`${post.category.slug}/${post.slug}`"><i class="fas fa-eye"></i></router-link>
                        </div>
                    </div><!-- end image-wrap -->

                    <div class="blog-desc">
                        <h4><router-link @click.native="showSpinner" :to="`${post.category.slug}/${post.slug}`" href="#">{{ post.title }}</router-link></h4>
                        <p v-html="limitWords(post.stripped_body)"></p>
                    </div><!-- end blog-desc -->

                    <div class="post-meta">
                        <ul class="list-inline">
                            <li><a rel="nofollow" href="#">{{ post.created_at }}</a></li>
                            <li><a rel="nofollow" href="#">por {{post.user.profile.first_name}}</a></li>
                            <li><a rel="nofollow" href="#" @click="searchCategory(post.category.id)">en {{ post.category.name }}</a></li>
                        </ul>
                    </div><!-- end post-meta -->
                </div><!-- end blog -->
            </div>

                               
                            

        </router-link>

</template>

<script>
    export default {
        props: ['post'],
        methods: {
            limitWords(str) {
                return this.words(str, 35);
            },

            words(textToLimit, wordLimit) {
                  if (!textToLimit) return;
                  let finalText = "";
                  let text2 = textToLimit.replace(/\s+/g, ' ');
                  let text3 = text2.split(' ');
                  let numberOfWords = text3.length;
                  let i = 0;

                  if (numberOfWords > wordLimit) {
                      for (i = 0; i < wordLimit; i++) {
                          finalText = finalText + " " + text3[i] + " ";
                      }

                      return finalText + "...";
                  }

                  return textToLimit;
              },
            showSpinner() {
                return helper.showSpinner();
            }
        },

        searchCategory(categoryId) {
            helper.showSpinner();
            this.$store.dispatch('setSearchCategory', categoryId);
            this.$router.push('/search');
        },
    }
</script>
