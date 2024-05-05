const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'bnjbfqvrfkwn1w92ysms-mysql.services.clever-cloud.com',
    user: 'uywnpj7yfox9j9ie',
    password: 'CEEvAAlH0zfvoRlg3v9F',
    database: 'bnjbfqvrfkwn1w92ysms'
})

module.exports = db
