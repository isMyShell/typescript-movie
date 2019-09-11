import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie';

const state: State = {
    movieList: [],
};

const getters = {
    // tslint:disable-next-line:no-shadowed-variable
    movieList: (state: State) => state.movieList,
};

const mutations = {
};

const actions = {
    async movieList(context: { commit: Commit }, cate: string) {
        try {
            const res = await getMovieList(cate);
            return res;
        } catch (e) {
            console.log(e);
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
