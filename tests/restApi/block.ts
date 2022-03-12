export const smallExpectedBlock = {
  "hash": "00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa",
  "ver": 536870912,
  "prev_block": "0000000000000000000c9129f5a064d82c01682fc84819257f10ea1eccdb2b25",
  "mrkl_root": "b88a02199d8e3ea977aa66457801994031eeb6ca79bb16a4d09211af4e84f6ed",
  "time": 1608620982,
  "bits": 386863986,
  "next_block": [
    "0000000000000000000ef9c073beedafb33a4f1874b80ac16500516e782f5b85"
  ],
  "fee": 16583560,
  "nonce": 1285091394,
  "n_tx": 912,
  "size": 1482301,
  "block_index": 662463,
  "main_chain": true,
  "height": 662463,
  "weight": 3999475,
  "tx": [
    {
      "hash": "25e4fb7042fc25fe98582adf598357e3b0bc60021cd80de628599512abb63598",
      "ver": 1,
      "vin_sz": 1,
      "vout_sz": 4,
      "size": 329,
      "weight": 1208,
      "fee": 0,
      "relayed_by": "0.0.0.0",
      "lock_time": 2390244852,
      "tx_index": 5355406891307691,
      "double_spend": false,
      "time": 1608620982,
      "block_index": 662463,
      "block_height": 662463,
      "inputs": [
        {
          "sequence": 4294967295,
          "witness": "01200000000000000000000000000000000000000000000000000000000000000000",
          "script": "03bf1b0a04ba9be15f2f706f6f6c696e2e636f6d2f746170726f6f742f626970392fef058602302864a933f742f80698085311c191d861002dd7010000000000",
          "index": 0,
          "prev_out": {
            "spent": true,
            "script": "",
            "spending_outpoints": [
              {
                "tx_index": 5355406891307691,
                "n": 0
              }
            ],
            "tx_index": 0,
            "value": 0,
            "n": 4294967295,
            "type": 0
          }
        }
      ],
      "out": [
        {
          "type": 0,
          "spent": true,
          "value": 641583560,
          "spending_outpoints": [
            {
              "tx_index": 1501575876861430,
              "n": 2
            }
          ],
          "n": 0,
          "tx_index": 5355406891307691,
          "script": "a9149837b6ca944b36f71b94d19cf1e1acd17972642487",
          "addr": "3FZsNnE2PJfhaAeRRtsNijm9WpCv4xvkkz"
        },
        {
          "type": 0,
          "spent": false,
          "value": 0,
          "spending_outpoints": [],
          "n": 1,
          "tx_index": 5355406891307691,
          "script": "6a24b9e11b6ddccb4730dd13ee44cc9eed1ab57357dd3af7a65667b0a86e96f9cd41d33216b1"
        },
        {
          "type": 0,
          "spent": false,
          "value": 0,
          "spending_outpoints": [],
          "n": 2,
          "tx_index": 5355406891307691,
          "script": "6a24aa21a9edd346b25a5a0045ee3dece08ca6d0a45c4ff70d73e1f871c9675933511adcb498"
        },
        {
          "type": 0,
          "spent": false,
          "value": 0,
          "spending_outpoints": [],
          "n": 3,
          "tx_index": 5355406891307691,
          "script": "6a2952534b424c4f434b3af4f39b1d084072e4e00dfeef19004ace6c3b4b75698998be9d14762c002d3588"
        }
      ]
    },
    {
      "hash": "ecbaf13b3c726f7f3b03bc2578def60dc6c41259bc07ac4af2a6a7bfc09ce337",
      "ver": 2,
      "vin_sz": 3,
      "vout_sz": 1,
      "size": 536,
      "weight": 1175,
      "fee": 93431,
      "relayed_by": "0.0.0.0",
      "lock_time": 662462,
      "tx_index": 1966423263409396,
      "double_spend": false,
      "time": 1608620982,
      "block_index": 662463,
      "block_height": 662463,
      "inputs": [
        {
          "sequence": 4294967294,
          "witness": "0247304402207ccd670d9e8ab968e31d4858be19311cd1e6b8d6a4a2d3c576b7ca6c50d7f47a02204e6950a2f073169d14e7da3541b4b48abdea6ccac89d1a65e9ea26bc9c2afc3e012102d7d92bcf252355fe944ecb76f3e5e6afebc1748a784656d9a7fd8203b5131ad9",
          "script": "",
          "index": 0,
          "prev_out": {
            "spent": true,
            "script": "0014053f1a8d88f7c4498d5861f71925f89e4fde3d1a",
            "spending_outpoints": [
              {
                "tx_index": 1966423263409396,
                "n": 0
              }
            ],
            "tx_index": 6259734792976457,
            "value": 851770,
            "addr": "bc1qq5l34rvg7lzynr2cv8m3jf0cne8au0g6kn7s4x",
            "n": 0,
            "type": 0
          }
        },
        {
          "sequence": 4294967294,
          "witness": "02473044022027724715d97cf477cd8eff532523d52760a190aacf7754c5a3cbc0b67ef02de8022014c12e4f7bf56cafb104fa85fa564489bd887b895bd86cd431589656c5e2493f012102338d2f0ddc12292ae89614521ef36eb6a22cf2b8bc04b0df1691e64f44f208d9",
          "script": "16001427710c80f6751e0a036c403254f5813725618c84",
          "index": 1,
          "prev_out": {
            "spent": true,
            "script": "a9145219ee887d27caced4018ef75711c8b71f04ee7387",
            "spending_outpoints": [
              {
                "tx_index": 1966423263409396,
                "n": 1
              }
            ],
            "tx_index": 973819361762426,
            "value": 209661,
            "addr": "39B8Q3Z3hhva3RWn55qqjxkaaF9BaRe6dG",
            "n": 0,
            "type": 0
          }
        },
        {
          "sequence": 4294967294,
          "witness": "0247304402204a9f2cc763b902332490fbd48153587725682e12c787b52c4efe14298d126159022078c6b367095f4b4160e75e72aa0db6cc7f94c3c2d1299bdae74223b7fc05f9be012102f21cae887977bf0635b7795c3bb0221c8bcb013e72b568a2f585eb13e59d9b39",
          "script": "1600149ba3afcea31d6c5a43aa7a49fef9457be71c0a51",
          "index": 2,
          "prev_out": {
            "spent": true,
            "script": "a914588f03c9f83d0db6ac1236955dccff4339cb4fda87",
            "spending_outpoints": [
              {
                "tx_index": 1966423263409396,
                "n": 2
              }
            ],
            "tx_index": 6429141544781108,
            "value": 3000000,
            "addr": "39mGiGTiPaX67Kxp77zx2XpojD8k1ivaZ2",
            "n": 0,
            "type": 0
          }
        }
      ],
      "out": [
        {
          "type": 0,
          "spent": true,
          "value": 3968000,
          "spending_outpoints": [
            {
              "tx_index": 6788440544731550,
              "n": 0
            }
          ],
          "n": 0,
          "tx_index": 1966423263409396,
          "script": "76a9141c045845e00a160397b2cc62b9876bb6d9835e4d88ac",
          "addr": "13Z98FkiVvMNDqvWAZKWnNg3F66GR8gUie"
        }
      ]
    },
    {
      "hash": "b15bb075d22c8a276bd7b8a29f60229702119acfe995905835dc26c0107d0424",
      "ver": 1,
      "vin_sz": 1,
      "vout_sz": 2,
      "size": 382,
      "weight": 766,
      "fee": 50000,
      "relayed_by": "0.0.0.0",
      "lock_time": 0,
      "tx_index": 1267254295004379,
      "double_spend": false,
      "time": 1608620982,
      "block_index": 662463,
      "block_height": 662463,
      "inputs": [
        {
          "sequence": 4294967295,
          "witness": "04004730440220298a34ddc02f9cc3e0c5f272029b7a5c63bbc48c9dc4733a5a5d3b949ea2b04a022046043cd1337394007190c1f47a9fbfc65520805328dc50c4f315768aebe6e46b0147304402204c9299bfa11ced4f0443ebcd174acde1c025921cc752009e8f07650acc7a2bb302202bb9d7bd6dd9aea90f102e3f505ec79748cf77050a284ce98ed362df06d59354016952210375e00eb72e29da82b89367947f29ef34afb75e8654f6ea368e0acdfd92976b7c2103a1b26313f430c4b15bb1fdce663207659d8cac749a0e53d70eff01874496feff2103c96d495bfdd5ba4145e3e046fee45e84a8a48ad05bd8dbb395c011a32cf9f88053ae",
          "script": "",
          "index": 0,
          "prev_out": {
            "spent": true,
            "script": "0020701a8d401c84fb13e6baf169d59684e17abd9fa216c8cc5b9fc63d622ff8c58d",
            "spending_outpoints": [
              {
                "tx_index": 1267254295004379,
                "n": 0
              }
            ],
            "tx_index": 8701005538167377,
            "value": 1162912,
            "addr": "bc1qwqdg6squsna38e46795at95yu9atm8azzmyvckulcc7kytlcckxswvvzej",
            "n": 2,
            "type": 0
          }
        }
      ],
      "out": [
        {
          "type": 0,
          "spent": true,
          "value": 506000,
          "spending_outpoints": [
            {
              "tx_index": 2554583002155562,
              "n": 311
            }
          ],
          "n": 0,
          "tx_index": 1267254295004379,
          "script": "76a91471499b9efdbf6f8f9bf3acb53921633476d2d67c88ac",
          "addr": "1BL1Y3VjyRBM44vr2parCXb9HquGDU4bdA"
        },
        {
          "type": 0,
          "spent": true,
          "value": 606912,
          "spending_outpoints": [
            {
              "tx_index": 6255698307092705,
              "n": 1
            }
          ],
          "n": 1,
          "tx_index": 1267254295004379,
          "script": "0020701a8d401c84fb13e6baf169d59684e17abd9fa216c8cc5b9fc63d622ff8c58d",
          "addr": "bc1qwqdg6squsna38e46795at95yu9atm8azzmyvckulcc7kytlcckxswvvzej"
        }
      ]
    },
    {
      "hash": "ae690a0a93740af3ca0629141015715bd382be4dc9f2e04d141d1e9cbc05f049",
      "ver": 1,
      "vin_sz": 1,
      "vout_sz": 2,
      "size": 371,
      "weight": 821,
      "fee": 50000,
      "relayed_by": "0.0.0.0",
      "lock_time": 0,
      "tx_index": 2601447591216067,
      "double_spend": false,
      "time": 1608620982,
      "block_index": 662463,
      "block_height": 662463,
      "inputs": [
        {
          "sequence": 4294967295,
          "witness": "0400473044022050c36d9de6d70930641f9b05f611a105ee9be85c56b40bb1e084f2a10b68156502205053f40785b8caadaed39df859e9ef8416b1cc33c1bea3e52ff60cdbd18ea20501483045022100c2c546a511ba8f9421a8f2fdaf606e15e0449d00048a9079888547ddcbb7128e02204a831a0bdde0bccbad3e8eb6e8c2bcd0e82e24649259cf07c8dcb09f91a5c8240147522103c972287632e4b2c00a1e51c5d3909bff60080c4839dec3bdb47d28759db33c8b2103e3685c39f554f7cc9e5630f2b26197ea5754581b844912bc2cd66fd341126f4452ae",
          "script": "220020b13908f28a441a50bf748b9b701becdaf83bf566de4cf7d745b8112a0fd1bbd7",
          "index": 0,
          "prev_out": {
            "spent": true,
            "script": "a914c3ecec52aeaefd8cee54161af6de1b4cd9c6263087",
            "spending_outpoints": [
              {
                "tx_index": 2601447591216067,
                "n": 0
              }
            ],
            "tx_index": 3770522252441448,
            "value": 107283069,
            "addr": "3KYyWfAVnWRgLvvvRrhatxdmE8xBHSevVb",
            "n": 1,
            "type": 0
          }
        }
      ],
      "out": [
        {
          "type": 0,
          "spent": true,
          "value": 1392581,
          "spending_outpoints": [
            {
              "tx_index": 706169298480321,
              "n": 1
            }
          ],
          "n": 0,
          "tx_index": 2601447591216067,
          "script": "a914b4979e237797a12a7033e6da4e924115119c77eb87",
          "addr": "3J9uBf6mEPfVVtQ6GThLT4LzpMvATPSdc4"
        },
        {
          "type": 0,
          "spent": true,
          "value": 105840488,
          "spending_outpoints": [
            {
              "tx_index": 220702490367270,
              "n": 0
            }
          ],
          "n": 1,
          "tx_index": 2601447591216067,
          "script": "a914c3ecec52aeaefd8cee54161af6de1b4cd9c6263087",
          "addr": "3KYyWfAVnWRgLvvvRrhatxdmE8xBHSevVb"
        }
      ]
    }
  ]
};