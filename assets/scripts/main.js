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
                submenus: {
                    main: {},
                    submenu: {}
                },
                stateToActivate: "menu",
                elements: [
                    {
                        type: "button",
                        color: "lime",
                        y: 300,
                        size: 150,
                        onClick: {
                            submenu: "submenu",
                            animation: {
                                ///*
                                direction: "up",
                                stillCamera: true
                                //*/

                                /*
                                direction: "right",
                                type: "triangleScroll"
                                */
                            }
                        },
                        submenu: "main"
                    },
                    {
                        type: "text",
                        text: "\"Hello World!\" is a phrase commonly used when starting out programming in a new language or when testing that something works. However, as \"Hello World!\" is too short to demonstrate word wrapping properly, I've instead written a much longer piece of text which is around a paragraph in length as opposed to two words.",
                        y: 113.5,
                        size: 30,
                        color: "white",
                        wordWrapWidth: 780,
                        submenu: "main"
                    },

                    {
                        type: "image",
                        color: "white",
                        width: 800,
                        height: 450,
                        submenu: "submenu"
                    },
                    {
                        type: "button",
                        color: "red",
                        y: 300,
                        size: 150,
                        onClick: {
                            submenu: "main",
                            animation: {
                                ///*
                                direction: "down",
                                stillCamera: true,
                                scrollOld: true
                                //*/

                                /*
                                direction: "left",
                                type: "triangleScroll"
                                */
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
            backgroundColor: "#202020",
            renderer: "canvas" // TODO: required due to broken rounding
        }
    }
});
