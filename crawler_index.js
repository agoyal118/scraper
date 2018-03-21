var Crawler = require('crawler');

var c = new Crawler({
	maxConnections : 10,
	callback : function (error, res, done) {
		if (error) {
			console.log(error);
		} else {
			var $ = res.$;
			var allItems = $('div.right.ilb.vt.m_evt.btns.mt10').children();
			//console.log(allItems);
			var items = [];
			allItems.each(function(index) {
				console.log("1");
				items.push($('div.right.ilb.vt.m_evt.btns.mt10').children().eq(index).children().find('a').attr("href"));
			});
			console.log(items);
		}


		done();
	}
});

c.queue('https://webpoint.usaweightlifting.org/wp15/Events2/Events.wp?evt_CategoryID=12');