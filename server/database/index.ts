import * as mysql from 'mysql2'

// 创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'nuxt3_db',
  waitForConnections: true, // 是否等待连接
  connectionLimit: 10, // 最大连接数
  queueLimit: 0,
})

// 获取连接是否成功
connectionPool.getConnection((err: any, connection: any) => {
  if (err) {
    console.log('获取连接失败~', err)
    return
  }
  // 尝试连接
  connection.connect((err: any) => {
    if (err)
      console.log('与数据库交互失败', err)

    else
      console.log('与数据库交互成功')
  })
})
// 获取连接对象
const connection = connectionPool.promise()
export default connection
