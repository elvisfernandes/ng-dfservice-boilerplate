# Boilerplate Angular project to use [ng-dfservice](https://github.com/elvisfernandes/ng-dfservice)

The purpose of this project is to provide a guidance and good practices for the use of [ng-dfservice](https://github.com/elvisfernandes/ng-dfservice) in an Angular project.

These are only *suggestions*. I hope you do better than this :)

# Tips on how to use ng-dfservice

1. Follow the instructions on [ng-dfservice](https://github.com/elvisfernandes/ng-dfservice) repo page to know how to properly configure you environment, set up you dev and prod instances, inject DFService and access your API.
2. Create a `dfdatastores` folder to place all your datastores.
3. Create a `dfmodels` folder to place all you model classes.
4. Create a constant in a `myDataStores.ts` file to resume a list of all datastores you have. Then use this file to simplify providing your datastores in `app.module.ts`. In this boilerplate project this file is stored in the `dfdatastores` folder.