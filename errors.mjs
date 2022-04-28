import { readFile } from 'fs/promises'


const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
    .catch(e => {
        console.log("Herrro")
    })