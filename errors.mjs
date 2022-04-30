// Title:  unCaught Exception
// Description: Just for exceptions, for finding a quick solution fix, knowing what the problem is

import { readFile } from 'fs/promises'

process.on('uncaughtException', (e) => {
    console.log(e)
})
const result = await readFile(new URL('app.mj s', import.meta.url), 'utf-8')
console.log("hello")