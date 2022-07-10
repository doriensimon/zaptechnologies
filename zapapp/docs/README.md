# Table of Contents
## Database Objects
- [User](#user)
- [Charger](#charger)
- [Driver](#driver)
## Endpoints
- [`createDocument`](#create-document-coming-soon)
- [`updateDocument`](#update-document-coming-soon)
- [`deleteDocument`](#delete-document-coming-soon)
# Database Objects
These are some of the objects that exist inside the database.
## User
Each user of the app (chargers and drivers) has a user object in the collection `users`.  Each document is named by the `uid` that corresponds to the user in Firebase Auth.  These are the attributes:
-   `uid` (string) - the unique id for that user, also the title of the user document
- `firstName` (string) - user's first name
- `lastName` (string) - user's last name
- `charger` (boolean) - whether user is a charger
- `driver` (boolean) - whether user is a driver

## Charger
There is a document for each charger registerd in the app.  The title of each document corresponds to the `uid` of the user. These are the attributes:
- `uid` (string) - uid of the `User`
- `chargerName` (string) - display name of the  `User`
- `location` (geohash) - special firebase geohash object that allows for location querying
- `chargerTypes` (string array) - list of supported charger types
- `rate` (number) - price charged in dollars/kWh
- `outletSpecs` (map) - specs of the outlet
    - `volts` (number) - number of volts of the outlet
    - `amps` (number) - number of amps of the outlet
- `rating` (number) - rating of charger out of 5
- `reviews` (string array) - list of reviews in most recent to least recent

## Driver
There is a document for each driver registered in the app.  Title corresponds to `uid` of user.  These are the attributes:
- `uid` (string) - uid of the `User`
- `name` (string) - name of the `User`
- `rating` (number) - rating of the driver out of 5
- `reviews` (string array) - list of reviews in order from most to least recent
- `cars` (map array) - each car object in the array looks like this:
    - `licensePlate` (string) - license plate number
    - `make` (string) - make of car (Ford, Toyota, Honda, etc.)
    - `model` (string) - model of car (corolla, escape, etc.)
    - `color` (string) - color of car
    - `chargerType` (string) - type of charging point on car
    - `batterySize` (number) - size of battery in kWh
    - `range` (number) - range of the car on a full charge


# Endpoints

## Create Document (coming soon)
    createDocument(path, data)
Creates a document at `path` with the fields and values specified in `data`.
- `path` (string) - path to the document in the firestore database.  Specify document name if you want, otherwise end path with "`/`" character and a wildcard document name will be created.

- `data` (object) - data for the created document

## Update Document (coming soon)
    updateDocument(path, data)
Updates an existing document at `path`.  Values in `data` will overwrite existing values.  If values do not exist in current document, they will be created.  If no document exists at path, it will be created (same as calling `createDocument(path, data)`).
- `path` (string) - path to the document in firestore db
- `data` (object) - fields and values to be updated/created in document at `path`

## Delete Document (coming soon)
    deleteDocument(path)
Deletes a document at `path`.  If no such document exists, nothing happens.
- `path` (string) - path to document in firestore db

## Create Stripe Customer (and others) (coming soon)
    see https://github.com/firebase/functions-samples/blob/main/stripe/functions/index.js

# Views

# Elements
## Button
Defines a Material UI Button with specified styling and functionality.

`path`: `zaptech/elements/button/button.jsx`
`properties`:
- `onClick()`: function to be executed when button is clicked
- `text`: text to be displayed within the button
## TextInput
Defines a Material UI TextField with specified styling and functionality.

`path`: `zaptech/elements/text-input/text-input.jsx`
`properties`:
- `label`: hint text to be displayed when `TextInput` is empty
- `inputError`: text to be outputted if validation of the input text fails