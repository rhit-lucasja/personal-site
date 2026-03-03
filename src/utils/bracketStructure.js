// returns the subsequent game to that with given gameID
//   (i.e. the game in which the winner of gameID will play)
const getNextGame = (gameID) => {
    // extract numerical id for the given game
    const num = parseInt(gameID.replace('game', ''));

    // elite eight -> final four
    if (num === 15) return 'game61';
    if (num === 30) return 'game62';
    if (num === 45) return 'game63';
    if (num === 60) return 'game61';

    // final four -> championship
    if (num === 61 || num === 62) return 'game63';

    // else find offset within region
    let offset;
    let adjustment;
    if (num <= 14) {
        // top-left
        offset = num;
        adjustment = 0;
    } else if (num <= 29) {
        // top-right
        offset = num - 15;
        adjustment = 15;
    } else if (num <= 44) {
        // bottom-right
        offset = num - 30;
        adjustment = 30;
    } else if (num <= 59) {
        // bottom-left
        offset = num - 45;
        adjustment = 45;
    }
    // then find next game within regular region progression
    if (offset <= 8) return `game${String(Math.ceil(offset / 2) + 8 + adjustment).padStart(2, '0')}`;
    if (offset <= 12) return `game${String(Math.ceil((offset - 8) / 2) + 12 + adjustment)}`;
    if (offset <= 14) return `game${String(15 + adjustment)}`;

    // otherwise invalid
    return null;
};

// returns all subsequent games stemming from the given gameID
export const getSubsequentGames = (gameID) => {
    const successors = [];
    let current = getNextGame(gameID);
    // loop until current is null (i.e. no more successors)
    while (current) {
        successors.push(current);
        current = getNextGame(current);
    }
    return successors;
};

// returns the two direct predecessor games for a given gameID
export const getPreviousGames = (gameID) => {
    // extract numerical id for the given game
    const num = parseInt(gameID.replace('game', ''));

    // championship -> final four winners
    if (num === 63) return ['game61', 'game62'];

    // final four -> elite eight winners
    if (num === 61) return ['game15', 'game60'];
    if (num === 62) return ['game30', 'game45'];

    // else find offset within region
    let offset;
    let adjustment;
    if (num <= 15) {
        // top-left
        offset = num;
        adjustment = 0;
    } else if (num <= 30) {
        // top-right
        offset = num - 15;
        adjustment = 15;
    } else if (num <= 45) {
        // bottom-right
        offset = num - 30;
        adjustment = 30;
    } else if (num <= 60) {
        // bottom-left
        offset = num - 45;
        adjustment = 45;
    }
    // then find previous game using normal regional progression
    if (offset === 15) {
        // elite eight -> sweet sixteen winners
        return [
            `game${String(13 + adjustment)}`,
            `game${String(14 + adjustment)}`
        ];
    } else if (offset >= 13) {
        // sweet sixteen -> round of 32 winners
        return [
            `game${String((offset - 13) * 2 + 9 + adjustment).padStart(2, '0')}`,
            `game${String((offset - 13) * 2 + 10 + adjustment).padStart(2, '0')}`
        ];
    } else if (offset >= 9) {
        // round of 32 -> round of 64 winners
        return [
            `game${String((offset - 9) * 2 + 1 + adjustment).padStart(2, '0')}`,
            `game${String((offset - 8) * 2 + adjustment).padStart(2, '0')}`
        ];
    }

    // otherwise invalid
    return [null, null];
};

// given current picks state and gameID, determines what two teams are facing each other in later rounds
export const getMatchup = (picks, gameID, bracketGames) => {
    // get appropriate game document in Firestore
    const game = bracketGames[gameID];
    if (!game) return [null, null];

    // round 1 games should have matchup from Firestore
    if (game.round === 1) {
        return [game.team1, game.team2];
    }

    // later round games come from current picks
    const [opt1, opt2] = getPreviousGames(gameID);
    return [
        picks[opt1] || null,
        picks[opt2] || null
    ];
};