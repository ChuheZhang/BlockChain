const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data, previousHash){
        this.data = data
        this.previousHash = previousHash
        this.hash = this.computeHash()
    }

    computeHash(){
        return SHA256(this.data+this.previousHash).toString()
    }
}

// const block = new Block('转账10U','1324')
// console.log(block)


// 生成祖先区块

class Chain {
    constructor(){
        this.chain = [this.bigBang()]
    }

    bigBang(){
        const genesisBlock = new Block('我是祖先','')
        return genesisBlock
    }

    //添加区块到区块链上
    addBlockToChain(block){
        //data
    }
}

const luotuoChain = new Chain()
console.log(luotuoChain)