<template>
    <div class="actorsList">
        <div class="container-wrap">
          <div class="container">
            <div class="box" v-for="(item,index) in detail.casts" :key='index' @click="goToStart(item.id)">
              <div class="img">
                <img :src='item.avatars.medium'  width="80" height="100" >
              </div>
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
        <van-cell-group>
          <van-cell title="更多演员" />
        </van-cell-group>
      </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import { Cell, CellGroup  } from 'vant';
    @Component({
        components: {
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
        },
    })
    export default class ActorsList extends Vue {
        @Prop()
        private detail!: any;
        private goToStart(id: string) {
            this.$router.push({name: 'movieDetail', params: {id}});
        }
    }
</script>

<style lang="sass" scoped>
.actorsList
    .container-wrap
      width: 100%
      white-space: nowrap
      overflow: hidden
      overflow-x: scroll
      -webkit-backface-visibility: hidden
      -webkit-perspective: 1000
      -webkit-overflow-scrolling: touch
      text-align: justify
      &::-webkit-scrollbar
        display: none
      .container
        padding: 14px 0
        .box
          display: inline-block
          width: 100px
          color: #000
          font-size: 8px
          text-align: center
          margin-right: 10px
          line-height: 24px
          .img
            width: 80px
            height: 100px
            display: block
            margin: 0 auto
    .border-bottom
      border-bottom: 10px solid #d9d9d9
    .mint-cell-wrapper
      padding: 0 0px
      .mint-cell-text
        padding-left: 10px
        font-size: 14px
</style>