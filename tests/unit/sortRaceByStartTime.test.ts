import { describe, expect, it } from 'vitest'
import { sortRaceByStartTime } from '../../src/utils/sortRaceByStartTime'

describe('sortRaceByStartTime', () => {
  it('sorts races by advertised start time', () => {
    const races = [
      {
        race_id: '2',
        advertised_start: { seconds: 1779100860 },
      },
      {
        race_id: '1',
        advertised_start: { seconds: 1779099480 },
      },
    ]

    const result = sortRaceByStartTime(races)

    expect(result[0].race_id).toBe('1')
    expect(result[1].race_id).toBe('2')
  })
})
