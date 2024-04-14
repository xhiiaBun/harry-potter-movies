export interface Movie{
    id: string
    title: string
    duration: string
    budget: string
    release_date: string
}

export interface MovieDetail extends Movie{
    box_office: string
    cinematographers: Array <string>
    poster: string
    producers: Array <string>
    summary: string
}