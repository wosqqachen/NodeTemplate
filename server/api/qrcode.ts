import * as QRcode from 'qrcode'
import { TimeUnitMap } from '~~/utils/time'

export default defineEventHandler(async (event) => {
  event.context.cache = { ttl: TimeUnitMap.hour }

  const { text, type = 'img' } = useQuery(event)

  if (!text)
    throw createError({ statusCode: 400, message: '文本不能为空' })

  if (type === 'img') {
    const buffer = await QRcode.toBuffer(text)
    return buffer
  }
  else {
    const imgBase64 = await QRcode.toDataURL(text)
    return imgBase64
  }
})