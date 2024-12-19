export async function getPageContent(pageId) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages/${pageId}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching page content:', error)
    throw error
  }
}

