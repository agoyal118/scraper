var request = require('request');
var cheerio = require('cheerio');

var url = 'https://webpoint.usaweightlifting.org/wp15/Events2/Events.wp?evt_CategoryID=12';

request(url, function(err, response, html) {
	if(!err) {
		var $ = cheerio.load(html);
		var allItems = $('div.ilb.vt.push-60.pad-5').children();
		//console.log(allItems);
		var items = [];
		allItems.each(function(index) {
			//console.log("1");
			items.push($('div.ilb.vt.push-60.pad-5').children().eq(index).find('h3 > a').attr("href"));
		});
		console.log(items);
	}
})