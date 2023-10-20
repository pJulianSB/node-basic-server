console.clear()
import { createServer } from "http"

const httpServer = createServer((req, res)=>{
    console.log("Request received")
    res.end("Response from server2")
});

httpServer.listen(3000);
