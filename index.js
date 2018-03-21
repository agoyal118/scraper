var request = require('request');
var cheerio = require('cheerio');

var baseURL = 'https://webpoint.usaweightlifting.org';
var homeURL = 'https://webpoint.usaweightlifting.org/wp15/Events2/Events.wp?evt_CategoryID=12';
var urlList = [];
var name_and_email = [];
var testURL = 'https://webpoint.usaweightlifting.org/wp15/Events2/ViewEvt.wp?EventID=137709';

request(homeURL, function(err, response, html) {
	if(!err) {
		var $ = cheerio.load(html);
		var allItems = $('div.ilb.vt.push-60.pad-5');
		allItems.each(function(index) {
			urlList.push(baseURL + $('div.ilb.vt.push-60.pad-5').eq(index).find('a').attr('href'));
		});
		console.log(urlList);
	}
});


request(testURL, function(err, response, html) {
	if (!err) {
		var $ = cheerio.load(html);
		var name = $("td.mfff:contains('Coordinator:')").siblings().text();
		var email = $("td.mfff:contains('Email:')").siblings().text();
		console.log(name, email);
	}
});