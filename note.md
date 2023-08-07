# Note:

## Calldata
In Ethereum, function arguments can be passed in three different data locations: **memory**, **storage**, and **calldata**. Each of these has its own characteristics and implications for gas cost and contract behavior.

When you use calldata for function parameters, you're indicating that the data is being passed from an external caller (i.e., a user or another smart contract) and is read-only within the context of the function. This means that the contract doesn't need to allocate storage space to store the parameter's value, which can result in lower gas costs compared to using storage or memory.

## Saving gas with view functions
We'll cover setting up web3.js with your own node later. But for now the big takeaway is that you can optimize your DApp's gas usage for your users by using read-only external view functions wherever possible.

## Storage is Expensive

## Payable 

Up until now, we've covered quite a few function modifiers. It can be difficult to try to remember everything, so let's run through a quick review:

We have visibility modifiers that control when and where the function can be called from: private means it's only callable from other functions inside the contract; internal is like private but can also be called by contracts that inherit from this one; external can only be called outside the contract; and finally public can be called anywhere, both internally and externally.

We also have state modifiers, which tell us how the function interacts with the BlockChain: view tells us that by running the function, no data will be saved/changed. pure tells us that not only does the function not save any data to the blockchain, but it also doesn't read any data from the blockchain. Both of these don't cost any gas to call if they're called externally from outside the contract (but they do cost gas if called internally by another function).

Then we have custom modifiers, which we learned about in Lesson 3: onlyOwner and aboveLevel, for example. For these we can define custom logic to determine how they affect a function.

These modifiers can all be stacked together on a function definition as follows:

```sol
function test() external view onlyOwner anotherModifier { /* ... */ }
```