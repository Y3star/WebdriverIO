class Helper {
	/**
	 *
	 * @param {number} countOfSymbols count of symbols
	 * @param {string} type "email" or "pass" or set empty
	 * @param {boolean} false
	 * @returns {string}
	 */
	generateData(countOfSymbols, type = "", num = false) {
		let result = "";
		let characters;
		characters = num
			? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy0123456789"
			: "ABCDEFGHIabcdefg12345678!@#$%!%";
		switch (type) {
			case "email":
				characters.toLowerCase();
				break;
			case "pass":
				characters = "pass";
				break;
			default:
				break;
		}
		for (let i = 0; i < countOfSymbols; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return (result = type == "email" ? `${result}@gmail.com` : result);
	}

	parseJsonFile(filename) {
		const fs = require("fs");
		let rawdata = fs.readFileSync(filename);
		return JSON.parse(rawdata);
	}
}

module.exports = new Helper();
