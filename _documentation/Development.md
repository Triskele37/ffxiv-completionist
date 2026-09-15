**Environment Setup**

Ensure at least the following is setup on your system:
* Node (at least v26.5.1)
* Git
* Your choice of IDE

**Repository Setup**
1. Open a console window
2. Navigate to the directory you'd like this repo to clone into
3. Run `git clone https://github.com/Triskele37/ffxiv-completionist.git`

**Node Modules**

Currently, only the top-level directory in this project needs to have modules installed  
* `ffxiv-completionist`
  
To install node modules:
1. Open a console window
2. Navigate to the relevant directory within it
3. Run `npm install`

**Running the app**

After all of the above is complete you can serve the app for local development  
To do so:
1. Open a console window
2. Navigate to `ffxiv-completionist` (the top level of this repo)
3. Run `npm run start`

The app will now serve and automatically open once built  

**Development Notes**

Any changes to `/renderer` files will trigger the hot reload i.e. update the served app with those changes  
Any changes to `/main` requires the serve command to be restarted in order to take effect  
The repo contains a workspace for each electron app, only a few commands are provided at root for simplicity  

**Release**

The `electron:build` command can be used to build the app for release  
Release artifacts can be found in `ffxiv-completionist/release` once the script completes  

Note: Running this script breaks the local serve if it is active and requires it be restarted  
