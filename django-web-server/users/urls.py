from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_users_from_express_api, name='get_users_from_express_api'),
]
