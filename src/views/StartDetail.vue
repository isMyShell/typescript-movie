<template>
  <div class="start">
    <Spinner v-if="loading"></Spinner>
    <div class="castsMsg" v-else>
      <StartInfo :starMsg='starMsg'/>
      <StartMovieList :starMsg='starMsg'/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import {Action, Mutation, State} from 'vuex-class';
import Spinner from '../components/Spinner.vue';
import StartInfo from './components/StartInfo.vue';
import StartMovieList from './components/StartMovieList.vue';
@Component({
  components: {
    Spinner,
    StartInfo,
    StartMovieList,
  },
})
export default class StartDetail extends Vue {
      private starMsg: any;
      private loading: boolean = true;
      private id: string = '';
      @Action private stratDetail!: (id: string) => any;
      private created() {
        this.id = this.$route.params.id;
        this.stratDetail( this.id ).then( (res: any) => {
          this.loading = false;
          this.starMsg = res;
        });
      }
}
</script>
<style lang="sass">
  
</style>