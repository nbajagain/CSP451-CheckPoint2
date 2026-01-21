# Database Notes

## What was added
- `src/db.js` provides a stub database interface.

## Why it exists
- Keeps DB logic separate from routes/controllers.
- Makes it easy to replace stub with real database later.

## How to use
- connectDatabase({ url, dbName })
- getDatabaseStatus()
- disconnectDatabase()
