scene.setBackgroundColor(1)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010000000000000101010101010101010100000000000000000000000000000101000000000000000000000000000001010000000000000101010101010000010100000000000001010101010100000101000000000000000000000101000001010101000000000000000001010000010101010000000001010000010100000000010101010000010100000101000000000001010100000101000001010101000000000000000001010000010101010100000000000000010100000000000001010000020200000101000000000000010100000202`, img`
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
    `, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.stairLadder], TileScale.Sixteen))
let Protagonist = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Protagonist)
Protagonist.setPosition(15, 15)
info.setLife(3)
forever(function () {
    scene.cameraFollowSprite(Protagonist)
    if (Protagonist.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles10)) {
        Protagonist.setPosition(15, 15)
        info.changeLifeBy(-1)
    }
    if (Protagonist.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight2)) {
        Protagonist.setPosition(15, 15)
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (Protagonist.tileKindAt(TileDirection.Center, sprites.dungeon.stairLadder)) {
        tiles.setTilemap(tiles.createTilemap(hex`1000100001040404040808080404040404040402030807080707070707080708070808050308070808080808080807080708080503080707070708070707070807080805030808080807080708080808070808050307070708080807070807070708080503080807070708080708080808080805030808080807080707080707070707050308070707070807080807080808080503080808080808070807070807070805030808080808080708070808070708050808070707070707080708070708080503070708070808080807080708080705080808080708080808070807080707080809080807080808080708070707080808060606060806060606080808080808`, img`
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
            `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight2,sprites.dungeon.stairNorth], TileScale.Sixteen))
        Protagonist.setPosition(5, 5)
        info.changeScoreBy(1)
    }
})
