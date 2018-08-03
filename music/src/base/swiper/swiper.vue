<template>
    <div class="swiper">
        <swiper :options="swiperOption" v-if="swiperList.length">
            <swiper-slide v-for="(item, index) in swiperList" :key="index">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" :alt="item.picUrl">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props: {
        swiperList: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOption: {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                observer: true,
                observeParents: true
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }

}

</script>
<style lang='stylus' scoped>
    @import "~common/stylus/variable"
    .swiper >>> .swiper-pagination-bullet
        width 8px
        height 8px
        border-radius 50%
        background $color-text-l
    .swiper >>> .swiper-pagination-bullet-active
        width 20px
        border-radius 5px
        background $color-text-ll
    .swiper
        width 100%
        overflow hidden
        height 0
        padding-bottom 40%
        img
            width 100%
</style>
