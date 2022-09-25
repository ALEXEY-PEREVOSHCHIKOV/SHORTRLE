let fs = require('fs');
let arg = process.argv;
let inText, NeededText = '';
let symbol = 0, n = 1;
inText = fs.readFileSync(arg[2]);
inText = inText.toString();
while (symbol < inText.length){
	while(inText[symbol] == inText[symbol+n] && n < 255)
		n++;
	if (n>=4 || inText[symbol] == '#')
		NeededText += '#'+(String.fromCharCode(n))+(inText[symbol]);
	else 
		NeededText += inText[symbol].repeat(n);
	symbol += n;
	n = 1;
}
fs.writeFileSync(arg[3], NeededText)
