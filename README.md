# Post Code App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## 
Open the .Net core WebApi application

Build the Application & resolve the conflict if any.

## Open Package Manager Console

Make sure you have selected the project 'Project.DB'

And paste the below cmd in PM>

## PM> ADD-MIGRATION initials4

Build started...
Build succeeded.
To undo this action, use Remove-Migration.

And then run the below cmd-

## PM> UPDATE-DATABASE

Build started...
Build succeeded.
Applying migration 'xxxxxxxx_initials4'.
Done.

## *****
Open the application
Goto folder name: product_app
Type cmd if you are in the folder not in >  
## cd product_app  
enter

Make sure the localhost/port # is same as the .netcore webappi.
If mismatch then goto the file name 'productSlices' and update.
fallow the below instruction

### `npm install`

## Available Scripts

For install all dependencies

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Tech Stack

**Client:** React, Redux, styled-components, react-select

## API Reference

#### Get products collection

```http
  GET https://localhost:5001/api/product
```

| Parameter  | Type     | Description                    |
| :--------- | :------- | :----------------------------- |
| `` | `` | **Required**. get the product details |

#### Get Search  result

```http
  GET https://localhost:5001/api/product/serachproducts/${payload}
```

| Parameter     | Type  | Description                                   :-------------------------------------------- |
| `SearchValue` | `string` | **Required**. get product collection 

#### Get filter  result

```http
  GET https://localhost:5001/api/product/orderbyproducts/${payload}
```

| Parameter     | Type  | Description                                   :-------------------------------------------- |
| `filterValue` | `string` | **Required**. get product collection 
