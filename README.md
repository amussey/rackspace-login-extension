# Rackspace Login Extension for Chrome





### Install Instructions

1. Clone the git repo to a folder on your local system.
2. In your Google Chrome browser, navigate to the Extensions menu.  (This is located under Settings > Tools > Extensions.)
3. Click the "Load unpacked extension..." and select the folder where the repo was cloned.  (If the button to do this is missing, make sure that the "Developer Mode" is checked.)
4. You should now see the Rackspace logo on your extension bar:  
  ![Alt text](http://i.imgur.com/thmhTLe.png)  
  Click on it, and select the red "Load Accounts" button.
5. On the add accounts page, select your accounts JSON file, formatted in the style listed below.


That's it!  You're good to go!  From now on, when you're on the MyCloud login page, just select the account you would like to login to!

### Accounts JSON File Formatting

The JSON file for the accounts should have 3 fields: name (a optional display name), username, and password.  An example is below:

    [
        {"name": "Becky's Account", "username": "becky_buttons", "password": "******"},
        {"username": "testaccount", "password": "******"},
        {"username": "anotheraccount", "password": "******"}
    ]

