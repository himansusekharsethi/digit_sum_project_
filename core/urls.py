from django.urls import path
from .views import sum_of_digits

urlpatterns = [
    path('sum/', sum_of_digits),
]
