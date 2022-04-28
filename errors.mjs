import { readFile } from 'fs'

readFile(new URL('app.js', import.meta.url), 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    else {

    }
})