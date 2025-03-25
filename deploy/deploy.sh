#!/bin/bash
# This script automates deployment tasks for the project.

echo "Starting deployment..."
# Run Terraform tasks
terraform init
terraform apply -auto-approve

# Run Ansible tasks
ansible-playbook -i inventory playbook.yml

echo "Deployment complete."