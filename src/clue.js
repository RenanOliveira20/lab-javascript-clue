// ITERATION 1

// Suspects Collection

const suspectsArray = [
  {
firstName: 'Jacob',
lastName: 'Green',
occupation: 'Entrepreneur',
age: 45,
description: 'He has a lot of connections',
image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
color: 'green',
},

 {
firstName: 'Doctor',
lastName: 'Orchid',
occupation: 'Scientist',
age: 26,
description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'white',
},
 {
firstName: 'Victor',
lastName: 'Plum',
occupation: 'Designer',
age: 22,
description: 'Billionaire video game designer',
image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
color: 'purple',
},
{
firstName: 'Kasandra',
lastName: 'Scarlet',
occupation: 'Actor',
age: 31,
description: 'She is an A-list movie star with a dark past',
image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'red',
},

{
firstName: 'Eleanor',
lastName: 'Peacock',
occupation: 'Socialité',
age: 36,
description: 'She is from a wealthy family and uses her status and money to earn popularity',
image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
color: 'blue',
},
{
firstName: 'Jack',
lastName: 'Mustard',
occupation: 'Retired Football player',
age: 62,
description: 'He is a former football player who tries to get by on his former glory',
image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
color: 'yellow',
}]
//console.log(suspectsArray)


// Rooms Collection

const roomsArray = [
room1 ={name: 'Dining Room'},
room2 ={name: 'Conservatory'},
room3 ={name: 'Kitchen'},
room4 ={name: 'Study'},
room5 ={name: 'Library'},
room6 ={name: 'Billiard Room'},
room7 ={name: 'Lounge'},
room8 ={name: 'Ballroom'},
room9 ={name: 'Hall'},
room10 ={name: 'Spa'},
room11={name: 'Living Room'},
room12 ={name: 'Observatory'},
room13 ={name: 'Theater'},
room14 ={name: 'Guest House'},
room15 ={name: 'Patio'},
];

// Weapons Collection

const weaponsArray = [
   weapon1 = {name: 'rope' ,
    weight: 10},
   weapon2 = {name: 'knife' ,
   weight: 8},
   weapon3 = {name: 'candlestick ',
   weight: 2},
   weapon4 = {name: 'dumbbell ',
   weight: 30},
   weapon5 = {name: 'poison' ,
   weight: 2},
   weapon6 = {name: 'axe' ,
   weight: 15},
   weapon7 = {name: 'bat' ,
   weight: 13},
   weapon8 = {name: 'trophy' ,
   weight: 25},
   weapon9 = {name: 'pistol' ,
   weight: 20},
];

// ITERATION 2

function selectRandom(array) {
  let random =array[ Math.floor(Math.random()*array.length)]
  return random
}
//console.log(selectRandom(suspectsArray))
function pickMystery() {
  let subjectMistery={
    suspect: selectRandom(suspectsArray),
    room: selectRandom(roomsArray),
    weapon: selectRandom(weaponsArray),
  }
  if(subjectMistery.suspect === null){
    subjectMistery.suspect= `Oops, we need a subject!`
  }else if(subjectMistery.weapon === null){
    subjectMistery.weapon = `Oops, we need a weapon`
  }else if(subjectMistery.room === null){
    subjectMistery.room = `Oops, we need a room`
  }
  return subjectMistery
  }

//console.log(pickMystery())
// ITERATION 3

function revealMystery(object) {
  let mensagem = `${object().suspect.firstName} ${object().suspect.lastName} killed Mr. Boddy 
  using the ${object().weapon.name} in the ${object().room.name}! OMG ! RUN FOR YOUR LIFE !`
  return mensagem
}
console.log(revealMystery(pickMystery))
// The following is required to make unit tests work. Please ignore it.
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
