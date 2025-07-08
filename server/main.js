function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
(async () => {
    await sleep(0)
    const FivemIsrael = require("fivem-israel")
    const apiKey = GetConvar('fivem_israel_api_key', '')
    if (!apiKey) {
        console.error("[FIVEM-ISRAEL] Invalid API Key.\nPlease add the following to your server.cfg:\nset fivem_israel_api_key \"YOUR_API_KEY\"")
    }
    const client = new FivemIsrael({ apiKey });

    client.onVote((vote) => {
        emit("FiveMIsrael:Vote", vote);
    })

    client.connect();
})()
