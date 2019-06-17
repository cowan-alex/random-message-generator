var button = $('button');
var div = $('.quote');

button.on("click", pickOne);

var quotes=['Education is the most powerful weapon which you can use to change the world. -Nelson Mandela', 'Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family. -Kofi Annan', 'Education is not the filling of a pail, but the lighting of a fire. -William Butler Yeats']

function pickOne() {
  var randomquote = Math.random() * 3;
  var rounded = Math.floor(randomquote);
  var finalPick = quotes[rounded];
  console.log(finalPick);
  div.text(finalPick);
}
