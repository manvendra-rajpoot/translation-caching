const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkperiod: 10 });

module.exports = duration => (req,res,next) => {
    //if req is not GET
    if(req.method !== 'GET') {
        console.error('Cannot cache non-GET methods!');
        return next();
    }
    //check if key exists in cache
    const key = req.originalUrl;
    const cacheResponse = cache.get(key);

    //if exists, send cache result
    if(cacheResponse) {
        console.log(`Cache hit for ${key}`.bgGreen.black);
        res.send(cacheResponse);
    } else {
        //if not, replace ,send with method to  set response to cache
        console.log(`Cache miss for ${key}`.bgMagenta.black); 
        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body);
            cache.set(key, body, duration);
        };
        return next();
    }
}
