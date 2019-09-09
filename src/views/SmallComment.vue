<template>
  <div class="comment">
    <Spinner v-if="loading"></Spinner>
    <div  v-if="!loading">
        <Comment v-for="(item,index) in commentsMsg.comments" 
            :key='index'
            :detail='item'/>
        <div class="commentlist"  v-if="!loading" v-for="item in commentsMsg.comments">
            <div class="commentitem">
                <div class="msg-rating">
                    <van-rate  v-model="item.rating.value"   />
                </div>
                <div class="content">
                <p class="author-content">{{item.content}}</p>
                </div>
                <div class="author-img">
                <img :src="item.author.avatar" :alt="item.author.alt">
                <span>{{item.author.name}}</span>
                <div class="thinkyes">
                    <span>{{item.useful_count}} </span>
                </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import {Action, Mutation, State} from 'vuex-class';
import Spinner from '../components/Spinner.vue';
import Comment from './components/Comment.vue';
import { Rate } from 'vant';
@Component({
  components: {
    [Rate.name]: Rate,
    Spinner,
    Comment,
  },
})
export default class StartDetail extends Vue {
      private starMsg: any;
      private loading: boolean = true;
      private id: string = '';
      private commentsMsg: any;
      @Action private movieComment!: (id: string) => any;
      private created() {
        this.id = this.$route.params.id;
        this.movieComment(this.id).then( (res: any) => {
          this.commentsMsg = res;
          this.loading = false;
        });
      }
}
</script>
<style lang="sass">
</style>
