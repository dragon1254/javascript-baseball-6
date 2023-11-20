
import { MissionUtils } from "@woowacourse/mission-utils";
import message from "../../constant/message";
import validate from "../../validate/validate";

const inputView = {
    async howManyGames(){
        const getGameNumber = await MissionUtils.Console.readLineAsync(message.manyGame);
        validate.gameCount(getGameNumber);
        return getGameNumber;
    },

    async eachGame(){
        const eachGameNumber = await MissionUtils.Console.readLineAsync(message.everyGame);
        const temporaryEachGameNumber = String(eachGameNumber)
        const eachGameArray = Array.from(temporaryEachGameNumber)
        return eachGameArray;
    },
    async reGame(){
        const doYouReGame = await MissionUtils.Console.readLineAsync(message.regame);
        validate.reGame(doYouReGame);
        return doYouReGame;
    }


}

export default inputView;