# html-parallax
Tiny jQuery script to add parallax effect to the image added in you html code
Unbilievably small plugin to add parallax effect to the banners in your existing website with small js code having only 36 lines of code when not compressed.

# Installation
1. Add script to your html page
    ``` html
    <script src="js/html-parallax.js" type="text/javascript"></script>
    ```
2. Add any any class (eg: `l-parallax`) to the element you want to add parallax effect
    ```html
    <div class="l-parallax" style="background-image: url(img/img1.jpg);" data-speed="0.5"></div>
    ```
3. Add image using inline `style` tag and `background-image` css property
    ```html
    <div class="l-parallax" style="background-image: url(img/img1.jpg);" data-speed="0.5"></div>
    ```
4. Add custom attribute `data-speed` to define speed of parallax effect
    ```html
    <div class="l-parallax" style="background-image: url(img/img1.jpg);" data-speed="0.5"></div>
    ```
5. Call parallax function `$(".l-parallax").parallax();` after loading all required js
    ```html
    <script src="js/jquery.min.js"></script>
    <script src="js/html-parallax.js" type="text/javascript"></script>
    <script>
    	$(document).ready(function () {
    		$(".l-parallax").parallax();
    	});
    </script>
    ```
6. Done

# Demo
- [Click here to see the demo](https://mjmakhija.github.io/html-parallax.html)