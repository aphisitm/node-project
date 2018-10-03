const lodash = require('lodash')

var filteredArray = lodash.uniq(['A',1,6,8,4,1,9]); //ลบตัวซ้ำ
console.log("filteredArray", filteredArray );