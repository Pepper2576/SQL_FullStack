1. Installing MySQL Server on Windows.

Step 1: Download MySQL Installer
Go to the official MySQL website: https://dev.mysql.com/downloads/installer/.
Download the MySQL Installer for Windows (you can select the web or full installer based on your preference).

Step 2: Run the Installer
Double-click the downloaded .msi file to run the installer.
In the setup wizard, choose Custom installation type to ensure you can select all components.
Select MySQL Server and any other components you may need, like MySQL Workbench (which will be covered later).
Follow the on-screen instructions to proceed with the installation.

Step 3: Configure MySQL Server
During installation, you’ll be prompted to configure MySQL Server. Here are some common configurations:
Authentication Method: Choose "Use Strong Password Encryption" for security.
Root Password: Set a strong root password. This will be your administrative password for MySQL.
MySQL Server Configuration: You can leave most settings as default unless you have specific needs (e.g., changing the port).

2. Clone GitRepo

Step 1: Go to https://github.com/Pepper2576/SQL_FullStack and click on the code button to open a dropdown. Either select the download zip option, or copy the HTTPS URL and ust the bash command <git clone (copied HTTPS link)> to clone the repo.

3. Linking MySQL server to app.

Step 1: In the cloned repo copy he code in the sqlSetUp.sql file and paste it into the SQL Workbench and run the code. Once done you should see the employee table in the mydb database.

Step 2: In the backend folder create a file called .env. In the .env file create 5 variables called:
<
SQL_HOST = '127.0.0.1'
SQL_USER_NAME = 'root'
SQL_PASSWORD = (Enter password created during SQL installation)
SQL_DB = 'mydb'

PORT = (Enter server port number)

>

Step 3: Run <npm i> to install all packages in the backend.

Step 4: Navigate to the client folder and repeat step 3 to install the packages for the frontend.

4. Spin up locally.

Step 1: Navigate to backend file and run <npm run dev> in the cmd line the message <server running on port (the port number you added to .env file)> and leave this running.

Step 2: Navigate to the client folder and run <npm run start> to spin you the frontend. If all installation and setup was correct the the app should open automatically on http://localhost:3000/ and display the values input from teh sqlSetUp.sql file.
