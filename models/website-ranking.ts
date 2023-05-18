export interface WebsiteRankingDto {
    rank: number
    title: string
    description: string
    url: string
    site_name: string
    image: string
    icon: string
    keywords: string
    success: boolean
}

export interface WebsiteRankingPayload {
    search: string
}