
import { MissionUtils } from "@woowacourse/mission-utils";
import message from "../../constant/message";

const outputView = {
    startMessage(){
        MissionUtils.Console.print(message.startGame)
    },

    printStrikesAndBalls(strike,ball){
        if(ball === 0 && strike === 0){
            MissionUtils.Console.print('낫싱')
        }
        if(ball === 0 && strike !== 0){
            MissionUtils.Console.print(`${strike}스트라이크`)
        }
        if(ball !== 0 && strike === 0){
            MissionUtils.Console.print(`${ball}볼`)
        }
        if(ball !==0 && strike !== 0){
            MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
        }
    },
    endGame(){
        MissionUtils.Console.print(message.endGame)
    }
}

export default outputView;