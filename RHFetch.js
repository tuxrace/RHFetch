var RHFetch = (function() {
    this.get = (url) =>{
        this.url = url
        return this
    }
    this.result = (cb) => {
        fetch(this.url)
        .then(r => r.json())
        .then(r => cb(r))
        return this
    }
})

window.RHFetch = new RHFetch();