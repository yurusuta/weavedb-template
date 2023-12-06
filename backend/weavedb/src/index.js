import WeaveDB from "weavedb-sdk-node";

const CONTRACT_TX_ID = "-QYeLkcG1bjVaqO5mje0d517L97WFZMJ6KxtajHcbF4";

const db = new WeaveDB({ contractTxId: CONTRACT_TX_ID });
await db.init();

const helloWorldData = { message: "Hello, Yawn!" };
const collection_name = "messages";
const tx = await db.add(helloWorldData, collection_name);
console.log("tx:", tx);

const result = await db.get(collection_name);
console.log("result:", result);
