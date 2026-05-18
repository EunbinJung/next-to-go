import { describe, expect, it } from 'vitest'
import { formatTime } from '../../src/utils/formatTime'

describe('formatTime', () => {
  it('formats minutes and seconds correctly', () => {
    expect(formatTime(125)).toBe('02:05')
  })

  it('returns race started when time is below 0', () => {
    expect(formatTime(-10)).toBe('LIVE')
  })

  it('formats hours correctly', () => {
    expect(formatTime(3661)).toBe('01:01:01')
  })
})
