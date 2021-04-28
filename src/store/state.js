import {loadFavorite,loadHistory} from "@/plugins/utils"
const state = {
    playing:false,
    playlist:[],
    currentSong:{},
    currentSongIndex:0,
    mode:0,
    favoriteSongs:loadFavorite(),
    playHistory:loadHistory(),
    searchRes:[],
    searchSong:"0"
  }

  export default state