<template>
    <div class="commentlist">
          <div class="commentitem" >
            <div class="msg-rating flex" >
              <van-rate  v-model="detail.rating.value"/>
            </div>
            <div class="content">
              <p class="author-content">{{detail.content}}</p>
            </div>
            <div class="author-img flex">
              <img :src="detail.author.avatar">
              <span>{{detail.author.name}}</span>
              <span>{{detail.useful_count}} </span>
            </div>
          </div>
        </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Rate} from 'vant';
@Component({
    components: {
        [Rate.name]: Rate,
    },
})
export default class Comments extends Vue {
    @Prop()
    private detail!: any;
}
</script>

<style lang="sass" scoped>

    .commentlist
      padding: 6px 0px
      margin-left: 10px
      border-bottom: 1px solid #e5e5e5
      font-size: 13px
      .msg-rating
        line-height: 16px
      .content
        text-align: left;
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