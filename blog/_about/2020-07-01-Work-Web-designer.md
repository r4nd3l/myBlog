---
layout: post
title: "Work - Web designer and front-end developer"
description: "Quarantine project - aka hit time usefully"
tags: [ Work , Web , Development ]
---

###### January 2020 - July 2020

##### Quarantine project - aka hit time usefully

UK - Measham

myFlow is a web application for creating mind-maps and other suitable design patterns, written in JavaScript and targeted for web browsers

- Templating with JS ES6
- Implementing front-end design with TailWindCSS
- JS based webSocket engine under the hood
- Raspberry Pi 3 powered server

#### 1. Introduction

##### 1.1 Objective

> A free-to-use web-based “mind-map” application. The app allows the user to render any type of task quickly and easily, thus providing a free hand for visual display.

##### 1.2 Document standardization / standardization

> Mind-map (as-mind-map) - Mind-map is a chart used to visually organize information. The mind-map shows the relationships between hierarchical and whole pieces. It is often created around a concept or object that is drawn as an image in the middle of a blank page, and is associated with ideas and related representations, such as images, words, and parts of words.

##### 1.3 Description and target group

> This project is a so-called A system based on “boxes” that allows you to display several different (even abstract) topological structures. The surface is thus able to represent virtually all genders and types of layouts in an unbound form. This pattern is most similar to a neural network.

> This project can be significantly useful in a variety of design processes where the user wants to visualize the process of brainstorming, but especially for creative teams where it needs to be presented quickly and frequently changed across multiple logical processes or operations.

##### 1.4 Scope of the project

> The purpose of the web application is to facilitate the visual thinking of the users and the convenient, easy and purposeful cooperation of the common workflow (s).

> Training is the primary competence, helping pupils, students, trainees, etc. to work and / or develop. All this interactively and in a way that provides a comfortable user experience and is also available with a variety of service options.

#### 2. General description

##### 2.1 Product Structure

 The web-based mind-map system stores the following information.

- Worksheet details
> This includes the user-created interface and all box elements, as well as all other editing, settings and modifications. The worksheet actively saves changes and makes saved data traceable.

- User details
> Contains personal data about the registered client such as: username, first and last name, date of birth, email address, password, etc .; and depending on the service package or option: token, phone number, scope of activity, etc.

- Service description
> Details of the package or (service) option used by the user, such as: subscription fee, license period, etc.

##### 2.2 Product description (illustration)

> Main features of the mind-map application system, as shown in the topology-relationship model (box model) below

 (box model illustration)

> The figure shows the layout of the web application system - box - connection model

##### 2.3 User classes and their characteristics

> System users must be able to retrieve their profile from the database, which includes previously created workspaces (WokrSheet) (if any). The system supports two types of user rights: client and admin.

> Clients can access client features, and admins can access all features of both clients and the web application. The customer must be able to perform the following functions:

> Profile configuration

- Modification of personal data
- Workspace settings and controls
- Service package / option management
- Sharing and visibility settings
- Delete / delete profile

> Also create, modify and delete an existing workspace.

 The admin (s) must have the following operating functions:

 Manage client functions:
- Screening of compliant substances (guidelines)
- Filtering Scam or Bot profiles (guidelines)
- Online Support (HelpDesk)
- Manage customer-selected services / packages
- Calculate the total sales for a given flight.

 Management of the entire system
- Manage user / customer profiles (activity)
- Testing / managing / implementing updates (provisional)
- Online traffic monitoring
- Scalability
- Authorization (depending on the country - imprinting)
- Network endpoints (servers, switches, routers - position geometry) monitoring
- Logins (online status (s) - list of logged in device (s))

> Each cluster server has a limited number of so-called has a "chunk".
Therefore, network operation and administrator supervision are especially important.

##### 2.4 Operating / Runtime Environment

> The operating environment of the mind-map application system is listed below

- Distributed database (RPi cluster)
- Client / server system
- Operating system: Linux (server)
- Database: sql + database
- Platform (s): HTML / CSS / Java / PHP

##### 2.5 Design and Implementation Restrictions

- Global correlation (interdependence, interdependence) scheme, fragmentation and allocation topics
- SQL commands for the above queries / applications
- Response to applications 1 (A) and 2 (B), their global (cooperative) collaborative query
- Operation using at least one central database management system (minimum)

##### 2.6 Terms and Conditions (Appendices)

> Suppose this is a distributed web service system used in the following application (location): - (Logged in locations / points / locations)

- (Type A) - A call retrieved from any source on the distributed cluster server will be made on the client side and then the received changes will be recorded back on the server side

- (Type B) - The central database management system handles the above task / query almost similarly

> Assuming both requests are in the same process, the connections should be synchronized and / or the user should be notified that they are online at multiple points on the system.

#### 3. System Features

- Description and priority

> The web application system stores information about user profiles, type of services, personal preferences, prices and subscriptions. Of course, this project is a top priority, as protecting the user points connected to the system is very important for multiple logins.

- Distributed / distributed database

> A distributed database means that a single application must be able to operate transparently between data that is distributed in a number of different databases and interconnected by a communication network, as shown below.

- Client or server system

> The term client / server refers primarily to the architecture or logical division of responsibilities, the client is the application (also known as front-end) and the server is the DBMS (also known as wallpaper) (database management system).

 A client / server system is a distributed system in which

- Some sites are client pages, others are server pages
- All data is located on the server location
- All applications run on the client site

#### 4. External surface requirements

##### 4.1 User Interfaces

- Front-end software: HTML, CSS, JS
- Back-end software: PHP

##### 4.2 Hardware Interfaces

- Windows, MAC, Linux
- Browser that supports: CGI (Common Gateway Interface), HTML & Javascript and PHP

##### 4.3 Software Interfaces

> The following shows the software used for the mind-map online application

- Used software Description
- Operating system We chose Linux for this purpose based on its support and user - friendliness
- Database MySQL was chosen to store user profiles and desktops
- HTML, CSS, JS, PHP - We chose web languages for the project due to their interactive support

##### 4.4 Communication interfaces

> This project supports all types of browsers. We use simple electronic forms for transaction forms, customer service, and so on.

#### 5. Non-functional requirements

 5.1 Performance Requirements

> The steps for implementing a web application database are summarized below

 A) ER Diagram

> The E-R diagram is a method for visualizing the logical structure of a database. This analysis is then used to organize the data into a relation, to normalize the connection, and finally to obtain a relational database.

- **Entities** - Which define the individual real items in an application
- **Properties or Attributes** - These define the properties and relationships of the entity
- **Relationships** - Which connect entities and represent significant dependencies between them.

 B) Normalization (web app - server)

> The basic goal of normalization is to reduce redundancy, which means that information only needs to be stored once. Repeated storage of information leads to wastage of storage space and an increase in the total size of the data stored

> If the database is not designed correctly, it may cause modifications. Modification anomalies occur when data is added, changed, or deleted from the database table. Similarly, in traditional databases as well as in poorly constructed relational databases, data as such can be a redundancy problem. These can be eliminated by normalizing the database

> Normalization is the process of breaking a table into smaller tables. In order for each table to cover a single topic.

> There are three modifications of abnormalities, and the formulation of the first, second, and third normal forms (3NF) is considered sufficient for most practical applications. This can only be considered if we follow a thorough analysis and a full understanding of its consequences

5.2 Security requirements

> If a catastrophic error occurs, for example due to a disk crash, a large part of the database will be severely damaged.

- The recovery method restores a previous copy of the database

> Backup to store the archive, which reconstructs a more current state. Bound transactions are resubmitted and compared from the backup log, of course - until failure.

 5.3 Protection requirements (long term)

> Security systems, like many other applications, require database storage. However, the special requirements of the security market mean that service providers must carefully select their database partner

 5.4 Software Quality Features

- **Availability** - The profile and thus the workspace (s) must be available after using the service, as many customers can "queue online" at the same time (tumultus)
- **Correct** - The selected package / service option must generate and load the appropriate or associated desktop setting as intended
- **Sustainability** - Administrators and users must follow usage policies correctly
- **Usability** - The mind-map online system must meet the needs of the maximum number of customers and users
