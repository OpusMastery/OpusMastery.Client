export interface RegistrationDetails {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface UserCredentials {
    email: string;
    password: string;
}

export interface AuthenticationTokens {
    accessToken: string;
    refreshToken: string;
}

export interface EmployeeDetails {
    email: string;
    employeeId: string;
    companyId: string;
}
