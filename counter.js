export class CardCounter {
    constructor() {
        this.runningCount = 0;
    }

    countCard(card) {
        const rank = card.rank;
        
        if (['2', '3', '4', '5', '6'].includes(rank)) {
            this.runningCount += 1;
        } else if (['10', 'J', 'Q', 'K', 'A'].includes(rank)) {
            this.runningCount -= 1;
        }
        // 7, 8, and 9 are neutral (0), so we do nothing.
    }

    getTrueCount(cardsRemaining) {
        const decksRemaining = cardsRemaining / 52;

        if (decksRemaining === 0) {
            return this.runningCount;
        }

        return this.runningCount / decksRemaining;
    }

    reset() {
        this.runningCount = 0;
    }
}