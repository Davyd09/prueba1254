var dp = new DPlayer({
    element: document.getElementById('player1'),                       // Optional, player element
    autoplay: false,                                                   // Optional, autoplay video, not supported by mobile browsers
    theme: '#FADFA3',                                                  // Optional, theme color, default: #b7daff
    loop: true,                                                        // Optional, loop play music, default: true
    lang: 'zh',                                                        // Optional, language, `zh` for Chinese, `en` for English, default: Navigator language
    screenshot: true,                                                  // Optional, enable screenshot function, default: false, NOTICE: if set it to true, video and video poster must enable Cross-Origin
    hotkey: true,                                                      // Optional, binding hot key, including left right and Space, default: true
    preload: 'auto',                                                   // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    video: {                                                           // Required, video info
        url: 'https://thumbs2.redgifs.com/NaughtySurefootedYellowbelliedmarmot.mp4',                                         // Required, video link
        type: 'auto'                                                   // Optional, video type, `flv` for flv format, `hls` for m3u8 format, `normal` for mp4 ogg and webm format, `auto` for automatic detection, default: `auto`
    }
});