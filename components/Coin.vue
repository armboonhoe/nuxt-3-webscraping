<template>
    <div>
        <h1>Latest Bitcoin Price</h1>
        <p>{{ bitcoinPrice }}</p>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    data() {
        return {
            bitcoinPrice: null
        }
    },
    async mounted() {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
        this.bitcoinPrice = response.data.price
    }
}
</script>
  