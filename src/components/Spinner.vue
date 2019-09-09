<template>
    <div class="spinner">
        <van-loading :color="color" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Loading } from 'vant';

@Component({
    components: {
        [Loading.name]: Loading,
    },
})

export default class Spinner extends Vue {
    @Prop({default: '#ee0a24'})
    private color!: string;
}
</script>

<style lang="scss" scoped>
    .spinner{
        margin: 200px auto;
    }
</style>


