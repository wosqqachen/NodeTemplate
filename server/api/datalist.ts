import connection from '../database'

export default defineEventHandler(async (event) => {
  async function test() {
    const statement = 'select * from user'
    const [result] = await connection.execute(statement)
    return result
  }
  const resdata = await test()
  return {
    code: 200,
    data: {
      name: 'lihao',
      area: 'China',
      res: resdata,
    },
  }
})
