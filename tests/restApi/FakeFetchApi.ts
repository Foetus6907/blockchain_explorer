import FetchApi from "../../core/infrastructure/FetchApi";
import Block from "../../core/domaine/model/Block";
import BlockDTO from "../../core/adapter/primary/DTOs/BlockDTO";

export default class FakeFetchApi implements FetchApi {
  private _blockToReturnGet: BlockDTO;
  constructor(blockToReturnGet: BlockDTO) {
    this._blockToReturnGet = blockToReturnGet;
  }

  get(url: string): Promise<Response> {
    const body = new Blob([JSON.stringify(this._blockToReturnGet)], {type:'application/json'})
    const response = new Response(body, {
      status: 200,
      statusText: "ok",
      headers: {
        'Content-type': 'application/json'
      }
    });
    console.log(response);
    return Promise.resolve(response);
  }

}