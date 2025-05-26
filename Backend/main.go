package main

import (
	"example.com/ink/db"
	"example.com/ink/models"
	"example.com/ink/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	// Cors
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
	// DB Init
	db.InitDB()
	db.DB.AutoMigrate(&models.Movie{})
	// Routes
	routes.SetupRoutes(app)
	app.Listen(":8080")
}
