let fs = require('fs');
let arg = process.argv;
let inText, NeededText = '', sign = '';
let symbol = 0, n = 1;
inText = fs.readFileSync(arg[2]);
inText = inText.toString();
while (symbol < inText.length){
	if (inText[symbol] == '#'){
		sign = inText.charCodeAt(symbol+1);
		NeededText += inText[symbol+2].repeat(sign);
		symbol += 3;
	}
	else
	{
		NeededText += inText[symbol];
		symbol++;
	}
}
fs.writeFileSync(arg[3], NeededText)