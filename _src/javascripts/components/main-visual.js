import AbstractApp from './abstract-app.js';

export default class MainVisual extends AbstractApp {
    constructor(options) {
        super();

        const {
            $wrapper,
            rate = 1.8,
        } = options;

        this.$wrapper = $wrapper;
        this.rate = rate;
        
        this.initParallax();
    }

    initParallax() {
        this.addEventListener('scroll', this.$window, () => {
            requestAnimationFrame(() => {
                if (this.$window.scrollTop() > this.$wrapper.height() * this.rate) {
                    this.$wrapper.css({
                        top: -this.$wrapper.height(),
                    });
                } else {
                    this.$wrapper.css({
                        top: -(this.$window.scrollTop() / this.rate),
                    });
                }
            });
        });
    }
}