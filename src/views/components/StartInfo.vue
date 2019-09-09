<template>
    <div class="casts">
        <div class="castsone-background" :style="{'background-image':`url(${starMsg.avatars.medium})`}">
        </div>
        <div class="caststwo-background">
        </div>
        <div class="casts-content">
          <div class="movie-image">
            <img :src='starMsg.avatars.medium' width="130" height="170" >
          </div>
          <div class="movie-right">
            <p class="title">{{starMsg.name}}</p>
            <p>{{starMsg.name_en}}</p>
            <p>{{starMsg.gender}}</p>
          </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class StartInfo extends Vue {
    @Prop()
    private starMsg!: any;

}
</script>
<style lang="sass" scoped>
.casts
    text-align: left;
    width: 100%
    height: 240px
    box-sizing: border-box
    overflow: hidden
    position: relative
    .castsone-background
      background-size: cover
      background-repeat: norepeat
      filter: blur(5px)
      z-index: 1
    .caststwo-background
      z-index: 3
      background-color: #40454d
      opacity: .55
    .castsone-background,.caststwo-background
      height: 240px
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
    .casts-content
      position: absolute
      padding: 0 20px
      z-index: 100
      top: 50%
      transform: translateY(-50%)
      display: flex
      color: #c6c6c6
      font-size: 14px
      .movie-image
        flex: 0
        width: 130px
        height: 170px
      .movie-right
        flex: 1
        margin-left: 16px
        line-height: 22px
        padding-top: 94px
        .title
          font-size: 19px
          line-height: 24px
          color: #fff
        .enTitle
          font-size: 14px
          line-height: 20px
          color: #fff
</style>