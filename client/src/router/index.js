import Router from 'vue-router'

import components from '@/components'


export default new Router({ //Routes to router-link elements
    routes: [
        {
            path: '/',
            component: components.Home
        },

        {
          path: '/employees',
          component: components.EmployeeList
        },

        {
          path: '/laptops',
          component: components.LaptopList
        },

        {
          path: '/employee/:id',
          name: 'employee',
          component: components.Employee
        },

        {
          path: '/laptop/:id',
          name: 'laptop',
          component: components.Laptop
        },

        {
          path: '/create_employee',
          component: components.CreateEmployee
        },

        {
          path: '/create_laptop',
          component: components.CreateLaptop
        }

    ]
})
