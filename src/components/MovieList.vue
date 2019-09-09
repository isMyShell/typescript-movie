<template>
    <div v-if='movieList.length>0'>
        <MovieItem 
            v-for="(movie, index) in movieList"  
            :key='index'
            :movie='movie'
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MovieItem from './MovieItem.vue';
@Component({
    components: {
        MovieItem,
    },
})
export default class MovieList extends Vue {
    @Prop({default() {
        return [];
    }})
    private movieList!: any[];
}
</script>

