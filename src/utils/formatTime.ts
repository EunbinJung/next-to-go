// Formats seconds into a human-readable time format (HH:MM:SS or MM:SS). If the input is 0 or negative, it returns 'LIVE'.

export function formatTime(seconds: number) {
  if (seconds <= 0) {
    return 'LIVE'
  }

  const hours = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  // If there are hours, include them in the format; otherwise, just show minutes and seconds
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}
