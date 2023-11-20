import { Random } from "@woowacourse/mission-utils";

class computerNumber{
    // constructor(gameNumbers){
    //     this.gameNumber = gameNumbers
    // }
    makeNumber(){
        const makeArray = []
        for(let i = 0; i < 3/*this.gameNumber*/; i++){
            const temporaryNumber = Random.pickNumberInRange(1,9);
            makeArray.push(String(temporaryNumber));
        }
        return makeArray;
    }
}

export default computerNumber;