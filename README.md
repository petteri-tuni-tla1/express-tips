# Introduction

This project contains some sample GitLab CI/CD pipelines that demonstrate different CI/CD features.

# Samples

## TotD

Tip of the Day service contains a script to be run with every login to a bash environment - linux server, WSL, etc.
It contains the actual tips files and the script. Both are deployed to remote hosts, either for user specific or host wide use. The pipeline build the service by "compiling" the tips files to simple enumerated versions, tests the script and deploys it to remote server.

# Links and References

* https://docs.gitlab.com/ee/ci/pipelines/
* https://docs.gitlab.com/ee/ci/ssh_keys/
* https://www.udemy.com/course/gitlab-ci-pipelines-ci-cd-and-devops-for-beginners/
* https://expressjs.com/en/starter/installing.html

