const input = [
    '1163751742',
    '1381373672',
    '2136511328',
    '3694931569',
    '7463417111',
    '1319128137',
    '1359912421',
    '3125421639',
    '1293138521',
    '2311944581'
]
const largeInput = [
    '11637517422274862853338597396444961841755517295286',
    '13813736722492484783351359589446246169155735727126',
    '21365113283247622439435873354154698446526571955763',
    '36949315694715142671582625378269373648937148475914',
    '74634171118574528222968563933317967414442817852555',
    '13191281372421239248353234135946434524615754563572',
    '13599124212461123532357223464346833457545794456865',
    '31254216394236532741534764385264587549637569865174',
    '12931385212314249632342535174345364628545647573965',
    '23119445813422155692453326671356443778246755488935',
    '22748628533385973964449618417555172952866628316397',
    '24924847833513595894462461691557357271266846838237',
    '32476224394358733541546984465265719557637682166874',
    '47151426715826253782693736489371484759148259586125',
    '85745282229685639333179674144428178525553928963666',
    '24212392483532341359464345246157545635726865674683',
    '24611235323572234643468334575457944568656815567976',
    '42365327415347643852645875496375698651748671976285',
    '23142496323425351743453646285456475739656758684176',
    '34221556924533266713564437782467554889357866599146',
    '33859739644496184175551729528666283163977739427418',
    '35135958944624616915573572712668468382377957949348',
    '43587335415469844652657195576376821668748793277985',
    '58262537826937364893714847591482595861259361697236',
    '96856393331796741444281785255539289636664139174777',
    '35323413594643452461575456357268656746837976785794',
    '35722346434683345754579445686568155679767926678187',
    '53476438526458754963756986517486719762859782187396',
    '34253517434536462854564757396567586841767869795287',
    '45332667135644377824675548893578665991468977611257',
    '44961841755517295286662831639777394274188841538529',
    '46246169155735727126684683823779579493488168151459',
    '54698446526571955763768216687487932779859814388196',
    '69373648937148475914825958612593616972361472718347',
    '17967414442817852555392896366641391747775241285888',
    '46434524615754563572686567468379767857948187896815',
    '46833457545794456865681556797679266781878137789298',
    '64587549637569865174867197628597821873961893298417',
    '45364628545647573965675868417678697952878971816398',
    '56443778246755488935786659914689776112579188722368',
    '55172952866628316397773942741888415385299952649631',
    '57357271266846838237795794934881681514599279262561',
    '65719557637682166874879327798598143881961925499217',
    '71484759148259586125936169723614727183472583829458',
    '28178525553928963666413917477752412858886352396999',
    '57545635726865674683797678579481878968159298917926',
    '57944568656815567976792667818781377892989248891319',
    '75698651748671976285978218739618932984172914319528',
    '56475739656758684176786979528789718163989182927419',
    '67554889357866599146897761125791887223681299833479'
]
const grid = [
    [
        1, 1, 6, 3, 7,
        5, 1, 7, 4, 2
    ],
    [
        1, 3, 8, 1, 3,
        7, 3, 6, 7, 2
    ],
    [
        2, 1, 3, 6, 5,
        1, 1, 3, 2, 8
    ],
    [
        3, 6, 9, 4, 9,
        3, 1, 5, 6, 9
    ],
    [
        7, 4, 6, 3, 4,
        1, 7, 1, 1, 1
    ],
    [
        1, 3, 1, 9, 1,
        2, 8, 1, 3, 7
    ],
    [
        1, 3, 5, 9, 9,
        1, 2, 4, 2, 1
    ],
    [
        3, 1, 2, 5, 4,
        2, 1, 6, 3, 9
    ],
    [
        1, 2, 9, 3, 1,
        3, 8, 5, 2, 1
    ],
    [
        2, 3, 1, 1, 9,
        4, 4, 5, 8, 1
    ]
]
const graph = JSON.parse(`{ "0": { "0": { "pos": { "i": 0, "j": 0 }, "val": 1, "id": "0,0" }, "1": { "pos": { "i": 0, "j": 1 }, "val": 1, "id": "0,1" }, "2": { "pos": { "i": 0, "j": 2 }, "val": 6, "id": "0,2" }, "3": { "pos": { "i": 0, "j": 3 }, "val": 3, "id": "0,3" }, "4": { "pos": { "i": 0, "j": 4 }, "val": 7, "id": "0,4" }, "5": { "pos": { "i": 0, "j": 5 }, "val": 5, "id": "0,5" }, "6": { "pos": { "i": 0, "j": 6 }, "val": 1, "id": "0,6" }, "7": { "pos": { "i": 0, "j": 7 }, "val": 7, "id": "0,7" }, "8": { "pos": { "i": 0, "j": 8 }, "val": 4, "id": "0,8" }, "9": { "pos": { "i": 0, "j": 9 }, "val": 2, "id": "0,9" } }, "1": { "0": { "pos": { "i": 1, "j": 0 }, "val": 1, "id": "1,0" }, "1": { "pos": { "i": 1, "j": 1 }, "val": 3, "id": "1,1" }, "2": { "pos": { "i": 1, "j": 2 }, "val": 8, "id": "1,2" }, "3": { "pos": { "i": 1, "j": 3 }, "val": 1, "id": "1,3" }, "4": { "pos": { "i": 1, "j": 4 }, "val": 3, "id": "1,4" }, "5": { "pos": { "i": 1, "j": 5 }, "val": 7, "id": "1,5" }, "6": { "pos": { "i": 1, "j": 6 }, "val": 3, "id": "1,6" }, "7": { "pos": { "i": 1, "j": 7 }, "val": 6, "id": "1,7" }, "8": { "pos": { "i": 1, "j": 8 }, "val": 7, "id": "1,8" }, "9": { "pos": { "i": 1, "j": 9 }, "val": 2, "id": "1,9" } }, "2": { "0": { "pos": { "i": 2, "j": 0 }, "val": 2, "id": "2,0" }, "1": { "pos": { "i": 2, "j": 1 }, "val": 1, "id": "2,1" }, "2": { "pos": { "i": 2, "j": 2 }, "val": 3, "id": "2,2" }, "3": { "pos": { "i": 2, "j": 3 }, "val": 6, "id": "2,3" }, "4": { "pos": { "i": 2, "j": 4 }, "val": 5, "id": "2,4" }, "5": { "pos": { "i": 2, "j": 5 }, "val": 1, "id": "2,5" }, "6": { "pos": { "i": 2, "j": 6 }, "val": 1, "id": "2,6" }, "7": { "pos": { "i": 2, "j": 7 }, "val": 3, "id": "2,7" }, "8": { "pos": { "i": 2, "j": 8 }, "val": 2, "id": "2,8" }, "9": { "pos": { "i": 2, "j": 9 }, "val": 8, "id": "2,9" } }, "3": { "0": { "pos": { "i": 3, "j": 0 }, "val": 3, "id": "3,0" }, "1": { "pos": { "i": 3, "j": 1 }, "val": 6, "id": "3,1" }, "2": { "pos": { "i": 3, "j": 2 }, "val": 9, "id": "3,2" }, "3": { "pos": { "i": 3, "j": 3 }, "val": 4, "id": "3,3" }, "4": { "pos": { "i": 3, "j": 4 }, "val": 9, "id": "3,4" }, "5": { "pos": { "i": 3, "j": 5 }, "val": 3, "id": "3,5" }, "6": { "pos": { "i": 3, "j": 6 }, "val": 1, "id": "3,6" }, "7": { "pos": { "i": 3, "j": 7 }, "val": 5, "id": "3,7" }, "8": { "pos": { "i": 3, "j": 8 }, "val": 6, "id": "3,8" }, "9": { "pos": { "i": 3, "j": 9 }, "val": 9, "id": "3,9" } }, "4": { "0": { "pos": { "i": 4, "j": 0 }, "val": 7, "id": "4,0" }, "1": { "pos": { "i": 4, "j": 1 }, "val": 4, "id": "4,1" }, "2": { "pos": { "i": 4, "j": 2 }, "val": 6, "id": "4,2" }, "3": { "pos": { "i": 4, "j": 3 }, "val": 3, "id": "4,3" }, "4": { "pos": { "i": 4, "j": 4 }, "val": 4, "id": "4,4" }, "5": { "pos": { "i": 4, "j": 5 }, "val": 1, "id": "4,5" }, "6": { "pos": { "i": 4, "j": 6 }, "val": 7, "id": "4,6" }, "7": { "pos": { "i": 4, "j": 7 }, "val": 1, "id": "4,7" }, "8": { "pos": { "i": 4, "j": 8 }, "val": 1, "id": "4,8" }, "9": { "pos": { "i": 4, "j": 9 }, "val": 1, "id": "4,9" } }, "5": { "0": { "pos": { "i": 5, "j": 0 }, "val": 1, "id": "5,0" }, "1": { "pos": { "i": 5, "j": 1 }, "val": 3, "id": "5,1" }, "2": { "pos": { "i": 5, "j": 2 }, "val": 1, "id": "5,2" }, "3": { "pos": { "i": 5, "j": 3 }, "val": 9, "id": "5,3" }, "4": { "pos": { "i": 5, "j": 4 }, "val": 1, "id": "5,4" }, "5": { "pos": { "i": 5, "j": 5 }, "val": 2, "id": "5,5" }, "6": { "pos": { "i": 5, "j": 6 }, "val": 8, "id": "5,6" }, "7": { "pos": { "i": 5, "j": 7 }, "val": 1, "id": "5,7" }, "8": { "pos": { "i": 5, "j": 8 }, "val": 3, "id": "5,8" }, "9": { "pos": { "i": 5, "j": 9 }, "val": 7, "id": "5,9" } }, "6": { "0": { "pos": { "i": 6, "j": 0 }, "val": 1, "id": "6,0" }, "1": { "pos": { "i": 6, "j": 1 }, "val": 3, "id": "6,1" }, "2": { "pos": { "i": 6, "j": 2 }, "val": 5, "id": "6,2" }, "3": { "pos": { "i": 6, "j": 3 }, "val": 9, "id": "6,3" }, "4": { "pos": { "i": 6, "j": 4 }, "val": 9, "id": "6,4" }, "5": { "pos": { "i": 6, "j": 5 }, "val": 1, "id": "6,5" }, "6": { "pos": { "i": 6, "j": 6 }, "val": 2, "id": "6,6" }, "7": { "pos": { "i": 6, "j": 7 }, "val": 4, "id": "6,7" }, "8": { "pos": { "i": 6, "j": 8 }, "val": 2, "id": "6,8" }, "9": { "pos": { "i": 6, "j": 9 }, "val": 1, "id": "6,9" } }, "7": { "0": { "pos": { "i": 7, "j": 0 }, "val": 3, "id": "7,0" }, "1": { "pos": { "i": 7, "j": 1 }, "val": 1, "id": "7,1" }, "2": { "pos": { "i": 7, "j": 2 }, "val": 2, "id": "7,2" }, "3": { "pos": { "i": 7, "j": 3 }, "val": 5, "id": "7,3" }, "4": { "pos": { "i": 7, "j": 4 }, "val": 4, "id": "7,4" }, "5": { "pos": { "i": 7, "j": 5 }, "val": 2, "id": "7,5" }, "6": { "pos": { "i": 7, "j": 6 }, "val": 1, "id": "7,6" }, "7": { "pos": { "i": 7, "j": 7 }, "val": 6, "id": "7,7" }, "8": { "pos": { "i": 7, "j": 8 }, "val": 3, "id": "7,8" }, "9": { "pos": { "i": 7, "j": 9 }, "val": 9, "id": "7,9" } }, "8": { "0": { "pos": { "i": 8, "j": 0 }, "val": 1, "id": "8,0" }, "1": { "pos": { "i": 8, "j": 1 }, "val": 2, "id": "8,1" }, "2": { "pos": { "i": 8, "j": 2 }, "val": 9, "id": "8,2" }, "3": { "pos": { "i": 8, "j": 3 }, "val": 3, "id": "8,3" }, "4": { "pos": { "i": 8, "j": 4 }, "val": 1, "id": "8,4" }, "5": { "pos": { "i": 8, "j": 5 }, "val": 3, "id": "8,5" }, "6": { "pos": { "i": 8, "j": 6 }, "val": 8, "id": "8,6" }, "7": { "pos": { "i": 8, "j": 7 }, "val": 5, "id": "8,7" }, "8": { "pos": { "i": 8, "j": 8 }, "val": 2, "id": "8,8" }, "9": { "pos": { "i": 8, "j": 9 }, "val": 1, "id": "8,9" } }, "9": { "0": { "pos": { "i": 9, "j": 0 }, "val": 2, "id": "9,0" }, "1": { "pos": { "i": 9, "j": 1 }, "val": 3, "id": "9,1" }, "2": { "pos": { "i": 9, "j": 2 }, "val": 1, "id": "9,2" }, "3": { "pos": { "i": 9, "j": 3 }, "val": 1, "id": "9,3" }, "4": { "pos": { "i": 9, "j": 4 }, "val": 9, "id": "9,4" }, "5": { "pos": { "i": 9, "j": 5 }, "val": 4, "id": "9,5" }, "6": { "pos": { "i": 9, "j": 6 }, "val": 4, "id": "9,6" }, "7": { "pos": { "i": 9, "j": 7 }, "val": 5, "id": "9,7" }, "8": { "pos": { "i": 9, "j": 8 }, "val": 8, "id": "9,8" }, "9": { "pos": { "i": 9, "j": 9 }, "val": 1, "id": "9,9" } }, "height": 10, "width": 10 }`)
const path = JSON.parse(`[{"pos":{"i":0,"j":0},"val":1,"id":"0,0"},{"pos":{"i":1,"j":0},"val":1,"id":"1,0"},{"pos":{"i":2,"j":0},"val":2,"id":"2,0"},{"pos":{"i":2,"j":1},"val":1,"id":"2,1"},{"pos":{"i":2,"j":2},"val":3,"id":"2,2"},{"pos":{"i":2,"j":3},"val":6,"id":"2,3"},{"pos":{"i":2,"j":4},"val":5,"id":"2,4"},{"pos":{"i":2,"j":5},"val":1,"id":"2,5"},{"pos":{"i":2,"j":6},"val":1,"id":"2,6"},{"pos":{"i":3,"j":6},"val":1,"id":"3,6"},{"pos":{"i":3,"j":7},"val":5,"id":"3,7"},{"pos":{"i":4,"j":7},"val":1,"id":"4,7"},{"pos":{"i":4,"j":8},"val":1,"id":"4,8"},{"pos":{"i":5,"j":8},"val":3,"id":"5,8"},{"pos":{"i":6,"j":8},"val":2,"id":"6,8"},{"pos":{"i":7,"j":8},"val":3,"id":"7,8"},{"pos":{"i":8,"j":8},"val":2,"id":"8,8"},{"pos":{"i":8,"j":9},"val":1,"id":"8,9"},{"pos":{"i":9,"j":9},"val":1,"id":"9,9"}]`)
const largePath = JSON.parse(`[{"pos":{"i":0,"j":0},"val":1,"id":"0,0"},{"pos":{"i":1,"j":0},"val":1,"id":"1,0"},{"pos":{"i":2,"j":0},"val":2,"id":"2,0"},{"pos":{"i":2,"j":1},"val":1,"id":"2,1"},{"pos":{"i":2,"j":2},"val":3,"id":"2,2"},{"pos":{"i":2,"j":3},"val":6,"id":"2,3"},{"pos":{"i":2,"j":4},"val":5,"id":"2,4"},{"pos":{"i":2,"j":5},"val":1,"id":"2,5"},{"pos":{"i":2,"j":6},"val":1,"id":"2,6"},{"pos":{"i":3,"j":6},"val":1,"id":"3,6"},{"pos":{"i":3,"j":7},"val":5,"id":"3,7"},{"pos":{"i":4,"j":7},"val":1,"id":"4,7"},{"pos":{"i":4,"j":8},"val":1,"id":"4,8"},{"pos":{"i":5,"j":8},"val":3,"id":"5,8"},{"pos":{"i":6,"j":8},"val":2,"id":"6,8"},{"pos":{"i":6,"j":9},"val":1,"id":"6,9"},{"pos":{"i":6,"j":10},"val":2,"id":"6,10"},{"pos":{"i":5,"j":10},"val":2,"id":"5,10"},{"pos":{"i":5,"j":11},"val":4,"id":"5,11"},{"pos":{"i":5,"j":12},"val":2,"id":"5,12"},{"pos":{"i":5,"j":13},"val":1,"id":"5,13"},{"pos":{"i":6,"j":13},"val":1,"id":"6,13"},{"pos":{"i":6,"j":14},"val":1,"id":"6,14"},{"pos":{"i":6,"j":15},"val":2,"id":"6,15"},{"pos":{"i":6,"j":16},"val":3,"id":"6,16"},{"pos":{"i":6,"j":17},"val":5,"id":"6,17"},{"pos":{"i":6,"j":18},"val":3,"id":"6,18"},{"pos":{"i":6,"j":19},"val":2,"id":"6,19"},{"pos":{"i":7,"j":19},"val":1,"id":"7,19"},{"pos":{"i":8,"j":19},"val":2,"id":"8,19"},{"pos":{"i":8,"j":20},"val":3,"id":"8,20"},{"pos":{"i":8,"j":21},"val":4,"id":"8,21"},{"pos":{"i":8,"j":22},"val":2,"id":"8,22"},{"pos":{"i":9,"j":22},"val":3,"id":"9,22"},{"pos":{"i":9,"j":23},"val":3,"id":"9,23"},{"pos":{"i":9,"j":24},"val":2,"id":"9,24"},{"pos":{"i":10,"j":24},"val":1,"id":"10,24"},{"pos":{"i":11,"j":24},"val":6,"id":"11,24"},{"pos":{"i":11,"j":25},"val":1,"id":"11,25"},{"pos":{"i":12,"j":25},"val":4,"id":"12,25"},{"pos":{"i":12,"j":26},"val":4,"id":"12,26"},{"pos":{"i":13,"j":26},"val":4,"id":"13,26"},{"pos":{"i":14,"j":26},"val":1,"id":"14,26"},{"pos":{"i":15,"j":26},"val":2,"id":"15,26"},{"pos":{"i":16,"j":26},"val":5,"id":"16,26"},{"pos":{"i":17,"j":26},"val":4,"id":"17,26"},{"pos":{"i":18,"j":26},"val":2,"id":"18,26"},{"pos":{"i":19,"j":26},"val":7,"id":"19,26"},{"pos":{"i":20,"j":26},"val":5,"id":"20,26"},{"pos":{"i":20,"j":27},"val":2,"id":"20,27"},{"pos":{"i":21,"j":27},"val":1,"id":"21,27"},{"pos":{"i":21,"j":28},"val":2,"id":"21,28"},{"pos":{"i":22,"j":28},"val":6,"id":"22,28"},{"pos":{"i":23,"j":28},"val":1,"id":"23,28"},{"pos":{"i":23,"j":29},"val":4,"id":"23,29"},{"pos":{"i":23,"j":30},"val":8,"id":"23,30"},{"pos":{"i":23,"j":31},"val":2,"id":"23,31"},{"pos":{"i":23,"j":32},"val":5,"id":"23,32"},{"pos":{"i":24,"j":32},"val":2,"id":"24,32"},{"pos":{"i":25,"j":32},"val":6,"id":"25,32"},{"pos":{"i":26,"j":32},"val":1,"id":"26,32"},{"pos":{"i":26,"j":33},"val":5,"id":"26,33"},{"pos":{"i":27,"j":33},"val":1,"id":"27,33"},{"pos":{"i":27,"j":34},"val":9,"id":"27,34"},{"pos":{"i":27,"j":35},"val":7,"id":"27,35"},{"pos":{"i":27,"j":36},"val":6,"id":"27,36"},{"pos":{"i":27,"j":37},"val":2,"id":"27,37"},{"pos":{"i":28,"j":37},"val":1,"id":"28,37"},{"pos":{"i":29,"j":37},"val":1,"id":"29,37"},{"pos":{"i":30,"j":37},"val":4,"id":"30,37"},{"pos":{"i":30,"j":38},"val":1,"id":"30,38"},{"pos":{"i":31,"j":38},"val":4,"id":"31,38"},{"pos":{"i":32,"j":38},"val":8,"id":"32,38"},{"pos":{"i":33,"j":38},"val":3,"id":"33,38"},{"pos":{"i":33,"j":39},"val":6,"id":"33,39"},{"pos":{"i":33,"j":40},"val":1,"id":"33,40"},{"pos":{"i":33,"j":41},"val":4,"id":"33,41"},{"pos":{"i":34,"j":41},"val":2,"id":"34,41"},{"pos":{"i":35,"j":41},"val":1,"id":"35,41"},{"pos":{"i":36,"j":41},"val":1,"id":"36,41"},{"pos":{"i":36,"j":42},"val":3,"id":"36,42"},{"pos":{"i":36,"j":43},"val":7,"id":"36,43"},{"pos":{"i":37,"j":43},"val":3,"id":"37,43"},{"pos":{"i":38,"j":43},"val":1,"id":"38,43"},{"pos":{"i":38,"j":44},"val":8,"id":"38,44"},{"pos":{"i":38,"j":45},"val":1,"id":"38,45"},{"pos":{"i":39,"j":45},"val":2,"id":"39,45"},{"pos":{"i":39,"j":46},"val":2,"id":"39,46"},{"pos":{"i":39,"j":47},"val":3,"id":"39,47"},{"pos":{"i":40,"j":47},"val":6,"id":"40,47"},{"pos":{"i":41,"j":47},"val":5,"id":"41,47"},{"pos":{"i":42,"j":47},"val":2,"id":"42,47"},{"pos":{"i":42,"j":48},"val":1,"id":"42,48"},{"pos":{"i":43,"j":48},"val":5,"id":"43,48"},{"pos":{"i":44,"j":48},"val":9,"id":"44,48"},{"pos":{"i":45,"j":48},"val":2,"id":"45,48"},{"pos":{"i":46,"j":48},"val":1,"id":"46,48"},{"pos":{"i":47,"j":48},"val":2,"id":"47,48"},{"pos":{"i":48,"j":48},"val":1,"id":"48,48"},{"pos":{"i":49,"j":48},"val":7,"id":"49,48"},{"pos":{"i":49,"j":49},"val":9,"id":"49,49"}]`)
module.exports = { input, largeInput, grid, graph, path, largePath }