import Crag from '@/models/Crag'

export const CragConcern = {
  data () {
    return {
      crag: null,
      loadingCrag: true
    }
  },

  created () {
    if (this.$route.params.cragId) this.getCrag()
  },

  methods: {
    getCrag: function () {
      this.loadingCrag = true
      new Crag()
        .find(this.$route.params.cragId)
        .then((resp) => {
          this.crag = resp
          this.$root.$emit(
            'setAppTitle',
            {
              title: this.crag.name,
              avatar: this.crag.coverUrl()
            }
          )
        })
        .catch((err) => {
          this.$root.$emit('alertFromApiError', err, 'crag')
        }).finally(() => {
          this.loadingCrag = false
        })
    }
  }
}