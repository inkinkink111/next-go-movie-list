package controllers

import (
	"example.com/ink/db"
	"example.com/ink/models"
	"github.com/gofiber/fiber/v2"
)

func GetTrendingMovies(c *fiber.Ctx) error {
	var movies []models.Movie
	db.DB.Order("search_count desc").Limit(5).Find(&movies)
	return c.Status(200).JSON(fiber.Map{"message": "success", "data": movies})
}

func TrackSearch(c *fiber.Ctx) error {
	c.Set("Content-Type", "application/json")

	var body models.Movie
	err := c.BodyParser(&body)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"message": "Invalid request body"})
	}
	// Check existing movie
	var existingMovie models.Movie
	// Look for movie id in database
	result := db.DB.Where("movie_id = ?", body.MovieID).First(&existingMovie)
	// Found, update the count
	if result.Error == nil {
		existingMovie.SearchCount += 1
		db.DB.Save(&existingMovie)

		return c.Status(200).JSON(fiber.Map{"message": "Update movie count successfully"})
	}
	// Not found, Create new
	body.SearchCount = 1
	if err := db.DB.Create(&body).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": "Failed to create movie" + err.Error()})
	}
	return c.Status(200).JSON(fiber.Map{"message": "Movie created successfully"})
}
