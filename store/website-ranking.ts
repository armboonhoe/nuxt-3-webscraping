import { defineStore } from 'pinia';
import { WebsiteRankingDto, WebsiteRankingPayload } from '../models/website-ranking';
import queryString from 'query-string'

export const useWebsiteRanking = defineStore('websiteRankingStore', {
    state: () => ({
        websiteRankings: [] as WebsiteRankingDto[]
    }),
    actions: {
        async fetchData(search: WebsiteRankingPayload) {
            this.websiteRankings = await $fetch('/api?' + queryString.stringify(search), { method: 'GET' })
                .then(response => {
                    console.log("from storeData" + response)
                    return response as WebsiteRankingDto[];
                })
                .catch((error) => {
                    throw error.response.data;
                })
        }
    }
}) 