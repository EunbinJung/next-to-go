// fetch the Race Data from the API and return it as a JSON object

export async function fetchRaceData() {
  try {
    const res = await fetch(
      `https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=20`,
    )

    const data = await res.json()
    return data.data
  } catch (error) {
    console.error(error)
  } finally {
    console.log('fetch finished')
  }
}
