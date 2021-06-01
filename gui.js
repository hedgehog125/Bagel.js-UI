{
    info: {
        id: "BagelGUI",
        description: "A customisable plugin for creating GUIs in Bagel.js."
    },
    plugin: {
        scripts: {
            init: (plugin, game) => {
                game.add.asset.snd({
                    id: ".BagelGUI.click",
                    src: "data:audio/mpeg;base64,//OAxAAAAAAAAAAAAFhpbmcAAAAPAAAAAwAABBIAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBg0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ////////////////////////////////////////////AAAAUExBTUUzLjk5cgRuAAAAAAAAAAA1CCQCzSEAAeAAAAQSSYAuqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zoMQAEnACyvdAAACoh3exu8jLeoIAgcKAgCAYLggCAIHCgIAhggGIPv5cEFg+D+sH/Lg4CHDHKHP/E4PghrBwMcEAQygY//BB3//+UBAEAx/KAhlAQcmYqIp0mTVUZDWGgyrJEUQYImG/BhWy0KoEQVVjZUyyAxi+zMxAcDuX+WiWnPTQwFZ4BkIgoSlO0HWRLRa6sZiyXtxgTnQ+IAlwFSpHstGDFzlpJ1J2pzS2mZiuluTRlbS2DUE23jTFgFMVrERfV4GUv7edHTZbTQ3CYA37KYccp4lAmlpzMpkEOspbRYs7LIi8j8MQbxBMzxd8NvvB7KbTgw4yl1W5P67sEQS7sYhl3Zx/ZbS7xUzi6X+TZJFYkkYszmT+NETCdJdz7uFIpTWyjsNSdyauojEpdBNNLm408Oz/87DE4loUgqsfmMAkgxuzs47j+VGWS1u8Uf913bjdZa8ehyAaaIu7EXJhhwZC4VK+0ifZr0F/j++Y/vHW6WVZwzAUWZ7FrTIbUonIxGL0OUt+9G5e5cXmm3gp+aBnEQfaROjKqF/Zl/ZQ+smaVSuk8zSmJNFZVG2Gv9BMO/dpccfkF6/er5y/LC67MYfWchq4/0fVrKAIu7lfHLva4zAQE2q//1VFBQEBKMzKuGAhVCgJqs+qAnVAVL/6vxmKMx///9VTqr/V9VXjMUZvgYCAQNP9YKrBX8S8ShsSgrEVZ0RBwRPg1Bp5U7rBUeGpUNiU78RBwRPUIoilTusFR4KqTEFNRTMuOTkuM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/zYMTZGtmybx/DGACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg=="
                });
                game.add.asset.snd({
                    id: ".BagelGUI.clickUp",
                    src: "data:audio/mpeg;base64,//OAxAAAAAAAAAAAAFhpbmcAAAAPAAAABAAABMkATk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn/////////////////////////////////AAAAUExBTUUzLjk5cgRuAAAAAAAAAAA1CCQDLCEAAeAAAATJpqKjmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zoMQAFogGux9BAAC6qruoVWtAv0iG8oCDgQcUBA4Jz8pLg+D+IAQd5cHwfB/rP/BAEDkoGPxACYPg+D5+GPUCAIA+/8HwQBAEAQBMH/h/8EAQBB3UCAPg+H/wQDH8HwfD8uD4Pg+qushml2hmlAYBrCAMEjTYbZgXKSJMQKAAkRyGgr9CoNCahLjLRnVAAhorQiAL13knoq8qAdYdH1rCt6FqmTC2dsHT1HCMoc2jWLUjdBRNoyJv4RMO0+0ZrvFNRFbrNnkWi/kVZar+lnZySwWwG4+ixJ1YkCQ+8pbp5BEMtK0x06WUrt+hjNymv+3B3YjhSwzfl+pU8dytnvDLdWPVbMpuUdPNWprdLVi9irfi0sqU17Ofj8Oyrct1AT9y2td13+c+7WpqbfJqlpatarGeX5Xf7rD/86DE0Up0bqMfmsAAw5zWN6btVKDKzU7yzzKbyps6amyrU1/uWWOOP8paa13k1DVLjTV7tumz7llnhjZyws6t1pfMyHcons7H42c6avS27mprVaNVbUzS/vdL3u/5l3+5fv7N/qaMNZRoSaM02g0LO2aTFcDsQUEAsfvVoGoStQqLLLRgFURCVLcDdYiz5huShkdWIiu/qVSyzERIxDHQ0pUtZNFTUECvRA6UymyVysMPMABBJfQHFAUZwC8TIEEyk3udBhrpMhGCRxJYZOULpBco1Sk7HGyX0/l6VsgUOZnGH2U2MI0A8GLUeKwWfCoQ8E0F/6BprcYalVlOdmj4tNyf6VXuLTLIuC/LorRbMhlMYw1BN2yzJs8dd2zGcZmTN3lUWlUzOQ3H4CpuPEw6G8qsZxtNxgFx//OwxNNQVC56/5jICGCqtSrclTdpucj0tjkRoKGIwTcd2njO6CtVptyqNXJuK0t2kpst61lv+a139Y6nN092prC19Ncls5QzfIlc3CL8BS+tasZXvm3RityJRaIxGw+0pj0Na7jvWWst/v//////UpprXcqYjJN1BQCkqkxBTUUzLjk5LjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/8xDE8QAAA/wBwAAAqqqqqqqqqqqqqqqqqg=="
                });
                game.add.asset.snd({
                    id: ".BagelGUI.touch",
                    src:  "data:audio/mpeg;base64,//OAxAAAAAAAAAAAAFhpbmcAAAAPAAAABAAABP0ASkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn/////////////////////////////////AAAAUExBTUUzLjk5cgRuAAAAAAAAAAA1CCQDKiEAAeAAAAT9uAw0pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zoMQAEjkqnedDMACyMBL0ufxEQvkRC3REREKgYACCEe7JpkEIy7Jp3Ed7Jp3vezyad7+9nkyd7BMmH8uf8Tg+8uD4f/l///Ln/5d//h///rB9//g+z7q7iFlKYTSjQDSknrKLQgSoGlObS2JMhgJeYvuY7AQqCdmwWOKDMmn7BoHzfVVVDBTsLMmppKqLp0vOKCTvSCZkpdHXbYjEnpVuWSqo6TdY6z5ur2PA3FrEqV1EYgu8tyumPPoyarCXtXFGr8QhiZqr8pX8uxX4koFKn9eB8HDaw7rWJFKXioqVfzRW6vxFrMeu5RKAaDjxU8JmvtRDCV2s7eEsvZyCV49gGxGsaOrQvzT1XFsZczpYai2PYeyq3GyRSXSh3n8sSyN237rWKSKdhqLdhtiVC9kzIIlEpq69DRb/86DE406karb/mMAFHbtWq4NWxKsdSq9Wpq3JuxT27ff5X7T3+U+X2/yntXm4vk5WpFjMzsGWX6qVJdG5dlTRyHoL7Wz/Gl7rKm3KvrV8cfpr8Zw5vm+/vt/G9V5re6lXCtV5KptKs5xLtdN7LRLNNperiCirq5ChNOZN0QkNyLgShrjSgaOXwEQpl1LzMZFtXeJAWG2ugwCMCNzUA833wAgJFXiAwSlUnkYugAJmMGF1gGAPCykUA0eGnu4YEOjRSYWOGAildqzYmsuUy5iUvmJQAQcyg7MCIzJAUw00r8huy/cNv9U28b9Oy0iBBCHGPhRiiWYIThCaZeuGOoyQ7WYu15yXHdWd9Z6msOrSf+Mpywm2TF6mlNJAaDCEAQJmBCbMc6sImYkzqn5TydmE5FtTFmXQHCpN//PAxNRcDG6O/5nYDVKDH5bfR9WU0pr5ggqBA8oDTAQqCi/xcpSpqVz8LlBLOfbs5VZXujdmZpdX5qLSKjpb0upn9qw66lmtflMqp05X1a6/rouqyKIwwBQqKvq+Evp6ksmbcY7m78VoYzhVr5T7cG3l0W5dptdpH/ll+zVtWfx5LUJyri9r6yHdWgjThQG12U2M5TSRrGgXNn3///3/P////99pfGdgs1VMQU1FVUxBTUUzLjk5LjNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//MQxPIAAAP8AcAAAFVVVVVVVVVVVVVVVVU="
                });
            }
        },

        types: {
            sprites: {
                GUI: {
                    description: "Creates and manages a GUI.",
                    args: {
                        submenu: {
                            required: true,
                            types: ["string"],
                            description: "The id of the submenu to start in."
                        },
                        stateToActivate: {
                            required: true,
                            types: ["string"],
                            description: "The game state that this submenu is active."
                        },
                        elements: {
                            required: true,
                            types: ["array"],
                            check: value => {
                                value.internal = {
                                    dontClone: true
                                };
                            },
                            checkEach: true,
                            subcheck: {
                                type: {
                                    required: true,
                                    types: ["string"],
                                    check: value => {
                                        if (! ["button", "icon"].includes(value)) {
                                            return "Oh no! That element type doesn't exist, the type must be either \"button\" or \"icon\".";
                                        }
                                    },
                                    description: "The type of element, either \"button\" or \"icon\"."
                                },
                                submenu: {
                                    required: true,
                                    types: ["string"],
                                    description: "The id of the submenu that this element is in."
                                },

                                x: {
                                    required: false,
                                    default: "centred",
                                    types: [
                                        "number",
                                        "string",
                                        "function"
                                    ],
                                    description: "The x position of the element."
                                },
                                y: {
                                    required: false,
                                    default: "centred",
                                    types: [
                                        "number",
                                        "string",
                                        "function"
                                    ],
                                    description: "The y position of the element."
                                },
                                left: {
                                    required: false,
                                    types: [
                                        "number",
                                        "function"
                                    ],
                                    description: "The x position of the left side of the element."
                                },
                                top: {
                                    required: false,
                                    types: [
                                        "number",
                                        "function"
                                    ],
                                    description: "The y position of the top of the element."
                                },
                                right: {
                                    required: false,
                                    types: [
                                        "number",
                                        "function"
                                    ],
                                    description: "The x position of the right side of the element."
                                },
                                bottom: {
                                    required: false,
                                    types: [
                                        "number",
                                        "function"
                                    ],
                                    description: "The y position of the bottom of the element."
                                },

                                internal: {
                                    required: false,
                                    types: ["object"],
                                    description: "Stores some internal values."
                                }
                            },
                            ignoreUseless: true,
                            arrayLike: true,
                            description: "The elements of your menu."
                        }
                    },
                    cloneArgs: null,
                    check: (menuSprite, game, check, plugin) => {
                        let internal = menuSprite.internal;
                        internal.initialSubmenu = menuSprite.submenu;
                        internal.initialElements = Bagel.internal.deepClone(menuSprite.elements);
                        menuSprite.scripts.main.push({
                            code: (me, game) => {
                                let internal = me.internal;
                                if (me.submenu != me.internal.lastSubmenu) {
                                    plugin.vars.initMenu(me, plugin, internal.submenuChangeAnimation);
                                    internal.lastSubmenu = me.submenu;
                                }

                                let animation = internal.submenuChangeAnimation;
                                if (animation) {
                                    if (animation.type == "scrollRight") {
                                        let animationVars = internal.animationVars;
                                        animationVars.vel += 10;
                                        me.camera.x += animationVars.vel;
                                        animationVars.vel *= 0.99;

                                        if (me.camera.x - animationVars.initialCameraPosition >= game.width) {
                                            me.camera.x = animationVars.initialCameraPosition + game.width;
                                            internal.submenuChangeAnimation = null;

                                            let toDelete = internal.previousSubmenuElements;
                                            for (let i in toDelete) {
                                                if (toDelete[i]) {
                                                    delete internal.spriteElements[internal.spriteElements.findIndex(value => value && value.id == toDelete[i].id)];
                                                    toDelete[i].delete();
                                                }
                                            }
                                            internal.previousSubmenuElements = [];
                                        }
                                    }
                                }
                            },
                            stateToRun: menuSprite.stateToActivate
                        });

                        internal.coordinateSprite = game.add.sprite({
                            id: plugin.vars.findID(menuSprite.id + ".coordinateSprite", game),
                            type: "sprite",
                            x: 0,
                            y: 0
                        });

                        for (let i in menuSprite.elements) {
                            let element = menuSprite.elements[i];

                            check({
                                ob: element,
                                where: "Game.game.sprites item " + menuSprite.idIndex + ".elements",
                                syntax: {
                                    ...plugin.vars.checks.ignoreElement,
                                    ...plugin.vars.checks.element[element.type]
                                }
                            });
                        }
                    },
                    init: menuSprite => {
                        menuSprite.internal.spriteElements = [];
                        menuSprite.camera = {
                            x: 0,
                            y: 0
                        };
                    },
                    listeners: {
                        events: {
                            delete: menuSprite => {
                                let internal = menuSprite.internal;
                                internal.coordinateSprite.delete();
                                for (let i in internal.spriteElements) {
                                    let element = internal.spriteElements[i];
                                    if (element) {
                                        element.delete();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        listeners: {
            prepState: (state, game, plugin) => {
                for (let i in game.game.sprites) {
                    let sprite = game.game.sprites[i];
                    if (sprite) {
                        if (sprite.type == "GUI") {
                            if (sprite.stateToActivate == state) {
                                sprite.internal.initialSubmenu = sprite.submenu;
                                sprite.internal.lastSubmenu = sprite.submenu;
                                sprite.internal.initialElements = Bagel.internal.deepClone(sprite.elements);
                                plugin.vars.initMenu(sprite, plugin);
                            }
                            else {
                                sprite.elements = sprite.internal.initialElements;
                                sprite.submenu = sprite.internal.initialSubmenu;
                            }
                        }
                    }
                }
            }
        }
    },
    vars: {
        initMenu: (menuSprite, plugin, animation) => {
            let internal = menuSprite.internal;
            let game = menuSprite.game;
            for (let i in menuSprite.elements) {
                let element = {...internal.initialElements[i]};
                if (element.submenu == menuSprite.submenu) {
                    internal.coordinateSprite.x = element.x;
                    element.x = internal.coordinateSprite.x;
                    internal.coordinateSprite.y = element.y;
                    element.y = internal.coordinateSprite.y;

                    let elementSprite = plugin.vars.createElement[element.type](plugin.vars.findID(menuSprite.id, game), element, game, plugin, menuSprite, animation);
                    menuSprite.internal.spriteElements.push(elementSprite);
                }
            }
        },
        /*
        deleteMenu: (menuSprite, plugin) => {
            let elements = menuSprite.internal.spriteElements;
            for (let i in elements) {
                if (elements[i]) {
                    elements[i].delete();
                }
            }
            menuSprite.internal.spriteElements = [];
        },
        */

        findID: (base, game) => {
            let i = 0;
            while (true) {
                let id = base + "#" + i;
                if (! game.get.sprite(id, true)) {
                    return id;
                }
                i++;
            }
        },
        checks: {
            ignoreElement: {
                type: "ignore",
                submenu: "ignore",

                x: "ignore",
                y: "ignore",
                left: "ignore",
                top: "ignore",
                right: "ignore",
                bottom: "ignore",

                internal: "ignore"
            },
            element: {
                button: {
                    colour: {
                        required: true,
                        types: ["string"],
                        description: "The colour of the button, any HTML colour. e.g \"rgb(100, 50, 20)\" or \"#FF00FF\"."
                    },
                    size: {
                        required: true,
                        types: ["number"],
                        description: "The height/diameter of the button. The width can be more than the height if the icon is wide."
                    },

                    icon: {
                        required: false,
                        types: ["string"],
                        description: "The ID of the icon in GUISprite.icons."
                    },
                    onclick: {
                        required: false,
                        types: [
                            "object",
                            "function"
                        ],
                        subcheck: {
                            submenu: {
                                required: true,
                                types: ["string"],
                                description: "The submenu to switch to when it's clicked."
                            },

                            animation: {
                                required: false,
                                default: {},
                                types: ["object"],
                                subcheck: {
                                    type: {
                                        required: false,
                                        default: "scrollRight",
                                        check: value => {
                                            if (! ["scrollLeft", "scrollRight", "scrollDown", "scrollUp", "popup", "closePopup"].includes(value)) {
                                                return "Huh, " + JSON.stringify(value) + " isn't one of the options.";
                                            }
                                        },
                                        types: ["string"],
                                        description: `The name of the animation to use. Must be one of these:
     * scrollLeft, scrollRight, scrollDown or scrollUp
     * popup, closePopup`
                                    },
                                    backgroundColour: {
                                        required: false,
                                        default: "white",
                                        types: ["string"],
                                        description: "The colour of the background for the new submenu, any HTML colour. e.g \"rgb(100, 50, 20)\" or \"#FF00FF\"."
                                    }
                                },
                                description: "The animation to use for the transition."
                            }
                        },
                        description: "The action to happen when it's clicked. Set to an object with the \"submenu\" property set to the new submenu ID to change submenus. Set to a function to run code when it's clicked."
                    },
                    shape: {
                        required: false,
                        default: "circle",
                        types: ["string"],
                        check: value => {
                            if (! ["circle", "square", "hardSquare"].includes(value)) {
                                return "Hmm, " + JSON.stringify(value) + " isn't an option. It has to be either \"circle\", \"square\" or \"hardSquare\".";
                            }
                        },
                        description: "The shape of the button. Either \"circle\", \"square\" or \"hardSquare\". Button widths and heights might not match when using long icons but these still use the same shape names."
                    }
                }
            }
        },
        createElement: {
            button: (id, element, game, plugin, menuSprite, animation) => {
                if (animation) {
                    if (animation.type == "scrollRight") {
                        element.x += menuSprite.camera.x + game.width;
                    }
                }

                let sprite = game.add.sprite({
                    id: id,
                    type: "canvas",
                    scripts: {
                        init: [
                            {
                                code: me => {
                                    me.clone();
                                },
                                stateToRun: game.state
                            }
                        ],
                        main: [
                            {
                                code: (me, game) => {
                                    me.x = me.vars.element.x - me.vars.menuSprite.camera.x;
                                    me.y = me.vars.element.y - me.vars.menuSprite.camera.y;
                                    if (! me.vars.menuSprite.internal.submenuChangeAnimation) {
                                        if (! game.input.mouse.down) {
                                            if (me.vars.clicked) {
                                                if ((! me.vars.clickLock) || me.width == me.vars.element.size) {
                                                    game.playSound(".BagelGUI.clickUp");
                                                    me.vars.clicked = false;
                                                    me.vars.clickResetting = true;
                                                    me.vars.clickLock = false;
                                                    me.vars.vel += 0.05;
                                                    if (typeof me.vars.element.onclick == "object") {
                                                        let onclick = me.vars.element.onclick;
                                                        me.vars.menuSprite.submenu = onclick.submenu;

                                                        let menuSprite = me.vars.menuSprite;
                                                        let menuSpriteInternal = menuSprite.internal;
                                                        menuSpriteInternal.submenuChangeAnimation = onclick.animation;
                                                        menuSpriteInternal.animationVars = {
                                                            initialCameraPosition: menuSprite.camera.x,
                                                            vel: 50
                                                        };
                                                        menuSprite.internal.previousSubmenuElements = [...menuSprite.internal.spriteElements];
                                                    }
                                                }
                                            }
                                        }
                                        if (me.touching.mouseCircles() || me.vars.clickLock) {
                                            let size = me.width;
                                            if (game.input.mouse.down || me.vars.clickLock) {
                                                me.vars.vel -= 0.1;
                                                if (! me.vars.clicked) {
                                                    game.playSound(".BagelGUI.click");
                                                    me.vars.clicked = true;
                                                    me.vars.vel -= 0.3;
                                                    me.vars.clickResetting = false;
                                                    if (typeof me.vars.element.onclick == "function") {
                                                        me.vars.element.onclick(me.vars.element);
                                                    }
                                                    else {
                                                        me.vars.clickLock = true;
                                                    }
                                                }
                                            }
                                            else {
                                                me.vars.vel += 0.1;
                                                if (! me.vars.touched) {
                                                    game.playSound(".BagelGUI.touch");
                                                    me.vars.touched = true;
                                                }
                                            }
                                        }
                                        else {
                                            me.vars.touched = false;
                                            me.vars.vel -= 0.09;
                                            if (me.width == me.vars.element.size) {
                                                me.vars.clickResetting = false;
                                            }
                                        }

                                        let size = me.width;
                                        size += me.vars.vel;
                                        me.vars.vel *= 0.9;
                                        if (size > me.vars.maxSize) {
                                            size = me.vars.maxSize;
                                            me.vars.vel = 0;
                                        }
                                        if (! me.vars.touched) {
                                            if (size < me.vars.element.size) {
                                                size = me.vars.element.size;
                                                me.vars.vel = 0;
                                            }
                                        }
                                        if (size < me.vars.minSize) {
                                            size = me.vars.minSize;
                                            me.vars.vel = 0;
                                        }
                                        me.width = size;
                                        me.height = size;
                                    }
                                },
                                stateToRun: game.state
                            }
                        ]
                    },
                    width: element.size,
                    height: element.size,
                    fullRes: true,
                    vars: {
                        element: element,
                        animation: animation,
                        menuSprite: menuSprite,
                        plugin: plugin,
                        maxSize: element.size * 1.05,
                        minSize: element.size,
                        vel: 0,
                        touched: false,
                        clicked: false,
                        clickResetting: false,
                        clickLock: false
                    },
                    mode: "static",
                    prerender: (me, game, ctx, canvas) => {
                        me.updateRes = true;
                        let widthWas = me.width;
                        me.width = me.vars.maxSize;
                        me.height = me.width;
                        me.updateRes = false;
                        me.width = widthWas;
                        me.height = widthWas;

                        let element = me.vars.element;
                        ctx.fillStyle = element.colour;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.beginPath();
                        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
                        ctx.fill();
                    },
                    clones: {
                        scripts: {
                            main: [
                                me => {
                                    me.x = me.parent.x;
                                    me.y = me.parent.y;

                                    let percentSize = ((me.parent.width - me.vars.element.size) / (me.vars.maxSize - me.vars.element.size));
                                    me.width = percentSize * me.vars.maxSize;
                                    me.height = me.width;
                                    me.alpha = (percentSize * 0.04) + 0.01;

                                    if (me.width == 0 || me.parent.vars.clickResetting) {
                                        me.visible = false;
                                    }
                                    else {
                                        me.visible = true;
                                    }
                                }
                            ]
                        },
                        prerender: (me, game, ctx, canvas) => {
                            me.updateRes = true;
                            let widthWas = me.width;
                            me.width = me.vars.maxSize;
                            me.height = me.width;
                            me.updateRes = false;
                            me.width = widthWas;
                            me.height = widthWas;

                            ctx.fillStyle = "black";
                            ctx.beginPath();
                            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                });
                if (element.icon) {
                    let id = plugin.vars.findID(menuSprite.id, game);
                    menuSprite.internal.spriteElements.push(game.add.sprite({
                        id: id,
                        type: "sprite",
                        img: element.icon,
                        vars: {
                            element: {
                                ...element,
                                internal: {
                                    dontClone: true
                                }
                            }
                        },
                        scripts: {
                            init: [
                                {
                                    code: me => {
                                        let ratio = me.width / me.height;
                                        me.height = me.vars.element.size * 0.9;
                                        me.width = me.height * ratio;
                                    },
                                    stateToRun: game.state
                                }
                            ]
                        }
                    }));
                }
                return sprite;
            }
        }
    }
}
/*
TODO
Textures aren't deleted properly? Click the button a lot and and the first combined texture will have 3 textures but they're all invisible???

Checks specific to element types
Listeners are triggered before plugin sprite init is run
When large textures are updated, they should be moved into single textures sooner and left longer
Properly implemented icons. Test using dynamic loading. Request all assets instead of each submenu at a time
Optimise texture usage by sharing the black circles. Need to prevent deletion when the canvas sprite that created it is deleted. Maybe load texture manually and use normal sprites? Copy canvas mode? How should copy canvas mode handle deleting the original sprite?
Optimise by sharing textures when the colours are the same
Textures for the mute button are broken when hovering over buttons
*/
