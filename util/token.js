var Browser = require("zombie");

module.exports = function () {
  return new Promise((resolve, reject) => {
    try {
      ;(async () => {
        var user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20';
        var browser = new Browser({userAgent: user_agent, debug: false, waitFor: 50000});
        let jsonResponse;
        browser.on('request', function(request) {
          var url = request.url;
          if (url.includes('_api')) { jsonResponse = request.headers; }
        });
        await browser.visit('https://www.gurufocus.com/pricing', function() {
          browser.on('done', function() {
			delete browser.cookies;
			browser.cookies = new browser.cookies.constructor();
			browser.window.close();
		});
          resolve(jsonResponse);
        });
      })() } catch {
        reject('error');
      }
    })
}

