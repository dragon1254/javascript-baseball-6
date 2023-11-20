import inputView from "../views/inputView.js";
import outputView from "../views/outputView.js";
import computerNumber from "../utils/makeComputerNumber.js";
import validate from "../../validate/validate.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class controller{
#gamenumber

#computerArray

    async run(){
        outputView.startMessage();
        await this.readyForGame();
        this.startGame();
        this.endGame();
    }

    async readyForGame(){
        // 몇개 할건지 입력
        try{
            const gameNumber = await inputView.howManyGames();
            this.#gamenumber = gameNumber
        } catch(err){
            MissionUtils.Console.print(err);
            return await this.readyForGame();
        }
        // 컴퓨터 숫자 생성
        const newArray = new computerNumber(this.#gamenumber);
        this.#computerArray = newArray.makeNumber();
    }

    async startGame(){
    
    
    }
        // 숫자 입력 받음
    async getMyNumber(){
        const getEachGameNumber = await inputView.eachGame()
        try{
            validate.everyGame(getEachGameNumber)
        if(getEachGameNumber.length !== this.#computerArray.length){
            throw new Error(`${this.#computerArray}자리 수를 입력하세요`);
        }
        } catch(err){
            MissionUtils.Console.print(err);
            return await this.getMyNumber();
        }
        this.compareNumbers(getEachGameNumber)
    }
        // 컴퓨터 숫자와 비교
    async compareNumbers(getEachGameNumber){
        let strike = 0;
        let ball = 0;
        getEachGameNumber.forEach((element, index) => {
            if(this.#computerArray.include(element) && this.#computerArray[index] === element){
                strike++
            }
            if(this.#computerArray.include(element)){
                ball++
            }
        });
        outputView.printStrikesAndBalls(strike, ball);
        if(strike !== this.#gamenumber){
            return await this.getMyNumber()
        }
    }

    async endGame(){
        MissionUtils.Console.print(`${this.#gamenumber}개의 숫자를 모두 맞히셨습니다! 게임 종료`)
        // 재시작 여부 묻기
        const wantReGame = await inputView.reGame()
        if(wantReGame === 1){
            return await this.run();
        }
        if(wantReGame === 2){
            outputView.endGame();
        }
        // 재시작시 처음부터, 재시작 안할시 종료
    }
}

export default controller;