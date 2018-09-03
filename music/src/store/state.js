import { playMode } from 'common/js/config'

const state = {
    singer: {},
    // 播放状态
    playing: false,
    fullScreen: false,
    // 播放列表
    playlist: [],
    // 顺序列表
    sequenceList: [],
    // 播放模式（顺序、随机、单曲)
    mode: playMode.sequence,
    // 当前播放的索引
    currentIndex: -1,
    disc: {},
    topList: {}
}

export default state
