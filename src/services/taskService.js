const API_URL =
  'https://api.github.com/repositories/10270250/issues?state=all&per_page=10'

async function request(url, options = {}) {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`API trả về lỗi ${response.status}`)
  }

  return response.json()
}

export async function getTasks(signal) {
  const data = await request(API_URL, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  })

  return data.map((issue) => ({
    id: issue.id,
    title: issue.title,
    completed: issue.state === 'closed',
  }))
}
