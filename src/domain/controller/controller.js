import inputView from "../views/inputView.js";
import outputView from "../views/outputView.js";
import computerNumber from "../utils/makeComputerNumber.js";
import validate from "../../validate/validate.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class controller{
// #gamenumber

#computerArray

#validator

#myGameNumber

    constructor(){
        this.#validator = new validate()
    }

    async run(){
        outputView.startMessage();
        this.readyForGame();
        await this.startGame();
        this.endGame();
    }

    async readyForGame(){
        // // 몇개 할건지 입력
        // try{
        //     const gameNumber = await inputView.howManyGames();
        //     this.#gamenumber = gameNumber
        // } catch(err){
        //     MissionUtils.Console.print(err);
        //     return await this.readyForGame();
        // }
        // 컴퓨터 숫자 생성
        const newArray = new computerNumber(/*this.#gamenumber*/);
        this.#computerArray = newArray.makeNumber();
    }

    async startGame(){
        await this.getMyNumber();
        // await this.compareNumbers();
    }
        // 숫자 입력 받음
    async getMyNumber(){
        const getEachGameNumber = await inputView.eachGame()
        this.#myGameNumber = getEachGameNumber
        console.log(this.#myGameNumber);
        // try{
            this.#validator.everyGame(this.#myGameNumber)
        if(this.#myGameNumber.length !== this.#computerArray.length){
            throw new Error(`[ERROR]${this.#computerArray.length}자리 수를 입력하세요`);
        }
        // } catch(err){
        //     MissionUtils.Console.print(err);
        //     return await this.getMyNumber();
        // }
        this.compareNumbers()
    }
        // 컴퓨터 숫자와 비교
    async compareNumbers(){
        let strike = 0;
        let ball = 0;
        this.#myGameNumber.forEach((element, index) => {
            if(this.#computerArray.includes(element) && this.#computerArray[index] === element){
                strike++
            }
            else if(this.#computerArray.includes(element)){
                ball++
            }
        });
        outputView.printStrikesAndBalls(strike, ball);
        if(strike !== 3/*this.#gamenumber*/){
            await this.getMyNumber()
        }
    }

    async endGame(){
        MissionUtils.Console.print(/*${this.#gamenumber}*/`3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
        // 재시작 여부 묻기
        const wantReGame = await inputView.reGame()
        this.#validator.reGame(wantReGame);
        const wantReGameNumber = Number(wantReGame)
        if(wantReGameNumber === 1){
            console.log(2000)
            return await this.run();
        }
        if(wantReGameNumber === 2){
            outputView.endGame();
        }
        // 재시작시 처음부터, 재시작 안할시 종료
    }
}

export default controller;