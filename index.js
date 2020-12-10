const {parse} = require("./parser")

while(a !== "q") {
	if (a.indexOf("iri -i ") !== -1) {
		for (var i = 7; i < a.length; i++) {
			stri += a[i]
		}
		if (a.indexOf(".") === -1) {
			stri += ".iri"
		}
		console.log(chalk.bgBlue("Parsing file") + chalk.bgHex("#007766")(" ") + chalk.bgCyan(stri))
		file = stri
		parse(fs.readFileSync(file, "utf-8"));
	} else if (a.indexOf("iri -r") !== -1) {
		while(a !== "q") {
			a = prompt("\t>>")
			parse(a)
		}
	} else {
		console.log(chalk.hex('#ff0402')("Could not find that command."))
	}
	a = prompt('>>> ')
}
