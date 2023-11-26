from locust import HttpUser, task

class GetWeatherUser(HttpUser):
    @task
    def GetWeather(self):
        self.client.get("/WeatherForecast/")