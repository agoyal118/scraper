var request = require('request');
var cheerio = require('cheerio');
var jsonexport = require('jsonexport');

var baseURL = 'https://webpoint.usaweightlifting.org';
var homeURL = 'https://webpoint.usaweightlifting.org/wp15/Events2/Events.wp?evt_CategoryID=12';
var name_and_email = [];

request(homeURL, function(err, response, html) {
	if(!err) {
		var $ = cheerio.load(html);
		var allItems = $('div.ilb.vt.push-60.pad-5');
		allItems.each(function(index) {
			var navigateToNewURL = baseURL + $('div.ilb.vt.push-60.pad-5').eq(index).find('a').attr('href');
			request(navigateToNewURL, function(err, response, html) {
				if (!err) {
					var $ = cheerio.load(html);
					var tempName = $("td.mfff:contains('Coordinator:')").siblings().text();
					var tempEmail = $("td.mfff:contains('Email:')").siblings().text();
					name_and_email.push({
										name: tempName,
										email: tempEmail
					});
				}
			});
		});
	}
});