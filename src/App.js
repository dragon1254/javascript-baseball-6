import { Console, Random } from "@woowacourse/mission-utils";

class App {

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.")
    const random = this.ranNumber();
    await this.myNumber(random);
  }

  ranNumber(){
    const computer = [];
    while (computer.length < 3) {
      const comNumber = Random.pickNumberInRange(1, 9);
      if (!computer.includes(comNumber)) {
        computer.push(comNumber);
      }
    }
    return computer;
  }

  async myNumber (random){
    const MY_NUM = await Console.readLineAsync('숫자를 입력해주세요 :');
    await this.gameStart(random,MY_NUM.split('').map(Number));
  }

  async gameStart(random,MY_NUM){
    this.printError(MY_NUM)
    const strike = [];
    const ball = [];
    for (let i = 0; i < MY_NUM.length; i++) {
      if (MY_NUM[i] === random[i]) {
        strike.push(MY_NUM[i]);
      } else if (random.includes(MY_NUM[i])) {
        ball.push(MY_NUM[i]);
      }
    }
    this.printCheck(strike.length,ball.length);

    if(strike.length ===3){
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      await this.gameset();
    } else if(strike.length !==3){
      await this.myNumber(random);
    }
  }

  printError(MY_NUM){
    for(let i=0;i<MY_NUM.length;i++){
      if(MY_NUM[i] === 0) {
        throw new Error('[ERROR] 0이 포함되어 있습니다.');
      }
      if(isNaN(MY_NUM[i])){
        throw new Error("[ERROR] 문자가 포함되어 있습니다.")
      }
    }
    const numberSet = new Set(MY_NUM)
    const set = [...numberSet]
    if(set.length !== 3){
      throw new Error('[ERROR]같은 숫자가 포함되어 있습니다.');
    }
    if(MY_NUM.length !== 3){
      throw new Error("[ERROR] 3자리 숫자를 입력하세요.");
    }
    
  }

  printCheck(strikes,balls){
    if(strikes===0 && balls === 0){
      Console.print(`낫싱`);
    } else if(strikes!==0 && balls !==0){
      Console.print(`${balls}볼 ${strikes}스트라이크`);
    } else if(strikes!==0 && balls ===0){
      Console.print(`${strikes}스트라이크`);
    } else if(strikes===0 && balls !==0){
      Console.print(`${balls}볼`);
    }
  }

  async gameset(){
    let SET_NUM = await Console.readLineAsync(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
    if(SET_NUM==='1'){
      await this.play();
    } else if(SET_NUM==='2'){
      return;
    } else if(SET_NUM !=='1' && SET_NUM!=='2'){
      throw new Error('[ERROR]1 또는 2를 입력하세요')
    }
  }
} 

export default App;