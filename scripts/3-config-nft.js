import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xD27891a7012E96bbE003f5F1caCb893b896B9d52");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Cute Skull",
        description: "This NFT will give you access to YipDAO!",
        image: readFileSync("scripts/assets/cuteskull.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();