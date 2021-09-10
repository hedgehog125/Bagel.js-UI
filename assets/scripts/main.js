game = Bagel.init({
    id: "menu",
    state: "menu",
    game: {
        plugins: [
            {
                src: "gui.js"
            }
        ],
        assets: {
            imgs: [
                {
                    id: "Bagel",
                    src: "assets/imgs/bagel.png"
                }
            ]
        },
        sprites: [
            {
                id: "Menu",
                type: "GUI",
                submenu: "main",
                stateToActivate: "menu",
                elements: [
                    {
                        type: "button",
                        color: "lime",
                        //icon: "Bagel",
                        size: 150,
                        onclick: {
                            submenu: "submenu"
                        },
                        submenu: "main"
                    },

                    {
                        type: "button",
                        color: "red",
                        //icon: "Bagel",
                        size: 150,
                        onclick: {
                            submenu: "main",
                            animation: {
                                type: "triangleScroll",
                                direction: "right"
                            }
                        },
                        submenu: "submenu"
                    }
                ]
            }
        ]
    },
    width: 800,
    height: 450,
    config: {
        display: {
            backgroundColour: "#202020",
            renderer: "canvas" // TODO: required due to broken rounding
        }
    }
});
