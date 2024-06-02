/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const HemanthNFTs  = []; // 1. Create a variable that can hold a number of NFT's. What type of variable might this be?

function mintNFT (name,age,college,stream) /* 2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
The metadata values will be passed to the function as parameters. When the NFT is ready, you will store it in the variable you created in step 1 */

 {
      const NFT =
        {
          "name" : name ,
          "age"  : age ,
          "college": college ,
          "stream" : stream ,
        }
      HemanthNFTs.push(NFT);
}


function listNFTs ()  // 3.Your listNFTs() function will print all of your NFTs metadata to the console
{
   for(let i=0;i<HemanthNFTs.length;i++)
      {
         console.log("\n");
         console.log("Name      :"+HemanthNFTs[i].name);
         console.log("age       :"+HemanthNFTs[i].age);
         console.log("college   :"+HemanthNFTs[i].college);
         console.log("stream    :"+HemanthNFTs[i].stream);
      }

}

function getTotalSupply()  //4. For good measure, getTotalSupply() should return the number of NFT's you have created
{
   console.log("\n");
   console.log(HemanthNFTs.length);
}

// call your functions below this line

mintNFT("Praveen",20,"CU","CSE");
mintNFT("Murthuza",20,"CU","CSE");
mintNFT("Praneeth",20,"IIT-K","EEE");
mintNFT("Hemanth",20,"CU","CSE");
mintNFT("Jagan",20,"CU","CSE");

listNFTs();

getTotalSupply();



