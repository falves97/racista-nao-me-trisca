import {Splide} from '@splidejs/splide';
import {Video} from '@splidejs/splide-extension-video';

export default class Galleries {
    static loadImageGalleries() {
        let gallery = document.querySelector('.image-carousel');
        if (gallery) {
            document.addEventListener('DOMContentLoaded', function () {
                let splide = new Splide('.image-carousel', {
                    lazyLoad: 'nearby',
                });
                splide.mount();
            });
        }
    }

    static loadVideoGalleries() {
        let gallery = document.querySelector('.video-carousel');
        if (gallery) {
            document.addEventListener('DOMContentLoaded', function () {
                let splide = new Splide('.video-carousel', {
                    heightRatio: 0.5625,
                    cover: true,
                    lazyLoad: 'nearby',
                });
                splide.mount({Video});
            });
        }
    }

    static loadReels() {
        let gallery = document.querySelector('.reels');
        if (gallery) {
            document.addEventListener('DOMContentLoaded', function () {
                let splide = new Splide('.reels', {
                    direction: 'ttb',
                    wheel: true,
                    releaseWheel: true,
                    heightRatio: 0.5625,
                    cover: true,
                    lazyLoad: 'nearby',
                });
                splide.mount({Video});
            });
        }
    }

    static loadTimeline() {
        let gallery = document.querySelector('.timeline');
        if (gallery) {
            document.addEventListener('DOMContentLoaded', function () {
                let splide = new Splide('.timeline', {
                    lazyLoad: 'nearby',
                    perPage: 3,
                    gap: "20px",
                    padding: '5rem',
                    breakpoints: {
                        720: {
                            perPage: 2,
                            padding: '2rem',
                        },
                        500: {
                            perPage: 1,
                            padding: '1rem',
                        }
                    }
                });

                let bar = splide.root.querySelector('.timeline-progress-bar');

                splide.on('mounted move', function () {
                    var end = splide.Components.Controller.getEnd() + 1;
                    var rate = Math.min((splide.index + 1) / end, 1);
                    bar.style.width = String(100 * rate) + '%';
                });
                splide.mount();
            });
        }
    }
}