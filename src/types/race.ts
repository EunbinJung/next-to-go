export type Race = {
  category_id: string
  race_id: string
  meeting_name: string
  venue_state: string
  venue_country: string
  race_number: number
  advertised_start: {
    seconds: number
  }
}

export type RaceApiResponse = {
  next_to_go_ids: string[]
  race_summaries: Record<string, Race>
}
