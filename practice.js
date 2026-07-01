import { Shoe } from './shoe.js';
import { Rules } from './rules.js';
import { CardCounter } from './counter.js';

export class PracticeApp {
    constructor() {
        // 1. Initialize the Core Engine Components
        this.shoe = new Shoe(6, 0.75);
        this.counter = new CardCounter();
        
        // 2. Game State Variables
        this.playerHand = [];
        this.dealerHand = [];
        
        // 3. Connect to the DOM (HTML elements)
        this.dealerCardsDiv = document.getElementById('dealer-cards');
        this.playerCardsDiv = document.getElementById('player-cards');
        this.playerTotalSpan = document.getElementById('player-total');
        this.dealBtn = document.getElementById('deal-btn');
        this.hitBtn = document.getElementById('hit-btn');
        this.standBtn = document.getElementById('stand-btn');

        // 4. Setup Button Clicks
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Arrow functions `() =>` preserve the 'this' context of our class
        this.dealBtn.addEventListener('click', () => this.startRound());
        this.hitBtn.addEventListener('click', () => this.hit());
        this.standBtn.addEventListener('click', () => this.stand());
    }

    startRound() {
        console.log("Deal button clicked! Ready to distribute cards.");
        // We will build the dealing sequence here next
    }

    hit() {
        console.log("Player requests another card.");
    }

    stand() {
        console.log("Player stands. Dealer's turn.");
    }
}