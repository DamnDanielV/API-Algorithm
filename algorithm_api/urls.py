from django.urls import path, include

from algorithm_api import views

urlpatterns = [
    path('hi', views.algorithmApi)
]