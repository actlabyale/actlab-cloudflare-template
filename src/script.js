console.log(import.meta.env.DEV) // true if debug, false if "real"

document.getElementById('foo').addEventListener('click', async () => {
    console.log('fooo')
    const resp = await fetch('https://api.actlab.dev/template', {
        method: 'GET',
        // mode: 'same-origin',
        cache: 'no-cache',
        // headers: {
        //     "content-type": "application/json",
        // },
        // body: JSON.stringify({ 'foo': 'bar' })
    })
    console.log(resp)
})