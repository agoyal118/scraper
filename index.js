var request = require('request');
var cheerio = require('cheerio');

var url = 'https://webpoint.usaweightlifting.org/wp15/Events2/Events.wp?evt_CategoryID=12';

request(url, function(err, response, html) {
	if(!err) {
		var $ = cheerio.load(html);
		var allItems = $('div.ilb.vt.push-60.pad-5');
		var items = [];
		allItems.each(function(index) {
			items.push($('div.ilb.vt.push-60.pad-5').eq(index).find('a').attr('href'));
		});
		console.log(items);
	}
})