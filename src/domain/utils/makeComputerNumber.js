import { Random } from "@woowacourse/mission-utils";

class computerNumber{
    makeNumber(gameNumber){
        const makeArray = []
        for(let i = 0; i < gameNumber; i++){
            const temporaryNumber = Random.pickNumberInRange(1,9);
            makeArray.push(String(temporaryNumber));
        }
        return makeArray;
    }
}

export default computerNumber;