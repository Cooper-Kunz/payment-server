import grpc from 'grpc'
import { CryptoServiceClient } from './pbnode/CryptoService_grpc_pb'
import { FileServiceClient } from './pbnode/FileService_grpc_pb'
import { SmartContractServiceClient } from './pbnode/SmartContractService_grpc_pb'
import { getAccountBalance, getAccountBalanceProxy } from './getaccountbalance'
import { cryptoTransfer, cryptoTransferProxy } from './cryptotransfer'
import { contractCallProxy } from './contractcall'
import { getTransactionReceiptsProxy } from './gettransactionreceipts'
import { fileGetContentsProxy } from './filegetcontents'
import i from './internal'
import address from './address'

class Hedera {
    constructor(build) {
        this.clientCrypto = build.clientCrypto
        this.clientFile = build.clientFile
        this.clientContract = build.clientContract
        this.nodeAccountID = build.nodeAccountID
        this.operator = build.operator
    }

    static get Client() {
        class Client {
            // if nodeAccount and nodeAddress are not provided,
            // our client will not be initialised with them,
            // we will have to do so later using withNode or withNodeFromTx or withNodeFromQ
            constructor(nodeAccount = undefined, nodeAddress = undefined) {
                if (nodeAddress !== undefined) {
                    this.setClients(nodeAddress)
                }
                if (nodeAccount !== undefined) {
                    this.setNodeAccount(nodeAccount)
                }
            }
            // if we didn't set the nodeAccount and nodeAddress when we initialised the client,
            // we have the option of doing it later
            withNode(nodeAccount, nodeAddress = undefined) {
                this.setNodeAccount(nodeAccount)
                // if nodeAddress is undefined, this.setClients is smart enough to retrieve
                // the appropriate node address from our address book
                this.setClients(nodeAddress)
            }

            // where tx is a binary data
            withNodeFromTx(tx) {
                this.nodeAccountID = i.parseNodeAccountFromTx(tx)
                this.setClients()
            }

            withNodeFromQ(q) {
                this.nodeAccountID = i.parseNodeAccountFromQ(q)
                this.setClients()
            }

            withOperator(keypair, account) {
                this.operator = {}
                this.operator.keypair = keypair
                this.operator.account = i.accountIDFromString(account)
                return this
            }

            // there's no need to provide nodeAddress if we setNodeAccount
            setClients(nodeAddress = undefined) {
                if (nodeAddress === undefined) {
                    const nodeAccount = i.accountStringFromAccountID(
                        this.nodeAccountID
                    )
                    nodeAddress = address.getNodeAddressFromNodeAccount(
                        nodeAccount
                    )
                }

                this.clientCrypto = new CryptoServiceClient(
                    nodeAddress,
                    grpc.credentials.createInsecure()
                )
                this.clientFile = new FileServiceClient(
                    nodeAddress,
                    grpc.credentials.createInsecure()
                )
                this.clientContract = new SmartContractServiceClient(
                    nodeAddress,
                    grpc.credentials.createInsecure()
                )
            }

            setNodeAccount(nodeAccount) {
                this.nodeAccountID = i.accountIDFromString(nodeAccount)
            }

            connect() {
                if (
                    this.clientCrypto === undefined ||
                    this.clientFile === undefined ||
                    this.clientContract === undefined ||
                    this.nodeAccountID === undefined
                ) {
                    let { nodeAccount, nodeAddress } = address.getRandomNode()
                    this.setNodeAccount(nodeAccount)
                    this.setClients(nodeAddress)
                }
                return new Hedera(this)
            }
        }
        return Client
    }

    // nodejs-pbnode gRPC call to Hedera
    getAccountBalance(account) {
        getAccountBalance(this, account)
    }

    // nodejs-pbnode gRPC call to Hedera
    cryptoTransfer(senderAccount, recipientAccount, amount) {
        cryptoTransfer(this, senderAccount, recipientAccount, amount)
    }

    // handles incoming socketio data (query or transaction, in bytes) from web client, calls Hedera, and returns the response data back to socketio client
    async getAccountBalanceProxy(msg) {
        let response = await getAccountBalanceProxy(this, msg)
        return response
    }

    // handles incoming socketio data (query or transaction, in bytes) from web client, calls Hedera, and returns the response data back to socketio client
    async cryptoTransferProxy(msg) {
        let response = await cryptoTransferProxy(this, msg)
        return response
    }

    // handles incoming socketio data (query or transaction, in bytes) from web client, calls Hedera, and returns the response data back to socketio client
    async contractCallProxy(msg) {
        let response = await contractCallProxy(this, msg)
        return response
    }

    async getTransactionReceiptsProxy(msg) {
        let response = await getTransactionReceiptsProxy(this, msg)
        return response
    }

    async fileGetContentsProxy(msg) {
        let response = await fileGetContentsProxy(this, msg)
        return response
    }

    static parseTx(tx) {
        return i.parseTx(tx)
    }
}

export default Hedera
