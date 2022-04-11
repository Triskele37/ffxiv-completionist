**Environment Setup**

Ensure at least the following is setup on your system:
* Node (at least v14)
* Git
* Your choice of IDE

**Repository Setup**
1. Open a console window
2. Navigate to the directory you'd like this repo to clone into
3. Run `git clone https://github.com/Triskele37/ffxiv-completionist.git`

**Node Modules**

Multiple directories within this project need to have modules installed  
* `ffxiv-completionist`
* `ffxiv-completionist/app`
  
To install node modules:
1. Open a console window
2. Navigate to the relevant directory
3. Run `npm install`

**Running the app**

After all of the above is complete you can serve the app for local development  
To do so:
1. Open a console window
2. Navigate to `ffxiv-completionist` (the top level of this repo)
3. Run `npm run start`

The app will now serve and automatically open once built  

**Development Notes**

Any changes to `src` files will trigger the hot reload i.e. update the served app with those changes  
Any changes to `app` requires the serve command to be restarted in order to take effect  

**Release**

The `electron:build` command can be used to build the app for release  
Release artifacts can be found in `ffxiv-completionist/release` once the script completes  

Note: Running this script breaks the local serve if it is active and requires it be restarted  
