class Quiz {
    constructor() {

    }


    async start() {
        if(gameState === 0) {
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");

            if(contestantCountRef.exists()) {
                contestantCount = contestantCountRef.val();
                contestant.getCount
            }

            question = new question();
            question.display();
        }
    }








}
        


