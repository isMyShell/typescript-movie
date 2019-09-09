<template>
    <div>
        <div class="movie">
        <div class="movieone-background" :style="{'background-image': `url(${detail.images.medium})`, 'background-size': '100%'}">
        </div>
        <div class="movietwo-background">
        </div>
        <div class="movie-content">
          <div class="movie-cover">
            <img :src='detail.images.medium'  width="130" height="176" >
          </div>
          <div class="movie-right">
            <p class="title">{{detail.title}}</p>
            <p class="enTitle">{{detail.original_title}}</p>
            <p class="ratings">
              {{detail.rating.average}}
              <van-rate 
                v-model="rate" 
                :size="18"
                allow-half/>
            </p>
            <p class="score-num">({{detail.ratings_count}}人评分)</p>
            <p><span v-if="detail.genres.length === 0">未知</span>
              <span v-else-if="detail.genres">
                <span v-for="(item, index) in detail.genres" :key='index' style="margin-right: 4px">{{item}}</span>
              </span>
            </p>
            <p>
              <span v-for="(item,index) in detail.countries" :key='index'>
                 {{item}}
              </span>
             </p>
            <p>{{detail.year}}</p>
          </div>
        </div>
      </div>
      <div class="movieDes">
        <div class="minDes" >
          <p>{{detail.summary}}</p>
        </div>
        <div class="arrowDwon" >
            <div class="bottom-arrow"></div>
        </div>
      </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Rate  } from 'vant';
@Component({
    components: {
        [Rate.name]: Rate,
    },
})
export default class MovieBaseInfo extends Vue {
    @Prop()
    private detail!: any;
    get rate(): number {
        return this.detail.rating.average / 2;
    }
}
</script>

<style lang="sass" scoped>
.movie
    text-align: left
    width: 100%
    height: 204px
    box-sizing: border-box
    overflow: hidden
    position: relative
    .movieone-background
      background-origin: center
      filter: blur(5px)
      z-index: 1
    .movietwo-background
      z-index: 3
      background-color: #40454d
      opacity: .55
    .movieone-background,.movietwo-background
      height: 204px
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
    .movie-content
      width: 320px
      position: absolute
      z-index: 100
      padding: 16px
      display: flex
      color: #c6c6c6
      font-size: 14px
      .movie-cover
        flex: 0
        width: 130px
        height: 170px
      .movie-right
        flex: 1
        margin-left: 10px
        line-height: 22px
        .title
          font-size: 16px
          line-height: 24px
          color: #fff
        .enTitle
          font-size: 14px
          line-height: 20px
          color: #fff
        .ratings
          font-size: 18px
          font-weight: bold
          font-family: "Microsoft New Tai Lue"
          color: #FFB400
.movieDes
    text-align: left
    padding: 10px
    font-size: 14px

</style>

