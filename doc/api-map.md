# API Map:

## Endpoints:

### Auth:

- | **POST** | `API_HOST/api/auth`: To login

### User:

- | **POST** | `API_HOST/api/register`: To create a new user

### Employee: 

- | **GET** | `API_HOST/api/getAll`: To get all employees.

- | **GET** | `API_HOST/api/getById/<id>`: To get an employee based on their id.

- | **GET** | `API_HOST/api/getBySpecialty/<specialty>`: To get all employees based on their specialty.
  - `specialty`'s param can receive the value `all` to get all employees with some specialty.
