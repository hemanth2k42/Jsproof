# Jsproof
# NFT Management System

This is a simple JavaScript program for managing Non-Fungible Tokens (NFTs). It allows you to mint NFTs, list all existing NFTs, and get the total supply of NFTs created.

## Requirements

1. **Variable to Hold NFTs**: Create a variable that can hold a number of NFTs.
2. **mintNFT Function**: Create an object inside the `mintNFT` function that will hold the metadata for your NFTs. Metadata values will be passed as parameters, and the NFT will be stored in the variable created in step 1.
3. **listNFTs Function**: Print all NFTs' metadata to the console.
4. **getTotalSupply Function**: Return the total number of NFTs created.

## Implementation

### Variables

- `HemanthNFTs`: This variable holds an array of NFT objects.

### Functions

1. **mintNFT**: This function takes in parameters for NFT metadata (name, age, college, stream), creates an NFT object, and stores it in the `HemanthNFTs` array.

2. **listNFTs**: This function iterates through the `HemanthNFTs` array and logs the metadata of each NFT to the console.

3. **getTotalSupply**: This function logs the total number of NFTs stored in the `HemanthNFTs` array.

## Usage

1. **Mint NFTs**: Use the `mintNFT` function to create new NFTs by providing metadata parameters.
   Example:
   ```javascript
   mintNFT("Praveen", 20, "CU", "CSE");
   mintNFT("Murthuza",20,"CU","CSE");
   mintNFT("Praneeth",20,"IIT-K","EEE");
   mintNFT("Hemanth",20,"CU","CSE");
   mintNFT("Jagan",20,"CU","CSE");
