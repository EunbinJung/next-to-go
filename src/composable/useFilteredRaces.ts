import { computed, type Ref } from 'vue'
import { useRaceStore } from '../stores/raceStore'
import { sortRaceByStartTime } from '../utils/sortRaceByStartTime'

// Returns the next 5 filtered races based on
// selected category and race start time
export function useFilteredRaces(currentTime: Ref<number>) {
  const raceStore = useRaceStore()

  const filteredRaces = computed(() => {
    const races = raceStore.selectedCategoryId
      ? raceStore.races.filter(
          (race) => race.category_id === raceStore.selectedCategoryId,
        )
      : raceStore.races

    // Exclude races that started more than 60 seconds ago
    return sortRaceByStartTime(
      races.filter(
        (race) => race.advertised_start.seconds + 60 > currentTime.value,
      ),
    ).slice(0, 5)
  })

  return {
    filteredRaces,
  }
}
