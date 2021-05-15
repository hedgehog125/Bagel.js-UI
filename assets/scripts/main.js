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
                        colour: "lime",
                        //icon: "Bagel",
                        size: 150,
                        onclick: {
                            submenu: "submenu"
                        },
                        submenu: "main"
                    }
                ]
            }
        ]
    },
    width: 800,
    height: 450,
    config: {
        display: {
            backgroundColour: "#202020"
        }
    }
});
