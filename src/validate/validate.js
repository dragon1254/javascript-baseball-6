import error from "../constant/error";
import number from "../constant/number";

class validate{
    gameCount(getGameNumber){
        const checkGameNumber = Number(getGameNumber);
        if(isNaN(checkGameNumber)){
            throw new Error(error.string);
        }
        if(checkGameNumber < number.gameMinNumber){
            throw new Error(error.range);
        }
        if(checkGameNumber > number.gameMaxNumber){
            throw new Error(error.range);
        }
    }
    
}

export default validate;