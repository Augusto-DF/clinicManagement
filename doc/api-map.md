# API Map:

## Endpoints:

### Auth:

- | **POST** | `API_HOST/api/auth`: To login

### User:

- | **POST** | `API_HOST/api/register`: To create a new user

### Employee:

- | **GET** | `API_HOST/api/emplyee/getAll`: To get all employees.

- | **GET** | `API_HOST/api/employee/getById/<id>`: To get an employee based on their id.

- | **GET** | `API_HOST/api/employee/getBySpecialty/<specialty>`: To get all employees based on their specialty.
  - `specialty` can receive the value `all` to get all employees with some specialty.

### Appointments:

- | **GET** | `API_HOST/api/appointment/getByEmployee`: To get an appointement list of an employee.

  - Params:
    - `**required** employeeId` - Id of an employee.
    - `**required** startDate` - Date of the interval's start of the appointment list.
    - `**required** endDate` - Date of the interval's end of the appointment list.

- | **POST** | `API_HOST/api/appointment/create`: To create an appointement.
  - Params:
    - `**required** userId` - Id of an user.
    - `**required** employeeId` - Id of an employee.
    - `**required** scheduleDate` - Date of appointment.
    - `description` - Description of an appointment.
