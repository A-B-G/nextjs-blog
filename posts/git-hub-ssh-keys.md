---
title: 'SSH Connection to GitHub'
date: '2022-03-02'
---

## Note 
* These instructions only apply to macOS.

* The instructions below were compiled from a number of GitHub articles, which will be referenced throughout.


## Check for existing SSH keys
(You may not need to generate an SSH key if you already have an existing one.) 
1. To check for an existing SSH key run the following command in Terminal:
    `ls -al ~/.ssh`
If you already have a public key, you should see a filename that matches one of the following lines:

        id_rsa.pub
        id_ecdsa.pub
        id_ed25519.pub
    

> ***If you already have an existing key, skip to the section on adding a key to the ssh-agent.***

2. Generate an SSH key by running the following command in Terminal, replacing "your-email-address" with the email used to log in to your GitHub account:

    **`ssh-keygen -t rsa -b 4096 -C "your-email-address"`**

3. Press `enter` to save the new key to the default location.
4. Enter a passphrase for added security or press `enter` to skip this option. (If you created a passphrase, make sure to make a note for later use).
5. Make a note of your key for reference.

## Add a key to the ssh-agent
To add your key to the ssh-agent, use the default command for macOS instead of using an external source like MacPorts or Homebrew.
1. Start the ssh-agent by running the following command in Terminal:

    **`Eval "$(ssh-agent -s)"`**

You should then see "Agent PID" followed by some numbers. If you don't, you may need to run the command with root access. See section 1 of [this GitHub article](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) to troubleshoot any issues.
2. Open your  **`~/.ssh/config`** file by running this command in Terminal:

    **`open ~/.ssh/config`**


If this file doesn't exist, create it by running  **`touch ~/.ssh/config`**.
3. Add the followng text to your config file, omitting the line `UseKeychain yes` if you did not create a passphrase:
```
    Host *
  		AddKeysToAgent yes
  		UseKeychain yes
  		IdentityFile ~/.ssh/id_ed25519

```
**Note: you may need to change the key `id_ed25519` to match the key you generated.**

4. Make sure your key matches the key listed on the last line, following **`~/.ssh/`**.
You can view your key by running the command  
    **`ls -al ~/.ssh`** 
in Terminal.
5. Add the key to ssh-agent. This command is different depending on which mac version your machine is using.
- If using macOS Monterey, run the following command in Terminal (replace  **`id_ed25519`**  if your key is different):
    
    **`ssh-add –apple-use-keychain ~/.ssh/id_ed25519`**

- If you're not using the latest version of macOS, run the following command in Terminal (replace `id_ed25519` if your key is different):

    **`ssh-add -K ~/.ssh/id_ed25519`**

## Add the key to your GitHub account
1. Copy your public key by running the following command, replacing **`<filename>`** with your file name:

    **`pbcopy < ~/.ssh/<filename>`**

2. Log in to your GitHub account and navigate to the **SSH and GPG keys** section inside your account settings.

3. Click on the "Add SSH key" button and enter a name for your key inside the Title field.

4. Paste the contents inside the Text field, making sure the public key matches the format shown in the Text field.

5. Reconfigure your local repositories to use SSH. (See [this GitHub article](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh) article for details).

## Test the SSH connection
If you created a passphrase to use with your SSH key, make sure you have it handy.
1. Run the following command in Terminal:

    **`ssh -T git@github.com`**

2. If you see a warning about authenticity of host, confirm your RSA key fingerprint matches the one shown in Terminal, then type "yes".

3. For troubleshooting, see [this GitHub article](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection).

## Final note
If you are still having permission issues when pushing to your remote repository, make sure your  **`~/.ssh/`** file has the correct key.

1. View your key by running the following command in Terminal:

    **`ls -al ~/.ssh`**

Make a note of the key, which should match one of the following:

        id_rsa.pub
        id_ecdsa.pub
        id_ed25519.pub

2. Run the following command in Terminal:

    **`open ~/.ssh/config`**

3. Check the last line of the file and make sure the key matches the one you made a note of in the first step.






