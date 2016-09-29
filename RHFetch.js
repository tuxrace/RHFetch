var RHFetch = (function() {
    
    this.get = (url) =>{
        this.url = url
        return this
    }
    this.result = (cb) => {
        try{
            fetch(this.url)
            .then(r => r.json())
            .then(r => cb(r))
            return this
        }catch(e){
            return e
        }                
    }
})

window.RHFetch = new RHFetch();