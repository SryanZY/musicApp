<template>
    <div class="search-box">
        <i class="icon-search"></i>
        <input ref="query" v-model="query" class="box" :placeholder="placeholder" />
        <i @click="clearContent" class="icon-dismiss" v-show="query"></i>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: '搜索歌曲、歌手'
        }
    },
    data () {
        return {
            query: ''
        }
    },
    methods: {
        clearContent () {
            this.query = ''
        },
        setQuery (query) {
            this.query = query
        }
    },
    created () {
        // 当query发生变化时向外派发一个query事件
        this.$watch('query', (newQuery) => {
            this.$emit('query', newQuery)
        })
    }
}

</script>
<style lang='stylus' scoped>
    @import "~common/stylus/variable"

    .search-box
        display: flex
        align-items: center
        box-sizing: border-box
        width: 100%
        padding: 0 8px
        height: 40px
        background: $color-highlight-background
        border-radius: 6px
        .icon-search
            font-size: 24px
            color: $color-background
        .box
            flex: 1
            margin: 0 5px
            height 70%
            line-height: 18px
            background: $color-highlight-background
            color: $color-text
            font-size: $font-size-medium
            &::placeholder
                color: $color-text-d
        .icon-dismiss
            font-size: 16px
            color: $color-background
</style>
