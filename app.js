Vue.createApp({
    data() {
        return {
            perspective: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            mainColor: true,
            redColor: false,
            greenColor: false,
        };
    },
    methods: {
        reset() {
            this.perspective = 0;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copy() {
            const el = document.createElement("textarea");
            el.value = this.boxStyles.transform;
            el.setAttribute("readonly", "");
            el.style.position = "absolute";
            el.style.left = "-99999px";
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
        },
        changeMainColor() {
            this.mainColor = true;
            this.redColor = false;
            this.greenColor = false;
        },
        changeRedColor() {
            this.mainColor = false;
            this.redColor = true;
            this.greenColor = false;
        },
        changeGreenColor() {
            this.mainColor = false;
            this.redColor = false;
            this.greenColor = true;
        },
    },
    computed: {
        boxStyles() {
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
            };
        },
        colorTheme() {
            if (this.mainColor)
                return {
                    "background-color": `#8d81f3`,
                };
            else if (this.redColor)
                return {
                    "background-color": `#d44a4a`,
                };
            else if (this.greenColor)
                return {
                    "background-color": `#3bb93b`,
                };
        },
    },
}).mount("#app");
