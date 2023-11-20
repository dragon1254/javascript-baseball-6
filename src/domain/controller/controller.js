import Console from "@woowacourse/mission-utils/src/console";
import inputView from "../views/inputView";
import outputView from "../views/outputView";
import computerNumber from "../utils/makeComputerNumber";

class controller{
#computerArray

    constructor(){

    }

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
        } catch(err){
            Console.print(err);
            await this.readyForGame();
        }
        // 컴퓨터 숫자 생성
        const newArray = new computerNumber();
        this.#computerArray = newArray.makeNumber(gameNumber);
    }

    startGame(){
        // 숫자 입력 받음
        // 컴퓨터 숫자와 비교
        // 숫자 처리
        // 출력
        // 올 스트라이크 될때까지 반복
    }

    endGame(){
        // 재시작 여부 묻기
        // 재시작시 처음부터, 재시작 안할시 종료
    }
}

export default controller;