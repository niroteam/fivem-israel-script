# 🇮🇱 FiveM Israel Votes

Easily receive **live vote events** in your FiveM server.

---

## 📥 Installation

1️⃣ **Download and place the `fivem-votes` resource in your `resources` folder.**

2️⃣ Add your API key in your `server.cfg`:

```
set fivem_israel_api_key "YOUR_API_KEY_HERE"
```

3️⃣ Ensure the resource in your `server.cfg`:

```
ensure fivem-votes
```

---

## 🚀 Usage

server.lua

```lua
    AddEventHandler("FiveMIsrael:Vote", function(vote)
        print("New Vote!") -- You can also access the "vote" object for more information about the vote.
    end)
```

---

## ❤️ Need Help?

Join [**FiveM Israel Discord**](https://discord.gg/fivemisrael) for support or to showcase your vote integrations.
