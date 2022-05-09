---
path: /birdle-a-medium-clone
category: "Nuxt3 | Web"
title: "Birdle : A Medium Clone Built with Appwrite"
summary: "The web app generates dynamic gradients. You can change direction of the colors."
gitlink: "https://github.com/sahilpatel09/Birdle-Appwrite-Hackathon"
liveurl: "http://medium-lac.vercel.app/"
date: 2022-05-08
tags: [ 'Nuxt3', 'Appwrite' ]
img: "https://res.cloudinary.com/sahil-patel/image/upload/v1651819288/finocrunch/appwritehack/Birdle_2_bu33c2.png"
---

# Overview of the Project
Birdle( pronounced as 'baerdle' ) is a clone of Medium.com webapp. it is built with an amazing backed of Appwrite and Nuxt3.  I have tried to implement some of the features of medium with Appwrite using a NoSQL database. 

Check out the demo over here : [Birdle Demo ](https://medium-lac.vercel.app)
Note: Please use a computer or laptop as the app is not fully optimized for mobile devices.

The idea behind building this project was to use Nuxt3 and Appwrite together and learn both of them.

As Nuxt is still in beta, I did not want to lose this chance of learning it for the future. 

I had heard of Appwrite but never used it, but in the last few days, I have deployed it on the cloud, built an app, and deployed. Learned a lot about Appwrite and the community is awesome.

## Features
* Users can register using <code>magic-link</code> and <code>Google OAuth</code> .
* Follow users and get recent articles from them.
* Create stories and publish them.
* Upload user avatar
* Create blog posts, publish and make a draft
* CRUD on blog posts
* Create publications
* Get the latest blog articles on the Dashboard
* Check out all the following users
* Add 5 tags to each article post
* Each tag can be searched using /tag/[tag_name] route
* Edit user settings
* Manage publications
* Check published and draft stories.
* Create & Edit Publications


## Tech Stack

![https://res.cloudinary.com/sahil-patel/image/upload/v1651563658/finocrunch/appwritehack/appwritehack-image_srqpii.png](https://res.cloudinary.com/sahil-patel/image/upload/v1651563658/finocrunch/appwritehack/appwritehack-image_srqpii.png)
```
| Tech          | Purpose     |
| -----------   | ----------- |
| Nuxt3         | Frontend    |
| Tailwind CSS  | Text        |
| SendInBlue    | Send Emails |
| Vercel        | Deployment  |
```

### Appwrite - The Backend Guy
Appwrite has won me over firebase. I did not think of Appwite to be so easy in the first encounter. The one thing that makes Appwrite awesome is its documentation and the easy-to-use API.

In this app, I have used Magic-link and Google authentication, a database to store posts, user data, publications, and storage for all the media related to blog posts and users. 

To get images and names of the users with their initials, Avatar API was the boon. There are many third-party APIs available that provide this service, but having it integrated is a plus for Appwrite.

### Nuxt3 - The Front-end Guy
I do mostly use Vue3 in my projects. I learnt a lot of things about Nuxt3 while building <code>Birdle</code>. I encountered many problems but lastly found solutions either through community or digging myself into the Nuxt codebase.

### TinyMCE - The Builder/Contractor
Like Medium, Birdle also provides support for adding articles. I wanted to build an editor similar to Medium but did not have enough time to go through all the hassle so I used TinyMCE for the purpose. It served the purpose and in the future, I will create the Medium editor for Birdle.

### TailwindCSS - The House-keeping
Tailwind is my go-to tool for anything in CSS. I have built the whole Birdle web app using Tailwind only and I am happy that it turned out awesome.  

### SendInBlue - The Email Guy
I was looking to send emails as soon as the user is registered. but the default mailer is no more there in Appwrite. So, I used SendinBlue to send emails. 


## Future Improvements
* Stats for individual post
* Mobile UI implementation
* Add Publication member functionality
* Notifications
* The original Medium Editor
* Implement global tags collection
* Implementation of Lists
* Search functionality for People, Publications & articles

## Submission Category
Web2 Wizards

## Link to Code
{ pretty embed }

{% github sahilpatel09/Birdle-Appwrite-Hackathon %}


### Additional Resources / Info

#### Screenshots & Promo Video

{% youtube fQzzsnHKrzI %}

#### Dashboard

![Birdle Dashboard](https://res.cloudinary.com/sahil-patel/image/upload/v1651566403/finocrunch/appwritehack/screely-1651566392638_reuzi1.png)

#### User Profile

![User Profile in Birdle](https://res.cloudinary.com/sahil-patel/image/upload/v1651944586/finocrunch/appwritehack/user-profile_dcsi5z.png)

#### Single Post Article

![Single Post in Birdle](https://res.cloudinary.com/sahil-patel/image/upload/v1651944586/finocrunch/appwritehack/user_post_hntqj5.png)

#### Publication

![Publication Image in Birdle](https://res.cloudinary.com/sahil-patel/image/upload/v1651944585/finocrunch/appwritehack/publication_c5macv.png)

#### Post Published in Publication

![Published post image in Birdle](https://res.cloudinary.com/sahil-patel/image/upload/v1651944586/finocrunch/appwritehack/published-in-pub_jqn001.png)

#### Editor Built with TinyMCE

![TinyMCE editor built for Birdle](https://res.cloudinary.com/sahil-patel/image/upload/v1651944586/finocrunch/appwritehack/basic_editor_ggwmtn.png)

## Resources for data used

* All the user images in the app are generated using https://generated.photos/ [Link](https://generated.photos/)
* Other random post data is generated using a fake data generator. [Link](https://sneeit.com/spotdummy-blogger-demo-data-generator-for-template-developers/)
* [Nuxt3 Beta](https://v3.nuxtjs.org/)
* [Tailwind CSS](https://tailwindcss.com/) 

## Conclusion & Thoughts

It was fun working the Appwrite. In the past 3 weeks, I have learned a lot, about building a full-stack app from scratch using Appwrite. 

Appwrite is amazing but I would love support for relational databases. It was new for me to build the app in NoSQL. Overall, thanks to Dev.to and Appwrite for hosting this amazing hackathon. 