#!/usr/bin/env bash
set -euo pipefail

# Run this after unzipping to initialize a local git repo for the template.
# (On GitHub you can just upload the files as a new repo.)

git init
git add .
git commit -m "chore: initial template for checkpoint 2"

git branch -M main

# Optional: create placeholder feature branches (students will create their own in forks)
git checkout -b feature/user-authentication
git checkout main
git checkout -b feature/database-connection
git checkout main
git checkout -b feature/api-endpoints
git checkout main

echo "Template initialized with main + 3 feature branches."
