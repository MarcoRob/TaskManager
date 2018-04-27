
<script>
import { Bar, mixins  } from 'vue-chartjs'
export default {
  extends: Bar,
  mixins: [mixins.reactiveProp, mixins.reactiveData],
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data,{responsive: true, maintainAspectRatio: false});
  }
}
</script>