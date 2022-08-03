import { finished } from "stream/promises"
export async function upload(createReadStream: any, filePath: string) {
  const stream = createReadStream()
  const out = require("fs").createWriteStream(filePath)
  stream.pipe(out)
  await finished(out)
}
