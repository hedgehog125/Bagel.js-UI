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
                        internal.plugin = plugin;
                        ((menuSprite, plugin) => {
                            menuSprite.internal.finishAnimation = _ => {
                                plugin.vars.finishAnimation(menuSprite);
                            };
                        })(menuSprite, plugin);

                        menuSprite.scripts.main.push({
                            code: (me, game) => {
                                let internal = me.internal;
                                let plugin = internal.plugin;
                                if (me.submenu != me.internal.lastSubmenu) {
                                    plugin.vars.initMenu(me, plugin, internal.submenuChangeAnimation);
                                    internal.lastSubmenu = me.submenu;
                                }

                                let animation = internal.submenuChangeAnimation;
                                if (animation) {
                                    let method = me.internal.plugin.vars.types.animations[animation.type].menuSprite.main;
                                    if (method) {
                                        method(me, animation, internal.animationVars, internal.finishAnimation, game, me.vars.plugin);
                                    }
                                }
                            },
                            stateToRun: menuSprite.stateToActivate
                        });

                        if (internal.coordinateSprite == null) {
                            internal.coordinateSprite = game.add.sprite({
                                id: plugin.vars.findID(".BagelGUI.coordinateSprite." + menuSprite.id, game),
                                type: "sprite",
                                x: 0,
                                y: 0
                            });
                        }


                        for (let i in menuSprite.elements) {
                            let element = menuSprite.elements[i];

                            let type = Bagel.internal.getTypeOf(element);
                            if (type != "object") {
                                return "Huh, sprite.elements item " + i + " is " + Bagel.internal.an(type) + "type. It should be an object.";
                            }

                            let elementJSON = plugin.vars.types.elements[element.type];
                            if (elementJSON == null) {
                                let types = Object.keys(plugins.vars.types.elements);
                                return "Oh no! The element type " + JSON.stringify(element.type) + " doesn't seem to exist. It can only be one of these:\n" + types.reduce((total, item, index) =>
                                total + "  • "
                                + JSON.stringify(item)
                                + " -> "
                                + plugin.vars.types.elements[item].description
                                + (index == types.length - 1? "" : "\n"), "");
                            }

                            check({
                                ob: element,
                                where: "Game.game.sprites item " + menuSprite.idIndex + ".elements",
                                syntax: {
                                    ...plugin.vars.checks.ignoreElement,
                                    ...elementJSON.args
                                }
                            });

                            if (typeof element.onclick == "object") {
                                let animation = element.onclick.animation;
                                if (animation.type == null) {
                                    animation.type = "scroll";
                                }
                                let animationJSON = plugin.vars.types.animations[animation.type];
                                if (animationJSON == null) {
                                    let types = Object.keys(plugin.vars.types.animations);
                                    return "Oh no! The animation " + JSON.stringify(animation.type) + " doesn't seem to exist. It can only be one of these:\n" + types.reduce((total, item, index) =>
                                    total + "  • "
                                    + JSON.stringify(item)
                                    + " -> "
                                    + plugin.vars.types.animations[item].description
                                    + (index == types.length - 1? "" : "\n"), "");
                                }


                                check({
                                    ob: element.onclick.animation,
                                    where: "Game.game.sprites item " + menuSprite.idIndex + ".elements",
                                    syntax: {
                                        ...plugin.vars.checks.animation,
                                        ...animationJSON.args
                                    }
                                });
                            }
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
        methods: {
            sprite: {
                animateSubmenuChange: {
                    fn: {
                        fn: (menuSprite, args, game, plugin) => {
                            menuSprite.submenu = args.submenu;

                            let menuSpriteInternal = menuSprite.internal;
                            menuSpriteInternal.submenuChangeAnimation = args.animation;
                            menuSpriteInternal.animationVars = {
                                internal: {dontClone: true}
                            };
                            let methods = plugin.vars.types.animations[args.animation.type];
                            if (methods.menuSprite.init) {
                                Bagel.internal.saveCurrent();
                                Bagel.internal.current.sprite = menuSprite;
                                methods.menuSprite.init(menuSprite, args.animation, menuSprite.internal.animationVars, game, plugin, menuSprite.internal.finishAnimation);
                                Bagel.internal.loadCurrent();
                            }

                            menuSprite.internal.previousSpriteElements = [...menuSprite.internal.spriteElements];
                        },
                        args: {
                            submenu: {
                                required: true,
                                types: ["string"],
                                description: "The submenu to switch to."
                            },
                            animation: {
                                required: true,
                                types: ["object"],
                                description: "The animation object. The arguments depend on the animation but the \"type\" argument is always required."
                            }
                        },
                        obArg: false,
                        appliesTo: ["GUI"]
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

                                let internal = sprite.internal;
                                for (let i in internal.spriteElements) {
                                    let element = internal.spriteElements[i];
                                    if (element) {
                                        element.delete();
                                    }
                                }
                                internal.spriteElements = [];
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

            let spriteElements = internal.spriteElements;
            for (let i in spriteElements) {
                if (spriteElements[i]) {
                    spriteElements[i].vars.old = true;
                }
            }
            for (i in menuSprite.elements) {
                let element = Bagel.internal.deepClone(internal.initialElements[i]);
                if (element.submenu == menuSprite.submenu) {
                    internal.coordinateSprite.x = element.x;
                    element.x = internal.coordinateSprite.x;
                    internal.coordinateSprite.y = element.y;
                    element.y = internal.coordinateSprite.y;

                    let handler = plugin.vars.types.elements[element.type];
                    let spriteDatas = typeof handler.spriteDatas == "function"?
                    handler.spriteDatas(element, game, menuSprite, plugin)
                    : handler.spriteDatas;
                    if (! Array.isArray(spriteDatas)) spriteDatas = [spriteDatas];

                    for (let i in spriteDatas) {
                        let data = spriteDatas[i];
                        data.id = plugin.vars.findID(menuSprite.id, game);
                        if (! data.vars) data.vars = {};
                        data.vars.element = element;
                        data.vars.animation = menuSprite.internal.submenuChangeAnimation;
                        data.vars.menuSprite = menuSprite;
                        data.vars.plugin = plugin;

                        if (! data.scripts) data.scripts = {};
                        if (! data.scripts.init) data.scripts.init = [];
                        if (! data.scripts.main) data.scripts.main = [];

                        data.scripts.init.splice(0, 0, {
                            code: plugin.vars.process.element.init,
                            stateToRun: game.state
                        });
                        data.scripts.main.splice(0, 0, {
                            code: plugin.vars.process.element.main,
                            stateToRun: game.state
                        });


                        let sprite = game.add.sprite(data, "the plugin BagelGUI element type " + element.type + ".spriteDatas");

                        let spriteElements = menuSprite.internal.spriteElements;
                        let index = 0;
                        while (index < spriteElements.length) {
                            if (spriteElements[index] == null) break;
                            index++;
                        }
                        spriteElements[index] = sprite;
                    }
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
        finishAnimation: menuSprite => {
            let internal = menuSprite.internal;
            internal.submenuChangeAnimation = null;

            let toDelete = internal.previousSpriteElements;
            for (let i in toDelete) {
                if (toDelete[i]) {
                    delete internal.spriteElements[internal.spriteElements.findIndex(value => value && value.id == toDelete[i].id)];
                    toDelete[i].delete();
                }
            }
            internal.previousSpriteElements = [];
        },

        process: {
            element: {
                init: me => {
                    me.internal.delete = me.delete;
                    (me => {
                        me.delete = _ => {
                            let menuSprite = me.vars.menuSprite;
                            let index = menuSprite.internal.spriteElements.findIndex(value => value && value.id == me.id);
                            if (index != -1) {
                                delete menuSprite.internal.spriteElements[index];
                            }
                            index = menuSprite.internal.previousSpriteElements.findIndex(value => value && value.id == me.id);
                            if (index != -1) {
                                delete menuSprite.internal.previousSpriteElements[index];
                            }

                            me.internal.delete();
                        };
                    })(me);

                    let menuSprite = me.vars.menuSprite;
                    let element = me.vars.element;
                    element.x += menuSprite.camera.x;
                    element.y += menuSprite.camera.y;
                    if (me.vars.animation) {
                        let method = me.vars.plugin.vars.types.animations[me.vars.animation.type].elements.create;
                        if (method) {
                            method(me.vars.element, me.vars.animation, me.vars.menuSprite, me.game, me.vars.plugin, me);
                        }
                    }
                },
                main: me => {
                    me.x = me.vars.element.x - me.vars.menuSprite.camera.x;
                    me.y = me.vars.element.y - me.vars.menuSprite.camera.y;
                    let animationOb = me.vars.menuSprite.internal.submenuChangeAnimation;
                    me.vars.active = ! animationOb;
                    if (animationOb) {
                        let methods = me.vars.plugin.vars.types.animations[animationOb.type].elements;
                        let animation = me.vars.menuSprite.internal.submenuChangeAnimation;
                        if (! me.vars.animationInitialised) {
                            if (methods.init) {
                                methods.init(me.vars.element, animation, me.vars.menuSprite, me.game, me.vars.plugin, me);
                            }
                            me.vars.animationInitialised = true;
                        }
                        if (methods.main) {
                            methods.main(me.vars.element, animation, me.vars.menuSprite.internal.animationVars, me.vars.menuSprite.internal.finishAnimation, me.vars.menuSprite, me.game, me.vars.plugin, me);
                        }
                    }
                }
            }
        },

        types: {
            animations: {
                scroll: {
                    elements: {
                        create: (element, animation) => {
                            if (animation.direction == "left") {
                                element.x -= game.width;
                            }
                            else if (animation.direction == "right") {
                                element.x += game.width;
                            }
                            else if (animation.direction == "up") {
                                element.y -= game.height;
                            }
                            else {
                                element.y += game.height;
                            }
                        }
                    },
                    menuSprite: {
                        init: (menuSprite, animation, animationVars) => {
                            if (animation.direction == "left" || animation.direction == "right") {
                                animationVars.initialCameraPosition = menuSprite.camera.x;
                            }
                            else {
                                animationVars.initialCameraPosition = menuSprite.camera.y;
                            }
                            if (animation.direction == "left" || animation.direction == "up") {
                                animationVars.vel = -20;
                            }
                            else {
                                animationVars.vel = 20;
                            }
                        },
                        main: (menuSprite, animation, animationVars, finish) => {
                            let game = menuSprite.game;
                            if (animation.direction == "left") {
                                animationVars.vel -= game.width / 75;
                            }
                            else if (animation.direction == "right") {
                                animationVars.vel += game.width / 75;
                            }
                            else if (animation.direction == "up") {
                                animationVars.vel -= game.height / 75;
                            }
                            else {
                                animationVars.vel += game.height / 75;
                            }

                            let moved;
                            if (animation.direction == "left" || animation.direction == "right") {
                                menuSprite.camera.x += animationVars.vel;
                                moved = menuSprite.camera.x - animationVars.initialCameraPosition;
                            }
                            else {
                                menuSprite.camera.y += animationVars.vel;
                                moved = menuSprite.camera.y - animationVars.initialCameraPosition;
                            }
                            animationVars.vel *= 0.99;

                            if (animation.direction == "left") {
                                if (moved <= -game.width) {
                                    menuSprite.camera.x = animationVars.initialCameraPosition - game.width;
                                    finish();
                                }
                            }
                            else if (animation.direction == "right") {
                                if (moved >= game.width) {
                                    menuSprite.camera.x = animationVars.initialCameraPosition + game.width;
                                    finish();
                                }
                            }
                            else if (animation.direction == "up") {
                                if (moved <= -game.height) {
                                    menuSprite.camera.y = animationVars.initialCameraPosition - game.height;
                                    finish();
                                }
                            }
                            else if (animation.direction == "down") {
                                if (moved >= game.height) {
                                    menuSprite.camera.y = animationVars.initialCameraPosition + game.height;
                                    finish();
                                }
                            }
                        }
                    },
                    args: {
                        direction: {
                            required: false,
                            default: "right",
                            types: ["string"],
                            check: value => {
                                if (! [
                                    "left",
                                    "right",
                                    "up",
                                    "down"
                                ].includes(value)) {
                                    return "Oh no! This must be either \"left\", \"right\", \"up\" or \"down\".";
                                }
                            },
                            description: "The direction for the camera to scroll (so the elements scroll the opposite way). Either \"left\", \"right\", \"up\" or \"down\"."
                        }
                    },
                    description: "A simple animation where the camera scrolls in one of four directions to reveal the elements in another submenu."
                },
                triangleScroll: {
                    elements: {
                        init: (element, animation, menuSprite, game, plugin, sprite) => {
                            if (! sprite.vars.old) {
                                sprite.visible = false;
                            }
                        },
                        main: (element, animation, animationVars, finish, menuSprite, game, plugin, sprite) => {
                            if (animationVars.covered) {
                                if (sprite.vars.old) {
                                    sprite.delete();
                                }
                                else {
                                    sprite.visible = true;
                                    sprite.layer.sendToBack();
                                }
                            }
                        }
                    },
                    menuSprite: {
                        init: (menuSprite, animation, animationVars, game, plugin, finish) => {
                            let dir = animation.direction;
                            if (dir == "left" || dir == "right") {
                                animationVars.triangleWidth = game.height / 2;
                                animationVars.triangleHeight = game.height;
                            }
                            else {
                                animationVars.triangleWidth = game.width / 2;
                                animationVars.triangleHeight = game.width;
                            }

                            // TODO: return sprite to add to list
                            let id = plugin.vars.findID(menuSprite.id, game);
                            menuSprite.internal.spriteElements.push(game.add.sprite({
                                id: id,
                                type: "canvas",
                                fullRes: true,
                                width: animationVars.triangleWidth,
                                height: animationVars.triangleHeight,
                                mode: "static",
                                vars: {
                                    dir: dir,
                                    vel: 0,
                                    finish: finish,
                                    animationVars: animationVars
                                },
                                clones: {
                                    prerender: (me, game, ctx, canvas) => {
                                        ctx.fillStyle = "black";
                                        if (me.cloneID == 0) {
                                            let dir = me.vars.dir;
                                            if (dir == "left" || dir == "right") {
                                                me.width = game.width * 2;
                                                me.height = game.height;
                                            }
                                            else {
                                                me.width = game.width;
                                                me.height = game.height * 2;
                                            }

                                            ctx.fillRect(0, 0, 1, 1);
                                        }
                                        else {
                                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                                            ctx.beginPath();
                                            ctx.moveTo(0, 0);
                                            ctx.lineTo(canvas.width, 0);
                                            ctx.lineTo(canvas.width, canvas.height / 2);
                                            ctx.lineTo(0, 0);
                                            ctx.fill();

                                            ctx.beginPath();
                                            ctx.moveTo(0, canvas.height);
                                            ctx.lineTo(canvas.width, canvas.height);
                                            ctx.lineTo(canvas.width, canvas.height / 2);
                                            ctx.lineTo(0, canvas.height);
                                            ctx.fill();

                                            me.vars.otherClone = game.get.sprite(me.parent.cloneIDs[0]);
                                        }
                                    },
                                    scripts: {
                                        main: [
                                            (me, game) => {
                                                me.layer.bringToFront();

                                                let dir = me.vars.dir;
                                                if (dir == "left") {
                                                    if (me.cloneID == 0) {
                                                        me.left = me.parent.right;
                                                    }
                                                    else {
                                                        me.left = me.vars.otherClone.right;
                                                    }
                                                    if (me.right < 0) {
                                                        if (me.cloneID == 1) {
                                                            me.parent.vars.done = true;
                                                        }
                                                    }
                                                }
                                                else if (dir == "right") {
                                                    if (me.cloneID == 0) {
                                                        me.right = me.parent.left;
                                                    }
                                                    else {
                                                        me.right = me.vars.otherClone.left;
                                                    }
                                                    if (me.left > game.width) {
                                                        if (me.cloneID == 1) {
                                                            me.parent.vars.done = true;
                                                        }
                                                    }
                                                }
                                                else if (dir == "up") {
                                                    if (me.cloneID == 0) {
                                                        me.top = me.parent.y + (me.parent.width / 2);
                                                    }
                                                    else {
                                                        me.y = me.vars.otherClone.bottom + (me.width / 2);
                                                    }
                                                    if (me.bottom < 0) {
                                                        if (me.cloneID == 1) {
                                                            me.parent.vars.done = true;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (me.cloneID == 0) {
                                                        me.bottom = me.parent.y - (me.parent.width / 2);
                                                    }
                                                    else {
                                                        me.y = me.vars.otherClone.top - (me.width / 2);
                                                    }

                                                    if (me.top > game.height) {
                                                        if (me.cloneID == 1) {
                                                            me.parent.vars.done = true;
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                scripts: {
                                    init: [
                                        {
                                            code: (me, game) => {
                                                me.clone({
                                                    width: 1,
                                                    height: 1,
                                                    fullRes: false,
                                                    updateRes: false
                                                });

                                                let dir = me.vars.dir;
                                                if (dir == "left") {
                                                    me.angle = -90;
                                                    me.left = game.width;
                                                }
                                                else if (dir == "right") {
                                                    me.right = 0;
                                                }
                                                else if (dir == "up") {
                                                    me.angle = 0;
                                                    me.y = game.height + (me.width / 2);
                                                }
                                                else {
                                                    me.y = -(me.width / 2);
                                                    me.angle = 180;
                                                }

                                                me.clone(); // Inverted triangle
                                            },
                                            stateToRun: game.state
                                        }
                                    ],
                                    main: [
                                        {
                                            code: me => {
                                                me.layer.bringToFront();
                                                let vars = me.vars;
                                                let dir = vars.dir;
                                                if (dir == "left" || dir == "up") {
                                                    vars.vel -= 5;
                                                }
                                                else {
                                                    vars.vel += 5;
                                                }

                                                if (dir == "left" || dir == "right") {
                                                    me.x += vars.vel;
                                                    if (dir == "left") {
                                                        if (me.right < 0) {
                                                            me.vars.animationVars.covered = true;
                                                        }
                                                    }
                                                    else {
                                                        if (me.left > game.width) {
                                                            me.vars.animationVars.covered = true;
                                                        }
                                                    }
                                                }
                                                else {
                                                    me.y += vars.vel;
                                                    if (dir == "up") {
                                                        if (me.bottom < 0) {
                                                            me.vars.animationVars.covered = true;
                                                        }
                                                    }
                                                    else {
                                                        if (me.top > game.height) {
                                                            me.vars.animationVars.covered = true;
                                                        }
                                                    }
                                                }
                                                vars.vel *= 0.9;

                                                if (me.vars.done) { // Set by clone
                                                    me.vars.finish(); // Also deletes animation sprites
                                                }
                                            },
                                            stateToRun: game.state
                                        }
                                    ]
                                },
                                prerender: (me, game, ctx, canvas) => {
                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    ctx.fillStyle = "black";
                                    ctx.beginPath();
                                    ctx.moveTo(0, 0);
                                    ctx.lineTo(0, canvas.height);
                                    ctx.lineTo(canvas.width, canvas.height / 2);
                                    ctx.lineTo(0, 0);
                                    ctx.fill();
                                }
                            }));
                        }
                    },
                    args: {
                        direction: {
                            required: false,
                            default: "right",
                            types: ["string"],
                            check: value => {
                                if (! [
                                    "left",
                                    "right",
                                    "up",
                                    "down"
                                ].includes(value)) {
                                    return "Oh no! This must be either \"left\", \"right\", \"up\" or \"down\".";
                                }
                            },
                            description: "The direction for the camera to scroll (so the elements scroll the opposite way). Either \"left\", \"right\", \"up\" or \"down\"."
                        }
                    },
                    description: "A fairly simple animation where a triangle covers up the screen before another triangle erases it and reveals the new submenu."
                }
            },
            elements: {
                button: {
                    args: {
                        color: {
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
                    },
                    spriteDatas: (element, game) => {
                        const sprites = [];
                        sprites.push({
                            type: "canvas",
                            scripts: {
                                steps: {
                                    mouseUp: (me, game) => {
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

                                                        me.vars.menuSprite.animateSubmenuChange(onclick.submenu, onclick.animation);
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    mouseDown: (me, game) => {
                                        me.vars.vel -= 0.1;
                                        if (! me.vars.clicked) {
                                            game.playSound(".BagelGUI.click");
                                            me.vars.clicked = true;
                                            if (me.width < me.vars.maxSize) {
                                                me.vars.vel += 3;
                                            }
                                            else {
                                                me.vars.vel -= 0.3;
                                            }
                                            me.vars.clickResetting = false;
                                            if (typeof me.vars.element.onclick == "function") {
                                                me.vars.element.onclick(me.vars.element);
                                            }
                                            else {
                                                me.vars.clickLock = true;
                                            }
                                        }
                                    },
                                    mouseTouch: (me, game) => {
                                        me.vars.vel += 0.1;
                                        if (! me.vars.touched) {
                                            game.playSound(".BagelGUI.touch");
                                            me.vars.touched = true;
                                        }
                                    }
                                },
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
                                        code: (me, game, step) => {
                                            let size = me.width;
                                            if (me.vars.active) {
                                                me.vars.animationInitialised = false;
                                                step("mouseUp");

                                                if (me.touching.mouseCircles() || me.vars.clickLock) {
                                                    if (game.input.mouse.down || me.vars.clickLock) {
                                                        step("mouseDown");
                                                    }
                                                    else {
                                                        step("mouseTouch");
                                                    }
                                                }
                                                else {
                                                    me.vars.touched = false;
                                                    me.vars.vel -= 0.09;
                                                    if (me.width == me.vars.element.size) {
                                                        me.vars.clickResetting = false;
                                                    }
                                                }
                                            }
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
                                        },
                                        stateToRun: game.state
                                    }
                                ]
                            },
                            width: element.size,
                            height: element.size,
                            fullRes: true,
                            vars: {
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
                                ctx.fillStyle = element.color;
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
                                            me.alpha = percentSize * 0.05;

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
                            sprites.push({

                            });
                        }
                        return sprites;
                    },
                    description: "A simple button that can trigger a submenu change or code to run."
                }
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

            animation: {
                type: {
                    required: false,
                    default: "scroll",
                    types: ["string"],
                    description: "The name of the animation to use."
                },
                backgroundColor: {
                    required: false,
                    default: "white",
                    types: ["string"],
                    description: "The colour of the background for the new submenu, any HTML colour. e.g \"rgb(100, 50, 20)\" or \"#FF00FF\"."
                }
            }
        }
    }
}
/*
TODO
Bugs
Changing submenu manually doesn't delete old elements

Loading new animations and element types. Don't forget checks
Move createSprite functions to the element JSON

Listeners are triggered before plugin sprite init is run
When large textures are updated, they should be moved into single textures sooner and left longer
Properly implemented icons. Test using dynamic loading. Request all assets instead of each submenu at a time
Optimise texture usage by sharing the black circles. Need to prevent deletion when the canvas sprite that created it is deleted. Maybe load texture manually and use normal sprites? Copy canvas mode? How should copy canvas mode handle deleting the original sprite?
Optimise by sharing textures when the colors are the same
Textures for the mute button are broken when hovering over buttons
*/
