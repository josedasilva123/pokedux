//Bad Status
const STATUS_PARALYZE = 'paralyze';
const STATUS_FROZEN = 'frozen';
const STATUS_BURNING = 'burning';
const STATUS_POISON = 'poison';

//Effects
const EFFECT_HEAL = 'heal';
const EFFECT_DRAIN = 'drain';
const EFFECT_RECOIL = 'recoil';

//Categories
const CATEGORY_PHYSICAL = 'physical';
const CATEGORY_SPECIAL = 'special';
const CATEGORY_BUFF = 'buff';
const CATEGORY_DEBUFF = 'debuff';
const CATEGORY_HEAL = 'heal';

//Types
const TYPE_NORMAL =  'normal';
const TYPE_FIRE = 'fire';
const TYPE_GRASS = 'grass';
const TYPE_WATER = 'water';
const TYPE_ELECTRIC = 'electric';
const TYPE_FLYING = 'flying';
const TYPE_GROUND = 'ground';
const TYPE_BUG = 'bug';
const TYPE_POISON = 'poison';
const TYPE_DRAGON = 'dragon';
const TYPE_ICE = 'ice';
const TYPE_PSYCHIC = 'psychic';
const TYPE_FIGHTING = 'fighting';
const TYPE_DARK = 'dark';
const TYPE_STEEL = 'steel';

// Moves de cada pokémon
export const pokemonMoves = [
    {
        id: 1,
        name: 'bulbasaur',
        mainMoves: ['razor-wind', 'giga-drain', 'double-edge', 'swords-dance'],
        learnableMoves: ['razor-wind', 'absorb', 'mega-drain', 'giga-drain', 'double-edge', 'swords-dance', 'razor-leaf', 'growth', 'tackle'],
    },  
    {
        id: 2,
        name: 'ivysaur',
        mainMoves: ['razor-wind', 'giga-drain', 'double-edge', 'swords-dance'],
        learnableMoves: ['razor-wind', 'absorb', 'mega-drain', 'giga-drain', 'double-edge', 'swords-dance', 'razor-leaf', 'growth', 'tackle'],
    },  
    {
        id: 3,
        name: 'venusaur',
        mainMoves: ['razor-wind', 'giga-drain', 'double-edge', 'swords-dance'],
        learnableMoves: ['razor-wind', 'absorb', 'mega-drain', 'giga-drain', 'double-edge', 'swords-dance', 'razor-leaf', 'growth', 'tackle'],
    },  
    {
        id: 4,
        name: 'charmander',
        mainMoves: ['double-edge', 'flamethrower', 'dragon-breath', 'body-slam'],
        learnableMoves: ['double-edge', 'swords-dance', 'fire-punch', 'thunder-punch', 'wing-attack', 'ember', 'flamethrower', 'fire-blast', 'dragon-breath', 'body-slam', 'slash', 'tackle'],
    }, 
    {
        id: 5,
        name: 'charmeleon',
        mainMoves: ['double-edge', 'flamethrower', 'dragon-breath', 'body-slam'],
        learnableMoves: ['double-edge', 'swords-dance', 'fire-punch', 'thunder-punch', 'wing-attack', 'ember', 'flamethrower', 'fire-blast', 'dragon-breath', 'body-slam', 'slash', 'tackle'],
    }, 
    {
        id: 6,
        name: 'charizard',
        mainMoves: ['wing-attack', 'flamethrower', 'dragon-breath', 'body-slam'],
        learnableMoves: ['double-edge', 'swords-dance', 'fire-punch', 'thunder-punch', 'wing-attack', 'ember', 'flamethrower', 'fire-blast', 'dragon-breath', 'body-slam', 'slash', 'tackle'],
    },
    {
        id: 7,
        name: 'squirtle',
        mainMoves: ['body-slam', 'iron-tail', 'hydro-pump', 'ice-punch'],
        learnableMoves: ['double-edge', 'thunder-punch', 'body-slam', 'water-gun', 'hydro-pump', 'ice-beam', 'ice-punch', 'earthquake', 'tackle'],
    },
    {
        id: 8,
        name: 'wartortle',
        mainMoves: ['body-slam', 'iron-tail', 'hydro-pump', 'ice-punch'],
        learnableMoves: ['double-edge', 'thunder-punch', 'body-slam', 'water-gun', 'hydro-pump', 'ice-beam', 'ice-punch', 'earthquake', 'crunch', 'tackle'],
    },
    {
        id: 9,
        name: 'blastoise',
        mainMoves: ['body-slam', 'iron-tail', 'hydro-pump', 'ice-punch'],
        learnableMoves: ['double-edge', 'thunder-punch', 'body-slam', 'water-gun', 'hydro-pump', 'ice-beam', 'ice-punch', 'earthquake', 'crunch', 'tackle'],
    },
    {
        id: 10,
        name: 'caterpie',
        mainMoves: ['tackle', 'string-shot', 'bug-bite', 'electroweb'],
        learnableMoves: ['tackle', 'string-shot', 'bug-bite', 'electroweb'],
    },  
    {
        id: 11,
        name: 'metapod',
        mainMoves: ['iron-defense', 'string-shot', 'bug-bite' , 'electroweb'],
        learnableMoves: ['iron-defense', 'string-shot', 'bug-bite', 'electroweb', 'harden'],
    },  
    {
        id: 12,
        name: 'butterfree',
        mainMoves: ['razor-wind', 'psybeam', 'bug-bite', 'giga-drain'],
        learnableMoves: ['razor-wind', 'double-edge', 'psybeam', 'absorb', 'mega-drain', 'giga-drain','iron-defense', 'string-shot', 'bug-bite', 'electroweb', 'harden'],
    },  
    {
        id: 13,
        name: 'weedle',
        mainMoves: ['poison-sting', 'string-shot', 'bug-bite', 'electroweb'],
        learnableMoves: ['poison-sting', 'string-shot', 'bug-bite', 'electroweb'],
    },  
    {
        id: 14,
        name: 'kakuna',
        mainMoves: ['iron-defense', 'string-shot', 'bug-bite' , 'electroweb'],
        learnableMoves: ['iron-defense', 'string-shot', 'bug-bite', 'electroweb', 'harden'],
    },  
    {
        id: 15,
        name: 'beedrill',
        mainMoves: ['giga-drain', 'twineedle', 'double-edge' , 'bugbite'],
        learnableMoves: ['double-edge', 'swords-dance', 'iron-defense', 'string-shot', 'bug-bite', 'electroweb', 'harden', 'absorb', 'mega-drain', 'giga-drain', 'twineedle', 'agility'],
    },  
    {
        id: 16,
        name: 'pidgey',
        mainMoves: ['razor-wind', 'double-edge', 'wing-attack', 'feint-attack'],
        learnableMoves: ['razor-wind', 'double-edge', 'wing-attack', 'feint-attack', 'tackle'],
    },  
    {
        id: 17,
        name: 'pidgeotto',
        mainMoves: ['razor-wind', 'double-edge', 'wing-attack', 'feint-attack'],
        learnableMoves: ['razor-wind', 'double-edge', 'wing-attack', 'feint-attack', 'tackle'],
    },   
    {
        id: 18,
        name: 'pidgeot',
        mainMoves: ['razor-wind', 'double-edge', 'wing-attack', 'feint-attack'],
        learnableMoves: ['razor-wind', 'double-edge', 'wing-attack', 'feint-attack', 'agility', 'tackle'],
    },   
    {
        id: 19,
        name: 'rattata',
        mainMoves: ['body-slam', 'hyper-fang', 'ice-beam', 'thunderbolt'],
        learnableMoves: ['body-slam', 'double-edge', 'hyper-fang', 'ice-beam', 'thunderbolt', 'water-gun', 'tackle'],
    }, 
    {
        id: 20,
        name: 'raticate',
        mainMoves: ['body-slam', 'hyper-fang', 'ice-beam', 'thunderbolt'],
        learnableMoves: ['body-slam', 'double-edge', 'hyper-fang', 'ice-beam', 'thunderbolt', 'water-gun', 'tackle'],
    },  
    {
        id: 21,
        name: 'spearow',
        mainMoves: ['razor-wind', 'drill-peck', 'wing-attack', 'feint-attack'],
        learnableMoves: ['razor-wind', 'double-edge', 'wing-attack', 'feint-attack', 'peck', 'drill-peck', 'agility', 'tackle'],
    }, 
    {
        id: 22,
        name: 'fearow',
        mainMoves: ['razor-wind', 'drill-peck', 'wing-attack', 'feint-attack'],
        learnableMoves: ['razor-wind', 'double-edge', 'wing-attack', 'feint-attack', 'peck', 'drill-peck', 'agility', 'tackle'],
    }, 
    {
        id: 23,
        name: 'ekans',
        mainMoves: ['body-slam', 'giga-drain', 'earthquake', 'sludge-bomb'],
        learnableMoves: ['body-slam', 'double-edge', 'absorb', 'mega-drain', 'giga-drain', 'earthquake', 'sludge-bomb', 'tackle'],
    }, 
    {
        id: 24,
        name: 'arbok',
        mainMoves: ['body-slam', 'giga-drain', 'earthquake', 'sludge-bomb'],
        learnableMoves: ['body-slam', 'double-edge', 'absorb', 'mega-drain', 'giga-drain', 'earthquake', 'sludge-bomb', 'tackle'],
    }, 
    {
        id: 25,
        name: 'pikachu',
        mainMoves: ['body-slam', 'thunder-punch', 'thunderbolt', 'agility'],
        learnableMoves: ['body-slam', 'thunder-punch', 'thunder-shock', 'thunderbolt', 'agility', 'double-edge', 'double-kick', 'slash', 'tackle']
    }, 
    {
        id: 26,
        name: 'raichu',
        mainMoves: ['body-slam', 'thunder-punch', 'thunderbolt', 'agility'],
        learnableMoves: ['body-slam', 'thunder-punch', 'thunder-shock', 'thunderbolt', 'agility', 'double-edge', 'double-kick', 'slash', 'tackle']
    }, 
    {
        id: 27,
        name: 'sandshrew',
        mainMoves: ['body-slam', 'earthquake', 'double-edge', 'slash'],
        learnableMoves: ['swords-dance', 'body-slam', 'poison-sting', 'earthquake', 'double-edge', 'slash', 'agility']
    }, 
    {
        id: 28,
        name: 'sandslash',
        mainMoves: ['body-slam', 'earthquake', 'double-edge', 'slash'],
        learnableMoves: ['swords-dance', 'body-slam', 'poison-sting', 'earthquake', 'double-edge', 'slash', 'agility']
    }, 
    {
        id: 29,
        name: 'nidoran-f',
        mainMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt'],
        learnableMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt', 'double-kick', 'iron-tail', 'tackle'],
    }, 
    {
        id: 30,
        name: 'nidorina',
        mainMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt'],
        learnableMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt', 'double-kick', 'iron-tail', 'tackle'],
    }, 
    {
        id: 31,
        name: 'nidoqueen',
        mainMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt'],
        learnableMoves: ['body-slam', 'earthquake', 'ice-beam', 'flamethrower', 'fire-blast', 'water-gun', 'thunderbolt', 'double-kick', 'iron-tail', 'slash', 'tackle'],
    }, 
    {
        id: 32,
        name: 'nidoran-m',
        mainMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt'],
        learnableMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt', 'double-kick', 'iron-tail', 'horn-attack', 'tackle'],
    }, 
    {
        id: 33,
        name: 'nidorino',
        mainMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt'],
        learnableMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt', 'double-kick', 'iron-tail', 'horn-attack', 'tackle'],
    }, 
    {
        id: 34,
        name: 'nidoking',
        mainMoves: ['body-slam', 'earthquake', 'ice-beam', 'thunderbolt'],
        learnableMoves: ['body-slam', 'earthquake', 'ice-beam', 'flamethrower', 'fire-blast', 'water-gun', 'thunderbolt', 'double-kick', 'iron-tail', 'horn-attack', 'slash', 'tackle'],
    }, 
    {
        id: 35,
        name: 'clefairy',
        mainMoves: ['fire-punch', 'ice-punch', 'body-slam', 'flamethrower'],
        learnableMoves: ['double-edge', 'fire-punch', 'ice-punch', 'thunder-punch', 'body-slam', 'flamethrower', 'water-gun', 'ice-beam', 'thunderbolt', 'psychic'],
    }, 
    {
        id: 36,
        name: 'clefable',
        mainMoves: ['fire-punch', 'ice-punch', 'body-slam', 'flamethrower'],
        learnableMoves: ['double-edge', 'fire-punch', 'ice-punch', 'thunder-punch', 'body-slam', 'flamethrower', 'water-gun', 'ice-beam', 'thunderbolt', 'psychic'],
    }, 
    {
        id: 37,
        name: 'vulpix',
        mainMoves: ['body-slam', 'flamethrower', 'agility', 'feint-attack'],
        learnableMoves: ['double-edge', 'body-slam', 'ember', 'flamethrower', 'fire-blast', 'agility', 'crunch', 'feint-attack'],
    }, 
    {
        id: 38,
        name: 'ninetales',
        mainMoves: ['body-slam', 'flamethrower', 'agility', 'feint-attack'],
        learnableMoves: ['double-edge', 'body-slam', 'ember', 'flamethrower', 'fire-blast', 'agility', 'crunch', 'feint-attack'],
    }, 
    {
        id: 39,
        name: 'jigglypuff',
        mainMoves: ['double-slap', 'fire-punch', 'ice-punch', 'thunder-punch'],
        learnableMoves: ['double-slap', 'fire-punch', 'ice-punch', 'thunder-punch', 'body-slam', 'double-edge', 'flamethrower', 'fire-blast', 'water-gun', 'ice-beam', 'thunderbolt', 'psychic'],
    }, 
    {
        id: 40,
        name: 'wigglytuff',
        mainMoves: ['double-slap', 'fire-punch', 'ice-punch', 'thunder-punch'],
        learnableMoves: ['double-slap', 'fire-punch', 'ice-punch', 'thunder-punch', 'body-slam', 'double-edge', 'flamethrower', 'fire-blast', 'water-gun', 'ice-beam', 'thunderbolt', 'psychic'],
    }, 
    {
        id: 41,
        name: 'zubat',
        mainMoves: ['leech-life', 'wing-attack', 'double-edge', 'giga-drain'],
        learnableMoves: ['razor-wind', 'leech-life', 'wing-attack', 'double-edge', 'mega-drain', 'giga-drain', 'crunch'],
    }, 
    {
        id: 42,
        name: 'golbat',
        mainMoves: ['leech-life', 'wing-attack', 'double-edge', 'giga-drain'],
        learnableMoves: ['razor-wind', 'leech-life', 'wing-attack', 'double-edge', 'mega-drain', 'giga-drain', 'crunch'],
    }, 
    {
        id: 43,
        name: 'oddish',
        mainMoves: ['swords-dance', 'double-edge', 'sludge-bomb', 'razor-leaf'],
        learnableMoves: ['swords-dance', 'double-edge', 'sludge-bomb', 'razor-leaf', 'absorb', 'mega-drain', 'giga-drain', 'growth'],
    },  
    {
        id: 44,
        name: 'gloom',
        mainMoves: ['swords-dance', 'double-edge', 'sludge-bomb', 'razor-leaf'],
        learnableMoves: ['swords-dance', 'double-edge', 'sludge-bomb', 'razor-leaf', 'absorb', 'mega-drain', 'giga-drain', 'growth'],
    },  
    {
        id: 45,
        name: 'vileplume',
        mainMoves: ['swords-dance', 'double-edge', 'sludge-bomb', 'razor-leaf'],
        learnableMoves: ['swords-dance', 'double-edge', 'body-slam', 'sludge-bomb', 'razor-leaf', 'absorb', 'mega-drain', 'giga-drain', 'growth'],
    },  
    {
        id: 46,
        name: 'paras',
        mainMoves: ['body-slam', 'psybeam', 'giga-drain', 'leech-life'],
        learnableMoves: ['swords-dance', 'double-edge', 'body-slam', 'psybeam', 'absorb', 'mega-drain', 'giga-drain', 'sludge-bomb', 'growth', 'agility', 'string-shot', 'screech','leech-life', 'slash'],
    },  
    {
        id: 47,
        name: 'parasect',
        mainMoves: ['body-slam', 'psybeam', 'giga-drain', 'leech-life'],
        learnableMoves: ['swords-dance', 'double-edge', 'body-slam', 'psybeam', 'absorb', 'mega-drain', 'giga-drain', 'sludge-bomb', 'growth', 'agility', 'string-shot', 'screech', 'leech-life', 'slash'],
    }, 
    {
        id: 48,
        name: 'venonat',
        mainMoves: ['double-edge', 'psychic', 'giga-drain', 'leech-life'],
        learnableMoves: ['swords-dance', 'double-edge', 'body-slam', 'psybeam', 'psychic', 'absorb', 'mega-drain', 'giga-drain', 'sludge-bomb', 'agility', 'screech', 'string-shot', 'leech-life'],
    },  
    {
        id: 49,
        name: 'venonat',
        mainMoves: ['razor-wind', 'psychic', 'giga-drain', 'leech-life'],
        learnableMoves: ['razor-wind', 'swords-dance', 'double-edge', 'body-slam', 'psybeam', 'psychic', 'absorb', 'mega-drain', 'giga-drain', 'sludge-bomb', 'agility', 'screech', 'string-shot', 'leech-life'],
    },   
    {
        id: 50,
        name: 'diglett',
        mainMoves: ['body-slam', 'screech', 'earthquake', 'double-edge'],
        learnableMoves: ['body-slam', 'screech', 'earthquake', 'double-edge', 'agility', 'feint-attack', 'sludge-bomb'],
    },
    {
        id: 51,
        name: 'digtrio',
        mainMoves: ['body-slam', 'screech', 'earthquake', 'double-edge'],
        learnableMoves: ['body-slam', 'screech', 'earthquake', 'double-edge', 'agility', 'feint-attack', 'sludge-bomb'],
    },         
]

export const allMoves = [
    //Physical
    {
        name: 'tackle',
        type: TYPE_NORMAL,
        power: 40,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 35,
    },
    {
        name: 'body-slam',
        type: TYPE_NORMAL,
        power: 85,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 15,
        effect: STATUS_PARALYZE,
    },
    {
        name: 'horn-attack',
        type: TYPE_NORMAL,
        power: 65,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 25,
    },
    {
        name: 'slash',
        type: TYPE_NORMAL,
        power: 70,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 20,
    },
    {
        name: 'hyper-fang',
        type: TYPE_NORMAL,
        power: 80,
        accuracy: 90,
        category: CATEGORY_PHYSICAL,
        pp: 15,
    },
    {
        name: 'earthquake',
        type: TYPE_GROUND,
        power: 100,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 10,
    },
    {
        name: 'double-edge',
        type: TYPE_NORMAL,
        power: 120,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 10,
        effect: EFFECT_RECOIL,
    },
    {
        name: 'double-kick',
        type: TYPE_FIGHTING,
        power: 30,
        hits: 2,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 30,
    },
    {
        name: 'double-slap',
        type: TYPE_NORMAL,
        power: 15,
        hits: 2,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 10,
    },
    {
        name: 'iron-tail',
        type: TYPE_STEEL,
        power: 120,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 10,
        chance: STATUS_PARALYZE,
    },
    {
        name: 'ice-punch',
        type: TYPE_ICE,
        power: 75,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 15,
        chance: STATUS_FROZEN,
    },
    {
        name: 'fire-punch',
        type: TYPE_FIRE,
        power: 75,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 15,
        chance: STATUS_BURNING,
    },
    {
        name: 'thunder-punch',
        type: TYPE_ELECTRIC,
        power: 75,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 15,
        chance: STATUS_PARALYZE,
    },
    {
        name: 'peck',
        type: TYPE_FLYING,
        power: 35,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 35,
    },
    {
        name: 'drill-peck',
        type: TYPE_FLYING,
        power: 80,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 100,
    },
    {
        name: 'wing-attack',
        type: TYPE_FLYING,
        power: 65,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 35,
    },
    {
        name: 'crunch',
        type: TYPE_DARK,
        power: 80,
        accuracy: false,
        category: CATEGORY_PHYSICAL,
        pp: 15,
    },
    {
        name: 'feint-attack',
        type: TYPE_DARK,
        power: 65,
        accuracy: false,
        category: CATEGORY_PHYSICAL,
        pp: 20,
    },
    {
        name: 'bug-bite',
        type: TYPE_BUG,
        power: 60,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 20,
    },
    {
        name: 'leech-life',
        type: TYPE_BUG,
        power: 80,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 10,
        effect: EFFECT_DRAIN,
    },
    {
        name: 'twineedle',
        type: TYPE_BUG,
        power: 25,
        hits: 2,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 20,
        chance: STATUS_POISON,
    },
    {
        name: 'poison-sting',
        type: TYPE_POISON,
        power: 15,
        accuracy: 100,
        category: CATEGORY_PHYSICAL,
        pp: 35,
        chance: STATUS_POISON,
    },
    
    //Special
    {
        name: 'razor-leaf',
        type: TYPE_GRASS,
        power: 55,
        accuracy: 95,
        category: CATEGORY_SPECIAL,
        pp: 15,
        effect: EFFECT_DRAIN,
    },
    {
        name: 'absorb',
        type: TYPE_GRASS,
        power: 30,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 20,
        effect: EFFECT_DRAIN,
    },
    {
        name: 'mega-drain',
        type: TYPE_GRASS,
        power: 40,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 15,
        effect: EFFECT_DRAIN,
    },
    {
        name: 'giga-drain',
        type: TYPE_GRASS,
        power: 75,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 10,
        effect: EFFECT_DRAIN,
    },
    {
        name: 'razor-leaf',
        type: TYPE_GRASS,
        power: 80,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 10,
    },
    {
        name: 'razor-wind',
        type: TYPE_GRASS,
        power: 80,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 10,
    },
    {
        name: 'ember',
        type: TYPE_FIRE,
        power: 40,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 25,
        chance: STATUS_BURNING,
    },
    {
        name: 'flamethrower',
        type: TYPE_FIRE,
        power: 90,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 15,
        chance: STATUS_BURNING,
    },
    {
        name: 'fire-blast',
        type: TYPE_FIRE,
        power: 110,
        accuracy: 85,
        category: CATEGORY_SPECIAL,
        pp: 5,
        chance: STATUS_BURNING,
    },
    {
        name: 'water-gun',
        type: TYPE_WATER,
        power: 40,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 25,
    },
    {
        name: 'hydro-pump',
        type: TYPE_WATER,
        power: 110,
        accuracy: 80,
        category: CATEGORY_SPECIAL,
        pp: 5,
    },
    {
        name: 'ice-beam',
        type: TYPE_ICE,
        power: 90,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 10,
        chance: STATUS_FROZEN,
    },
    {
        name: 'thunder-shock',
        type: TYPE_ELECTRIC,
        power: 40,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 30,
        chance: STATUS_PARALYZE,
    },
    {
        name: 'thunderbolt',
        type: TYPE_ELECTRIC,
        power: 90,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 15,
        chance: STATUS_PARALYZE,
    },
    {
        name: 'electroweb',
        type: TYPE_ELECTRIC,
        power: 55,
        accuracy: 95,
        category: CATEGORY_SPECIAL,
        pp: 15,
    },
    {
        name: 'dragon-breath',
        type: TYPE_DRAGON,
        power: 60,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 15,
        chance: STATUS_PARALYZE,
    },
    {
        name: 'psybeam',
        type: TYPE_PSYCHIC,
        power: 65,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 20,
    },
    {
        name: 'psychic',
        type: TYPE_PSYCHIC,
        power: 90,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 10,
    },
    {
        name: 'sludge-bomb',
        type: TYPE_POISON,
        power: 95,
        accuracy: 100,
        category: CATEGORY_SPECIAL,
        pp: 10,
        chance: STATUS_POISON,
    },      
    //Buffs
    {
        name: 'swords-dance',
        type: TYPE_NORMAL,
        power: 2,
        stat: 'attack',
        category: CATEGORY_BUFF,        
        pp: 20,
    },
    {
        name: 'swords-dance',
        type: TYPE_NORMAL,
        power: 1,
        stat: 'growth',
        category: CATEGORY_BUFF,        
        pp: 20,
    },
    {
        name: 'harden',
        type: TYPE_NORMAL,
        power: 1,
        stat: 'defense',
        category: CATEGORY_BUFF,        
        pp: 40,
    },
    {
        name: 'iron-defense',
        type: TYPE_NORMAL,
        power: 2,
        stat: 'defense',
        category: CATEGORY_BUFF,        
        pp: 40,
    },
    {
        name: 'agility',
        type: TYPE_NORMAL,
        power: 2,
        stat: 'speed',
        category: CATEGORY_BUFF,        
        pp: 40,
    },
    //Debuff
    {
        name: 'string-shot',
        type: TYPE_NORMAL,
        power: 1,
        stat: 'speed',
        category: CATEGORY_DEBUFF,        
        pp: 20,
    },
    {
        name: 'screech',
        type: TYPE_NORMAL,
        power: 2,
        stat: 'defense',
        category: CATEGORY_DEBUFF,        
        pp: 35,
        
    }
]
    
export function getMainMoves(id){
    const pokemon = pokemonMoves.find(list => list.id === id);
    if(pokemon){
        return pokemon.mainMoves;
    } else {
        console.log('Pokémon inválido.')
    }
    
}