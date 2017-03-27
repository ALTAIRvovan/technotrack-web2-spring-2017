from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name='dispatch')
class LoginView(View):
    def get(self, request):
        return JsonResponse({'status': request.user.is_authenticated()})

    def post(self, request):
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return JsonResponse({'status': True})
        return JsonResponse({'status': False})
