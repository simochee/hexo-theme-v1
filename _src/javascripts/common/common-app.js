import BasicApp from './basic-app';
import MainVisual from '../components/main-visual.js';

class CommonApp extends BasicApp {
    constructor() { 
        super();

        this.initMainVisual();
    }

    /**
     * メインビジュアルの設定
     */
    initMainVisual() {
        new MainVisual({
            $wrapper: $('#mainVisual'),
        });
    }
}

export default CommonApp;
