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
                    main: {
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
                                }
                            },
                            {
                                type: "text",
                                text: "This is an example of Bagel.js UI. It allows you to easilly create UIs in Bagel.js by using buttons, images and text but it will also be able to be expanded via external files in the future. Click the button below to see an example of an animation...",
                                y: 113.5,
                                size: 30,
                                color: "white",
                                wordWrapWidth: 780
                            }
                        ]
                    },
                    submenu: {
                        elements: [
                            {
                                type: "image",
                                color: "white",
                                width: 800,
                                height: 450
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
                                }
                            },
                            {
                                type: "text",
                                text: "This is a different submenu and it was switched to via the scroll animation. This animation has several modes but I used stillCamera and I didn't use scrollOld to create a popup effect. This causes the new elements (in this submenu) to move upwards (as I specified that direction) and cover up the old elements. The reverse animation works similarly but in the opposite direction and with scrollOld enabled. Give it a try...",
                                y: 113.5,
                                size: 25,
                                wordWrapWidth: 780
                            }
                        ]
                    }
                },
                stateToActivate: "menu"
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
