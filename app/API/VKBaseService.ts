import axios from "axios"
import config from "App/API/config"

const VK_API_URL = config.url
const VK_API_ACCESS_TOKEN = config.accessToken
const VK_API_GROUP_ACCESS_TOKEN = config.groupAccessToken

export default class VKBaseService {
  protected static async request(
    endpoint: string,
    version: string,
    params: Record<string, any> = {},
    fromGroup: boolean = false,
  ): Promise<any> {
    const url = `${VK_API_URL}${endpoint}`
    const defaultParams = {
      v: version,
      access_token: fromGroup ? VK_API_GROUP_ACCESS_TOKEN : VK_API_ACCESS_TOKEN,
    }

    try {
      const response = await axios.get(url, {
        params: { ...defaultParams, ...params },
      })

      if (response.data?.error) {
        console.log(
          `[${url}, ${version}, ${JSON.stringify(params)}] \nerror:`,
          response.data,
        )
        return response.data
      }

      return response.data?.response
    } catch (error) {
      console.error(`Error making request to ${url}:`, error)
      throw new Error(`Failed to make request to ${url}`)
    }
  }
}
