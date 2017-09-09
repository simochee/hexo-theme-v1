import CommonApp from './common/common-app.js';
import CommonHomeApp from './common/home-app.js';

/**
 * 全ページのAppを包括するクラス
 */
class HelloNewWorld {
    constructor() {
        // 全画面共通のアプリ
        new HelloNewWorld.CommonApp();

        // SP PC共通アプリ
        const appName = $('body').data('script');
        if (appName && HelloNewWorld[`Common${appName}App`]) {
            new HelloNewWorld[`Common${appName}App`]();
        }
    }
}

// 各モジュールを登録
HelloNewWorld.CommonApp = CommonApp;
HelloNewWorld.CommonHomeApp = CommonHomeApp;

$(() => {
    console.time('timer')
})

window.addEventListener('load', () => {
    console.timeEnd('timer')
    window.helloNewWorld = new HelloNewWorld();
});
