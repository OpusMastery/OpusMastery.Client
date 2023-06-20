import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiInstance } from 'boot/axios';
import { useIdentityStore } from 'stores/identity/identityStore';
import { EmployeeDetails } from 'stores/models';

export const EMPLOYEE_DETAILS_ENDPOINT = '/api/v1/employees/details';

export const useEmployeeStore = defineStore('employee', () => {
    const identityStore = useIdentityStore()

    const email = ref('');
    const employeeId = ref('');
    const companyId = ref('');

    async function getEmployeeId(): Promise<string> {
        if (employeeId.value) {
            return employeeId.value
        }

        await setNewEmployee();
        return employeeId.value;
    }

    async function getCompanyId(): Promise<string> {
        if (companyId.value) {
            return companyId.value
        }

        await setNewEmployee();
        return companyId.value;
    }

    async function setNewEmployee(): Promise<void> {
        try {
            const response = await apiInstance.get(EMPLOYEE_DETAILS_ENDPOINT);
            const employeeDetails = {
                email: response.data.email,
                employeeId: response.data.employeeId,
                companyId: response.data.companyId
            };

            setEmployeeDetails(employeeDetails);
        } catch (_) {
            identityStore.clearAuthenticationCredentials();
            this.router.push({ name: 'SignInPage' })
        }
    }

    function setEmployeeDetails(employeeDetails: EmployeeDetails) {
        email.value = employeeDetails.email;
        employeeId.value = employeeDetails.employeeId;
        companyId.value = employeeDetails.companyId;
    }

    return { email, employeeId, companyId, getEmployeeId, getCompanyId };
});
