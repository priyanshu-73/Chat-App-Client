
# Chattu - Chat Application

Chattu is a chat application built with React and Vite. It provides a seamless chat experience with features like group chats, notifications, and more.

## Project Structure

```
client/
	

.eslintrc.cjs


	.gitignore
	

index.html


	

package.json


	public/
	

README.md


	src/
		

App.jsx


		assets/
			

notes.txt


		components/
			auth/
				

ProtectRoute.jsx


			dialogs/
				

AddMemberDialog.jsx


				

ConfirmDeleteDialog.jsx


				

FileMenu.jsx


			layout/
			shared/
			specific/
			styles/
		constants/
			

color.js


			

sampleData.js


		hooks/
		lib/
			

features.js


		

main.jsx


		pages/
			

Chat.jsx


			

Groups.jsx


			

Home.jsx


			

Login.jsx


			

NotFound.jsx


		utils/
			

validators.js


	

vite.config.js


server/
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/chattu.git
    cd chattu/client
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:
```sh
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building the Application

To build the application for production, run:
```sh
npm run build
```

The built files will be in the `dist` directory.

### Linting

To lint the code, run:
```sh
npm run lint
```

## Project Structure

- 

App.jsx

: Main application component.
- 

main.jsx

: Entry point of the application.
- 

src/components/

: Contains all the React components.
- 

src/constants/

: Contains constant values used in the application.
- 

src/pages/

: Contains the different pages of the application.
- 

src/utils/

: Contains utility functions.

