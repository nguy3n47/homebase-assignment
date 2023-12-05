import requests
from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings

PYTHON_PROXY_URL = settings.PYTHON_PROXY_URL
EXPRESS_API_USERS = settings.EXPRESS_API_USERS


def get_users_from_express_api(request):
    try:
        response = requests.get(f"{PYTHON_PROXY_URL}{EXPRESS_API_USERS}")
        users = response.json()
        return JsonResponse(users, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
