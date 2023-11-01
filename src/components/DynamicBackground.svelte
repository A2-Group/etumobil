<!--<script>-->

<!--</script>-->

<!--<div class="gradient-bg">-->
<!--    <svg xmlns="http://www.w3.org/2000/svg">-->
<!--        <defs>-->
<!--            <filter id="goo">-->
<!--                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />-->
<!--                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />-->
<!--                <feBlend in="SourceGraphic" in2="goo" />-->
<!--            </filter>-->
<!--        </defs>-->
<!--    </svg>-->
<!--    <div class="gradients-container">-->
<!--        <div class="g1"></div>-->
<!--        <div class="g2"></div>-->
<!--        <div class="g3"></div>-->
<!--        <div class="g4"></div>-->
<!--        <div class="g5"></div>-->
<!--        <div class="interactive"></div>-->
<!--    </div>-->
<!--</div>-->


<!--<style>-->

<!--    :root {-->
<!--        &#45;&#45;color-bg1: rgb(221, 192, 255);-->
<!--        &#45;&#45;color-bg2: rgb(196, 221, 255);-->
<!--        &#45;&#45;color1: 255, 207, 224;-->
<!--        &#45;&#45;color2: 240, 222, 255;-->
<!--        &#45;&#45;color3: 217, 244, 255;-->
<!--        &#45;&#45;color4: 255, 198, 198;-->
<!--        &#45;&#45;color5: 255, 248, 196;-->
<!--        &#45;&#45;color-interactive: 232, 208, 255;-->
<!--        &#45;&#45;circle-size: 80%;-->
<!--        &#45;&#45;blending: hard-light;-->
<!--    }-->

<!--    @keyframes moveInCircle {-->
<!--        0% {-->
<!--            transform: rotate(0deg);-->
<!--        }-->
<!--        50% {-->
<!--            transform: rotate(180deg);-->
<!--        }-->
<!--        100% {-->
<!--            transform: rotate(360deg);-->
<!--        }-->
<!--    }-->

<!--    @keyframes moveVertical {-->
<!--        0% {-->
<!--            transform: translateY(-50%);-->
<!--        }-->
<!--        50% {-->
<!--            transform: translateY(50%);-->
<!--        }-->
<!--        100% {-->
<!--            transform: translateY(-50%);-->
<!--        }-->
<!--    }-->

<!--    @keyframes moveHorizontal {-->
<!--        0% {-->
<!--            transform: translateX(-50%) translateY(-10%);-->
<!--        }-->
<!--        50% {-->
<!--            transform: translateX(50%) translateY(10%);-->
<!--        }-->
<!--        100% {-->
<!--            transform: translateX(-50%) translateY(-10%);-->
<!--        }-->
<!--    }-->


<!--    .gradient-bg {-->
<!--        width: 100vw;-->
<!--        height: 100vh;-->
<!--        position: relative;-->
<!--        overflow: hidden;-->
<!--        background: linear-gradient(40deg, var(&#45;&#45;color-bg1), var(&#45;&#45;color-bg2));-->
<!--        top: 0;-->
<!--        left: 0;-->
<!--        z-index: 0;-->
<!--    }-->

<!--    svg {-->
<!--        display: none;-->
<!--    }-->


<!--    .gradients-container {-->
<!--        filter: url(#goo) blur(40px) ;-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--    }-->

<!--    .g1 {-->
<!--        position: absolute;-->
<!--        background: radial-gradient(circle at center, rgba(var(&#45;&#45;color1), 0.8) 0, rgba(var(&#45;&#45;color1), 0) 50%) no-repeat;-->
<!--        mix-blend-mode: var(&#45;&#45;blending);-->

<!--        width: var(&#45;&#45;circle-size);-->
<!--        height: var(&#45;&#45;circle-size);-->
<!--        top: calc(50% - var(&#45;&#45;circle-size) / 2);-->
<!--        left: calc(50% - var(&#45;&#45;circle-size) / 2);-->

<!--        transform-origin: center center;-->
<!--        animation: moveVertical 25s ease infinite;-->

<!--        opacity: 1;-->
<!--    }-->

<!--    .g2 {-->
<!--        position: absolute;-->
<!--        background: radial-gradient(circle at center, rgba(var(&#45;&#45;color2), 0.8) 0, rgba(var(&#45;&#45;color2), 0) 50%) no-repeat;-->
<!--        mix-blend-mode: var(&#45;&#45;blending);-->

<!--        width: var(&#45;&#45;circle-size);-->
<!--        height: var(&#45;&#45;circle-size);-->
<!--        top: calc(50% - var(&#45;&#45;circle-size) / 2);-->
<!--        left: calc(50% - var(&#45;&#45;circle-size) / 2);-->

<!--        transform-origin: calc(50% - 400px);-->
<!--        animation: moveInCircle 15s reverse infinite;-->

<!--        opacity: 1;-->
<!--    }-->

<!--    .g3 {-->
<!--        position: absolute;-->
<!--        background: radial-gradient(circle at center, rgba(var(&#45;&#45;color3), 0.8) 0, rgba(var(&#45;&#45;color3), 0) 50%) no-repeat;-->
<!--        mix-blend-mode: var(&#45;&#45;blending);-->

<!--        width: var(&#45;&#45;circle-size);-->
<!--        height: var(&#45;&#45;circle-size);-->
<!--        top: calc(50% - var(&#45;&#45;circle-size) / 2 + 200px);-->
<!--        left: calc(50% - var(&#45;&#45;circle-size) / 2 - 500px);-->

<!--        transform-origin: calc(50% + 400px);-->
<!--        animation: moveInCircle 35s linear infinite;-->

<!--        opacity: 1;-->
<!--    }-->

<!--    .g4 {-->
<!--        position: absolute;-->
<!--        background: radial-gradient(circle at center, rgba(var(&#45;&#45;color4), 0.8) 0, rgba(var(&#45;&#45;color4), 0) 50%) no-repeat;-->
<!--        mix-blend-mode: var(&#45;&#45;blending);-->

<!--        width: var(&#45;&#45;circle-size);-->
<!--        height: var(&#45;&#45;circle-size);-->
<!--        top: calc(50% - var(&#45;&#45;circle-size) / 2);-->
<!--        left: calc(50% - var(&#45;&#45;circle-size) / 2);-->

<!--        transform-origin: calc(50% - 200px);-->
<!--        animation: moveHorizontal 35s ease infinite;-->

<!--        opacity: 0.7;-->
<!--    }-->

<!--    .g5 {-->
<!--        position: absolute;-->
<!--        background: radial-gradient(circle at center, rgba(var(&#45;&#45;color5), 0.8) 0, rgba(var(&#45;&#45;color5), 0) 50%) no-repeat;-->
<!--        mix-blend-mode: var(&#45;&#45;blending);-->

<!--        width: calc(var(&#45;&#45;circle-size) * 2);-->
<!--        height: calc(var(&#45;&#45;circle-size) * 2);-->
<!--        top: calc(50% - var(&#45;&#45;circle-size));-->
<!--        left: calc(50% - var(&#45;&#45;circle-size));-->

<!--        transform-origin: calc(50% - 800px) calc(50% + 200px);-->
<!--        animation: moveInCircle 15s ease infinite;-->

<!--        opacity: 1;-->
<!--    }-->


<!--    .interactive {-->
<!--        position: absolute;-->
<!--        background: radial-gradient(circle at center, rgba(var(&#45;&#45;color-interactive), 0.8) 0, rgba(var(&#45;&#45;color-interactive), 0) 50%) no-repeat;-->
<!--        mix-blend-mode: var(&#45;&#45;blending);-->

<!--        width: 100%;-->
<!--        height: 100%;-->
<!--        top: -50%;-->
<!--        left: -50%;-->

<!--        opacity: 0.7;-->
<!--    }-->

<!--</style>-->



<script>
    import {onMount} from "svelte";

    let canvas;
    let c;
    const count = 10;


    const Color = {
        vector: ["#ffcfe0", "#f0deff", "#d9f4ff", "#ffc6c6", "#fff8c4"],
        getRandom: () => {
            return Color.vector[Math.floor(Math.random() * Color.vector.length)];
                },

        index: 0,
        getNext: () => {
            const color = Color.vector[Color.index];
            Color.index = (Color.index + 1) % Color.vector.length;
            return color;
        },

        used: [],
        getRandomEqual: () => {
            if (Color.vector.length === 0) {
                Color.vector = Color.used;
                Color.used = [];
            }
            const index = Math.floor(Math.random() * Color.vector.length);
            const color = Color.vector.splice(index, 1)[0];
            Color.used.push(color);
            return color;
        }
    };

    function randomDirection() {
        return Math.random() > 0.5 ? 1 : -1;
    }

    class Circle {
        constructor(
            r = 150,
            x = randomNumber(canvas.width, r),
            y = randomNumber(canvas.height, r),
            dx = randomDirection(),
            dy = randomDirection(),
            speed = 10,
            color = Color.getRandomEqual()
        ) {
            this.r = r;
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.speed = speed;
            this.color = color;
            this.draw();
        }

        side() {
            return {
                right: this.x + this.r,
                left: this.x - this.r,
                bottom: this.y + this.r,
                top: this.y - this.r
            };
        }

        draw() {
            const gradient = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, this.color + "33");

            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.fillStyle = gradient;
            c.fill();
        }


        run() {
            // change position
            this.x += this.dx * this.speed * 0.1;
            this.y += this.dy * this.speed * 0.1;

            // wrap around screen
            if (this.side().right < 0) this.x = canvas.width + this.r;
            if (this.side().left > canvas.width) this.x = -this.r;
            if (this.side().bottom < 0) this.y = canvas.height + this.r;
            if (this.side().top > canvas.height) this.y = -this.r;

            this.draw();
        }
    }

    let circles = [];

    function init() {
        // setting up canvas
        canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        c = canvas.getContext("2d");

        animation();

        // adding circles
        for (let i = count; i > 0; i--) {
            circles.push(new Circle());
        }
    }

    function animation() {

        // clear canvas
        c.clearRect(0, 0, canvas.width, canvas.height);

        // animation
        circles.forEach((circle) => circle.run());

        // callback
        requestAnimationFrame(animation);
    }

    function randomNumber(max = 1, min = 0, forbidden = []) {
        let res;

        do {
            res = Math.floor(min + Math.random() * (max - min));
        } while (forbidden.some((num) => num === res));

        return res;
    }

    onMount(() => {
        init();
    });

</script>


<canvas id='canvas'></canvas>


<style>

    #canvas {
        width: 100%;
        height: 100%;
        filter: blur(60px) saturate(1.5);
        background: linear-gradient(40deg, #ddc0ff , #c4ddff);
    }

</style>
