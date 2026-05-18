// Sort races by their advertised start time in ascending order

import type { Race } from '../stores/raceStore'

export function sortRaceByStartTime(races: Race[]) {
  return [...races].sort(
    (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
  )
}
