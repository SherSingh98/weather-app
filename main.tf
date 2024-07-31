provider "aws" {
region = "your_aws_region"
}
resource "aws_instance" "weather_app" {
ami = "your_ami_id"
instance_type = "t2.micro"
vpc_security_group_ids = [aws_security_group.weather_app_sg.id]
tags = {
Name = "WeatherAppServer"
}
user_data = <<-EOF
#!/bin/bash
amazon-linux-extras install docker
service docker start
docker pull your_docker_repo/image_name:tag
docker run -d -p 3000:3000 your_docker_repo/image_name:tag
EOF
}
resource "aws_security_group" "weather_app_sg" {
name = "weather_app_sg"
description = "Allow inbound traffic for weather app"
ingress {
from_port = 80
to_port = 80
protocol = "tcp"
cidr_blocks = ["0.0.0.0/0"]
}
egress {
from_port = 0
to_port = 0
protocol = "-1"
cidr_blocks = ["0.0.0.0/0"]
}
}