const os = require('os');

setInterval(()=>{
    const {arch, platform, totalmem, freemem} = os;
    const tRaw = totalmem() / 1024 / 1024;
    const fRaw = freemem() / 1024 / 1024;
    const usage = (fRaw / tRaw) * 100;
    
    const status = {
        Os: platform(),
        Arch: arch(),
        TotalRaw: `${parseInt(tRaw)} MB`,
        FreeRam: `${parseInt(fRaw)} MB`,
        Usage: `${usage.toFixed(2)}%` 
    }
    console.clear()
    console.table(status);
    exports.status = status;

}, 1000)
