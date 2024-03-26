/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import '@splidejs/splide/css';
import NavButton from "./nav-button.js"
import Galleries from "./galleries.js";

NavButton.load();
Galleries.loadImageGalleries();
Galleries.loadVideoGalleries();
Galleries.loadReels();
Galleries.loadTimeline();