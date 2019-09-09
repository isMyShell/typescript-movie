<template>
    <div class="movieList">
        <div class="movieitem" 
            v-for="(item, index) in starMsg.works"  
            :key='index'
            @click="goToMovieDetail(item.subject.id)">
          <div class="movieitem-left">
            <img :src="item.subject.images.small" width="70" height="90">
          </div>
          <div class="movieitem-right">
            <p class="title">{{item.subject.title}}</p>
            <p class="cate">{{item.roles[0]}}</p>
            <span v-for="(items,index) in item.subject.genres" 
                :key='index' class="cate">
              <span style="display: inline-block;margin-right: 4px">{{items}}</span>
            </span>
            <p class="year">{{item.subject.year}}</p>
            <p class="vist">{{item.subject.collect_count}}人看过</p>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class StartMovieList extends Vue {
    @Prop()
    private starMsg!: any;
    private goToMovieDetail(id: string) {
        this.$router.push({name: 'movieDetail', params: {id}});
    }
}
</script>

<style lang="sass" scoped>
 .movieList
    .movieitem
      margin-left: 20px
      display: flex
      text-align: left;
      padding: 10px 0 10px 0px
      border-bottom: 1px solid #eee
      .movieitem-left
        flex: 0
        width: 70px
      .movieitem-right
        flex: 1
        margin-left: 12px
        position: relative
        .vist
          position: absolute
          font-size: 12px
          color: #ff9334
          right: 14px
          top: 6px
        .title
          line-height: 24px
          max-width: 190px
        .cate
          color: #333
          font-size: 12px
          line-height: 20px
        .year
          line-height: 24px
</style>
