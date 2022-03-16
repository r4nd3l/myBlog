---
layout: post
title: Docker commands cheat sheet
description: "Practical guide to use Docker"
tags: [ Docker , Web ]
---

## Information

list running containers

{% include codeHeader.html %}
```
$ docker ps
```

list running and stopped containers

{% include codeHeader.html %}
```
$ docker ps -a
```

list the logs from a running container

{% include codeHeader.html %}
```
$ docker logs [CONTAINER]
```

list low-level information on an object

{% include codeHeader.html %}
```
$ docker inspect [OBJECT_NAME/ID]
```

list real time events from a container

{% include codeHeader.html %}
```
$ docker events [CONTAINER]
```

show port (or specific) mapping from a container

{% include codeHeader.html %}
```
$ Docker port [CONTAINER]
```

show running processes in a container

{% include codeHeader.html %}
```
$ docker top [CONTAINER]
```

show live resource usage statistics of containers

{% include codeHeader.html %}
```
$ docker stats [CONTAINER]
```

show changes to files (or directories) on a filesystem

{% include codeHeader.html %}
```
$ docker diff [CONTAINER]
```

show all locally stored images

{% include codeHeader.html %}
```
$ docker images ls 
```

show history of an images

{% include codeHeader.html %}
```
$ docker history[IMAGE]
```

***

## Start & Stop

start a container

{% include codeHeader.html %}
```
$ docker start [CONTAINER]
```

stop a running container

{% include codeHeader.html %}
```
$ docker stop [CONTAINER]
```

stop a running container and start it up again

{% include codeHeader.html %}
```
$ docker restart [CONTAINER]
```

pause processes in a running container

{% include codeHeader.html %}
```
$ docker pause [CONTAINER]
```

unpause processes in a container

{% include codeHeader.html %}
```
$ docker unpause [CONTAINER]
```

block a container until other containers stop

{% include codeHeader.html %}
```
$ docker wait [CONTAINER]
```

kill a container by sending SIGKILL to a running container

{% include codeHeader.html %}
```
$ docker kill [CONTAINER]
```

attach local standard input, output and error streams to a running container

{% include codeHeader.html %}
```
$ docker attach [CONTAINER]
```

## Image lifecycle

create an iamge from a Dockerfile

{% include codeHeader.html %}
```
$ docker build [URL]
```

build an iamge from a Dockerfile and tags it

{% include codeHeader.html %}
```
$ docker build -t [URL]
```

pull an image from a registry

{% include codeHeader.html %}
```
$ docker pull [IMAGE]
```

push an image to a registry

{% include codeHeader.html %}
```
$ docker push [IMAGE]
```

create an image from a tarball

{% include codeHeader.html %}
```
$ docker import [URL/FILE]
```

create an image from a container

{% include codeHeader.html %}
```
$ docker commit [CONTAINER] [NEW_IMAGE_NAME]
```

remove an image

{% include codeHeader.html %}
```
$ docker rmi [IMAGE]
```

load an image from a tar archieve as stdin

{% include codeHeader.html %}
```
$ docker load [TAR_FILE/STDIN_FILE]
```

save an image to a tar archieve stream to stdout with all parent layers, tags and versions

{% include codeHeader.html %}
```
$ docker save [IMAGE] > [TAR_FILE]
```

## Container lifecycle

create a container without starting it

{% include codeHeader.html %}
```
$ docker create [IMAGE]
```

rename a container

{% include codeHeader.html %}
```
$ docker rename [CONTAINER_NAME] [NEW_CONTAINER_NAME]
```

crate and start a container

{% include codeHeader.html %}
```
$ docker run [IMAGE]
```

remove a container after it stops

{% include codeHeader.html %}
```
$ docker run --rm [IMAGE]
```

start a container and keep it running

{% include codeHeader.html %}
```
$ docker run -td [IMAGE]
```

create, start the container and run a command in it

{% include codeHeader.html %}
```
$ docker run -it [IMAGE]
```

create, start the container and run a command in it; after executing the container is removed

{% include codeHeader.html %}
```
$ docker run -it -rm [IMAGE]
```

delete a container if it is not running

{% include codeHeader.html %}
```
$ docker rm [COTNAINER]
```

update the configuration of a container

{% include codeHeader.html %}
```
$ docker update [CONTAINER]
```

## Networking

list networks

{% include codeHeader.html %}
```
$ docker network ls
```

remove one or more networks

{% include codeHeader.html %}
```
$ docker network rm [NETWORK]
```

show information on one or more networks

{% include codeHeader.html %}
```
$ docker network inspect [NETWORK]
```

connect to a container to a network

{% include codeHeader.html %}
```
$ docker network connect [NETWORK] [CONTAINER]
```

disconnect a container from a network

{% include codeHeader.html %}
```
$ docker network disconnect [NETWORK] [CONTAINER]
```

## Custom

Add database inside docker into another container

{% include codeHeader.html %}
```
$ docker exec -i sample_mysql_1 mysql -uroot -proott juve-waw < /home/matepc/Downloads/sample.sql
```



{% include codeHeader.html %}
```
$ docker exec -ti sample_web_1 bash
```


{% include codeHeader.html %}
```
$ docker-compose up -d
```


{% include codeHeader.html %}
```
$ docker login sample.company.com --username deploy
```

