const alg = "#....##..##...####...##.#..####..#.#.#.#..##....##....#.....#.##....##..###.#..####.#..#.###...##....##...#.#####..#.....#.#####.##....##..#.#####.....#.....###..#.#.###...###..#..#.#.#####....#.#..#..##..#.####.###.#.#...##.##.#.###...#####......#.........##.#.#####.##.##........#..#.##.####.#...#..#####.####.#.##.####.#.#.##.#..#..#.#....#.###.#.###.#......#..#...#.#..#..###..#....####...##....##.#..###...##.##.####..#..#..#..#.#...###.#.##.##.#..####.#.#..#....####......##.###.####..###.....##..##..##..."

const image = [
    ".#...##.#...#.##.#.....#..###...#.##.##...##.##.##.###...##.#.#...#..##..###.....#..##...#....#.####",
    "##.#####..#.#...##.#..##..#.#.######...#.##.#...#...##.#...#.#.#......#.#####.....#.######.....#...#",
    "....#..###..#.###.####....##.#...#...##.###.###...#...####.#.......#########.####.#.#..###.##..###..",
    ".#..#.##.###...#.##...#.....#.#.#...##....##.......####...#...####.####.#...#..#..##..###.#..#.#....",
    "..#.###..##.......#.##...##..#...####.####.##..#####.#..#.####..#....#..##..##....##.##...#.......#.",
    "#.#.#..#.####..###..#..#..##.#...#.#..###.##..#.##.###.##..#.......##.###.#..###.####..#####.....#..",
    "#.#...#..#.##..#.###...###.#....#...#..###.#.#..####.#..#.#.#.#..###.####.......#.#..#.####...###..#",
    "###.#.##.#..#.##.#.#....###...##..#.##.#.##..####...##.#.#....###.#.###.##.#.#####..#....#......##..",
    ".#.#..##.#.###..#..#.####.######.########....##.#.#.###.#..#...#.##.##..#.#.##.####.####.#.###...##.",
    ".#..#...#####..##..##..#.#.##.#######...####...#..#.###..#.#####..#..#...#..###...#.##....#.###..#..",
    "##...####.....###.#....##..#...#...##..#.#..##.####..#.##.#..##.##.#...##.##..##.##.#.##.##.####.#.#",
    "#...#.#.#..#......#.#.##.#.##.#......#.....#####..#.###.##.##.###..#.#.###..#####...#.#....###.#.#..",
    "..##.##.#.#.#..#######.##..#...##.....#..#.##.#...#..#.....#.#.##..##.#..#.##.#..#.#..##.#.##.######",
    "#..##...##...###.###..##.#.....#..#.#.#.###..#......#...##.#...####.##..#...##..#...####.##....##.#.",
    "##.#.###.###.#.#.....#.#.##..###.#####.#.#####.###.##.##.##.##.....#...####.....#.#....#.###.#.#...#",
    ".#.#..#.###.##.###.#......#..#..##.##..#.#..#......#.##.#..#......##.##.##...#.##.....#...#.##..#..#",
    "###....####.###.#.#.#...#.###.#####.##.###.#...#.#.#..#.##..#..##.....####.#.##..##..#.###..###..#..",
    "##.##..####...#......#..##..#..#.#.......###..####..#...##..####..#####....##.#..#..###...#####.....",
    "####..##.#...#.####..#####..#..#..###.#.##.#.###..###.#....#..#.#.#.#..##.#...#..#.####....#......#.",
    "#.####.##.##.####.#..#..#...##.##.##....#########....#.#.###.#.#.#.......#..#####.##...#..#....#.#.#",
    "..##.###..####.#.###.#.#...##..#.###..####.##..#.......##.##..#..#####.########..####.#..###.#..####",
    "#..##...###....##.#...#.#..###....##..####..#...##.####.###..##......####..#..#...#..#....#.##.#.#.#",
    "#.##..#......##....##.#.#..##..#.#...#.##..#.#.#.#####.#.##...###.#.#.####..###.###.#.....#....#..##",
    ".####...#...####...##..###...##..####.####...#.#.#.....#####.##..#.#..#..#..#.....#.#..##......#.#.#",
    ".....#....#..#.#.####.#.#..#..#.##...#....#####.###.###.####.##..####.#..#####..#...###.#..#.#.###.#",
    "#.###..#....####.##..#.....#...#.#.##.###..#.....#..#.#.#####.##.####.#.###..###.....#.##.##.#.##..#",
    "..##..#..#####..#...#.#.#..###...#.#.####.###....#.##.#...#.##.##...##.#.####...#..###.#..#.#.##..#.",
    ".#.##...###...####.#..##.#.#####.#....#..#..#.##..###..#.#..##.#..#...####.#.####.#..##..#.#####...#",
    "#.####...##...#.##.####.###..#...####.###...#..#.#..#.####.##...#.#....#.#..#.#.###.#.###.###.###...",
    ".#.#.....#....###.#..#.#.##.##....#.#..##....###..###...######.##..###..#####...#..##..###.#.#.###.#",
    "#..#.#.#...##..##.#....#.##.##..##.###.###..###.....#...##..#..#######..##.#.##.##..#.#.#.#.#.#.####",
    ".#.#.....#...#...#.####.....##...#.##..###.####.#.#..####.#####...#..#.....##..#..##...##..#########",
    "..##.#.....#.#.###.#.#..##..#.#.#..#..###.#.#..####..##.####..#...##.#.#.###..##...#..##.##...#..#.#",
    ".######.####...#.#..#.#.###.##...#.##.#.##.#..##....#..#.#..#.#.##...#.#....##..##...#.#.##.#.#.#.#.",
    "..##...###.#.#.#......#.#.###.##...#.###.#.##.#....####.###..#.##...#..#..###.#.####..#....####.##.#",
    "##.#.###.#.##......##.####.#..###...#..#..#.#..##.#.#..#.###..#..##..#.#...##..##.##.###.##.....####",
    "#...#..#.######.#.#...#.##.##....###.##..#..###..##.###.....##.#########..##..#....#...#.##.#....##.",
    "#.######.#.##.###...##..##...#..##...####.#.#.....##.#.##.####..###.##..##.#.####...###.#.#.####.#.#",
    "#####..####....#.##..##...#..#...#####...#.#..#...#.#####.#.....####..#..####.######.##.#....###.#.#",
    "##.#.#..####.#.......#...##..#.#..#..#..##..####.####...#......#.#....###.#.#.....##..#.#.#..#...#.#",
    "......###....#.......#.#.#...##...###.#...##..##..#..##...#.#.##.##.###...##....#####...#####.#..##.",
    ".##..##.##..#.##....#..#.###..#.###..#.#.##..###....##.###..#.#.##.#...#.##.#.#.###...#.#...#...#..#",
    "..#.....#.#.#...###.#.##.....###...##.####...##.#.#.#..##.#..#....#.##.##.##..#.#.##..###.#..#####..",
    "#...#..#.......##..###.#...##..####.###.....###..####.....#..#.####...#..#.#......##..##.##..##.#..#",
    ".#..#...#########.....###...##..##..##.##.###......##.####.####.....#..##.#.###.##...#.#....#.######",
    "#..#..#....###.##.#...##.#..#...#.##...#.###...#..#####.#.##.#....####..###.#.#.#...##..##.....#..#.",
    "####.#..#.........######..#...#.##.###.###....#...#.#.#.##..#.####....#####.......##....#..#....####",
    "#....##.#.###.#....####.##...#####......#...#..#.#..####.##..###########..##.##....#...#..####..##..",
    "#.#..#.#..#.####......##..#.#.#.#......#.##.####.#..###.###..#.#...##.#.#..#.#.##..#....###.#.###.##",
    "..#..##...#####.##.###########..###.##.##...#.........###..#.##.#.###....#..####..###.#....#...#####",
    "...#....#.....###.....##.#.###..#..#####..#.....###.....#..##..#...#.##.###....#.#####.....#.###.###",
    "##.##..#.#.....##.#..#####.####...#.#.#....####.#.###.###.##......#.##...#...#...#.#.#.####..#.####.",
    "##..#...###.#.#..##..###.#.#...##.#.#.....#.#.####.##.##.#..##....#.##.#####.#...#.#.##....###.#.#.#",
    "###.....#.#..#####.#..###...####....#.#..#..#.##.#.#...##..#.#.#..###....#.#.....##.#.#.######.##.##",
    "#####..#..#.#.##..#..##.##..##.####.#.....#....#########.#######.##.###.#..#.#....#....#.##.######.#",
    "#......####.#...##.#...###..##.######..##..#...####....#...###.##..#.###..##########..#.##.##.#.#..#",
    "####...##..#..#.....#..#...##..##.####........#..##...#..#...#####.#.#.......####..##.##.###.##.#.##",
    ".##..##......##.##....##..#..#.#.#.....#####.#...####..######...##.##..#.#..#.##.#.##.##.#####.##...",
    "..#..#####....####.##.###..#...#..##.####.##.###...##.....#.####...#.#..##.#..##.###.##....#.#.#..#.",
    "#.#.#.#.#..#...#.####...##.#..#..###.####..#..##..#.......#..#.##.#...####.####..#.##..##..#.###.###",
    "..#...#...####...#..###.###.....#....#.#.##.####..#....###...###..#.......###....#.#.#.#...#..###.#.",
    ".###...#############.#####.##...#.#.#.#.#..##.....####.###.#...#.####..#....#...#.#...###.#.#.##.#..",
    "..#.#....#..#....#####.####..##..#..#.#..####.###..#.#.##.########....#.#....#########....#.#.##.#..",
    ".#...#.###.#.#.#####.###.##.#####...##.....##...####.##.#####....###...#.#.#.#####.###.###.###...#..",
    "#.#####...#.##.#.##...#....###.#..####.##..#..#..###.#.###..#.#.....#..#.#.#.####.#.......#.###....#",
    ".######.#.##....###.###.####...#...#######..#.#.#...###...#........#.###.#####..##..###.####...#.###",
    "#...##..##...###.#.#.##.##.#....#....#.#.##..###..##.#.#..#..#...#...######.#..###..#.#..#.#..#....#",
    "...####..##.#..###.##.#.#.##.#....#.....#...#####....#..###....#.#.#....##.########..##..##.#.##.#.#",
    ".####.######..####.###...#####.##.####..#..##..##.#.#.#.#.#.###...##......#..#####.#..##.#.####....#",
    "##.#.#.##....#..#.##.#...######.###..#####.....#..#.#..#.#..#..##.#.#.#.##.#..#..##.##.#......#####.",
    ".###......##.#..##.#.....#..##..##....#....########.#.##.####..##..#########...##..#.#..#.##....#.##",
    ".###.#.####.#########....#....#.###...###..#########..#..########.#..###.###.#..#..#.##.#....#..#.##",
    "..#..######...##...#.#...#..#...#.....##...#.#.#...##..#.##.##.#.##..#.......##.....##.#......#.###.",
    ".#..####...#.##.#.....###..##.#.##.....#.#.###..#...#.#...###.#...##.##....#.###.#.####.#..#.....#.#",
    "##.#..#.##.#.#.###......##...#.##.#.#.#.#...####..##....#.##.....###..#.###.#...###.##.#.....#..#.#.",
    "###.##...###.###.###.....#####.#####.#.#..#..##...##..#.#....##..#.#.####.#.#.###.#..##.#.###..##..#",
    ".##.#.####..#......#.#..###..######.#######.###..#####.##.#....##.###.##.##.##.#.####.#..##..#.###.#",
    ".#..#.....###.###.#.##..#.#.#.##....##...#..#..#.##...###.#.###..###.####.#..#..#########..##..##.#.",
    "....#...###.#.#....##..#..###..#.#.####.###.######..#.##.#...#..#.##...#...##.###..............##.##",
    ".##..####..##....#.###......#.##.#.####..#....#..###..#.###..####..##.#.#.....###.#..#.#..#.#.....##",
    "###.####....##..##.#..#######.#...#..#.##..#########.......#..#####..##.##..#..#..#..#..##...#..#.##",
    "##.##.#..#.##..#..###.#..#.####..#.#.#....#.#..####.#...#..####.#####....###.##....#..##..#..#.###..",
    ".....#.#..###..##....###.......#.######....##.#..##....#..###...#..##.##.#.....#..###...##......###.",
    "..#.#...#.....#...#....##.#.##.#.#.#.###.#..#....###.....#.#......#....##..##.##.####.##.#####.#...#",
    "..##..#.#..###..#..##..##...#..##..#...###..##.#...#..#...##.###.##.##.#.##...#.##......###.#...##..",
    ".####..###.#..#.###...#.##........#.##.#..#.#..###.##..##.#....#.#.#..##...#..#.####....#.....##...#",
    "#.......###....##..##.#.#..#.#..##.##...#.#.#.#.#.#..###.#...#..###.########....#.#######..#.##..###",
    "#..#.####..#.##.#...####....##.######.####...####..#.####...........#.##..###..#....#.##..#.#...###.",
    "..####....#.#.##.#.###...##..#.###..#......####.#.##.##.#..#.#..###.##...#..#.##.###..###.###.###..#",
    "..#....#.###..#.#...#.####.########.####..#.#.#....#.#.##.##...####.#.##..##.#.#.##.##.#..#..#..##.#",
    ".##.#...###.###..#..###.#..####.#...#.#..##.##.###...#.###.#..##.#.##......#..##..##.#.#.#.#.##.###.",
    "#######.##.#####.#..#....##..#.###..#..##.######.....##.#....###..###.#.#...##.####.#.#....#..#..###",
    ".##.###.####...##.#......#..#..#####...###.###..##..####.#....#...#..###..######..##.##.####....##..",
    ".#.....#...##...##.#.######..####.....#.#.#####....#..##....#..#...###.#.##.#.#......#.######.#.#...",
    "#####.#....#..#.#.##...##..#.#...#.#.#.##.##.#.#####.#..#.#...######.........###....#.##.###.#.#.#.#",
    "....#...##.#.###..#######.##..####.###....#.####...####.#..####.#.####...#.#....#.##...#.##.##..##..",
    "#..#.#####.#####..###.#.....#.#.#.##......#.#..###......#...#.####.#..##.#.###...#.#.......###.####.",
    "##..###...#..........#..#.###.##.##..##.#...##..#.#...##.#..#.##...##..####.######.#..#.####.#.#####",
    "..######..#...##.#.#....#.##.#.#.#.#..#..###..###..##..##..#.....#.#.###.##.#.#.#.###..##....#..####",
    "#.#.####.#.....##..#..#.#.#.##..#.#.#######.#....###.##...##.##.#.#..##..#......######.#....#....#.."
]

const input = { alg, image }
module.exports = input