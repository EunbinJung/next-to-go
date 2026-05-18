export async function fetchRaceData() {
  try {
    const res = await fetch(
      `https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10`,
    )

    const data = await res.json()

    console.log(data.data)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('fetch finished')
  }
}
