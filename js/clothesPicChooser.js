import look from 'js/clothesChooser.js'
let clothesPics = {
    'cap': 'img/cap.png',
    't-shirt': 'img/tshirt.png',
    'sneakers': 'img/sneakers.png',
    'shorts': 'img/shorts.png',
    'jeans': 'img/jeans.png',
    'flannelShirt': 'img/flanelshirt.png',
    'pidorka': 'img/pidorka.png',
    'lightParka': 'img/lightParka.png',
    'warmParka': 'img/puhovik.png',
    'sorel': 'img/sorel.png',
    'logsleeve': 'img/ls.png',
    'none': 'none.png'
}
let picsChooser = (outfit) => {
    let links = {
        hat: 'none',
        underwear: 'none',
        shirt: 'none',
        sweater: 'none',
        coat: 'none',
        extraCoat: 'none',
        legs: 'none',
        leggins: 'none',
        foot: 'none'
    }
    links.hat = clothesPics[outfit.hat]
    links.underwear = clothesPics[outfit.underwear]
    links.shirt = clothesPics[outfit.shirt]
    links.sweater = clothesPics[outfit.sweater]
    links.coat = clothesPics[outfit.coat]
    links.extraCoat = clothesPics[outfit.extraCoat]
    links.legs = clothesPics[outfit.legs]
    links.leggins = clothesPics[outfit.leggins]
    links.foot = clothesPics[outfit.foot]
    return links
}
let picLinks = look
    .then((look) => {
        console.log(look)
        return (picsChooser(look))
    })


export default picLinks