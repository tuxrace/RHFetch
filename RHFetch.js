var RHFetch = (function() {
    
    const FetchOptions = {
        method:'GET',
        headers: () => {
            return new Headers()
        },
        mode: 'cors',
        cache:'default',
        body:''
    }

    this.opts = FetchOptions
    this.version = 0.1 

    this.get = (url) =>{
        FetchOptions.method = 'GET'
        this.opts = FetchOptions
        this.url = url
        return this
    }
    
    this.post = (url, body) => {
        FetchOptions.method = 'POST'
        FetchOptions.body = body
        this.opts = FetchOptions        
        this.url = url
        return this
    }
    
    this.result = (cb) => {                
        fetch(this.url,this.opts)
        .then(r => r.json())
        .then(r => cb(r))
        .catch(err=> {
            console.log(err)
        })                           
        return this             
    }        
    
})

window.RHFetch = new RHFetch();