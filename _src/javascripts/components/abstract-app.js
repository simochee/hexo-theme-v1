/**
 * 全ページ共通
 */
export default class AbstractApp {
    constructor() {
        this.$window = $(window);
        this.eventListeners = [];
    }

    /**
     * イベントリスナーを登録し、データを保持しておく
     * @param {string} eventType
     * @param {jQuery} $triggerElement
     * @param {function} callbackFunction
     */
    addEventListener(eventType, $triggerElement, callbackFunction) {
        $triggerElement.on(eventType, callbackFunction);
        this.eventListeners.push({
            eventType,
            $triggerElement,
            callbackFunction,
        });
    }

    /**
     * イベントリスナーを解除する
     * @param {string} eventType
     * @param {jQuery} $triggerElement
     * @param {function} callbackFunction
     */
    removeEventListener(eventType, $triggerElement, callbackFunction) {
        this.eventListeners.forEach((eventListener, index) => {
            if (
                eventListener.eventType === eventType &&
                eventListener.$triggerElement.is($triggerElement) &&
                eventListener.callbackFunction === callbackFunction
            ) {
                $triggerElement.off(eventType, callbackFunction);
                this.eventListeners.splice(index, 1);
            }
        });
    }

    /**
     * イベントリスナーを全て解除する
     */
    removeAllEventListener() {
        this.eventListeners.forEach((eventListener) => {
            eventListener.$triggerElement.off(eventListener.eventType, eventListener.callbackFunction);
        });
        this.eventListeners.length = 0;
    }
    
}