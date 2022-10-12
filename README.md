#  angular10-crud-responsive-application
- author: Jinpo
- welcome to the application ~~


## About

It is a simple responsive UI CRUD application to add/update/delete and view a list of employees. Create in-memory services to support CRUD operations. Write unit/component/integration and functional tests. Create a travis CI pipeline with docker to build, run tests and deploy UI application/services to the AWS cloud .


## Patterns

- Singleton
- Factory Method
- Decorator
- Intercepting Filters
- Directives
- Observer
- Facade
- ... ...

## Principles

1. Object oriented design
2. Divide modules based on functions to make sure low coupling and high cohesion, making it easier for multiple people to develop collaboratively
3. Use lazy loading technology, only need to load the required modules to speed up the access to the website
4. Use the AOT compiler to make sure Smaller Angular framework download size, Faster rendering, Detect template errors earlier, Better security.
5. Establish share and core layer .
6. Use responsive layout to make it easier to integrate technologies such as pwa or ionic for mobile deployment
7. Use router guards to control access to different parts of your app to ensure better security
8. Exception management
    - Use interceptors to manage requests exceptions 
    - Add your own exception handling to the processing logic
9. Keep controllers simple, Customizable form, pages to simplify the difficulty of complex form development and improve delivery speed
    - Dynamic form. Use configuration to generate forms and Validation automatically 
    - Custom components and Dynamic component loading, dynamically add components to the page based on configuration.
10. Use life cycle check hooks as little as possible to perform operations. If necessary, use as little logic as possible
11. Event driven, Use eventBus to share Notifications/events 
12. ... ... 

These principles, if applied wisely, can help to maintain sustainable development speed over time, and allow new features to be delivered easily. 

## Testability

    -- Running unit tests

        Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
        
        #Code coverage
        Run ` npm run test -- --no-watch --no-progress --code-coverage --browsers=ChromeHeadlessCI`
        
        Results:

        ```
        =============================== Start Test ===============================
        TOTAL: 39 SUCCESS
        TOTAL: 39 SUCCESS
        TOTAL: 39 SUCCESS
        =============================== Coverage summary ===============================
        Statements   : 93.25% ( 152/163 )
        Branches     : 91.35% ( 74/81 )
        Functions    : 93.22% ( 55/59 )
        Lines        : 91.97% ( 126/137 )
        ================================================================================
        ```


## CICD Pipeline – build, compile, run tests in separate stages, reporting, deploy

    -- use docker to build , compile
        - docker build -t guojinpo/angular10-crud-responsive-application -f Dockerfile.dev .
        - docker run  guojinpo/angular10-crud-responsive-application npm run build:prod

    -- Use Docker to run tests in separate stages, reporting:
        - docker run  guojinpo/angular10-crud-responsive-application 
            npm run test -- --no-watch
            --no-progress --code-coverage 
            --browsers=ChromeHeadlessCI

    -- Deploy to AWS ElasticBeanstalk
        deploy:
        provider: elasticbeanstalk
        region: "us-east-1"
        ... ...  

![pipeline2](https://user-images.githubusercontent.com/56673360/95015031-4a2bdf80-067d-11eb-8b24-55a6d1e7903f.jpg)             


## Overview of application framework 

```
--@core layer
    --configs 
        --dynamic-component-config.ts
        --employee-layout-config.ts
    --directives
        --dynamic-component.directive.ts
    --event
        --event-bus.service.ts
    --guards
        --auth.guard.ts
    --interceptors
        --exception-interceptor
    --models
        --employee.ts
    --services
        --dynamic-form.service.ts
        --register-component.service.ts
    --util
        --http.service.ts

--modules layer

    --employees
        --service
        --update-employee
        --employee-list
        --employees.module.ts
        --employees-routing.modules.ts
    --cars
    --...

--shared layer
    -- dynamic-components
        --custom-dropdown
        --custom-input
        ...
        --custom-base.component.ts
    --dynamic-form
    --footer
    --header
    --share.module.ts
--app main layer
    --app-routing.module.ts
    --app.module.ts
    --in-memory-data.service.ts
```


## Build docker image

```
$ docker build -t myapp . 
$ docker build -t myapp -f Dockerfile.dev .
```

## Run the container

```
$ docker run -d -p 8080:80 myapp
```

## Project preview

### Employee List
![employee-list](https://user-images.githubusercontent.com/56673360/95016893-9c263280-0688-11eb-8b33-dddc586e6c36.jpg)

### Employee Edit Page
![employee-edit](https://user-images.githubusercontent.com/56673360/95016892-992b4200-0688-11eb-97f3-da24ad983bae.jpg)

### Employee View Page
![employee-view](https://user-images.githubusercontent.com/56673360/95016898-a0525000-0688-11eb-879a-0a9b10609058.jpg)

### Employee Create Page
![employee-create](https://user-images.githubusercontent.com/56673360/95016900-a0eae680-0688-11eb-970e-444775324113.jpg)

If the verification is invalid, we will remind the user and the submit button is disabled.
![employee-create-validation](https://user-images.githubusercontent.com/56673360/95016901-a2b4aa00-0688-11eb-8069-ea071ad45990.jpg)

### Employee Delete Confirmation
![employee-delete-confirmation](https://user-images.githubusercontent.com/56673360/95016904-a34d4080-0688-11eb-8a96-1bc24a65f7b6.jpg)

### Employee responsive Layout 
![employee-response-layout01](https://user-images.githubusercontent.com/56673360/95016894-9e888c80-0688-11eb-8bfd-2b0f0fd1c817.jpg)
![employee-response-layout02](https://user-images.githubusercontent.com/56673360/95016896-9f212300-0688-11eb-8f52-c50b2c3189d7.jpg)






