# Work Sample - Contact Us Page

## Tech Stack
- **Frontend:** React + Tailwind CSS
- **Backend:** Express.js

## How to Run

### 1. Using Docker

**Requirements:**
- Docker Version: 4.32.0 (157355) Mac
- Ports 3000 and 4000 must be available

**Instructions:**
1. Open your terminal.
2. Navigate to the project directory.
3. Execute the following command:
   ```bash
   docker compose up --build
   ```
4.	After the build completes, you can access the applications in your browser:
- Client: http://localhost:3000
- Server: http://localhost:4000

### 2. Running without Docker
1.	Ensure Node.js 18+ and npm are installed on your machine. Ports 3000 and 4000 must be available.
2.	Navigate to the project directory.
3.  Install the dependencies for both frontend and backend:
 ```bash
    cd client
    npm install
    cd ../server
    npm install
    npm start
    cd ../client
    npm start
  ```
4.  You can access the applications in your browser:
- Client: http://localhost:3000
- Server: http://localhost:4000

# Assumptions
- Assuming the page data returned from API response is an array with a single object.
- Assuming user email is unique and only save the latest form data from the same email
- Assuming the saved form data are located in `/node/form_data` folder and bind to `app/form_data` in docker container.
- Assuming the server and client running in separate containers for modularity, scalability, and a cleaner separation of concerns.
