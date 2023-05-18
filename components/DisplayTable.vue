<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Search Website Ranking</h5>
                        <form @submit.prevent="searchRanking">
                            <div class="form-group">
                                <label for="keywords">Keywords</label>
                                <input type="text" class="form-control" id="keywords" v-model="keywords" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
                <div class="card mt-4" v-if="websiteRankings.length > 0">
                    <div class="card-body">
                        <h5 class="card-title">Search Result</h5>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Domain</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Keywords</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="website in websiteRankings" :key="website.rank">
                                    <td>{{ website.rank }}</td>
                                    <td>{{ website.domain }}</td>
                                    <td>{{ website.title }}</td>
                                    <td>{{ website.description }}</td>
                                    <td>{{ website.keywords }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card mt-4" v-else>
                    <div class="card-body">
                        <h5 class="card-title">No Result</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { WebsiteRanking } from '../types';

export default {
    name: 'WebsiteRankingSearch',
    data() {
        return {
            keywords: '',
            websiteRankings: [] as WebsiteRanking[]
        }
    },
    methods: {
        searchRanking() {
            // call API to search website ranking
            // and update websiteRankings array
            this.websiteRankings = [
                { rank: 1, domain: 'example.com', title: 'Example Domain', description: 'This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission.', keywords: 'example, domain' },
                { rank: 2, domain: 'google.com', title: 'Google', description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.', keywords: 'google, search' },
            ];
        }
    }
}
</script>
  