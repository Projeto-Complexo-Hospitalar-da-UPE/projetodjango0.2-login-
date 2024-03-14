from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def cliente_login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.success(request, ("Login nao encontrado, tente novamente"))
            return redirect('login_cliente:cliente_login')

    else:
        return render(request, 'pagina_login.html')
    
def logout_user(request):
    logout(request)
    messages.success(request, ("Voce saiu da sua conta"))
    return redirect('home')


