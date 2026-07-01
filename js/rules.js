export class Rules {
    
    static calculateHandValue(hand) {

        let total = 0;
        let aces = 0;

        // basic value logic
        for (let card of hand) {
            total += card.value;

            if (card.rank === 'A') {
                aces += 1;
            }
        }

        // ace logic 
        while (total > 21 && aces > 0) {
            total -= 10;
            aces -= 1;
        }

        return total;
    }

    static isBlackjack(hand) {
        if (hand.length != 2) {
            return false;
        }

        if (this.calculateHandValue(hand) != 21) {
            return false;
        }

        return true;
    }

    static isBust(hand) {
        if (this.calculateHandValue(hand) > 21) {
            return true;
        } else {
            return false;
        }
    }
}