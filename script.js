alert( 'Привет, мир!' );


function initMap() {
    const config = {
        twoDimentional: true
        mapSize: {
            x: 5,
            y: 5,
            z: 5
        }
    }

    const map = [];
    for (let i = 0; i < config.mapSize.x; i++) {
        const row = [];
        for (let j = 0; j < config.mapSize.x; j++) {
            row.push({
                mode: 0;
        })
        }
        map.push(row);
    }

    console.log(map);
    return map;
}

let a = initMap();
