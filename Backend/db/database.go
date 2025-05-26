package db

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	_ "modernc.org/sqlite"
)

var DB *gorm.DB

// Initializes the database connection
func InitDB() {
	var err error
	DB, err = gorm.Open(sqlite.Dialector{DriverName: "sqlite", DSN: "file:movies.db?cache=shared&mode=rwc"}, &gorm.Config{})
	if err != nil {
		log.Fatal("failed to connect to database:", err)
	}

}
