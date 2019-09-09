<template>
    <div class="comment">
        <Comment v-for="(item,index) in detail.popular_comments" 
            :key='index'
            :detail='item'/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Rate} from 'vant';
import Comment from './Comment.vue';
@Component({
    components: {
        [Rate.name]: Rate,
        Comment,
    },
})
export default class Comments extends Vue {
    @Prop()
    private detail!: any;
}
</script>

<style lang="sass" scoped>
.comment
    text-align: left
    .commentlist
      padding: 6px 0px
      margin-left: 10px
      border-bottom: 1px solid #e5e5e5
      font-size: 13px
      .msg-rating
        line-height: 16px
      .content
        padding: 10px 10px 10px 0
      .author-img
        position: relative
        img
          border-radius: 50%
          width: 28px
          height: 28px
          border: 1px solid #EE4000;
        span
          font-size: 14px
          color: #999
          line-height: 28px
          vertical-align: top
          margin-left: 10px
</style>