# Setup

## Using packages from private repo
* `npm config set @itekako:registry http://178.128.202.189:4873/`
* `cd example-parent`
* `npm install`
* `npm run start`

## Publishing packages to private repo
* In root: `npm install`
* `npm login --registry http://178.128.202.189:4873`
* `npm prepublish-packages`
* `lerna publish --registry http://178.128.202.189:4873`

When going from packages to example-parent you need to remove node_modules from root first, since `CRA` will complain about duplicate packages from root
