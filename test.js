const token = require('./util/token')


;(async () => {
  const buffer = await token();
  console.log(JSON.stringify(buffer));
})()

