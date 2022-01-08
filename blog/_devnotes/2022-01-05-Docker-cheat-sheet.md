---
layout: post
title: Docker commands cheat sheet
description: "Practical guide to use Docker"
tags: [ Docker , Web ]
---

## Information

list running containers
```
$ docker ps
```

list running and stopped containers
```
$ docker ps -a
```

list the logs from a running container
```
$ docker logs [CONTAINER]
```

list low-level information on an object
```
$ docker inspect [OBJECT_NAME/ID]
```

list real time events from a container
```
$ docker events [CONTAINER]
```

show port (or specific) mapping from a container
```
$ Docker port [CONTAINER]
```

show running processes in a container
```
$ docker top [CONTAINER]
```

show live resource usage statistics of containers
```
$ docker stats [CONTAINER]
```

show changes to files (or directories) on a filesystem
```
$ docker diff [CONTAINER]
```

show all locally stored images
```
$ docker images ls 
```

show history of an images
```
$ docker history[IMAGE]
```

***

## Start & Stop

start a container
```
$ docker start [CONTAINER]
```

stop a running container
```
$ docker stop [CONTAINER]
```

stop a running container and start it up again
```
$ docker restart [CONTAINER]
```

pause processes in a running container
```
$ docker pause [CONTAINER]
```

unpause processes in a container
```
$ docker unpause [CONTAINER]
```

block a container until other containers stop
```
$ docker wait [CONTAINER]
```

kill a container by sending SIGKILL to a running container
```
$ docker kill [CONTAINER]
```

attach local standard input, output and error streams to a running container
```
$ docker attach [CONTAINER]
```

## Image lifecycle

create an iamge from a Dockerfile
```
$ docker build [URL]
```

build an iamge from a Dockerfile and tags it
```
$ docker build -t [URL]
```

pull an image from a registry
```
$ docker pull [IMAGE]
```

push an image to a registry
```
$ docker push [IMAGE]
```

create an image from a tarball
```
$ docker import [URL/FILE]
```

create an image from a container
```
$ docker commit [CONTAINER] [NEW_IMAGE_NAME]
```

remove an image
```
$ docker rmi [IMAGE]
```

load an image from a tar archieve as stdin
```
$ docker load [TAR_FILE/STDIN_FILE]
```

save an image to a tar archieve stream to stdout with all parent layers, tags and versions
```
$ docker save [IMAGE] > [TAR_FILE]
```

## Container lifecycle

create a container without starting it
```
$ docker create [IMAGE]
```

rename a container
```
$ docker rename [CONTAINER_NAME] [NEW_CONTAINER_NAME]
```

crate and start a container
```
$ docker run [IMAGE]
```

remove a container after it stops
```
$ docker run --rm [IMAGE]
```

start a container and keep it running
```
$ docker run -td [IMAGE]
```

create, start the container and run a command in it
```
$ docker run -it [IMAGE]
```

create, start the container and run a command in it; after executing the container is removed
```
$ docker run -it -rm [IMAGE]
```

delete a container if it is not running
```
$ docker rm [COTNAINER]
```

update the configuration of a container
```
$ docker update [CONTAINER]
```

## Networking

list networks
```
$ docker network ls
```

remove one or more networks
```
$ docker network rm [NETWORK]
```

show information on one or more networks
```
$ docker network inspect [NETWORK]
```

connect to a container to a network
```
$ docker network connect [NETWORK] [CONTAINER]
```

disconnect a container from a network
```
$ docker network disconnect [NETWORK] [CONTAINER]
```

## Custom

Add database inside docker into another container
```
$ docker exec -i sample_mysql_1 mysql -uroot -proott juve-waw < /home/matepc/Downloads/sample.sql
```


```
$ docker exec -ti sample_web_1 bash
```

```
$ docker-compose up -d
```

```
$ docker login sample.company.com --username deploy
```

