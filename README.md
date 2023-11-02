# Etumobil


## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Road Map](#road-map)
4. [Installation](#installation)
5. [How It Works](#how-it-works)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

Etumobil is a cutting-edge mobile application designed for students studying at TOBB ETU. Built with Svelte Kit and Capacitor Js, Etumobil offers a modern and responsive and modern design supporting both ios and android phones, making it a convenient tool for students to manage their academic life efficiently. It serves as a comprehensive platform providing various functionalities, including viewing weekly lesson schedules, accessing semester lessons and related information, managing profiles, tracking GPA, accessing school emails, and much more. The app's fetching mechanism involves parsing information from multiple TOBB ETU websites, ensuring the data is up to date and reliable.


## Features

- View weekly lesson schedules
- Access detailed information about semester lessons, including schedules and classes
- Manage user profile information
- Track GPA and view GPA graph
- Access a comprehensive directory of student profiles and their enrolled courses
- Access a complete directory of faculty members with detailed information on their schedules and classes
- View available slots for a given day
- Access and manage school emails
- Add funds to the school's meal card and check the balance
- Access the academic calendar and prerequisite tree for the user's department
- Access information about upcoming exams

## Road Map

### Current Version: 1.0.0

- Basic functionality for viewing schedules and profiles
- Access to GPA and basic academic information
- Enhanced user interface and improved data parsing capabilities

### Future Versions:

- Version 1.1.0: Integration of additional features for efficient communication with faculty and staff
- Version 1.2.0: Implementation of advanced data analytics for personalized academic insights

## Installation

To run Etumobil locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ISmillex/Etumobil.git`
2. Navigate to the project directory: `cd Etumobil`
3. Install Svelte Kit dependencies: `npm install`
4. Install Capacitor dependencies: `npm install @capacitor/core @capacitor/cli`
5. Initialize Capacitor in your project: `npx cap init [name] [id]`
6. Add the desired native platforms: `npx cap add ios` or `npx cap add android`
7. Open the native IDE for your platform: `npx cap open ios` or `npx cap open android`
8. Run the application on a connected device or emulator: `npx cap run ios` or `npx cap run android`

Ensure you have the necessary prerequisites installed for the native platforms, such as Android Studio for Android and Xcode for iOS. For detailed instructions on setting up Capacitor for your specific platform, refer to the Capacitor documentation [here](https://capacitorjs.com/docs). 


## How It Works

Etumobil operates by fetching data from various TOBB ETU websites such as ubs.etu.edu.tr, uzak.etu.edu.tr, ortam.etu.edu.tr, webmail.etu.edu.tr, and etu.edu.tr. The application utilizes a client-server architecture where the client interacts with a centralized SQLite database through GraphQL. The parsing mechanism ensures that the data remains updated and accurate, providing students with real-time information about their academic schedules and other relevant details.

### Advantages

- Real-time data updates from multiple TOBB ETU websites
- Efficient and responsive client-server architecture
- Centralized data management through GraphQL


## ## Contributing

Etumobil is the result of collaborative efforts between [Archyn](https://github.com/ISmillex) and [Alkin](https://github.com/Alkin06). We welcome contributions from the developer community to help enhance Etumobil. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
