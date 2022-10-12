import { Employee } from '../models/employee'
import { CustomDropdown, CustomTextBox, DynamicComponentConfig } from './dynamic-component-config'

export class EmployeeLayoutConfig {

    dynamicComponentConfig: DynamicComponentConfig<string>[] = [];

    constructor(employee: Employee, viewType: string) {
        const readonly = viewType.toLowerCase() === 'view' ? true : false
        this.dynamicComponentConfig = [
            new CustomDropdown({
                name: 'customDropdown',
                key: 'sex',
                label: 'Sex:',
                value: employee?.sex,
                readonly,
                options: [
                    { key: 'male', value: 'male' },
                    { key: 'female', value: 'female' },
                ],
                order: 3
            }),
            new CustomTextBox({
                name: 'customInput',
                key: 'employeeID',
                type: 'text',
                label: 'Employee ID:',
                readonly: viewType.toLowerCase() === 'create' ? false : true,
                value: employee?.employeeID,
                required: true,
                order: 1
            }),
            new CustomTextBox({
                name: 'customInput',
                key: 'fullName',
                type: 'text',
                label: 'Full Name:',
                readonly,
                value: employee?.fullName,
                required: true,
                order: 1
            }),
            new CustomTextBox({
                name: 'customInput',
                key: 'address',
                type: 'text',
                label: 'Address:',
                readonly,
                value: employee?.address,
                required: true,
                order: 2
            }),
            // new CustomTextBox({
            //   name: 'customInput',
            //   key: 'cardNumber',
            //   type: 'text',
            //   label: 'Card Number:',
            // readonly,
            //   value: employee?.cardNumber,
            //   required: true,
            //   order: 4
            // }),
            new CustomTextBox({
                name: 'customInput',
                key: 'homePhone',
                type: 'text',
                label: 'Home Phone:',
                readonly,
                value: employee?.homePhone,
                required: false,
                order: 5
            }),

            new CustomTextBox({
                name: 'customInput',
                key: 'email',
                label: 'Email:',
                type: 'email',
                readonly,
                value: employee?.email,
                order: 6
            }),
            new CustomTextBox({
                name: 'customInput',
                key: 'briefIntroduction',
                label: 'Brief Introduction:',
                type: 'textarea',
                readonly,
                value: employee?.briefIntroduction,
                order: 6
            })
        ].sort((a, b) => a.order - b.order);
    }


}
