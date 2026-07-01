export class Shoe {
    constructor(numDecks, penetration) { // change later for double deck and user chose penetration
        this.numDecks = numDecks; 
        this.penetration = penetration;
        this.cards = []; // empty array for cards to go in
        this.stopPoint = 0; // we will calculate this

        this.buildShoe();
    }

    buildShoe() {
        const SUITS = ['S', 'H', 'C', 'D']; //spades, hearts, clubs, diamonds
        const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const VALUES =
            {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
            'J': 10, 'Q': 10, 'K': 10, 'A': 11 
            }; // aces default to 11, rules.js determines the soft 1/11

        this.cards = [];

        for (let i = 0; i < this.numDecks; i++) { // for each deck
            for (let suit of SUITS) { // for each suit
                for (let rank of RANKS) { // for each rank
                    this.cards.push({ // a card is pushed onto the cards array with a 
                        suit: suit,
                        rank: rank,
                        value: VALUES[rank]
                    });
                }
            }
        }
        
        let totalCards = this.numDecks * 52;
        let penetrationPercent = 1 - this.penetration;
        this.stopPoint = Math.floor(totalCards * penetrationPercent);
    }

    shuffle() {
        // Fisher-Yates shuffle algorithm
           
        // Loop backwards through the array
        for (let i = this.cards.length - 1; i > 0; i--) {
            // Pick a random index from 0 to i (inclusive)
            const j = Math.floor(Math.random() * (i + 1));
            
            // Swap elements at indices i and j
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw() {
        if (this.cards.length === 0) {
            console.error("No cards in deck.");
            return null;
        }

        return this.cards.pop(); // take top card off deck
    }

    needsShuffle() {
        return this.cards.length <= this.stopPoint;
    }
}

