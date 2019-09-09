<template>
  <div class="home">
    
    <van-tabs v-model="activeName"
        @change='tabSwitch'>
      <van-tab v-for='(title, index) in tabList'
        :key='index'
        :title="title.title"
        :name='title.name'></van-tab>
    </van-tabs>
    
    <Spinner v-if="loading"></Spinner>
    <div v-else id="listMovieBox">
        <MovieList :movieList="movieListData"></MovieList>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import {Action, Mutation, State} from 'vuex-class';
import { Tab, Tabs, Toast } from 'vant';
import MovieList from '../components/MovieList.vue';
import Spinner from '../components/Spinner.vue';

@Component({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    MovieList,
    Spinner,
  },
})
export default class Home extends Vue {
    private tabList = [{
        title: '正在热映',
        name: 'in_theaters',
    }, {
        title: '即将上映',
        name: 'coming_soon',
    }, {
        title: 'Top250',
        name: 'top250',
    }];
    private activeName: string = 'in_theaters';
    private movieListData = null;
    private loading: boolean = true;
    @Action private movieList!: (activeName: string) => any;

    private getList() {
        this.loading = true;
        this.movieList( this.activeName ).then( (res: any) => {
            this.movieListData = res.subjects;
            this.loading = false;
        });
    }

    private tabSwitch(name: string) {
        this.activeName = name;
        this.getList();
    }

    private created() {
        this.getList();
    }
}
</script>
<style lang="sass">

  #listMovieBox
    padding: 0 16px
    p
      text-align: left;
</style>