package routes

import (
	"example.com/ink/controllers"
	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")

	api.Get("/trending", controllers.GetTrendingMovies)
	api.Post("/search", controllers.TrackSearch)
}
