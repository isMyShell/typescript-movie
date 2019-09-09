<template>
  <div class="movieDetail">
    <Spinner v-if="loading"></Spinner>
    <div v-else id="detailMovie">
      <MovieBaseInfo :detail='detail'/>
      <ActorsList :detail='detail'/>
      <Comments :detail='detail'/>
        <div class="moreComment">
          <div class="comments">
            <p>更多短片</p>
          </div>
          <div class="comments" @click="smallComment(detail.id)">
            <p>更多影评</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import Spinner from '../components/Spinner.vue';
import MovieBaseInfo from './components/MovieBaseInfo.vue';
import ActorsList from './components/ActorsList.vue';
import Comments from './components/Comments.vue';
@Component({
  components: {
    Spinner,
    MovieBaseInfo,
    ActorsList,
    Comments,
  },
})
export default class MovieDetail extends Vue {
  private id: string = '';
  private detail: any;
  private loading: boolean = true;
  @Action private movieDetail!: (id: string) => any;
  private created() {
    this.id = this.$route.params.id;
    this.movieDetail( this.id ).then( (res: any) => {
      this.detail = res;
      this.loading = false;
    });
  }
  private smallComment(id: string) {
    this.$router.push({name: 'smallComment', params: {id}});
  }
}
</script>
<style lang="sass">
    .commentlist:last-child
      border-bottom: none
    .moreComment
      display: flex
      line-height: 46px
      text-align: center
      color: #e54847
      .comments
        flex: 1
        text-align: center !important
        &:first-child
          border-right: 1px solid #eee

</style>