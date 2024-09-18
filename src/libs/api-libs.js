export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    if (!response.ok) {
        return
    }
    const data = await response.json()
    return data
}

export const getNestedAnimeResponse = async (resource, objectProperty, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const recomAnime = await response.json()
    return recomAnime.data?.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap
    const response = {
        data: data.slice(first, last)
    }

    return response
}
