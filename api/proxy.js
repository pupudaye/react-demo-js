const request = require('request');

module.exports = (req, res) => {
  // proxy middleware options
  let prefix = "api.notion.com"
  if (!req.url.startsWith(prefix)) {
    return;
  }
//   let target = "https://api.notion.com" + req.url.substring(prefix.length);

//   var options = {
//     'method': 'GET',
//     'url': target,
//     'headers': {
//       'Notion-Version': res.headers['notion-version'],
//       'Authorization': res.headers['authorization']
//     }
//   };
  request( req.options, function (error, response) {
    if (error) throw new Error(error);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(response.body);
    res.end();
  });
}