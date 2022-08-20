---
path: /weather
category: "Web Development"
title: "Weather Tracker & Dashboard"
summary: "A WeatherForecast app created with OpenWeatherMap API and Django framework. Check it out."
gitlink: "https://github.com/sahilpatel09/WeatherForecastOpenWeatherMap"
liveurl: "https://weatherforecast99.herokuapp.com/"
date: 2020-10-24
tags: [ 'Python', 'Django', 'OpenWeatherMap' ]
---

# WeatherForecast App with OpenWeatherMap API

Here, I have created an app in Python using a popular framework Django. This project is just for fun. 
Take a look around and give your opinions. This app provides weather forecast for next 5 days. The API provides the weather data for every 3 hour but I have printed the data for 9:00 AM everyday. 

Project is [LIVE HERE](https://weatherforecast99.herokuapp.com/).

It does not take user input so while running the django python server if you want to change the city then you will need to enter it manually in the code, save it and refresh the page. It should provide the data for the intended city. 
```python
city = 'Ahmedabad'
#change the variable name to intended city to get the desired output, in views.py
# For Ex. change it to New York or Las Vegas or Mumbai
```
![Image of the frontend of application](https://raw.githubusercontent.com/sahilpatel09/WeatherForecastOpenWeatherMap/master/weatherForecast.png)

## Make project
You can create the project as if you would do any django based project.
fork this repo.
```git
git clone https://github.com/sahilpatel09/WeatherForecastOpenWeatherMap.git
```
Create your virtual environment

**MacOS / Linux**

```git
virtualenv --no-site-packages env
source env/bin/activate
```
**Windows**

```git
virtualenv env
.\env\Scripts\activate
```
##### Install packages

* Django
* Requests

**Requirementes**

You will need an API of OpenWeatherMap. You can go on the site and sign up for the API and then can use it.

Once done run this command to run the server.
```git
python manage.py runserver
```

## FrontEnd Theme Used from w3Layouts
I used an HTML template from w3layouts.
Credits: www.w3layouts.com
