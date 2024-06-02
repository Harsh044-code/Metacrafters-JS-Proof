/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs.
The metadata values will be passed to the function as parameters. When the NFT is ready,
you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
console.log('Welcome to the  Cricket NFT project!');
// create a variable to hold your NFT's
// Array is a good choice because we can store multiple NFTs
let cricketPlayerNFTs = [];
console.log('Initial cricketPlayerNFTs:', cricketPlayerNFTs);

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, country, battingStyle, bowlingStyle, jerseyNumber) {
  // Create an object for the NFT metadata
  const nft = {
    name: name,
    country: country,
    battingStyle: battingStyle,
    bowlingStyle: bowlingStyle,
    jerseyNumber: jerseyNumber
  };

  // Add the NFT to the array
  cricketPlayerNFTs.push(nft);
  console.log('New NFT minted:', nft); 
  return nft;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  console.log('Listing all minted NFTs:'); 

  // Check if there are any NFTs to list
  if (cricketPlayerNFTs.length === 0) {
    console.log('No NFTs minted yet.');
  } else {
    // Loop through each NFT and print its metadata
    for (const nft of cricketPlayerNFTs) {
      console.log(`Name: ${nft.name}`);
      console.log(`Country: ${nft.country}`);
      console.log(`Batting Style: ${nft.battingStyle}`);
      console.log(`Bowling Style: ${nft.bowlingStyle}`);
      console.log(`Jersey Number: ${nft.jerseyNumber}`);
      console.log('-------------------');
    }
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(`Total NFTs minted: ${cricketPlayerNFTs.length}`);
}

// call your functions below this line
const nft1 = mintNFT('Virat Kohli', 'India', 'Right-hand bat', 'Right-arm medium', 18);
const nft2 = mintNFT('Babar Azam', 'Pakistan', 'Right-hand bat', 'Right-arm off break', 56);
const nft3 = mintNFT('Jos Buttler', 'England', 'Right-hand bat', 'Right-arm medium', 63);

listNFTs();
getTotalSupply();