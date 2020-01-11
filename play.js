const Game = require('./index');

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const game = new Game();

game.run(reader, completion);

function completion() {
  reader.question('Play again? y or n: ', restartGame => {
    if (restartGame === 'y') {
      g = new Game();
      g.run(reader, completion);
    } else {
      reader.close();
    }
  });
}
