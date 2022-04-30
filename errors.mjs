import { readFile } from 'fs/promises'


const result = readFile(new URL('app.mj s', import.meta.url), 'utf-8')
    .catch(e => {
        console.log("Herrro")
    })