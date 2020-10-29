from django.urls import path

from .views import MenuList

app_name = 'api'


urlpatterns = [
    path('menu/', MenuList.as_view()),
]
