<template>

                              <div class="content blog-list">
                                <div class="blog-wrapper clearfix">
                                    <div class="blog-meta">
                                        <small><a href="#">{{ post.category.name }}</a></small>
                                        <h3><router-link @click.native="showSpinner" :to="`${post.category.slug}/${post.slug}`">{{ post.title }}</router-link></h3>
                                        <ul class="list-inline">
                                            <li>{{ post.created_at }}</li>
                                            <li><span>por </span> <a href="#">{{post.user.profile.first_name}}</a></li>
                                        </ul>
                                    </div><!-- end blog-meta -->

                                    <div class="blog-media">
                                        <a href="blog-single.html" title=""><img :src="'/../../'+post.cover" :alt="post.title" class="img-responsive img-rounded"></a>
                                    </div><!-- end media -->

                                    <div class="blog-desc-big">
                                        <p v-html="limitWords(post.stripped_body)"></p>
                                        <router-link :to="`../../${post.category.slug}/${post.slug}`" class="btn btn-primary">Leer más →</router-link>
                                    </div><!-- end desc -->
                                </div><!-- end blog -->
                            </div><!-- end content -->

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
        }
    }
</script>
