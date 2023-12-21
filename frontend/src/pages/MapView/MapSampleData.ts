const coordinates: number[][] = [
    [37.2296, -80.4139], // Virginia Tech Drillfield
    [37.2299, -80.4201], // Lane Stadium/Worsham Field
    [37.2290, -80.4171], // Hokie Stone Sign
    [37.2326, -80.4170], // Downtown Blacksburg
    [37.2315, -80.4182], // Alexander Black House
    [37.2337, -80.4213], // Rising Silo Brewery
    [37.2285, -80.4234], // Huckleberry Trail (Toms Creek Rd access)
    [37.2252, -80.4234], // Pandapas Pond
    [37.2107, -80.4143], // Mountain Lake Biological Station
    [37.2412, -80.4312], // Virginia Tech Airport
    [37.2343, -80.4277], // Lyric Theatre
    [37.2231, -80.4107], // Heritage Park
    [37.2294, -80.4177], // Moss Arts Center
    [37.2291, -80.4185], // Burruss Hall
    [37.2331, -80.4163], // The Cellar Restaurant
    [37.2312, -80.4163], // Top of the Stairs (TOTS)
    [37.2286, -80.4198], // Blacksburg Transit Station
    [37.2324, -80.4242], // Squires Student Center
    [37.2376, -80.4201], // Smithfield Plantation
    [37.2362, -80.4248], // Alumni Mall
    [37.2314, -80.4131], // Moss Arts Center Parking Garage
    [37.2273, -80.4209], // The Lyric Theatre Parking Lot
    [37.2304, -80.4162], // Graduate Life Center at Donaldson Brown
    [37.2319, -80.4180], // Henderson Lawn
    [37.2314, -80.4218], // Cabo Fish Taco
    [37.2251, -80.4193], // Torgersen Hall
    [37.2354, -80.4195], // Cowgill Hall
    [37.2289, -80.4196], // Dietrick Hall
    [37.2253, -80.4210], // Goodwin Hall
    [37.2294, -80.4215], // Newman Library
    [37.2317, -80.4194], // Hahn Horticulture Garden
    [37.2347, -80.4166], // Warm Hearth Village
    [37.2320, -80.4186], // College Ave & Main St intersection
    [37.2405, -80.4211], // Stadium Woods (Behind Lane Stadium)
];

const emojis: string[] = [
    '🎉', '🎊', '🥳', '🍾', '🎈', '🎶', '🎵', '🍸',
    '🍹', '🍷', '🍻', '🥂', '🍺', '🍕', '🍔', '🌭',
    '🍟', '🍿', '🥨', '🍩', '🍦', '🎬', '🎤', '🎧',
    '🎸', '🎺', '🎻', '🥁', '🎮', '🕺', '💃', '🚀'
];

const eventTitles: string[] = [
    "Karaoke Night!",
    "Happy Hours starting from 6pm",
    "LIT Rager!",
    "Friday Night Party",
    "Playboi Carti Listening Event",
    "90's Dance Party",
    "Salsa Night",
    "Live Jazz Session",
    "Paint and Sip Night",
    "Trivia Night",
    "Acoustic Jam Session",
    "Board Games Bonanza",
    "Outdoor Movie Night",
    "Food Truck Fiesta",
    "DJ Battle Royale",
    "Retro Gaming Night",
    "Craft Beer Tasting",
    "Masquerade Ball",
    "Open Mic Night",
    "Yoga Under the Stars",
    "Bollywood Dance Workshop",
    "Stand-up Comedy Show",
    "Magic and Illusion Night",
    "Hawaiian Luau",
    "Mystery Dinner Theater",
    "Art Exhibition Opening",
    "Cooking Masterclass",
    "Fashion Runway Event",
    "Cocktail Mixology Class",
    "Fitness Bootcamp",
    "Poker Tournament",
    "Tech Meetup and Networking"
];

const eventDescriptions: string[] = [
    "Sing your heart out with friends at our Karaoke Night!",
    "Unwind with discounted drinks starting from 6pm!",
    "Get ready for an epic, unforgettable party!",
    "Start your weekend right at our Friday Night Party!",
    "Join us for an exclusive Playboi Carti listening event!",
    "Step back in time and dance to your favorite 90's tunes!",
    "Spice up your evening with some hot salsa beats!",
    "Relax and enjoy live jazz in a cozy atmosphere!",
    "Discover your inner artist with a paint and sip night!",
    "Test your knowledge at our fun-filled trivia night!",
    "Chill vibes and acoustic melodies await you!",
    "Bring your competitive spirit to our board games bonanza!",
    "Watch a blockbuster under the stars with popcorn!",
    "Experience a variety of delicious food from food trucks!",
    "Dance the night away at our DJ battle!",
    "Travel back to your favorite retro games era!",
    "Explore a diverse range of craft beers!",
    "Elegance meets mystery at our masquerade ball!",
    "Showcase your talent or enjoy diverse performances!",
    "Relax and rejuvenate with yoga under the stars!",
    "Learn some groovy Bollywood dance moves!",
    "Get ready to laugh out loud at our comedy show!",
    "Prepare to be amazed by magic and illusions!",
    "Escape to the tropics at our Hawaiian Luau!",
    "Solve a mystery while enjoying a dinner theater!",
    "Experience an inspiring art exhibition opening!",
    "Master the art of cooking with our chefs!",
    "Witness the latest in fashion at our runway event!",
    "Learn to mix the perfect cocktail with our experts!",
    "Get fit and motivated at our intense bootcamp!",
    "Test your skills and luck at our poker tournament!",
    "Connect with tech enthusiasts at our meetup!"
];

const eventDates: Date[][] = [
    [
        new Date('2023-12-12T20:00:00'), // December 12, 8pm (Start time)
        new Date('2023-12-13T02:00:00') // December 13, 2am (End time)
    ],
    [
        new Date('2023-01-15T18:00:00'), // January 15, 6pm (Start time)
        new Date('2023-01-15T22:00:00') // January 15, 10pm (End time)
    ],
    [
        new Date('2023-02-20T21:00:00'), // February 20, 9pm (Start time)
        new Date('2023-02-21T01:00:00') // February 21, 1am (End time)
    ],
    [
        new Date('2023-03-05T19:00:00'), // March 5, 7pm (Start time)
        new Date('2023-03-05T23:00:00') // March 5, 11pm (End time)
    ],
    [
        new Date('2023-04-08T20:00:00'), // April 8, 8pm (Start time)
        new Date('2023-04-09T00:00:00') // April 9, 12am (End time)
    ],
    [
        new Date('2023-05-18T19:00:00'), // May 18, 7pm (Start time)
        new Date('2023-05-18T22:00:00') // May 18, 10pm (End time)
    ],
    [
        new Date('2023-06-25T18:30:00'), // June 25, 6:30pm (Start time)
        new Date('2023-06-25T21:30:00') // June 25, 9:30pm (End time)
    ],
    [
        new Date('2023-07-30T20:30:00'), // July 30, 8:30pm (Start time)
        new Date('2023-07-31T00:30:00') // July 31, 12:30am (End time)
    ],
    [
        new Date('2023-08-04T19:00:00'), // August 4, 7pm (Start time)
        new Date('2023-08-04T23:00:00') // August 4, 11pm (End time)
    ],
    [
        new Date('2023-09-22T18:00:00'), // September 22, 6pm (Start time)
        new Date('2023-09-22T22:00:00') // September 22, 10pm (End time)
    ],
    [
        new Date('2023-10-14T20:00:00'), // October 14, 8pm (Start time)
        new Date('2023-10-15T00:00:00') // October 15, 12am (End time)
    ],
    [
        new Date('2023-11-09T19:30:00'), // November 9, 7:30pm (Start time)
        new Date('2023-11-09T23:30:00') // November 9, 11:30pm (End time)
    ],
    [
        new Date('2023-12-17T20:00:00'), // December 17, 8pm (Start time)
        new Date('2023-12-18T00:00:00') // December 18, 12am (End time)
    ],
    [
        new Date('2023-01-25T19:00:00'), // January 25, 7pm (Start time)
        new Date('2023-01-25T22:00:00') // January 25, 10pm (End time)
    ],
    [
        new Date('2023-02-28T21:00:00'), // February 28, 9pm (Start time)
        new Date('2023-03-01T01:00:00') // March 1, 1am (End time)
    ],
    [
        new Date('2023-03-12T19:30:00'), // March 12, 7:30pm (Start time)
        new Date('2023-03-12T23:30:00') // March 12, 11:30pm (End time)
    ],
    [
        new Date('2023-04-22T20:00:00'), // April 22, 8pm (Start time)
        new Date('2023-04-23T00:00:00') // April 23, 12am (End time)
    ],
    [
        new Date('2023-05-06T18:30:00'), // May 6, 6:30pm (Start time)
        new Date('2023-05-06T22:30:00') // May 6, 10:30pm (End time)
    ],
    [
        new Date('2023-06-18T20:00:00'), // June 18, 8pm (Start time)
        new Date('2023-06-18T23:00:00') // June 18, 11pm (End time)
    ],
    [
        new Date('2023-07-24T19:00:00'), // July 24, 7pm (Start time)
        new Date('2023-07-24T22:00:00') // July 24, 10pm (End time)
    ],
    [
        new Date('2023-08-11T20:00:00'), // August 11, 8pm (Start time)
        new Date('2023-08-12T00:00:00') // August 12, 12am (End time)
    ],
    [
        new Date('2023-09-30T18:30:00'), // September 30, 6:30pm (Start time)
        new Date('2023-09-30T22:30:00') // September 30, 10:30pm (End time)
    ],
    [
        new Date('2023-10-08T21:00:00'), // October 8, 9pm (Start time)
        new Date('2023-10-09T01:00:00') // October 9, 1am (End time)
    ],
    [
        new Date('2023-11-19T20:00:00'), // November 19, 8pm (Start time)
        new Date('2023-11-20T00:00:00')
    ],
    [
        new Date('2023-11-09T19:30:00'), // November 9, 7:30pm (Start time)
        new Date('2023-11-09T23:30:00') // November 9, 11:30pm (End time)
    ],
    [
        new Date('2023-12-17T20:00:00'), // December 17, 8pm (Start time)
        new Date('2023-12-18T00:00:00') // December 18, 12am (End time)
    ],
    [
        new Date('2023-01-25T19:00:00'), // January 25, 7pm (Start time)
        new Date('2023-01-25T22:00:00') // January 25, 10pm (End time)
    ],
    [
        new Date('2023-02-28T21:00:00'), // February 28, 9pm (Start time)
        new Date('2023-03-01T01:00:00') // March 1, 1am (End time)
    ],
    [
        new Date('2023-03-12T19:30:00'), // March 12, 7:30pm (Start time)
        new Date('2023-03-12T23:30:00') // March 12, 11:30pm (End time)
    ],
    [
        new Date('2023-04-22T20:00:00'), // April 22, 8pm (Start time)
        new Date('2023-04-23T00:00:00') // April 23, 12am (End time)
    ],
    [
        new Date('2023-05-06T18:30:00'), // May 6, 6:30pm (Start time)
        new Date('2023-05-06T22:30:00') // May 6, 10:30pm (End time)
    ],
    [
        new Date('2023-06-18T20:00:00'), // June 18, 8pm (Start time)
        new Date('2023-06-18T23:00:00') // June 18, 11pm (End time)
    ]
]
const hostUsernames: string[] = [
    'TheTwistBar',
    'JohnsHouseParties',
    'EventGuruCentral',
    'PartyProVenue',
    'NightlifeNest',
    'SaraSocialite',
    'HousePartyHaven',
    'EventPlanningPros',
    'NightOwlSpot',
    'TheEntertainmentHub',
    'PartyPlannerPete',
    'LiveMusicLounge',
    'DanceFloorDarling',
    'EventFanaticSpot',
    'TheHostWithMost',
    'FestivalFanatics',
    'NightlifeNinjaVenue',
    'EventExpertElla',
    'PartyPlannerPat',
    'GatherGuruSpot',
    'EventManiaVenue',
    'SoireeSpecials',
    'AfterPartyAce',
    'CelebrateWithUs',
    'EventEnthusiastSpot',
    'NightlifeNavigator',
    'BashBossVenue',
    'HostingHeroes',
    'NightlifeNomad',
    'EventEmpireVenue',
    'PartyProphetVenue',
    'EventPioneer',
    'NightOutNexus'
];

module.exports = {
    coordinates, emojis, eventTitles, eventDescriptions, eventDates, hostUsernames
}