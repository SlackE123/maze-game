scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
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
        pause(500)
    }
    if (Protagonist.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight2)) {
        Protagonist.setPosition(15, 15)
        info.changeLifeBy(-1)
        pause(500)
    }
    if (Protagonist.tileKindAt(TileDirection.Center, sprites.builtin.oceanSand8)) {
        Protagonist.setPosition(15, 15)
        info.changeLifeBy(-1)
        pause(500)
    }
    if (game.runtime() == 60000) {
        game.reset()
    } else {
    	
    }
})
forever(function () {
    if (Protagonist.tileKindAt(TileDirection.Center, sprites.dungeon.stairLadder)) {
        tiles.setTilemap(tilemap`level2`)
        Protagonist.setPosition(5, 5)
        info.changeScoreBy(1)
    }
})
forever(function () {
    if (Protagonist.tileKindAt(TileDirection.Center, sprites.dungeon.stairNorth)) {
        tiles.setTilemap(tilemap`level3`)
        Protagonist.setPosition(0, 0)
        info.changeScoreBy(1)
    }
})
