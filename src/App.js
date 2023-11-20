import controller from "./domain/controller/controller";

class App {

  constructor(){
    this.mygame = new controller()
  }

  async play() {
    await this.mygame.run()
  }
}

export default App;
