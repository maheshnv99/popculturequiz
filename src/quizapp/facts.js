const animefact=[
"Sean Schemmel passed out while recording Goku's Super Saiyan level 4 transformation for Dragon Ball GT.",
"Yoshihiro Togashi, the creator of Hunter X Hunter, is married to the creator of Sailor Moon, Naoko Takeuchi.",
"Sixty Percent Of The World's Animation Is Anime",
"The Titans in 'Attack On Titan' Are Based On Drunks",
"Everyone In 'Code Geass' Loves Pizza Because The Series Was Funded By Pizza Hut",
"50 New Colors Were Created For 'Akira'",
"'Spirited Away' Is The First Anime To Win An Academy Award",
"The Authors Of 'Sailor Moon' And 'Yu Yu Hakusho' Are Married",
"'Bleach' Almost Didn't Happen",
"'Death Note' Inspired Chinese Children To Write Down The Names Of Their Teachers",
" Eucliwood Hellscythe Anime Character Has 10 Different Voices",
"'Your Name' Is The Highest Grossing Anime Film Worldwide",
"Studio Ghibli Is Named After A WWII-Era Aircraft",
"'Sazae-san' Is The Longest Running Animated TV Series",
"The First Magical Girl Anime Aired In The '60s",
"Real-Life Japanese Astronaut Recorded His 'Space Brothers' Cameo From The ISS",
"'Naruto' Characters Inspired By Japanese Film Industry",
]



export function animefacts(){
let quote="";
quote=animefact[Math.floor(Math.random()*animefact.length)];
return quote;



}
const superfact=[
   "Superman was supposed to be a bald character, obsessed with dominating the world.",
    "We know that the Hulk is green. But did you know that originally the Hulk was supposed to be grey in colour? Since green looked better in print, the colour of the Hulk was changed to green.",
    "Superman is a vegetarian. Before 2005 the writers of Superman did not think about this. Since Superman’s senses are sharper than a human’s, he is aware of when a life aura ends. So, he was made a vegetarian.",
    "Remember Michael Jackson? He came very close to owning Marvel Comics because he wanted to play the role of Spider-man. We would have had a break-dancing Spidey then!",
    "We have all been fascinated by Superman’s good looks and his dark hair. But Superman was supposed to be a bald character, obsessed with dominating the world.",
    "Captain America’s Shield beats up villains and provides justice. However, this round shaped shield was originally supposed to be heraldic-shaped. Since this was in use by a patriotic character of a rival comic, Captain America’s shield was made round.",
    "What if your favourite X-men character, Wolverine was to be named after a rodent? Yes, Wolverine was originally the Badger who was supposed to battle with the Hulk.",
    "The 2009 Amazing Spider-man comic has Spidey meet President Barrack Obama, and they even share a fist bump.",
    "Who is Batman’s favourite enemy? Yes, the Joker. The Joker was supposed to die just after the first Batman series. But writers saw potential in the villain and brought him back to mess around with Batman.",
    "Wonder Woman was made out of clay by her mother and was brought to life by the Greek Gods.",
    "In 1989, Marvel comics introduced a superhero whose only superpower was that he couldn’t die, Mr. Immortal. He tried killing himself, but was unsuccessful every time."


]




export function Superherofacts(){
let quote="";
quote=superfact[Math.floor(Math.random()*superfact.length)];
return quote;



}