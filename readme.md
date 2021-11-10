<!-- PROJECT LOGO -->

<p align="center">
   <p align="center">
    <img src="https://www.gifsanimados.org/data/media/165/futbol-americano-y-futbol-imagen-animada-0093.gif" alt="Logo" width="80" height="80">
  </p>
   
  <p align="center">
    Soccer API
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#authentication">Authentication</a></li>
    <li><a href="#routes">Routes</a></li>
    <li><a href="#queris">Queris</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Architecture

![The Architecture](/src/docs/architecture.PNG 'Architecture')

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/martinEchavez/soccer_api
   ```

2. Install NPM packages

   ```bash
   npm install
   ```

## Usage

1. Create an `.env` file with the following environment variables.

   | name              |        value        |
   | ----------------- | :-----------------: |
   | PORT              |        3000         |
   | CLIENT_DB         |  db client sqlite3  |
   | FILENAME_DATABASE | connection filename |
   | JWT_SECRET_KEY    |   JWT secret key    |

2. Run the following command

   ```bash
     npm run dev
   ```

## Authentication

### credentials

| name     | value |
| -------- | :---: |
| username | admin |
| password | admin |

| `POST` | : `https://graphic-market-soccer-app.herokuapp.com/api/auth/signup`

| `POST` | : `https://graphic-market-soccer-app.herokuapp.com/api/auth/signin`

`Body Json Input`

```json
{
  "username": "admin",
  "password": "admin"
}
```

`Response`

```json
{
  "auth": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

## Routes

### authetication

> | `POST` | : `https://graphic-market-soccer-app.herokuapp.com/api/auth/signup`

> | `POST` | : `https://graphic-market-soccer-app.herokuapp.com/api/auth/signin`

### player

> | `GET` | : `https://graphic-market-soccer-app.herokuapp.com/api/player`

> | `GET` | : `https://graphic-market-soccer-app.herokuapp.com/api/player?position=attack`

> | `GET` | : `https://graphic-market-soccer-app.herokuapp.com/api/player/2`

> | `POST` | : `https://graphic-market-soccer-app.herokuapp.com/api/player`

`Body Json Input`

```json
{
  "name": "name",
  "age": 0,
  "team_id": 0,
  "squad_id": 0,
  "position": "position"
}
```

> | `PUT` | : `https://graphic-market-soccer-app.herokuapp.com/api/player/2`

`Body Json Input`

```json
{
  "name": "name",
  "age": 0,
  "team_id": 0,
  "squad_id": 0,
  "position": "position"
}
```

> | `DELETE` | : `https://graphic-market-soccer-app.herokuapp.com/api/player/2`

### team

> | `GET` | : `https://graphic-market-soccer-app.herokuapp.com/api/team`

> | `GET` | : `https://graphic-market-soccer-app.herokuapp.com/api/team/2`

> | `POST` | : `https://graphic-market-soccer-app.herokuapp.com/api/team`

`Body Json Input`

```json
{
  "name": "name",
  "league": "league",
  "country": "country"
}
```

> | `PUT` | : `https://graphic-market-soccer-app.herokuapp.com/api/team/2`

`Body Json Input`

```json
{
  "name": "name",
  "league": "league",
  "country": "country"
}
```

> | `DELETE` | : `https://graphic-market-soccer-app.herokuapp.com/api/team/2`

## Queris

> SELECT \* FROM player

> SELECT \* FROM team

## License

[MIT](https://choosealicense.com/licenses/mit/)
