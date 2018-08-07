<template>
    <div class="recommend">
        <Scroll class="recommend-content" :data="discList">
            <div>
                <div class="slider-wrapper">
                    <swiper :swiperList="recommends"></swiper>
                </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li v-for="(item, index) in discList" class="item" :key="index">
                            <div class="icon">
                                <img v-lazy="item.imgurl" class="needsclick" width="60" height="60" alt="歌单">
                            </div>
                            <div class="text">
                                <h2 class="name" v-html="item.creator.name"></h2>
                                <p class="desc" v-html="item.dissname"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loading-container" v-show="!discList.length">
                <loading></loading>
            </div>
        </Scroll>
    </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Swiper from 'base/swiper/swiper'
import Loading from 'base/loading/loading'
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
    name: 'recommend',
    data () {
        return {
            recommends: [],
            discList: []
        }
    },
    created () {
        this._getRecommend()
        this._getDiscList()
    },
    methods: {
        _getRecommend () {
            getRecommend().then((res) => {
                if (res.code === ERR_OK) {
                    this.recommends = res.data.slider
                }
            })
        },
        _getDiscList () {
            getDiscList().then((res) => {
                if (res.code === ERR_OK) {
                    this.discList = res.data.list
                }
            })
        }
    },
    components: {
        Swiper,
        Scroll,
        Loading
    }

}

</script>
<style lang='stylus' scoped>
    @import "~common/stylus/variable"
    .recommend
        position: fixed
        width: 100%
        top: 88px
        bottom: 0
        .recommend-content
            height: 100%
            overflow: hidden
            .slider-wrapper
                position: relative
            .recommend-list
                .list-title
                    height: 65px
                    line-height: 65px
                    text-align: center
                    font-size: $font-size-medium
                    color: $color-theme
                .item
                    display: flex
                    box-sizing: border-box
                    align-items: center
                    padding: 0 20px 20px 20px
                    .icon
                        flex 0 0 60px
                        width 60px
                        padding-right 20px
                    .text
                        flex: 1
                        display: flex
                        flex-direction: column
                        justify-content: center
                        line-height: 20px
                        overflow: hidden
                        font-size: $font-size-medium
                        .name
                            margin-bottom: 10px
                            color: $color-text
                        .desc
                            color: $color-text-d
        .loading-container
            position: absolute
            top: 50%
            width: 100%
            transform: translateY(-50%)
</style>
