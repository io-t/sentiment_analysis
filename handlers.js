var Sentiment = require('sentiment');
var sentiment = new Sentiment();


function sentimentAnalyze (utterance) {
	return sentiment.analyze(utterance);
}

module.exports = {
	sentimentAnalyze: sentimentAnalyze
};