import { defineStore } from 'pinia'
import { fetchRaceData } from '../services/raceApi'
import type { Race, RaceApiResponse } from '../types/race'

export const useRaceStore = defineStore('race', {
  state: () => ({
    races: [] as Race[],
    selectedCategoryId: '' as string,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    // Set the selected category ID
    setSelectedCategory(categoryId: string) {
      this.selectedCategoryId = categoryId
    },

    // Fetch race data from the API
    async fetchRaces() {
      this.loading = true
      this.error = null

      try {
        const data = (await fetchRaceData()) as RaceApiResponse

        console.log(data)

        // Map next_to_go_ids to their corresponding race summaries
        this.races = data.next_to_go_ids.map((id: string) => {
          return data.race_summaries[id]
        })
      } catch (error) {
        this.error = 'Failed to fetch races'
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})
