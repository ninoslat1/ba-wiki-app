git add .

echo 'Enter the commit message:'

read commitMessage

git commit -m "$commitMessage"

<<<<<<< HEAD
git push personal main
=======
git push origin main
>>>>>>> f25bdeb06874782b6e21cf61fff3de29bdcd8a57

echo 'Thank you for updated your repository'