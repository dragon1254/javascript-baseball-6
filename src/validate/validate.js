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
    everyGame(eachGameNumber){
        eachGameNumber.forEach(element => {
            if(!number.withZeroNatural.includes(element)){
                throw new Error(error.string);
            }
            if(!number.natural.includes(element)){
                throw new Error(error.zero);
            }
        });
    }
    reGame(doYouReGame){
        const checkReGameNumber = Number(doYouReGame);
        if(isNaN(checkReGameNumber)){
            throw new Error(error.string);
        }
        if(!number.reGameNumber.includes(checkReGameNumber)){
            throw new Error(error.regame);
        }
    }
}

export default validate;