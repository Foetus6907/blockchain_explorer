export default interface FetchApi {
  get(url: string): Promise<Response>
}