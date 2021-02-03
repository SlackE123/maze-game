// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010000000000000101010101010101010100000000000000000000000000000101000000000000000000000000000001010000000000000101010101010000010100000000000001010101010100000101000000000000000000000101000001010101000000000000000001010000010101010000000001010000010100000000010101010000010100000101000000000001010100000101000001010101000000000000000001010000010101010100000000000000010100000000000001010000020200000101000000000000010100000202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.stairLadder], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001040404040808080404040404040402030807080707070707080708070808050308070808080808080807080708080503080707070708070707070807080805030808080807080708080808070808050307070708080807070807070708080503080807070708080708080808080805030808080807080707080707070707050308070707070807080807080808080503080808080808070807070807070805030808080808080708070808070708050808070707070707080708070708080503070708070808080807080708080705080808080708080808070807080707080809080807080808080708070707080808060606060806060606080808080808`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight2,sprites.dungeon.stairNorth], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030103010101010301010103010303030103030303030103030301030101010303030103010301010103010303030103030101030103030301030101010301030301030301010103010303030103010301010301010301030103010101030103030303030303010101030101010101030301030101010103030301010101010101010303030103030101010103030303030303010303010301010101030103030301010101030103030303030301030103030303010301010101010103010303010101010103010303030103030101030103030303010303010303010101030302030103030303010301030303030301`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.oceanSand8,sprites.dungeon.stairLarge,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
            case "tile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
