import { mount } from "@vue/test-utils";
import Home from "./../../src/components/Home.vue"



// The component to test
// const MessageComponent = {
//   template: '<q-card><p>{{ msg }}</p></q-card>',
//   props: ['msg']
// }

describe('HelloWorld', () => {
  it('should display header text', async () => {
    const wrapper = mount(Home, {
      setup() {
        const block =  {
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
            tx: []
        }
        return {
          block
        }
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.find("#blockHeight").element.firstChild.textContent.trim()).toEqual('Block 123456');
  })
})