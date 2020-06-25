const DCQeasy=[
    {question:"What is alterego of Batman",
    options:["Clark kent","Bruce Wayne","Diana prince","Thomas wayne"],
    answer:"Bruce Wayne",
    id:121
    },
    {question:"What is Earth Name of Superman",
    options:["Clark kent","Bruce Wayne","Diana prince","Thomas wayne"],
    answer:"Clark kent",
    id:122},
    {question:"Who has the invisible jet?",
    options:["Clark kent","Bruce Wayne","Diana prince","Thomas wayne"],
    answer:"Diana prince",
    id:123},
    {question:"Who is speedster died during crisis on infinite earths",
    options:["Bart Allen","Wally West","Barry Allen","Jay Garrick"],
    answer:"Barry Allen",
    id:124},
    {question:"What is alterego of Aquaman",
    options:["Clark kent","Bruce Wayne","Diana prince","Arthur Curry"],
    answer:"Arthur Curry",
    id:125},
    {question:"Who is father of Batman",
    options:["Clark kent","Bruce Wayne","Thomas wayne","Arthur Curry"],
    answer:"Thomas wayne",
    id:126

    },
    {question:"Which Robin becomes Nightwing",
    options:["Dick grayson","Jason todd","Tim drake","Conner kent"],
    answer:"Dick grayson",
    id:127},
    {question:"What is alterego of Cyborg",
    options:["Victor Stone","Jason todd","Tim drake","Conner kent"],
    answer:"Victor Stone",
    id:128},
    {question:"What is earth name of supergirl",
    options:["Kara Danvers","Carol danvers","Alex danvers","Barbara gordon"],
    answer:"Kara Danvers",
    id:129
    },
    {question:"Who is youngest robin",
    options:["Dick grayson","Jason todd","Tim drake","Damian wayne"],
    answer:"Damian wayne",
    id:130
    }
    ];
const DCQmoderate=[
        {question:"What is alterego of Superboy",
        options:["Clark kent","conner kent","clark junior","Thomas wayne"],
        answer:"conner kent",
        id:151
        },
        {question:"Who is also known as Hell Blazer",
        options:["Lucifer","John Constantine","Zatanna Zatara","Mazekin"],
        answer:"John Constantine",
        id:152},
        {question:"What is alterego of Swamp Thing",
        options:["Alex Danvers","Abby Arcane","Alec Holland","kara Danvers"],
        answer:"Alec Holland",
        id:153},
        {question:"What is alterego of Star Girl",
        options:["Courtney Whitmore","yolanda","violet","Donna Troy"],
        answer:"Courtney Whitmore",
        id:154},
        {question:"What is Elder Brother of Anti-Monitor",
        options:["Monitor","Perpetua","World Forger","Darkseid"],
        answer:"World Forger",
        id:155},
        {question:"Who is son of Darkseid",
        options:["scott free","orion","grail","stepphen wolf"],
        answer:"orion",
        id:156
    
        },
        {question:"Who is daughter of the Demon and a member of Teen Titans?",
        options:["Raven","star fire","wonder girl","bumble bee"],
        answer:"Raven",
        id:157},
        {question:"Where is the head quaters of league of Assassins located?",
        options:["Mount Rushmore","Nanda Parbat","Manhattan","New york"],
        answer:"Nanda Parbat",
        id:158},
        {question:"Who is head of League of Assassins?",
        options:["Talia Al ghul","Lady Shiva","Damian Wayne","Ra's Al Ghul"],
        answer:"Ra's Al Ghul",
        id:159
        },
        {question:"What is alter ego of mister miracle",
        options:["scott free","orion","micheal keaton","Jimmy olsen"],
        answer:"scott free",
        id:160
        }
        ];
const DCQhard=[
            {question:"What is alterego of earth-9 dark knight ?",
            options:["Bruce wayne","selina kyle","Bryce wayne","Thomas wayne"],
            answer:"Bryce wayne",
            id:181
            },
            {question:"Who is the mother of the Monitor?",
            options:["perpetua","allwidow","grail","Mazekin"],
            answer:"perpetua",
            id:182},
            {question:"Who is speedster batman from dark multiverse's ?",
            options:["deathracer","Godspeed","grimripper","Reddeath"],
            answer:"Reddeath",
            id:183},
            {question:"What is alterego of Wild Cat?",
            options:["Courtney Whitmore","Ted Grant","Kent Nelson","Donna Troy"],
            answer:"Ted Grant",
            id:184},
            {question:"Who is daughter of Darkseid?",
            options:["Reddaughter","BigBarda","Grail","Allwiow"],
            answer:"Grail",
            id:185},
            {question:"What is the emotion that powers blue lantern rings?",
            options:["Will","Compassion","Hope","Greed"],
            answer:"Hope",
            id:186
        
            },
            {question:"Who is the First Human Green Lantern?",
            options:["Hall Jordan","John Stewart","Kyle Reyner","Alan Scott"],
            answer:"Alan Scott",
            id:187},
            {question:"What is alterego of DC's Punchline(Anti-Harley Quinn)?",
            options:["Alex","Alexis","Alec","Red Tool"],
            answer:"Alexis",
            id:188},
            {question:"Who is brother of Martian Manhunter?",
            options:["Malaque'k","Johnaqa'k","Malafa'k","megafa'k"],
            answer:"Malafa'k",
            id:189
            },
            {question:"Who is the only JL member escaped from Darkseid's omega beam?",
            options:["Batman","Superman","Wonder Woman","Flash"],
            answer:"Batman",
            id:190
            }
            ];
        

export function getDCquestions(difficulty){
const Questions=[];
const indices=[0,1,2,3,4,5,6,7,8,9];
var ctr = indices.length, temp, index;


    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = indices[ctr];
        indices[ctr] = indices[index];
        indices[index] = temp;
    }
    
if (difficulty=="easy"){
    for(let j=0;j<5;j++){
        Questions.push(DCQeasy[indices[j]]);
    }
}
else if(difficulty=="moderate"){
    for(let j=0;j<5;j++){
        Questions.push(DCQmoderate[indices[j]]);
    }
}
else if(difficulty=="hard"){
    for(let j=0;j<5;j++){
        Questions.push(DCQhard[indices[j]]);
    }
}

return(Questions);

}

const ANIMEQeasy=[
        {question:"What is alterego of Nine Tails Fox",
        options:["Red Demon Fox","Kurama","Shukaku","Matatabi"],
        answer:"Kurama",
        id:321
        },
        {question:"In Fairy Tail, Natsu is a?",
        options:["Fire Wizard","Demon Slayer","Fire Dragon Slayer","Celeistial Wizard"],
        answer:"Fire Dragon Slayer",
        id:322},
        {question:"What is name of Eren's Titan Form",
        options:["Attack Titan","Founder Titan","Female Titan","Beast Titan"],
        answer:"Attack Titan",
        id:323},
        {question:"What is the original name of KIRA",
        options:["LLawliet","Light Yagami","Teru Mikami","Ryuk"],
        answer:"Light Yagami",
        id:324},
        {question:"Who is father of Goten",
        options:["Piccolo","Bruce Wayne","Vegeta","Goku"],
        answer:"Goku",
        id:325}
        ];

        const ANIMEQmoderate=[
        {question:"In Naruto, how many ninja from Konoha went on to the third stage(after the preliminairies) of the Chunin Exams?",
        options:["Six","Five","Seven","Four"],
        answer:"Five",
        id:351
        },
        {question:"In Fairy Tail, who is the first guild master of Fairy Tail?",
        options:["Gildarts","Makarov Dreyar","Jose Porla","Mavis Vermillion"],
        answer:"Mavis Vermillion",
        id:352},
        {question:"In Demon Slayer, what is the name of Flame Hashira ",
        options:["Sakonji Urokodaki","Giyu Tomioka","Kyojuro Rengoku","Shinobu Kocho"],
        answer:"Kyojuro Rengoku",
        id:353},
        {question:"In Pokemon, which Pokemon is attached to Slowbro?",
        options:["Skarmory","Cloyster","Mantine","Shellder"],
        answer:"Shellder",
        id:354},
        {question:"In My Hero Academia, what is the name of Sir Nighteye's protege (Hint: Quirk-Permeation)",
        options:["Mirio Togata","Mei Hatsume","Tamaki Amajiki","Nejire Hado"],
        answer:"Mirio Togata",
        id:355}
        ];

        const ANIMEQhard=[
        {question:"In Naruto, what is the forbidden technique used by Rock Lee that he used on Dosu and Gaara?",
        options:["Lotus of Destruction","Shadow Lotus","Primary Lotus","Fiery Lotus"],
        answer:"Primary Lotus",
        id:381
        },
        {question:"In Fairy Tail, what did Natsu say upon seeing Lisanna in Edolas?",
        options:["'It can't be you.'","'Hi, honey. I'm home.'","'How? You're dead!'","'I found you.'"],
        answer:"'I found you.'",
        id:382},
        {question:"In Attack on Titan, Eren’s nickname in the 104th Training Squad is what?",
        options:[" Captain Suicide","Rage Machine","Captain Rage","Suicidal Bastard"],
        answer:"Suicidal Bastard",
        id:383},
        {question:"In Death Note, what happens if you accidentally misspel victim's name four times? ",
        options:["You Die","Nothing","They become immune to Death Note","The Death Note losses its power"],
        answer:"They become immune to Death Note",
        id:384},
        {question:"In My Hero Academia, what is the name of Sir Nighteye's protege (Hint: Quirk-Permeation)",
        options:["Mirio Togata","Mei Hatsume","Tamaki Amajiki","Nejire Hado"],
        answer:"Mirio Togata",
        id:385}
        ];

export function getANIMEquestions(difficulty){
    const Questions=[];
const indices=[0,1,2,3,4];
var ctr = indices.length, temp, index;


    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = indices[ctr];
        indices[ctr] = indices[index];
        indices[index] = temp;
    }
    
if (difficulty=="easy"){
    for(let j=0;j<5;j++){
        Questions.push(ANIMEQeasy[indices[j]]);
        console.log(ANIMEQeasy[indices[j]].question);
    }
}
else if(difficulty=="moderate"){
    for(let j=0;j<5;j++){
        Questions.push(ANIMEQmoderate[indices[j]]);
    }
}
else if(difficulty=="hard"){
    for(let j=0;j<5;j++){
        Questions.push(ANIMEQhard[indices[j]]);
    }
}

return(Questions);

}
const MARVELQeasy=[
    {question:"What is alterego of ironman",
    options:["Tony Stark","Steve Rodgers","Robert Downey jr","Pepper potts"],
    answer:"Tony Stark",
    id:221
    },
    {question:"What is alterego of Black Panther",
    options:["T'chaka","T'chala","Shuri","Felicia"],
    answer:"T'chala",
    id:222},
    {question:"What is element used in Captain America's Shield",
    options:["Adamantium","Vibranium","element X","Kryptonite"],
    answer:"Vibranium",
    id:223},
    {question:"What is alterego of Spiderman",
    options:["Tony Stark","Steve Rodgers","Robert Downey jr","Peter Parker"],
    answer:"Peter Parker",
    id:224},
    {question:"What is alterego of Venom",
    options:["Tony Stark","Tom Hardy","Eddie Brock","Peter Parker"],
    answer:"Eddie Brock",
    id:225},
    {question:"Who is father of Thor",
    options:["Odin","Loki","Destroyer","Heimdall"],
    answer:"Odin",
    id:226

    },
    {question:"What is name of Thor's Hammer",
    options:["Mjolnir","Myolnir","Miolnir","Mia mia"],
    answer:"Mjolnir",
    id:227},
    {question:"What is alterego of Hawkeye",
    options:["Clint Barton","Tom Hardy","Sam Wilson","Wilson fisk"],
    answer:"Clint Barton",
    id:228},
    {question:"What is alterego of Hulk",
    options:["Bruce wayne","Carol danvers","Bruce Banner","Hulk Buster"],
    answer:"Bruce Banner",
    id:229
    },
    {question:"Which radiation caused te creation of Hulk",
    options:["cosmic","Gamma","InfraRed","Alpha"],
    answer:"Gamma",
    id:230
    }
    ];
const MARVELQmoderate=[
        {question:"What is alterego of Scarlet Witch",
        options:["Wanda Maximoff","vanda maximaff","wanda maxximoff","Wanda maximaff"],
        answer:"Wanda Maximoff",
        id:251
        },
        {question:"What is Father of Iron Man?",
        options:["Howard Duck","Howard Stark","Henry Stark","Morgan Stark"],
        answer:"Howard Stark",
        id:252},
        {question:"What is alterego of Human Torch",
        options:["Johnny Storm","Albert Storm","Harry Storm","Sue Storm"],
        answer:"Johnny Storm",
        id:253},
        {question:"What is alterego of Mr.Fantastic?",
        options:["Reed Richards","Reed Hollands","Johnny richards","Rory Stark"],
        answer:"Reed Richards",
        id:254},
        {question:"What is Color of Time Stone",
        options:["Orange","Red","Emerald","Yellow"],
        answer:"Emerald",
        id:255},
        {question:"Who is son of Thanos",
        options:["Thane","Tanatos","deathracer","Deadpool"],
        answer:"Thane",
        id:256
    
        },
        {question:"What is alter ego of the Lizard",
        options:["Dr.summers","Dr.connors","Dr.richards","Dr.smith"],
        answer:"Dr.connors",
        id:257},
        {question:"Where is the head quaters of Avengers located?",
        options:["Mount Rushmore","Nanda Parbat","Manhattan","New york"],
        answer:"New york",
        id:258},
        {question:"How many Legendary rings that mandarin possess?",
        options:["Six","Eight","Ten","Seven"],
        answer:"Ten",
        id:259
        },
        {question:"What is name of first AI in iron man's suit?",
        options:["Friday","orion","Jarvis","Aida"],
        answer:"Jarvis",
        id:260
        }
        ];
const MARVELQhard=[
            {question:"What is alterego of Hob Globin ?",
            options:["Roderick Kingsley","Norman Osborn","Harry osborn","Flash Thompson"],
            answer:"Roderick Kingsley",
            id:281
            },
            {question:"Who is the Gaurdian of Web of Destiny?",
            options:["Madame Xunadu","Madame web","Ancient one","Heimdall"],
            answer:"Madame web",
            id:282},
            {question:"Who is the Unstoppable mutant ?",
            options:["Wolverine","Quicksilver","Jaggernaut","Deadpool"],
            answer:"Jaggernaut",
            id:283},
            {question:"What is alterego of Black Cat?",
            options:["Felicia Hardy","Mary jane","Gwen Stacy","Selina kyle"],
            answer:"Felicia Hardy",
            id:284},
            {question:"Who is archnemesis of Hulk?",
            options:["Red Hulk","Armageddon","red she-hulk","Allwiow"],
            answer:"Armageddon",
            id:285},
            {question:"What is the alterego of Mr.Sinister?",
            options:["Remy Etienne LeBeau","Remy Emienne LeBeau","sam Etienne LeBeau","Ramy LeBeau"],
            answer:"Remy Etienne LeBeau",
            id:286
        
            },
            {question:"Who cursed Deadpool with immortality?",
            options:["Thanos","Wolverine","Death","weapon x"],
            answer:"Thanos",
            id:287},
            {question:"What is alterego of DareDevil?",
            options:["Matt Murdack","Matt Murdock","Luke cage","Matthew Richards"],
            answer:"Matt Murdock",
            id:288},
            {question:"What is alterego of doctor strange?",
            options:["Stephen Strange","Rick Strange","Steaven Strange","Richard Strange"],
            answer:"Stephen Strange",
            id:289
            },
            {question:"Who is Arch-nemesis of Daredevil?",
            options:["Wilson Fisk","Punisher","Luke cage","The Beyonder"],
            answer:"Wilson Fisk",
            id:290
            }
            ];
        

export function getMARVELquestions(difficulty){
const Questions=[];
const indices=[0,1,2,3,4,5,6,7,8,9];
var ctr = indices.length, temp, index;


    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = indices[ctr];
        indices[ctr] = indices[index];
        indices[index] = temp;
    }
    
if (difficulty=="easy"){
    for(let j=0;j<5;j++){
        Questions.push(MARVELQeasy[indices[j]]);
    }
}
else if(difficulty=="moderate"){
    for(let j=0;j<5;j++){
        Questions.push(MARVELQmoderate[indices[j]]);
    }
}
else if(difficulty=="hard"){
    for(let j=0;j<5;j++){
        Questions.push(MARVELQhard[indices[j]]);
    }
}

return(Questions);

}
const AOTQeasy=[
    {question:"What is Family name of Levi",
    options:["Ackerman","Akermaan","Ackarmon","Ackerman"],
    answer:"Ackerman",
    id:421
    },
    {question:"Along with Eren, who was shot and tranquilized in the back of a wagon?",
    options:["Mikasa","Historia","Shasha","Armin"],
    answer:"Historia",
    id:422},
    {question:"Who was the only Reiss family member to visit Historia on the farm?",
    options:["Uri","Drick","Florian","Frieda"],
    answer:"Frieda",
    id:423},
    {question:"Who is the shortest soilder of 104th cadet",
    options:["Eren","Mikasa","Armin","Historia"],
    answer:"Historia",
    id:424},
    {question:"What is name of the civil war within the empire?",
    options:["War of Giants","Great Titan War","Black eldien","Great Eldien War"],
    answer:"Great Titan War",
    id:425},
    {question:"Who is responsible for maintaining order within the internment zones such as Liberio?",
    options:["Survey corps","Marley police","Marley public security","kingsgaurd"],
    answer:"Marley public security",
    id:426

    },
    {question:"Eren gained Hardening after consuming a bottle labelled?",
    options:["Hardening","Confidential","Deflection","Armor"],
    answer:"Armor",
    id:427},
    {question:"What is Eren's Titan Form called?",
    options:["Attack Titan","Armored Titan","Jaw Titan","Colossal Titan"],
    answer:"Attack Titan",
    id:428},
    {question:"Who is the slowest Titan",
    options:["Attack Titan","Armored Titan","Jaw Titan","Colossal Titan"],
    answer:"Colossal Titan",
    id:429
    },
    {question:"Which Titan has the hardest skin?",
    options:["Attack Titan","Armored Titan","Jaw Titan","Colossal Titan"],
    answer:"Armored Titan",
    id:430
    }
    ];
const AOTQmoderate=[
        {question:"Armin confiscated what from Marlo and Hitch?",
        options:["Food","Supplies","Rifles","Info"],
        answer:"Rifles",
        id:451
        },
        {question:"What is Symbol of Eldiens",
        options:["White band","Tattoos","Shorts","Gears"],
        answer:"White band",
        id:452},
        {question:"Who saved Hange from Cart titan",
        options:["Jean","Eren","Mikasa","Armin"],
        answer:"Jean",
        id:453},
        {question:"Who saved Mikasa from the Titans",
        options:["Attack Titan","Female titan","Armored Titan","Armin"],
        answer:"Attack Titan",
        id:454},
        {question:"Who is commander of survey corps?",
        options:["Erwin","levi","Armin","Mikasa"],
        answer:"Erwin",
        id:455},
        {question:"Who almost killed the beast titan?",
        options:["Mikasa","Levi","Erwin","Armin"],
        answer:"Levi",
        id:456
    
        },
        {question:"Who became the new colossal titan?",
        options:["Mikasa","Levi","Erwin","Armin"],
        answer:"Armin",
        id:457},
        {question:"Who became the new jaw titan?",
        options:["Mikasa","Levi","Ymir","Armin"],
        answer:"Ymir",
        id:458},
        {question:"Who is Scientist researching on Titans?",
        options:["Hange","Ymir","Erwin","Armin"],
        answer:"Hange",
        id:459
        },
        {question:"Who stopped Annie escape from the fight with Eren?",
        options:["Mikasa","Levi","Erwin","Armin"],
        answer:"Mikasa",
        id:460
        }
        ];
const AOTQhard=[
            {question:"What is the name of island in Attack on Titan?",
            options:["Ellis island","Paradis island","Funen island","Elldian island"],
            answer:"Paradis island",
            id:481
            },
            {question:"Who of the 104th Cadet Corps has been referred to as “Goddess”?",
            options:["Mikasa","Levi","Historia","Armin"],
            answer:"Historia",
            id:482},
            {question:"Which character has their ears turn red when they lie?",
            options:["Mikasa","Eren","Historia","Armin"],
            answer:"Eren",
            id:483},
            {question:"How many Titan Shifters are there in AOT?",
            options:["Six","Ten","Nine","Eleven"],
            answer:"Nine",
            id:484},
            {question:"Which Titan Shifter can maintain their titan form only for short period ?",
            options:["Attack","Armored","Colossal","Jaw"],
            answer:"Colossal",
            id:485},
            {question:"Who saved armin from Titan's mouth?",
            options:["Mikasa","Eren","Historia","Levi"],
            answer:"Eren",
            id:486
        
            },
            {question:"What is Annie’s last name?",
            options:["Reiss","Lonarld","Leonhart","Tierce"],
            answer:"Leonhart",
            id:487},
            {question:"What is life span of Titan shifters",
            options:["9 years","15 years","13 years","12 years"],
            answer:"13 years",
            id:488},
            {question:"Who did Ymir eat to return to her human form?",
            options:["Attack","Armored","Colossal","Jaw"],
            answer:"Jaw",
            id:489
            },
            {question:"Which gear is used in fight of retake maria",
            options:["Anti personnal uni-directional","3d manuer gear","Breach Cannons","Anti personnal omni-directional"],
            answer:"Anti personnal omni-directional",
            id:490
            }
            ];
        

export function getAOTquestions(difficulty){
const Questions=[];
const indices=[0,1,2,3,4,5,6,7,8,9];
var ctr = indices.length, temp, index;


    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = indices[ctr];
        indices[ctr] = indices[index];
        indices[index] = temp;
    }
    
if (difficulty=="easy"){
    for(let j=0;j<5;j++){
        Questions.push(AOTQeasy[indices[j]]);
    }
}
else if(difficulty=="moderate"){
    for(let j=0;j<5;j++){
        Questions.push(AOTQmoderate[indices[j]]);
    }
}
else if(difficulty=="hard"){
    for(let j=0;j<5;j++){
        Questions.push(AOTQhard[indices[j]]);
    }
}

return(Questions);

}
const NATQeasy=[
    {question:"What is alterego of Nine Tails Fox",
    options:["Red Demon Fox","Kurama","Shukaku","Matatabi"],
    answer:"Kurama",
    id:521
    },
    {question:"Whom did Naruto kiss first?",
    options:["Sasuke Uchiha","Hinata Hyuga","Fuka","Sakura Haruno"],
    answer:"Sasuke Uchiha",
    id:522},
    {question:"With whose fight did Naruto first use Nine tails Chakra?",
    options:["Sasuke","Neji","Haku","Gaara"],
    answer:"Haku",
    id:523},
    {question:"Who tricked Naruto into stealing a sacred scroll?",
    options:["Iruka","Mizuki","Sasuke","Zabuza"],
    answer:"Mizuki",
    id:524},
    {question:"What is another word for ninja?",
    options:["Genjutsu","Shinobi","Arigato","Chakra"],
    answer:"Shinobi",
    id:525},
    {question:"Which of the legendary sannin becomes the fifth Hokage?",
    options:["Jiraya","Tsunade","Orochimaru","Kakashi"],
    answer:"Tsunade",
    id:526

    },
    {question:"Who was the first ninja Sasuke Uchiha copied with the Sharingan?",
    options:["Rock Lee","Itachi Uchiha","Orochimaru","Naruto"],
    answer:"Rock Lee",
    id:527},
    {question:"Which famous clan was completely massacred?",
    options:["Uchiha","Hyuuga","Uzamaki","Nara"],
    answer:"Uchiha",
    id:528},
    {question:"What piece of jewelry do the Akatsuki wear?",
    options:["Earrings","Nose rings","Rings","Anklets"],
    answer:"Rings",
    id:529
    },
    {question:"What is the village where Naruto lives called?",
    options:["Sunagakure","Kyuubigakure","Uzamagakure","Konohagakure"],
    answer:"Konohagakure",
    id:530
    }
    ];
const NATQmoderate=[
        {question:"How many ninja from Konoha went on to the third stage(after the preliminairies) of the Chunin Exams?",
        options:["Six","Five","Seven","Four"],
        answer:"Five",
        id:551
        },
        {question:"What's the name of the leader of the toads?",
        options:["Wise Frog Master","Giant Toad King","Master Froggo","Great Toad Sage"],
        answer:"Great Toad Sage",
        id:552},
        {question:"How did Hidan (one of the Akatsuki member) die?",
        options:["He can't die","He was starved","He was trapped in Shadow Posession Jutsu while Ino and Choji killed him","His own god betrayed him"],
        answer:"He can't die",
        id:553},
        {question:"Who gave their life to save Gaara?",
        options:["Kankuro","Sasori","Chiyo","Fugi"],
        answer:"Chiyo",
        id:554},
        {question:"Who created the Akatsuki?",
        options:["Orochimar","Tobi","Itachi","Yahiko"],
        answer:"Yahiko",
        id:555},
        {question:"What is Minato's nickname?",
        options:["The Yellow Flash","The Red Flash","Flash Ninja","Flash of the Leaf"],
        answer:"The Yellow Flash",
        id:556
    
        },
        {question:"Which member joined team Taka/Hebi first?",
        options:["Karin","Jugo","Suigetsu","They all joined at the same time"],
        answer:"Suigetsu",
        id:557},
        {question:"What is Kakashi/Obito's Sharingan ability?",
        options:["Tsukuyomi","Amaterasu","Kotoamatsukami","Kamui"],
        answer:"Kamui",
        id:558},
        {question:"What was Zabuza's nickname?",
        options:["The demon of the hidden mist","The silent killer","The demonic killer","The monster of the mist"],
        answer:"The demon of the hidden mist",
        id:559
        },
        {question:"What is Tsunade's addiction?",
        options:["Men","Gambling","Work","Alcohol"],
        answer:"Gambling",
        id:560
        }
        ];
const NATQhard=[
            {question:"In Naruto, what is the forbidden technique used by Rock Lee that he used on Dosu and Gaara?",
        options:["Lotus of Destruction","Shadow Lotus","Primary Lotus","Fiery Lotus"],
        answer:"Primary Lotus",
        id:581
        },
            {question:"What does ANBU mean?",
            options:["Special Unit Forces and Recruits","Special Assassination and Tactical Squad","Undercover Ninjas: Black Operations","Hidden Agendas of Shinobi and Allied Tactics"],
            answer:"Special Assassination and Tactical Squad",
            id:582},
            {question:"How did Sakumo Hatake (Kakashi's father) die?",
            options:["He got killed on a mission","He was killed by Madara","He naturally died of old age","He committed suicide"],
            answer:"He committed suicide",
            id:583},
            {question:"Who were the first reincarnates of Indra and Ashura?",
            options:["Naruto and Sasuke","Madara and Hashirama","Sasuke and Itachi","Kakashi and Guy"],
            answer:"Madara and Hashirama",
            id:584},
            {question:"Who was the youngest Jonin?",
            options:["Kakashi","Itachi","Neji","Sakura"],
            answer:"Kakashi",
            id:585},
            {question:"What does Gaara's tattoo mean?",
            options:["Orphan","Monster","Love","Hate"],
            answer:"Love",
            id:586
        
            },
            {question:"What is Sasuke's team called?",
            options:["Tiki","Taka","Toka","Toku"],
            answer:"Taka",
            id:587},
            {question:"Which of these characters has Kurama's chakra?",
            options:["Menma","Guren","Sora","Haku"],
            answer:"Sora",
            id:588},
            {question:"Which of them is not a Kekkei Genkai?",
            options:["Particle style","Byakugan","Sharingan","Tenseigan"],
            answer:"Particle style",
            id:589
            },
            {question:"Who is not part of the Team Kurenai?",
            options:["Shino","Kiba","Hinata","Neji"],
            answer:"Neji",
            id:590
            }
            ];
        

export function getNATquestions(difficulty){
const Questions=[];
const indices=[0,1,2,3,4,5,6,7,8,9];
var ctr = indices.length, temp, index;


    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = indices[ctr];
        indices[ctr] = indices[index];
        indices[index] = temp;
    }
    
if (difficulty=="easy"){
    for(let j=0;j<5;j++){
        Questions.push(NATQeasy[indices[j]]);
    }
}
else if(difficulty=="moderate"){
    for(let j=0;j<5;j++){
        Questions.push(NATQmoderate[indices[j]]);
    }
}
else if(difficulty=="hard"){
    for(let j=0;j<5;j++){
        Questions.push(NATQhard[indices[j]]);
    }
}

return(Questions);

}