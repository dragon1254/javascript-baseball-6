
import { MissionUtils } from "@woowacourse/mission-utils";
import message from "../../constant/message";
// import validate from "../../validate/validate";

const inputView = {
    // async howManyGames(){
    //     const getGameNumber = await MissionUtils.Console.readLineAsync(message.manyGame);
    //     const validateNumber = new validate();
    //     validateNumber.gameCount(getGameNumber);
    //     return getGameNumber;
    // },

    async eachGame(){
        const eachGameNumber = await MissionUtils.Console.readLineAsync(message.everyGame);
        console.log(eachGameNumber);
        const temporaryEachGameNumber = String(eachGameNumber)
        const eachGameArray = Array.from(temporaryEachGameNumber)
        return eachGameArray;
    },
    async reGame(){
        const doYouReGame = await MissionUtils.Console.readLineAsync(message.regame);
        return doYouReGame;
    }


}

export default inputView;