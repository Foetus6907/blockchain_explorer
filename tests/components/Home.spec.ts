import { mount } from "@vue/test-utils";
import BlockHeader from "./../../src/components/BlockHeader.vue";

describe("Home", () => {
  it("should display header text", async () => {
    const wrapper = mount(BlockHeader, {
      props: {
        block: {
          hash: "",
          ver: 0,
          prev_block: "",
          mrkl_root: "",
          time: 0,
          bits: 0,
          next_block: [""],
          fee: 0,
          nonce: 0,
          n_tx: 0,
          size: 0,
          block_index: 0,
          main_chain: true,
          height: 123456,
          weight: 0,
          tx: [],
          getDate: () => {
            return Date.now();
          },
          getBlockRewardInBTCString: () => "undefined",
          getBlockFeeInBTCString: () => "undefined",
          getTransactionVolumeInBTCString: () => "undefined",
          getTransactionVolume: () => 0,
          getDifficulty: () => 0,
          getVersion: () => "undefined",
          getWeightWU: () => "undefined",
          getSize: () => 0,
          getNonce:() => ""
        }
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.find("#blockHeight").element.firstChild.textContent.trim()).toEqual("Block 123456");
  });
});