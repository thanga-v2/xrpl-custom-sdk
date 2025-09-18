import dotenv from 'dotenv'
import { Client, Wallet, TrustSet, Payment, CheckCreate, CheckCash, CheckCancel, AccountSet } from 'xrpl';
import { hash } from "xrpl-accountlib/dist/utils";
dotenv.config()

export async function walletInfo() {

const client = new Client("wss://s.devnet.rippletest.net:51233")
await client.connect()

console.log("\n Wallet Info . . . . . . . . . . .  \n")
console.log("\n . . . . . .  \n")
console.log("\n . .  \n")

const admin_seed = process.env.ADMIN_SEED
// console.log(admin_seed)
const adminWallet = Wallet.fromSeed(admin_seed!);
console.log(adminWallet)

// Or 

const _adminWallet = Wallet.fromSeed(admin_seed ?? "");
// console.log(_adminWallet)

const adminBalance = await client.getXrpBalance(_adminWallet.address)
console.log(adminBalance)



// get the account info of admin wallet

const adminwallet_info = await client.request({
    command:"account_info",
    account:_adminWallet.address
})
console.log("\n admin wallet info \n", adminwallet_info)

// get the account lines -----> trsut lines of admin wallet

const adminwallet_account_lines = await client.request({
    command:"account_lines",
    account:_adminWallet.address
})
console.log("\n \n \n . . . . . \n \n \n")
console.log("\n admin wallet  account lines info \n", adminwallet_account_lines)








await client.disconnect()
}

walletInfo();