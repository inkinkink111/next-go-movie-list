package models

type Movie struct {
	ID          uint   `gorm:"primaryKey" json:"id"`
	MovieID     int    `json:"movie_id"`
	Title       string `json:"title"`
	SearchCount int    `json:"search_count"`
	PosterUrl   string `json:"poster_url"`
}
