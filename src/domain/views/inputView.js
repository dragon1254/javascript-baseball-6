import Console from "@woowacourse/mission-utils/src/console";
import message from "../../constant/message";
import validate from "../../validate/validate";

const inputView = {
    async howManyGames(){
        const getGameNumber = await Console.readLine(message.manygame);
        validate.gameCount(getGameNumber);
        return getGameNumber;
    }


}

export default inputView;