@echo off
cd /d %~dp0

echo Creating folder structure...

mkdir src
mkdir src\assets
mkdir src\components
mkdir src\firebase
mkdir src\pages
mkdir src\routes
mkdir src\layouts
mkdir src\utils

echo Creating base files...

type nul > src\pages\Login.jsx
type nul > src\pages\Dashboard.jsx
type nul > src\layouts\MainLayout.jsx
type nul > src\routes\AppRouter.jsx

echo Done!
pause
